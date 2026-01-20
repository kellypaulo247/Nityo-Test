import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => {
  return {
    ...jest.requireActual('react-native-gesture-handler'),
    GestureHandlerRootView: ({ children }) => children,
  };
});

// Mock AsyncStorage for Jest tests (native module is not available in JS test env)
jest.mock('@react-native-async-storage/async-storage', () => {
  let storage = {};
  return {
    setItem: jest.fn((key, value) => {
      storage[key] = value;
      return Promise.resolve(true);
    }),
    getItem: jest.fn((key) => Promise.resolve(storage[key] ?? null)),
    removeItem: jest.fn((key) => {
      delete storage[key];
      return Promise.resolve(true);
    }),
    clear: jest.fn(() => {
      storage = {};
      return Promise.resolve(true);
    }),
    getAllKeys: jest.fn(() => Promise.resolve(Object.keys(storage))),
    multiGet: jest.fn((keys) => Promise.resolve(keys.map((k) => [k, storage[k]]))),
    multiSet: jest.fn((pairs) => {
      pairs.forEach(([k, v]) => { storage[k] = v; });
      return Promise.resolve(true);
    }),
    multiRemove: jest.fn((keys) => {
      keys.forEach((k) => delete storage[k]);
      return Promise.resolve(true);
    }),
  };
});