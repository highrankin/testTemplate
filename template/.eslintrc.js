module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        quotes: 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-trailing-spaces': 'off',
        semi: 'off',
        'comma-dangle': 'off',
        'eol-last': 'off',
        curly: 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
