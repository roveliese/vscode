"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storm = exports.warm = exports.light = exports.dark = void 0;
exports.dark = {
    crust: '#0d0d11',
    darker: '#0e0e16',
    mantle: '#0f0f14',
    darkest: '#11111b',
    base: '#13131a',
    buttonFg: '#1a1114',
    listHover: '#1a1a23',
    surface1: '#181825',
    lineHighlight: '#1d1d26',
    inactiveSelection: '#222233',
    termBlack: '#1e1e28',
    surface0: '#1e1e2e',
    listActive: '#262633',
    selectionBg: '#2b2b44',
    overlay0: '#30304a',
    surface2: '#313244',
    findRange: '#3e5767',
    overlay1: '#45475a',
    overlay2: '#585b70',
    scrollActiveDark: '#6c7086',
    mauve: '#7c6a8a',
    subtext0: '#7f849c',
    teal: '#82d2ce',
    brightCyan: '#6bd7ca',
    brightBlue: '#74a8fc',
    brightGreen: '#89d88b',
    sky: '#89dceb',
    htmlPunct: '#a4a4a4',
    breakpointUnverified: '#a6738c',
    subtext1: '#a6adc8',
    green: '#a8cc7c',
    rose: '#a9828a',
    lavender: '#aaa0fa',
    brightWhite: '#bac2de',
    roseHover: '#b99098',
    buttonSecondaryHover: '#686b84',
    roseMid: '#cba7aa',
    red: '#cc7c8a',
    neutral: '#cccccc',
    text: '#cdd6f4',
    parameter: '#d6d6dd',
    e4base: '#e4e4e4',
    pink: '#e394dc',
    peachWarm: '#ebc88d',
    brightYellow: '#ebd391',
    peach: '#efb080',
    tabActiveFg: '#f4e9e8',
    sponsor: '#f5c2e7',
    roseLight: '#f5e0dc',
    errorRed: '#f14c4c',
    brightMagenta: '#f2aede',
    brightRed: '#f37799',
    metaTag: '#fad075',
    yellow: '#f8c762',
    sapphire: '#87c3ff',
    white: '#ffffff',
};
exports.light = {
    // Backgrounds — lightest to darkest (inverted polarity vs dark)
    crust: '#fef9f9', // inputs / quickInput (lightest surface)
    darker: '#e8e1e1', // unfocused inactive tab (recedes)
    mantle: '#eee8e8', // sidebar, activity bar, panel, title bar, tabs header
    darkest: '#2a2330', // shadow + dark contrast-fg on accent backgrounds
    base: '#f8f3f3', // editor bg, terminal bg, minimap
    buttonFg: '#fff7f7', // button / extension button foreground
    listHover: '#ede5e5', // list hover, tab hover, statusBar item hover
    surface1: '#f2ecec', // hover widgets, breadcrumb picker, inlay hints
    lineHighlight: '#eee8e8', // editor line highlight background
    inactiveSelection: '#e8e0e6', // editor inactive selection
    termBlack: '#141414eb', // terminal ansi black (must stay dark)
    surface0: '#ede7e7', // breadcrumb bg, editorCursor bg, menu, peek title
    listActive: '#e9dfe2', // list active/focus, statusBarItem active, quickInputList focus
    selectionBg: '#e2d6e2', // editor selection background
    overlay0: '#e2d9db', // sash hover, text separator, panel/sidebar border
    surface2: '#e6dddd', // editorGutter comment, stickyScroll hover, suggest selected
    findRange: '#d8e4e6', // editor find range highlight (faint teal)
    overlay1: '#ece4e4', // checkbox, listFilter, tree inactive, settings inputs
    overlay2: '#cdc4c6', // various UI separators, scrollbars, borders, indent guide
    scrollActiveDark: '#8a8490', // scrollbar slider active (alpha base only)
    mauve: '#9d6d88', // selection, badge, picker, progress bar
    subtext0: '#7c7479', // statusBar fg, editorCodeLens, line number
    teal: '#b3003f', // keywords (crimson on light)
    brightCyan: '#6f9ba6', // terminal bright cyan
    brightBlue: '#6299c3', // terminal bright blue
    brightGreen: '#55a583', // terminal bright green
    sky: '#4c7f8c', // cursor, links, tree guide (darker teal for light)
    htmlPunct: '#141414ad', // HTML tag punctuation
    breakpointUnverified: '#9a6781', // debug icon unverified breakpoint
    subtext1: '#6e656b', // disabled fg, panelTitle inactive, inlay type
    green: '#1f8a65', // macros, decorators, added resources, strings
    rose: '#b06a78', // button primary background
    lavender: '#6049b3', // property, constructor, method specials
    brightWhite: '#ffffff', // terminal bright white
    roseHover: '#9c5868', // button hover background
    buttonSecondaryHover: '#c1b6ba', // secondary button hover background
    roseMid: '#bd8793', // focus border
    red: '#cf2d56', // errors, deleted resources
    neutral: '#141414cc', // C/C++ neutrals, namespaces
    text: '#141414eb', // main foreground
    parameter: '#141414cc', // semantic parameter token
    e4base: '#141414', // must be dark (used with alpha for comments/brackets)
    pink: '#9e94d5', // strings, CSS values, template literals
    peachWarm: '#b8448b', // integers, units, JS functions
    brightYellow: '#c08532', // terminal bright yellow
    peach: '#db704b', // functions, self param, method declarations
    tabActiveFg: '#1f1a1c', // tab active foreground (dark for light bg)
    sponsor: '#c0568f', // extension sponsor icon
    roseLight: '#a05566', // icon fg, active tab border, active line number (dark rose)
    errorRed: '#cf2d56', // PHP illegal, error token
    brightMagenta: '#d06ba6', // terminal bright magenta
    brightRed: '#e75e78', // terminal bright red
    metaTag: '#c08532', // meta.tag
    yellow: '#c08532', // numbers, warnings, constants, git modified
    sapphire: '#206595', // class names, CSS property names, blue links
    white: '#ffffff', // badge fg, find match fg
};
exports.warm = {
    crust: '#100c0d',
    darker: '#130f10',
    mantle: '#171213',
    darkest: '#1a1415',
    base: '#1b1516',
    buttonFg: '#1a0f10',
    listHover: '#241b1c',
    surface1: '#261d1d',
    lineHighlight: '#241b1d',
    inactiveSelection: '#302426',
    termBlack: '#1c1516eb',
    surface0: '#241b1a',
    listActive: '#302325',
    selectionBg: '#3a2a2b',
    overlay0: '#423033',
    surface2: '#342829',
    findRange: '#443633',
    overlay1: '#514044',
    overlay2: '#66535a',
    scrollActiveDark: '#80656b',
    mauve: '#9b7a86',
    subtext0: '#92777a',
    teal: '#78cbc8',
    brightCyan: '#6ccfc5',
    brightBlue: '#78a8f3',
    brightGreen: '#8ccf8a',
    sky: '#d59a72',
    htmlPunct: '#a99691',
    breakpointUnverified: '#a1737a',
    subtext1: '#ad9291',
    green: '#a8cc7c',
    rose: '#b87968',
    lavender: '#b1a0f0',
    brightWhite: '#dfd0c9',
    roseHover: '#c58a76',
    buttonSecondaryHover: '#80656b',
    roseMid: '#d19a82',
    red: '#d07b88',
    neutral: '#d0c7c2',
    text: '#ead9cf',
    parameter: '#dbcac2',
    e4base: '#e3d5cc',
    pink: '#e394dc',
    peachWarm: '#e5b883',
    brightYellow: '#e6c981',
    peach: '#e9a37d',
    tabActiveFg: '#f4e7df',
    sponsor: '#d99a8a',
    roseLight: '#e7b49c',
    errorRed: '#d45f73',
    brightMagenta: '#f0a9d8',
    brightRed: '#f07b93',
    metaTag: '#e9bd80',
    yellow: '#edc66d',
    sapphire: '#8abfff',
    white: '#ffffff',
};
exports.storm = {
    crust: '#0b0d12',
    darker: '#0d1016',
    mantle: '#0e1119',
    darkest: '#10131e',
    base: '#121620',
    buttonFg: '#0c0e18',
    listHover: '#141e34',
    surface1: '#131d32',
    lineHighlight: '#152030',
    inactiveSelection: '#1a2448',
    termBlack: '#161c2e',
    surface0: '#162040',
    listActive: '#1d2c52',
    selectionBg: '#232f5c',
    overlay0: '#273a6c',
    surface2: '#263560',
    findRange: '#1e3860',
    overlay1: '#334478',
    overlay2: '#40508c',
    scrollActiveDark: '#5068b4',
    mauve: '#6068b0',
    subtext0: '#7a88a8',
    teal: '#82d2d8',
    brightCyan: '#62d0c8',
    brightBlue: '#66a8f8',
    brightGreen: '#82d888',
    sky: '#7ed8f0',
    htmlPunct: '#9298b0',
    breakpointUnverified: '#9872a8',
    subtext1: '#9298c2',
    green: '#a0c878',
    rose: '#a07888',
    lavender: '#a2a0f8',
    brightWhite: '#b0c0de',
    roseHover: '#b08898',
    buttonSecondaryHover: '#4a6ab8',
    roseMid: '#c0a0b8',
    red: '#c07888',
    neutral: '#c0c8e0',
    text: '#c6d2f0',
    parameter: '#c4cee4',
    e4base: '#dce4f4',
    pink: '#d888e0',
    peachWarm: '#d8c278',
    brightYellow: '#dcd090',
    peach: '#e49870',
    tabActiveFg: '#e8eeff',
    sponsor: '#d8b8f0',
    roseLight: '#cec0e8',
    errorRed: '#f04860',
    brightMagenta: '#e0a8f0',
    brightRed: '#f07888',
    metaTag: '#e8c870',
    yellow: '#e4c860',
    sapphire: '#7cc8ff',
    white: '#ffffff',
};
