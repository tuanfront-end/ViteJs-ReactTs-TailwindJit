module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'airbnb-typescript'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": './tsconfig.json',
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    },
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/generic-type-naming": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^_|React",
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-untyped-public-signature": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "@typescript-eslint/no-console": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/arrow-body-style": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],

  },
};
