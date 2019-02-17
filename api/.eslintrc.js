module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    node: true
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': 0,
    'global-require': 0
  }
};
