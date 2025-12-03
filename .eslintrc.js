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
=======
  // Configuración de entorno
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },

  // Configuración de extendidos/presets
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier', 
  ],
>>>>>>> b46b8fa870bc7a3032eb20e6932ed8df4c382312

  // Opciones del parser para ES
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  // Reglas personalizadas
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
<<<<<<< HEAD
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
<<<<<<< HEAD
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
<<<<<<< HEAD
};
=======
};
>>>>>>> b46b8fa870bc7a3032eb20e6932ed8df4c382312
