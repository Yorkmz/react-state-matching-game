module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': 0,
    'linebreak-style': 0,
    'semi': 0,
    'max-len': [0, 150, 10],
    'object-curly-spacing': 0,
    'react/prop-types': 1,
    'indent': 0,
  },
};
