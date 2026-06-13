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
exports.THEMES = void 0;
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const overrides_1 = require("./overrides");
Object.defineProperty(exports, "THEMES", { enumerable: true, get: function () { return overrides_1.THEMES; } });
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
    const settings = {
        accentColor: cfg.get('accentColor', 'mauve'),
        italicKeywords: cfg.get('italicKeywords', false),
        boldKeywords: cfg.get('boldKeywords', false),
        italicComments: cfg.get('italicComments', true),
        workbenchMode: cfg.get('workbenchMode', 'default'),
        bracketColors: cfg.get('bracketColors', 'monochromatic'),
    };
    const globalCfg = vscode.workspace.getConfiguration();
    const target = vscode.ConfigurationTarget.Global;
    // workbench.colorCustomizations
    const existingColor = JSON.parse(JSON.stringify(globalCfg.get('workbench.colorCustomizations') ?? {}));
    const newColor = (0, overrides_1.buildColorOverrides)(existingColor, settings);
    if (!(0, overrides_1.deepEqual)(globalCfg.get('workbench.colorCustomizations'), newColor)) {
        globalCfg.update('workbench.colorCustomizations', newColor, target);
    }
    // editor.tokenColorCustomizations
    const existingToken = JSON.parse(JSON.stringify(globalCfg.get('editor.tokenColorCustomizations') ?? {}));
    const newToken = (0, overrides_1.buildTokenOverrides)(existingToken, settings);
    if (!(0, overrides_1.deepEqual)(globalCfg.get('editor.tokenColorCustomizations'), newToken)) {
        globalCfg.update('editor.tokenColorCustomizations', newToken, target);
    }
}
