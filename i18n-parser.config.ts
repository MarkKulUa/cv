export default  {
    defaultNamespace: 'translation',
    lexers: {
        hbs: ['HandlebarsLexer'],
        handlebars: ['HandlebarsLexer'],
        htm: ['HTMLLexer'],
        html: ['HTMLLexer'],
        mjs: ['JavascriptLexer'],
        js: ['JavascriptLexer'],
        ts: ['JavascriptLexer'],
        jsx: ['JsxLexer'],
        tsx: ['JsxLexer'],
        default: ['JavascriptLexer'],
    },
    locales: ['en', 'pl', 'ua'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    input: ['src/**/*.{ts,tsx}'],
    sort: true,
}