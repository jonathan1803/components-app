import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';

import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';
//componente que se encarga de cambiar el tema de la aplicacion
//el cambio de tema se puede hacer con la navegacion que estamos usando ya  react navigation la trae por defecto https://reactnavigation.org/docs/themes/
//pero en este caso lo haremos de forma manual
export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title safe text={`Cambiar  Tema ${currentTheme}`} />
      <Button text="Light" onPress={() => setTheme('light')} />
      <View
        style={{
          height: 10,
        }}
      />
      <Button text="Dark" onPress={() => setTheme('dark')} />
      <View
        style={{
          height: 10,
        }}
      />
      <Text style={{color: colors.text, fontSize: 16}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
