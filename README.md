<h3 align="center">
    <img src="https://raw.githubusercontent.com/xloiqa/roseveil/main/images/icon.png" width="100" alt="Logo"/><br/>
    <br/>
    Roseveil for <a href="https://code.visualstudio.com">VS Code</a>
    <br/>
</h3>

<p align="center">
  A quiet, atmospheric theme family built around a rose identity.
</p>

## Variants

Roseveil variants share syntax intent and token architecture, each with its own palette. They should feel related, not interchangeable.

**Dark** — the center of the family: deep purple-black, restrained rose chrome, and icy cyan edges. Quiet, nocturnal, and built for long sessions without turning the editor flat.

**Light** — soft off-white with dark rose structure and cool teal contrast. It keeps the same atmosphere in daylight: calm, legible, and a little reserved.

**Warm** — cocoa shadows, dusty rose surfaces, and a copper-tinted sky. It softens Dark into something slower and more intimate, suited to evening work.

**Storm** — cold steel blue-grey, crisp rose chrome, and electric cyan pressure. Precise and slightly severe, it pulls Dark toward overcast metal while keeping the rose identity sharp.

## Usage

### Install from Marketplace

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=xloiqa.roseveil-theme)
- [Open VSX](https://open-vsx.org/extension/xloiqa/roseveil-theme)

### Manual installation

Download the VSIX from the [latest GitHub release](https://github.com/xloiqa/roseveil/releases). Open the Command Palette and select **Extensions: Install from VSIX...**, then select the file you just downloaded.

After installing, open the Command Palette and select **Preferences: Color Theme**, then choose your variant:

- **Roseveil Dark**
- **Roseveil Light**
- **Roseveil Warm**
- **Roseveil Storm**

The product icon theme is optional and separate from the color theme. To enable it, open the Command Palette and select **Preferences: Product Icon Theme**, then choose **Roseveil Product Icons**.

## Recommended Settings

```jsonc
{
  // Roseveil ships semantic token rules — keep this enabled
  "editor.semanticHighlighting.enabled": true,
  // Prevent VS Code from overriding terminal colors
  "terminal.integrated.minimumContrastRatio": 1,
  // Use the workbench color for the title bar
  "window.titleBarStyle": "custom",
  // Optional: enable Go semantic tokens from gopls
  "gopls": {
    "ui.semanticTokens": true
  }
}
```

## Design

Roseveil is built around a quiet editor, a visible rose identity, and accents that appear only when the interface needs to speak: active controls, focus rings, selections, diagnostics, and errors. Syntax stays readable and atmospheric without carrying the brand color everywhere.

The mascot sets the visual temperature: a white kitsune with rose-pink flame wisps and icy cyan eyes. That contrast informs the palette language across variants: soft rose structure, cool highlights, and restrained surfaces.

Each variant resolves through its own palette; Light has its own syntax scale, while Dark, Warm, and Storm share token shapes with different palettes underneath.

## Settings

Roseveil ships a configuration layer that applies on top of the static theme. Open **Settings** (`Ctrl+,`) and search for `roseveil` to find all options.

| Setting | Default | Options |
|---|---|---|
| `roseveil.accentColor` | `mauve` | `mauve` `rose` `lavender` `sapphire` `teal` `sky` |
| `roseveil.workbenchMode` | `default` | `default` `flat` `minimal` |
| `roseveil.bracketColors` | `monochromatic` | `monochromatic` `dimmed` `rainbow` |
| `roseveil.italicKeywords` | `false` | boolean |
| `roseveil.boldKeywords` | `false` | boolean |
| `roseveil.italicComments` | `true` | boolean |

**Accent color** recolors badges, progress bar, focus indicators, and picker borders across all active variants — without touching button colors (those stay rose).

**Workbench mode** controls chrome layering: `flat` blends the sidebar into the editor background; `minimal` extends that to tabs, activity bar, and status bar.

**Bracket colors**: `dimmed` fades brackets progressively by depth; `rainbow` cycles six palette colors across levels.

All changes apply immediately without reloading.

## Advanced customization

For fine-grained overrides, use VS Code's built-in settings directly. These stack on top of both the static theme and the Roseveil settings layer.

```jsonc
{
  "workbench.colorCustomizations": {
    "[Roseveil Storm]": {
      "focusBorder": "#c0b0f0"
    },
    "[Roseveil Dark][Roseveil Storm]": {
      "editor.selectionBackground": "#2d3060"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Roseveil Dark]": {
      "comments": "#888899"
    }
  }
}
```

## What's Covered

- Product icons for the Activity Bar, toolbar, panels, and other VS Code UI icons
- Editor, tabs, sidebar, panels, status bar, command center
- Git decorations, diff view, merge editor
- Terminal ANSI colors (all 16)
- Testing and debug UI
- Syntax highlighting for Python, JS/TS, Rust, Go, C/C++, Java, PHP, CSS, HTML, Markdown, SQL, Shell, YAML, TOML, Dockerfile, and more
- Semantic tokens: Pylance (Python), Intelephense (PHP), rust-analyzer, gopls, jdtls, C/C++, JS/TS

## Extension Support

Roseveil themes the following extensions out of the box:

- [ErrorLens](https://github.com/usernamehw/vscode-error-lens)
- [GitHub Pull Requests and Issues](https://github.com/microsoft/vscode-pull-request-github)
- [GitLens](https://github.com/gitkraken/vscode-gitlens)

## Support

Found an issue or have a suggestion? Open an issue on [GitHub](https://github.com/xloiqa/roseveil/issues) or reach out via the Marketplace Q&A.

<p align="center">
<img src="https://raw.githubusercontent.com/xloiqa/roseveil/main/images/footer.png" width="600" alt=""/>
</p>

<p align="center">
Copyright &copy; 2026-present <a href="https://github.com/xloiqa">xloiqa</a>
</p>

<p align="center">
<a href="https://github.com/xloiqa/roseveil/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=f4e9e8&colorA=2b2b44&colorB=c75e7a"/></a>
</p>
