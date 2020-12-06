module.exports = {
    extends: ['@sanity/webpack-loader'],
    rules: {
      "import/no-unresolved": [2, { "ignore": ["^(all|part):"] }]
    }
  
}