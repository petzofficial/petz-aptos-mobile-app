import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

const LightScheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    surface: '#e2e8f0',
    text: '#000',
    primary: '#e11d48',
    primaryDarken: '#be123c',
    onPrimary: '#fff',
    headingText: '#2c3e50', // Add your desired color for headingText
  },
};

const DarkScheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    surface: '#334155',
    text: '#fff',
    primary: '#9f1239',
    primaryDarken: '#881337',
    onPrimary: '#fff',
    headingText: '#2c3e50', // Add your desired color for headingText
  },
};

export const useTheme = () => {
  const scheme = useColorScheme();

  return scheme === 'dark' ? DarkScheme : LightScheme;
};
