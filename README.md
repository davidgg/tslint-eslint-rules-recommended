[![npm version](https://badge.fury.io/js/tslint-eslint-rules-recommended.svg)](https://badge.fury.io/js/tslint-eslint-rules-recommended)
[![License](https://img.shields.io/npm/l/tslint-eslint-rules-recommended.svg)](LICENSE)

# tslint-eslint-rules-recommended

Recommended ESLint rules for tslint-eslint-rules. Inspired by ESLint Recommended rules [eslint:recommended rules](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js) and [tslint-eslint-rules project](https://github.com/buzinas/tslint-eslint-rules) that ports most of them.

## How to use?

Install the dependency

```shell
npm i tslint-eslint-rules-recommended --save-dev
```

Use it in your tslint.json file

```json
{
  "extends": ["tslint-eslint-rules-recommended"]
}
```

If you prefer you can overwrite some rules:

```json
{
  "extends": ["tslint-eslint-rules-recommended"],
  "rules": {
    "valid-typeof": false
  }
}
```

## Rules

Rules applied

| Rule                     | Origin                               |
| ------------------------ | ------------------------------------ |
| no-cond-assign           | TSLint "no-conditional-assignment"   |
| no-console               | TSLint "no-console"                  |
| no-constant-condition    | tslint-eslint-rules                  |
| no-control-regex         | tslint-eslint-rules                  |
| no-debugger              | TSLint "no-debugger"                 |
| no-duplicate-case        | tslint-eslint-rules                  |
| no-empty-character-class | tslint-eslint-rules                  |
| no-empty                 | TSLint "no-empty"                    |
| no-ex-assign             | tslint-eslint-rules                  |
| no-extra-boolean-cast    | tslint-eslint-rules                  |
| no-extra-semi            | tslint-eslint-rules                  |
| no-fallthrough           | TSLint "no-switch-case-fall-through" |
| no-inner-declarations    | tslint-eslint-rules                  |
| no-invalid-regexp        | tslint-eslint-rules                  |
| no-irregular-whitespace  | tslint-eslint-rules                  |
| no-mixed-spaces-and-tabs | tslint-eslint-rules                  |
| no-redeclare             | TSLint "no-duplicate-variable"       |
| no-regex-spaces          | tslint-eslint-rules                  |
| no-sparse-arrays         | tslint-eslint-rules                  |
| no-unsafe-finally        | TSLint "no-unsafe-finally"           |
| no-unused-vars           | TSLint "no-unused-variable"          |
| use-isnan                | TSLint "use-isnan"                   |
| valid-typeof             | tslint-eslint-rules                  |

You can add more ESLint rules using [tslint-eslint-rules project](https://github.com/buzinas/tslint-eslint-rules) ported rules.

Next rules are not currently available:

| Rule                  | Reason                       |
| --------------------- | ---------------------------- |
| constructor-super     | Not Applicable to TypeScript |
| for-direction         | Unavailable                  |
| getter-return         | Unavailable                  |
| no-case-declarations  | Unavailable                  |
| no-class-assign       | Unavailable                  |
| no-compare-neg-zero   | Unavailable                  |
| no-const-assign       | Not Applicable to TypeScript |
| no-delete-var         | Not Applicable to TypeScript |
| no-dupe-args          | Not Applicable to TypeScript |
| no-dupe-class-members | Not Applicable to TypeScript |
| no-dupe-keys          | Not Applicable to TypeScript |
| no-empty-pattern      | Unavailable                  |
| no-func-assign        | Not Applicable to TypeScript |
| no-global-assign      | Unavailable                  |
| no-new-symbol         | Unavailable                  |
| no-obj-calls          | Not Applicable to TypeScript |
| no-octal              | Not Applicable to TypeScript |
| no-self-assign        | Unavailable                  |
| no-this-before-super  | Not Applicable to TypeScript |
| no-undef              | Not Applicable to TypeScript |
| no-unreachable        | Not Applicable to TypeScript |
| no-unsafe-negation    | Unavailable                  |
| no-unused-labels      | Unavailable                  |
| no-useless-escape     | Unavailable                  |
| require-yield         | Unavailable                  |
