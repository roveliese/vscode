"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storm = exports.warm = exports.light = exports.dark = void 0;
exports.dark = {
    crust: '#0d0d11',
    darker: '#0e0e16',
    mantle: '#0d0d11',
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
    teal: '#68b6b2',
    brightCyan: '#6bd7ca',
    brightBlue: '#74a8fc',
    brightGreen: '#89d88b',
    sky: '#89dceb',
    htmlPunct: '#a4a4a4',
    breakpointUnverified: '#a6738c',
    subtext1: '#a6adc8',
    green: '#8fb368',
    rose: '#a9828a',
    lavender: '#9a8ee8',
    brightWhite: '#bac2de',
    roseHover: '#b99098',
    buttonSecondaryHover: '#56596e',
    roseMid: '#9e838e',
    red: '#cc7c8a',
    neutral: '#cccccc',
    text: '#cdd6f4',
    parameter: '#d6d6dd',
    e4base: '#e4e4e4',
    pink: '#cd82c9',
    peachWarm: '#cfa96f',
    brightYellow: '#ebd391',
    peach: '#d2936e',
    tabActiveFg: '#dccacc',
    sponsor: '#f5c2e7',
    roseLight: '#f5e0dc',
    errorRed: '#f14c4c',
    brightMagenta: '#f2aede',
    brightRed: '#f37799',
    metaTag: '#d6ac4c',
    yellow: '#d6ac4c',
    sapphire: '#70a9e5',
    white: '#ffffff',
};
exports.light = {
    // Backgrounds — lightest to darkest (inverted polarity vs dark)
    crust: '#f8f1ef', // inputs / quickInput (lightest surface)
    darker: '#e3d8da', // unfocused inactive tab (recedes)
    mantle: '#e6dcdd', // sidebar, activity bar, panel, title bar, tabs header
    darkest: '#2a2330', // shadow + dark contrast-fg on accent backgrounds
    base: '#eee5e3', // editor bg, terminal bg, minimap; softened from #f1e8e6
    buttonFg: '#fff7f7', // button / extension button foreground
    listHover: '#e9dfe0', // list hover, tab hover, statusBar item hover
    surface1: '#e9dfde', // hover widgets, breadcrumb picker, inlay hints; distinct from editor
    lineHighlight: '#e8dcdb', // editor line highlight; visible without becoming a stripe
    inactiveSelection: '#e4d9dd', // editor inactive selection
    termBlack: '#141414eb', // terminal ansi black (must stay dark)
    surface0: '#e8dedd', // breadcrumb bg, editorCursor bg, menu, peek title
    listActive: '#e1d4d9', // list active/focus, statusBarItem active, quickInputList focus
    selectionBg: '#ddd0d9', // editor selection background
    overlay0: '#d9ced1', // sash hover, text separator, panel/sidebar border
    surface2: '#e3d8d8', // editorGutter comment, stickyScroll hover, suggest selected
    findRange: '#d2dfe1', // editor find range highlight (faint teal)
    overlay1: '#e8dedd', // checkbox, listFilter, tree inactive, settings inputs
    overlay2: '#c8bcc0', // various UI separators, scrollbars, borders, indent guide
    scrollActiveDark: '#8a8490', // scrollbar slider active (alpha base only)
    mauve: '#94627d', // selection, badge, picker, progress bar
    subtext0: '#736b70', // statusBar fg, editorCodeLens, line number
    teal: '#9b2148', // keywords (soft crimson on light)
    brightCyan: '#256f7d', // terminal bright cyan
    brightBlue: '#276c95', // terminal bright blue
    brightGreen: '#207356', // terminal bright green
    sky: '#276c95', // cursor, links, tree guide (darker teal for light)
    htmlPunct: '#141414ad', // HTML tag punctuation
    breakpointUnverified: '#9a6781', // debug icon unverified breakpoint
    subtext1: '#675e64', // disabled fg, panelTitle inactive, inlay type
    green: '#1a7455', // macros, decorators, added resources, strings
    rose: '#a25d6e', // button primary background
    lavender: '#6550aa', // property, constructor, method specials
    brightWhite: '#3c3640', // terminal bright white (dark on light bg: 9:1 vs #f8f3f3; #ffffff was invisible 1.10:1)
    roseHover: '#9c5868', // button hover background
    buttonSecondaryHover: '#c1b6ba', // secondary button hover background
    roseMid: '#a66f7f', // focus border
    red: '#bd2a4f', // errors, deleted resources
    neutral: '#242024cc', // C/C++ neutrals, namespaces
    text: '#242024eb', // main foreground
    parameter: '#242024cc', // semantic parameter token
    e4base: '#141414', // must be dark (used with alpha for comments/brackets)
    pink: '#7a4d9a', // strings, CSS values, template literals
    peachWarm: '#934a23', // integers, units, JS functions
    brightYellow: '#8a611b', // terminal bright yellow
    peach: '#9a5430', // functions, self param, method declarations
    tabActiveFg: '#1f1a1c', // tab active foreground (dark for light bg)
    sponsor: '#c0568f', // extension sponsor icon
    roseLight: '#a05566', // icon fg, active tab border, active line number (dark rose)
    errorRed: '#bd2a4f', // PHP illegal, error token
    brightMagenta: '#9f477f', // terminal bright magenta
    brightRed: '#b23f56', // terminal bright red
    metaTag: '#8a611b', // meta.tag
    yellow: '#875f1a', // numbers, warnings, constants, git modified
    sapphire: '#19628f', // class names, CSS property names, blue links
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
    mauve: '#876a76',
    subtext0: '#92777a',
    teal: '#78cbc8',
    brightCyan: '#6ccfc5',
    brightBlue: '#78a8f3',
    brightGreen: '#8ccf8a',
    sky: '#d59a72',
    htmlPunct: '#a99691',
    breakpointUnverified: '#a1737a',
    subtext1: '#ad9291',
    green: '#b0cc78', // warmer yellow-green vs Dark #a8cc7c (was 1:1 copy, now warm-shifted)
    rose: '#b87968',
    lavender: '#b1a0f0',
    brightWhite: '#dfd0c9',
    roseHover: '#c58a76',
    buttonSecondaryHover: '#6c555b',
    roseMid: '#d19a82',
    red: '#d07b88',
    neutral: '#d0c7c2',
    text: '#ead9cf',
    parameter: '#dbcac2',
    e4base: '#e3d5cc',
    pink: '#e89bc8', // warm rose-pink vs Dark #e394dc (was 1:1 copy, now warmer/less magenta)
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
    buttonSecondaryHover: '#3d568f',
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
    roseLight: '#d4a8c0', // cool rose accent: brand warmth on cold base (was #cec0e8 pure lavender — too far from rose identity)
    errorRed: '#f04860',
    brightMagenta: '#e0a8f0',
    brightRed: '#f07888',
    metaTag: '#e8c870',
    yellow: '#e4c860',
    sapphire: '#7cc8ff',
    white: '#ffffff',
};
