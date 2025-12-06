module.exports = {
  root: true,
  // Configuración de entorno
  env: {
    browser: true,
    es2021: true,
  },

  // Configuración de extendidos/presets
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],

  // Opciones del parser para ES
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'script',
  },

  // Reglas personalizadas
  rules: {
    // eliminación de elementos clave airbnb-base para el trabajo en HTML, JS sin js-modules
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'off', // Permite usar variables globales comunes del navegador
    // No var para variables
    'no-var': 'error',
    // prefiere constantes a let para la mayoría de los casos
    'prefer-const': 'error',
    // usa camelcase
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
        properties: false,
        onlyDeclarations: true,
        ignoreDestructuring: true,
      },
    ],
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-alert': 'error',
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
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
