/**
 * Jest
 */

module.exports = {
  rules: {
    'jest/no-large-snapshots': ['warn', {maxSize: 2000}],
    'jest/no-disabled-tests': 'error',
  },
};
