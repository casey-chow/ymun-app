module.exports = {
  configs: {
    base: {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
      rules: {

        /**
         * TypeScript should be good enough for this rule.
         *
         * Also, there appears to be an bug with it:
         * https://github.com/typescript-eslint/typescript-eslint/issues/291
         */
        'no-dupe-class-members': 'off',

        /**
         * These rules are duplicate of rules defined in @typescript-eslint.
         *
         * At best they're redundant, at worst they may cause issues if left
         * enabled.
         */
        'camelcase': 'off',
        'indent': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
      },
    },
    crucial: {
      extends: ['plugin:@ionic/base'],
      rules: {
        /**
         * Override 4 space setting from @typescript-eslint/recommended.
         */
        '@typescript-eslint/indent': ['error', 2],

        /**
         * Possible Errors
         */
        'no-prototype-builtins': 'error',

        /**
         * Best Practices
         */
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-implied-eval': 'error',
        'no-multi-str': 'error',
        'no-script-url': 'error',

        /**
         * Node.js and CommonJS
         */
        'no-buffer-constructor': 'error',

        /**
         * Stylistic Issues
         */
        'eol-last': 'error', // "stylistic", but can cause issues with some programs using POSIX
        'linebreak-style': 'error', // LF endings
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'unicode-bom': 'error',
      },
    },
    recommended: {
      extends: ['plugin:@ionic/crucial'],
      rules: {
        /**
         * This rule appears to be enabled in @typescript-eslint/recommended,
         * but set to 'warning'. Let's error instead.
         */
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],

        /**
         * Disable these rules for now. Not being explicit is okay sometimes.
         */
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',

        /**
         * Agree to disagree.
         */
        '@typescript-eslint/no-parameter-properties': 'off',

        /**
         * More consistent to just always require a last delimiter.
         */
        '@typescript-eslint/member-delimiter-style': ['error', { multiline: { requireLast: true }, singleline: { requireLast: true } }],

        /**
         * The following rules are not enabled in
         * @typescript-eslint/recommended.
         */
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',

        /**
         * Possible Errors
         *
         * The following rules are possible errors that are not enabled in
         * eslint:recommended: https://eslint.org/docs/rules/#possible-errors
         */
        'no-extra-parens': 'error',
        'no-template-curly-in-string': 'error',
        'require-atomic-updates': 'error',

        /**
         * Best Practices
         *
         * The following rules are best practices that are not enabled in
         * eslint:recommended: https://eslint.org/docs/rules/#best-practices
         */
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'no-caller': 'error',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-implicit-coercion': ['error', { allow: ['!!'] }],
        'no-implicit-globals': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        'yoda': 'error',

        /**
         * Variables
         *
         * The following rules are related to variables and are not enabled in
         * eslint:recommended: https://eslint.org/docs/rules/#variables
         */
        'no-shadow': 'warn',
        'no-shadow-restricted-names': 'error',

        /**
         * Stylistic Issues
         *
         * The following rules relate to style guidelines and are not enabled
         * in eslint:recommended: https://eslint.org/docs/rules/#stylistic-issues
         */
        'array-bracket-newline': ['error', { multiline: true }],
        'array-bracket-spacing': 'error',
        'array-element-newline': ['error', 'consistent'],
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'function-paren-newline': ['error', 'multiline'],
        'implicit-arrow-linebreak': 'error',
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'lines-around-comment': 'error',
        'multiline-ternary': ['error', 'always-multiline'],
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new-object': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': ['error', { consistent: true }],
        'object-curly-spacing': ['error', 'always'],
        'operator-assignment': 'error',
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
        'prefer-object-spread': 'error',
        'quotes': ['error', 'single', { allowTemplateLiterals: true }],
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'switch-colon-spacing': 'error',
        'template-tag-spacing': 'error',

        /**
         * ECMAScript 6
         *
         * The following rules relate to ES6 and are not enabled in
         * eslint:recommended: https://eslint.org/docs/rules/#ecmascript-6
         */
        'no-duplicate-imports': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-rename': 'error',
        'object-shorthand': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'rest-spread-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
      },
    },
    strict: {
      extends: ['plugin:@ionic/recommended'],
      rules: {
        /**
         * These rules are not enabled in @typescript-eslint/recommended.
         */
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * These rules were a bit too strict and were turned off from
         * @typescript-eslint/recommended in @ionic/recommended. Here we
         * re-enable them for the strict configuration.
         */
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',

        /**
         * Best Practices
         */
        'curly': ['error', 'all'],
        'no-implicit-coercion': 'error', // override
        'no-unused-expressions': 'error',
        'no-useless-catch': 'error',
        'radix': 'error',
        'require-unicode-regexp': 'error',

        /**
         * Variables
         */
        'no-undef-init': 'error',

        /**
         * Stylistic Issues
         */
        'brace-style': 'error', // override
        'capitalized-comments': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'func-style': 'error',
        'line-comment-position': ['error', 'beside'],
        'lines-around-comment': ['error', { beforeBlockComment: true, beforeLineComment: true, allowArrayStart: true, allowBlockStart: true, allowObjectStart: true }], // override
        'lines-between-class-members': 'error',
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
        'no-continue': 'error',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-negated-condition': 'error',
        'no-plusplus': 'error',
        'no-underscore-dangle': 'error',
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }], // override
        'padded-blocks': ['error', 'never'],
        // 'padding-line-between-statements': [], // TODO: configure this rule
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'single'], // override
        // 'sort-keys': 'error', // TODO: configure this rule
        'sort-vars': 'error',
        'spaced-comment': 'error',

        /**
         * ECMAScript 6
         */
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'no-var': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-destructuring': 'error',
        'prefer-template': 'error',
        'sort-imports': ['error', { memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'] }],
      },
    },
  },
};
