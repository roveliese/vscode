<h3 align="center">
	<img src="images/icon.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Roseveil for <a href="https://code.visualstudio.com">VS Code</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>



## Usage

### Install from Marketplace

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=xloiqa.roseveil-theme)
- [Open VSX](https://open-vsx.org/extension/xloiqa/roseveil-theme)

### Manual installation

Download the VSIX from the [latest GitHub release](https://github.com/xloiqa/roseveil/releases). Open the Command Palette and select **Extensions: Install from VSIX...**, then select the file you just downloaded.

After installing, open the Command Palette and select **Preferences: Color Theme**, then choose **Roseveil Dark** or **Roseveil Light**.

## Recommended Settings

```jsonc
{
  // Roseveil ships semantic token rules — keep this enabled
  "editor.semanticHighlighting.enabled": true,
  // Prevent VS Code from overriding terminal colors
  "terminal.integrated.minimumContrastRatio": 1,
  // Use the workbench color for the title bar
  "window.titleBarStyle": "custom"
}
```

## Design

Roseveil keeps the editor quiet so your code stays in focus.
Accents are reserved for meaningful states: active controls, focus rings, selections, and errors.

**Dark** — deep dark base, rose chrome, cyan contrast. Low-fatigue for long sessions.

**Light** — warm off-white base, dark rose chrome, cool teal contrast. Calm, not clinical.

Both variants share the same semantic token coverage and rose identity.

## What's Covered

- Editor, tabs, sidebar, panels, status bar, command center
- Git decorations, diff view, merge editor
- Terminal ANSI colors
- Testing and debug UI
- Syntax highlighting for Python, JS/TS, Rust, Go, C/C++, Java, PHP, CSS, HTML, Markdown, and more
- Semantic tokens: Pylance (Python), Intelephense (PHP), C/C++, JS/TS

## Extension Support

Roseveil themes the following extensions:

- [ErrorLens](https://github.com/usernamehw/vscode-error-lens)
- [GitHub Pull Requests and Issues](https://github.com/microsoft/vscode-pull-request-github)
- [GitLens](https://github.com/gitkraken/vscode-gitlens)

## Support

Found an issue or have a suggestion? Open an issue on [GitHub](https://github.com/xloiqa/roseveil/issues) or reach out via the Marketplace Q&A.
