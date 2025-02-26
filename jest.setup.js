// Global test setup
global.expect = require('@jest/globals').expect;
global.jest = require('@jest/globals').jest;

// Mock Platform before anything else
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn(obj => obj.ios),
  constants: {
    isTesting: true,
    reactNativeVersion: {
      major: 0,
      minor: 73,
      patch: 2,
    },
    isDisableAnimations: false,
  },
}));

// Mock DeviceInfo
jest.mock('react-native/Libraries/Utilities/NativeDeviceInfo', () => ({
  getConstants: () => ({
    Dimensions: {
      window: {
        width: 375,
        height: 812,
        scale: 1,
        fontScale: 1,
      },
      screen: {
        width: 375,
        height: 812,
        scale: 1,
        fontScale: 1,
      },
    },
  }),
}));

// Mock TurboModuleRegistry
jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => ({
  get: jest.fn(),
  getEnforcing: jest.fn((name) => {
    if (name === 'SettingsManager') {
      return {
        getConstants: () => ({
          settings: {
            AppleLocale: 'en_US',
            AppleLanguages: ['en'],
          }
        })
      };
    }
    return null;
  }),
}));

// React Native core mocks
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    NativeModules: {
      ...RN.NativeModules,
      SettingsManager: {
        settings: {
          AppleLocale: 'en_US',
          AppleLanguages: ['en'],
        }
      }
    },
    useColorScheme: jest.fn(() => 'light'),
    Platform: {
      OS: 'ios',
      select: jest.fn(obj => obj.ios),
      constants: {
        isTesting: true,
        reactNativeVersion: {
          major: 0,
          minor: 73,
          patch: 2,
        },
        isDisableAnimations: false,
      },
    },
    Dimensions: {
      get: jest.fn(() => ({
        width: 375,
        height: 812,
        scale: 1,
        fontScale: 1,
      })),
    },
    PixelRatio: {
      get: jest.fn(() => 1),
      getFontScale: jest.fn(() => 1),
      getPixelSizeForLayoutSize: jest.fn(size => size),
      roundToNearestPixel: jest.fn(size => size),
    },
    StyleSheet: {
      create: jest.fn(styles => styles),
      flatten: jest.fn(styles => styles),
    },
    Settings: {
      get: jest.fn(),
      set: jest.fn(),
      watchKeys: jest.fn(),
      clearWatch: jest.fn()
    },
    // Add common components
    ActivityIndicator: 'ActivityIndicator',
    View: 'View',
    Text: 'Text',
    Image: 'Image',
    ScrollView: 'ScrollView',
    TextInput: 'TextInput',
    TouchableOpacity: 'TouchableOpacity',
    Button: 'Button',
    Animated: {
      ...RN.Animated,
      timing: jest.fn(() => ({
        start: jest.fn(),
      })),
      spring: jest.fn(() => ({
        start: jest.fn(),
      })),
    },
  };
});

// Console mocks
global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
  log: jest.fn(),
};

// Third party mocks
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('expo-font', () => ({ loadAsync: jest.fn() }));
jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn(),
  fetch: jest.fn(() => Promise.resolve({ isConnected: true })),
}));
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

// Native module mocks
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// Suppress warnings
jest.spyOn(console, 'warn').mockImplementation(() => {}); 