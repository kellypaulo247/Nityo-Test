module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-vector-icons|@react-navigation)/)'
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
};
