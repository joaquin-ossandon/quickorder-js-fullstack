module.exports = {
<<<<<<< HEAD
  root: true,
  // Configuración de entorno
  env: {
    browser: true,
    es2021: true,
  },

  // Configuración de extendidos/presets
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],

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
    camelcase: [
=======
    'camelcase': [
>>>>>>> b46b8fa870bc7a3032eb20e6932ed8df4c382312
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
<<<<<<< HEAD
        properties: false,
=======
        properties: true,
>>>>>>> b46b8fa870bc7a3032eb20e6932ed8df4c382312
        onlyDeclarations: true,
        ignoreDestructuring: true,
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-undef': 'warn',
=======
    'indent': ['error', 2, { SwitchCase: 1 }],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
>>>>>>> b46b8fa870bc7a3032eb20e6932ed8df4c382312
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
<<<<<<< HEAD
};
=======
};
>>>>>>> b46b8fa870bc7a3032eb20e6932ed8df4c382312
