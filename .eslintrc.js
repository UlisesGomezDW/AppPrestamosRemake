{
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "plugin:import/errors",
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest"
    ],
    "rules": {
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    "import/extensions": "off",
    "import/no-relative-parent-imports": "error",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "sibling", "index"],
        "newlines-between": "never"
      }
    ],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/named": "off",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "unicorn/import-index": "off",
    "unicorn/filename-case": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "off"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".ts",
                    ".tsx"
                ]
            }
        }
    }
}