import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "arrow-body-style": "off",
      "comma-dangle": ["error", "always-multiline"],
      curly: ["error", "all"],
      "func-names": ["error", "as-needed"],
      "import/no-extraneous-dependencies": "off",
      "import/prefer-default-export": "off",
      indent: "off",
      "no-console": "off",
      "no-trailing-spaces": [
        "error",
        {
          ignoreComments: true,
        },
      ],
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "_",
          varsIgnorePattern: "_",
        },
      ],
      "prefer-template": "off",
      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],
    },
  },
];
