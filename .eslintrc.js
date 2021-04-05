module.exports = {
  root: true,
  parserOptions: {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }]
  }
}
