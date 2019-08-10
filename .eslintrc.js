module.exports = {
    root: true,

    env: {
        node: true,
        jest: true
    },

    extends: [
        'plugin:vue/strongly-recommended'
    ],

    rules: {
        'no-console': 'off',
    }
}