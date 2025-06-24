import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {
  colors,
  ThemeColors,
  lightColors,
  darkColors,
} from '../../config/theme/theme';
import {Appearance, AppState, useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {colors} from '../../config/theme/theme';

type theme = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: theme;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: theme) => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme(); //detecta el tema del sistema (light o dark)
  const [currentTheme, setCurrentTheme] = useState<theme>('light');
  const isDark = currentTheme === 'dark'; //variable para saber si el tema es oscuro
  const colors = isDark ? darkColors : lightColors; //variable para saber los colores del tema actual
  //primera forma useColorscheme, corrije error de tema al iniciar la app, si se cambia el tema del sistema
  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  // segunda forma  con AppState, detecta cambios en el tema del sistema
  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     const colorScheme = Appearance.getColorScheme();
  //     setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
  //   });
  //   // Detectar cambios en el tema del sistema
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const setTheme = (theme: theme) => {
    setCurrentTheme(theme);
  };
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          isDark: isDark,
          colors: colors,
          setTheme: setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default ThemeProvider;
