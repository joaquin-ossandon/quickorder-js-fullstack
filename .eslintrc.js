module.exports = {
  root: true,
  // Configuración de entorno
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },

  // Configuración de extendidos/presets
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],

  // Opciones del parser para ES
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  // Reglas personalizadas
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    camelcase: [
      'error',
      {
        properties: 'never',
        allow: ['^UNSAFE_'],
      },
    ],
    'id-match': [
      'error',
      '^[a-z]+([A-Z][a-z]+)*$',
      {
        properties: true,
        onlyDeclarations: true,
        ignoreDestructuring: true,
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-alert': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'as-needed'],
  },

  // Configuración de Overrides
  overrides: [
    {
      files: ['**/*.config.js', '**/constants.js', '**/enums.js'],
      rules: {
        'id-match': 'off',
        'no-underscore-dangle': 'off',
      },
    },
  ],
};
