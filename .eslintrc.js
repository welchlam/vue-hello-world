module.exports = {
    root: true,

    env: {
        node: true,
        jest: true
    },

    extends: [
        'plugin:vue/strongly-recommended',
        '@vue/standard',
        '@vue/typescript'
    ],

    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'camelcase': 0,
        'indent': 0,
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        'object-curly-spacing': 0,
        'space-before-function-paren': 0,
        'no-trailing-spaces': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 1,
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }]
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },

    globals: {}
}
