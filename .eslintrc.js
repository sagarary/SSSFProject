

module.exports = {
    "plugins": ["node"],
    "extends": ["eslint:recommended", "plugin:node/recommended"],
    "rules": {
        "node/exports-style": ["error", "module.exports"]
    },
    "extends": ["eslint:recommended", "google"],
    "parserOptions": {
          "ecmaVersion": 6,
          "sourceType": "module",
          "ecmaFeatures": {
              "jsx": true
          }
    },
    "rules": {
      // Additional, per-project rules...
          "linebreak-style": 0,
          "no-console": "off",
          "require-jsdoc": ["error", {
          "require": {
              "FunctionDeclaration": false,
              "MethodDefinition": false,
              "ClassDeclaration": false,
              "ArrowFunctionExpression": false
          }
      }]
  
    },
    "env": {
      "browser": true,
      "es6": true
    },
  }
  
  ;