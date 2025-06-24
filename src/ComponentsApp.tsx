import {} from '@react-navigation/native';
import './gesture-handler';
import {Navigation} from './presentation/navigators/Navigation';
import {ThemeProvider} from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};
