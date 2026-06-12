"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const palette_1 = require("./palette");
const THEMES = {
    'Roseveil Dark': palette_1.dark,
    'Roseveil Light': palette_1.light,
    'Roseveil Warm': palette_1.warm,
    'Roseveil Storm': palette_1.storm,
};
// Keys we write into workbench.colorCustomizations per theme scope.
// Tracked here so we can delete them cleanly when reverting to default.
const ACCENT_KEYS = [
    'focusBorder',
    'badge.background',
    'progressBar.background',
    'activityBarBadge.background',
    'pickerGroup.border',
    'pickerGroup.foreground',
    'commandCenter.activeBorder',
    'list.focusOutline',
    'inputOption.activeBorder',
    'settings.modifiedItemIndicator',
    'tab.lastPinnedBorder',
];
const WORKBENCH_FLAT_KEYS = [
    'sideBar.background',
    'editorGroupHeader.tabsBackground',
    'panel.background',
];
const WORKBENCH_MINIMAL_EXTRA_KEYS = [
    'tab.inactiveBackground',
    'tab.activeBackground',
    'activityBar.background',
    'statusBar.background',
];
const BRACKET_KEYS = [
    'editorBracketHighlight.foreground1',
    'editorBracketHighlight.foreground2',
    'editorBracketHighlight.foreground3',
    'editorBracketHighlight.foreground4',
    'editorBracketHighlight.foreground5',
    'editorBracketHighlight.foreground6',
];
const ALL_MANAGED_COLOR_KEYS = [
    ...ACCENT_KEYS,
    ...WORKBENCH_FLAT_KEYS,
    ...WORKBENCH_MINIMAL_EXTRA_KEYS,
    ...BRACKET_KEYS,
];
const MANAGED_TOKEN_SCOPES = ['keyword', 'comment'];
function activate(context) {
    applyOverrides();
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('roseveil'))
            applyOverrides();
    }));
}
function deactivate() { }
function applyOverrides() {
    const cfg = vscode.workspace.getConfiguration('roseveil');
    const accentColor = cfg.get('accentColor', 'mauve');
    const italicKeywords = cfg.get('italicKeywords', false);
    const boldKeywords = cfg.get('boldKeywords', false);
    const italicComments = cfg.get('italicComments', true);
    const workbenchMode = cfg.get('workbenchMode', 'default');
    const bracketColors = cfg.get('bracketColors', 'monochromatic');
    const globalCfg = vscode.workspace.getConfiguration();
    const target = vscode.ConfigurationTarget.Global;
    // --- workbench.colorCustomizations ---
    const colorCustom = JSON.parse(JSON.stringify(globalCfg.get('workbench.colorCustomizations') ?? {}));
    for (const [name, p] of Object.entries(THEMES)) {
        const scope = `[${name}]`;
        const block = { ...(colorCustom[scope] ?? {}) };
        // Clear all managed keys first, then re-populate as needed.
        // This ensures removed overrides are deleted from settings.json.
        for (const key of ALL_MANAGED_COLOR_KEYS) {
            block[key] = undefined;
        }
        // Accent
        if (accentColor !== 'mauve') {
            const hex = p[accentColor];
            for (const key of ACCENT_KEYS) {
                block[key] = hex;
            }
        }
        // Workbench mode
        if (workbenchMode === 'flat' || workbenchMode === 'minimal') {
            for (const key of WORKBENCH_FLAT_KEYS) {
                block[key] = p.base;
            }
        }
        if (workbenchMode === 'minimal') {
            for (const key of WORKBENCH_MINIMAL_EXTRA_KEYS) {
                block[key] = p.base;
            }
        }
        // Bracket colors
        const bracketValues = resolveBracketColors(bracketColors, p);
        for (let i = 0; i < 6; i++) {
            block[BRACKET_KEYS[i]] = bracketValues[i];
        }
        colorCustom[scope] = stripUndefined(block);
    }
    const cleanedColorCustom = stripEmptyScopes(colorCustom);
    if (!deepEqual(globalCfg.get('workbench.colorCustomizations'), cleanedColorCustom)) {
        globalCfg.update('workbench.colorCustomizations', cleanedColorCustom, target);
    }
    // --- editor.tokenColorCustomizations ---
    const tokenCustom = JSON.parse(JSON.stringify(globalCfg.get('editor.tokenColorCustomizations') ?? {}));
    for (const name of Object.keys(THEMES)) {
        const scope = `[${name}]`;
        const block = tokenCustom[scope] ?? {};
        const existingRules = block.textMateRules ?? [];
        // Remove previously managed rules (by scope), preserve user-added ones.
        const userRules = existingRules.filter((r) => !MANAGED_TOKEN_SCOPES.includes(r.scope ?? ''));
        const newRules = [...userRules];
        // Keyword font style
        const kwStyle = buildFontStyle(italicKeywords, boldKeywords);
        if (kwStyle !== '') {
            newRules.push({ scope: 'keyword', settings: { fontStyle: kwStyle } });
        }
        // Comment italic (baseline is italic — override only when disabled)
        if (!italicComments) {
            newRules.push({ scope: 'comment', settings: { fontStyle: '' } });
        }
        tokenCustom[scope] = newRules.length > 0 ? { ...block, textMateRules: newRules } : stripManagedTokenBlock(block);
    }
    const cleanedTokenCustom = stripEmptyScopes(tokenCustom);
    if (!deepEqual(globalCfg.get('editor.tokenColorCustomizations'), cleanedTokenCustom)) {
        globalCfg.update('editor.tokenColorCustomizations', cleanedTokenCustom, target);
    }
}
function resolveBracketColors(mode, p) {
    switch (mode) {
        case 'dimmed':
            return [p.text, p.subtext1, p.subtext0, p.overlay2, p.overlay1, p.overlay0];
        case 'rainbow':
            return [p.teal, p.pink, p.lavender, p.yellow, p.peach, p.sapphire];
        case 'monochromatic':
        default:
            return [p.text, p.text, p.text, p.text, p.text, p.text];
    }
}
function buildFontStyle(italic, bold) {
    const parts = [];
    if (italic)
        parts.push('italic');
    if (bold)
        parts.push('bold');
    return parts.join(' ');
}
function stripUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter((e) => e[1] !== undefined));
}
function stripEmptyScopes(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== null && typeof v === 'object' && Object.keys(v).length > 0));
}
function stripManagedTokenBlock(block) {
    const copy = { ...block };
    delete copy['textMateRules'];
    return copy;
}
function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
