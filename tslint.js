module.exports = {
  extends: ['tslint-eslint-rules'],
  rules: {
    'no-conditional-assignment': true,
    'no-console': true,
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-debugger': true,
    'no-duplicate-case': true,
    'no-duplicate-variable': true,
    'no-empty-character-class': true,
    'no-empty': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': true,
    'no-inner-declarations': [true, 'both'],
    'no-invalid-regexp': true,
    'no-regex-spaces': true,
    'no-switch-case-fall-through': true,
    'no-unsafe-finally': true,
    'no-unused-variable': true,
    'ter-no-irregular-whitespace': [true],
    'ter-no-mixed-spaces-and-tabs': { type: 'spaces' },
    'ter-no-sparse-arrays': [true],
    'use-isnan': true,
    'valid-typeof': true
  }
};
