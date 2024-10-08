module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetup.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};