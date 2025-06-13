import babelParser from '@babel/eslint-parser';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/dist/', '**/build/']),
  {
    extends: fixupConfigRules(
      compat.extends(
        'airbnb',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
      ),
    ),

    plugins: {
      react: fixupPluginRules(react),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },

      parser: babelParser,
      ecmaVersion: 2018,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.js', '.jsx'],
        },
      ],

      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off',
      'no-shadow': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]);
