<h3 align="center">
    <img src="https://raw.githubusercontent.com/roveliese/.github/main/assets/icon.png" width="100" alt="Logo"/><br/>
    <br/>
    Roveliese for <a href="https://code.visualstudio.com">VS Code</a>
    <br/>
</h3>

<p align="center">
  Three atmospheric themes with rose accents, readable syntax, and quiet interfaces.
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=Roveliese.roveliese-vsc">Visual Studio Marketplace</a>
  &nbsp;&middot;&nbsp;
  <a href="https://open-vsx.org/extension/Roveliese/roveliese-vsc">Open VSX</a>
</p>

## Previews

<details>
<summary>Dark</summary>
<img src="https://raw.githubusercontent.com/roveliese/vscode/main/images/preview-dark.webp"/>
</details>

<details>
<summary>Light</summary>
<img src="https://raw.githubusercontent.com/roveliese/vscode/main/images/preview-light.webp"/>
</details>

<details>
<summary>Storm</summary>
<img src="https://raw.githubusercontent.com/roveliese/vscode/main/images/preview-storm.webp"/>
</details>

## Usage

### Manual installation

Download the VSIX from the [latest GitHub release](https://github.com/roveliese/vscode/releases). Open the Command Palette and select **Extensions: Install from VSIX...**, then select the file you just downloaded.

After installing, open the Command Palette (`Ctrl+Shift+P`) and select **Roveliese: Select Theme**, then choose your variant:

- **Roveliese Dark**
- **Roveliese Light**
- **Roveliese Storm**

You can also use VS Code's standard **Preferences: Color Theme** picker.

## Product Icons

**Roveliese Product Icons** is an optional theme for interface icons in the Activity Bar, toolbars, and panels. You can enable it independently of the color theme.

Open the Command Palette and select **Preferences: Product Icon Theme**, then choose **Roveliese Product Icons**.

## Customization

Open the Command Palette and select **Roveliese: Configure Theme**, or open **Settings** (`Ctrl+,`) and search for `roveliese`. All changes apply immediately without reloading.

- **Choose an accent.** Recolor badges, the progress bar, focus indicators, and picker borders. Buttons stay rose.
- **Simplify the interface.** `flat` blends the sidebar into the editor background; `minimal` also blends tabs, the Activity Bar, and the status bar.
- **Make navigation clearer.** Choose `clear` for more visible scrollbars, tree and indent guides, and ignored Git decorations without changing syntax highlighting.
- **Adjust typography.** Toggle italic or bold keywords and italic comments.
- **Tune brackets and indentation.** Keep brackets monochromatic, fade them by depth with `dimmed`, or use six colors with `rainbow`. Indent guides support colored lines or backgrounds, with adjustable opacity and line width.

Indent guides use palette colors matched to the active variant. If you use the indent-rainbow extension, disable it to avoid duplicate highlights.

<details>
<summary>All Roveliese settings and defaults</summary>

| Setting | Default | Options |
|---|---|---|
| `roveliese.accentColor` | `mauve` | `mauve` `rose` `lavender` `sapphire` `teal` `sky` |
| `roveliese.workbenchMode` | `default` | `default` `flat` `minimal` |
| `roveliese.navigationContrast` | `calm` | `calm` `clear` |
| `roveliese.bracketColors` | `monochromatic` | `monochromatic` `dimmed` `rainbow` |
| `roveliese.italicKeywords` | `false` | boolean |
| `roveliese.boldKeywords` | `false` | boolean |
| `roveliese.italicComments` | `true` | boolean |
| `roveliese.indent.enabled` | `true` | boolean |
| `roveliese.indent.style` | `line` | `line` `background` |
| `roveliese.indent.opacity` | per-theme | 5–100 |
| `roveliese.indent.lineWidth` | `1` | 1–4 |

</details>

<details>
<summary>Recommended VS Code settings</summary>

```jsonc
{
  // Roveliese ships semantic token rules; keep this enabled
  "editor.semanticHighlighting.enabled": true,
  // Preserve Roveliese's tuned terminal palette, especially in Light
  "terminal.integrated.minimumContrastRatio": 1,
  // Use the workbench color for the title bar
  "window.titleBarStyle": "custom",
  // Optional: enable Go semantic tokens from gopls
  "gopls": {
    "ui.semanticTokens": true
  }
}
```

</details>

<details>
<summary>Custom color and syntax overrides</summary>

For fine-grained overrides, use VS Code's built-in settings directly. These stack on top of both the static theme and the Roveliese settings layer.

```jsonc
{
  "workbench.colorCustomizations": {
    "[Roveliese Storm]": {
      "focusBorder": "#c0b0f0"
    },
    "[Roveliese Dark][Roveliese Storm]": {
      "editor.selectionBackground": "#2d3060"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Roveliese Dark]": {
      "comments": "#888899"
    }
  }
}
```

</details>

## Design

Roveliese centers on a quiet editor and a visible rose identity. Accents appear only where the interface needs emphasis: active controls, focus rings, selections, diagnostics, errors. Syntax stays readable without carrying the brand color everywhere.

All three variants share rose warmth, cool highlights, and restrained surfaces.

Each variant keeps the same Roveliese character while adjusting its contrast, temperature, and syntax balance for a different reading environment.

## What's Covered

- Workbench surfaces, navigation, Git diffs, testing, and debug UI
- Terminal colors tuned for all three variants
- Syntax highlighting and semantic tokens for Python, JS/TS, Rust, Go, C/C++, and more
- IntelliSense, Outline, and breadcrumb symbol colors aligned with syntax highlighting

<details>
<summary>Full language and semantic token coverage</summary>

**Syntax highlighting:** Python, JS/TS, Rust, Go, C/C++, Java, PHP, C#, Ruby, Kotlin, Swift, CSS, HTML, Markdown, SQL, Shell, PowerShell, YAML, TOML, JSON, XML, Dockerfile, GraphQL, Protocol Buffers, Terraform/HCL, and more.

**Semantic tokens:** Pylance (Python), Intelephense (PHP), rust-analyzer, gopls, jdtls (Java), C# Dev Kit, C/C++, and JS/TS.

</details>

## Extension Support

Roveliese themes the following extensions out of the box:

- [ErrorLens](https://github.com/usernamehw/vscode-error-lens)
- [GitHub Pull Requests and Issues](https://github.com/microsoft/vscode-pull-request-github)
- [GitLens](https://github.com/gitkraken/vscode-gitlens)

## Support

Found an issue or have a suggestion? Open an issue on [GitHub](https://github.com/roveliese/vscode/issues) or reach out via the Marketplace Q&A.

<p align="center">
<img src="https://raw.githubusercontent.com/roveliese/.github/main/assets/footer.png" width="600" alt=""/>
</p>

<p align="center">
Copyright &copy; 2026-present <a href="https://github.com/xloiqa">xloiqa</a>
</p>

<p align="center">
<a href="https://github.com/roveliese/vscode/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=f4e9e8&colorA=2b2b44&colorB=c75e7a"/></a>
</p>
