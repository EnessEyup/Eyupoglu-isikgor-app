import { render } from '@testing-library/react-native';
import * as ReactNative from 'react-native';
import { ThemedText } from '../ThemedText';

// Mock useColorScheme hook
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    useColorScheme: jest.fn(() => 'light')
  };
});

describe('ThemedText', () => {
  const mockUseColorScheme = ReactNative.useColorScheme as jest.Mock;

  beforeEach(() => {
    // Default to light theme
    mockUseColorScheme.mockImplementation(() => 'light');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByText } = render(<ThemedText>Test Text</ThemedText>);
    const textElement = getByText('Test Text');
    expect(textElement).toBeTruthy();
  });

  it('applies correct style for light theme', () => {
    const { getByText } = render(<ThemedText>Test Text</ThemedText>);
    const textElement = getByText('Test Text');
    expect(textElement.props.style).toContainEqual(expect.objectContaining({
      color: '#000', // light theme text color
    }));
  });

  it('applies correct style for dark theme', () => {
    mockUseColorScheme.mockImplementation(() => 'dark');
    const { getByText } = render(<ThemedText>Test Text</ThemedText>);
    const textElement = getByText('Test Text');
    expect(textElement.props.style).toContainEqual(expect.objectContaining({
      color: '#fff', // dark theme text color
    }));
  });
});
