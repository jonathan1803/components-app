import React, {useContext} from 'react';
import {Alert, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {showPrompt} from '../../../config/adapters/prompt.adapter';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);
  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        //botones
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: 'dark', // Cambia el tema de la alerta
        cancelable: true, // Permite cancelar la alerta al tocar fuera de ella
        onDismiss() {
          console.log('Alert dismissed');
        }, // Callback al cerrar la alerta
      },
    );
  };

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},

        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {userInterfaceStyle: isDark ? 'dark' : 'light'}, // Cambia el tema de la alerta
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'titulo del prompt',
      subtitle: 'subtitulo del prompt',
      buttons: [{text: 'Ok', onPress: () => console.log('OK')}],
      placeholder: 'placeholder',
      promptType: 'plain-text',
    });
    // !! codigo nativo no funciona en android
    // Alert.prompt(
    //   // Prompt es un input pero no sirve para android, y no aparece el teclado
    //   'Correo Electronico',
    //   'Este es un mensaje de alerta',
    //   (value: string) => console.log('value: ', value),
    //   'secure-text',
    //   'soy el valor por defecto',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerts" />
      <Button
        text="Alerta - 2 Botones"
        onPress={() => {
          createTwoButtonAlert();
        }}
      />
      <View style={{height: 10}} />
      <Button
        text="Alerta - 3 Botones"
        onPress={() => {
          createThreeButtonAlert();
        }}
      />
      <View style={{height: 10}} />
      <Button
        text="Prompt - Input"
        onPress={() => {
          onShowPrompt();
        }}
      />
    </CustomView>
  );
};
