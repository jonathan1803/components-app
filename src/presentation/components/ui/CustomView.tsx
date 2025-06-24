import React, {ReactNode, useContext} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {globalStyles, colors} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  margin?: boolean;
}

export const CustomView = ({children, style, margin = false}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={[
        //los corchetes  para insertar varias clases
        style,
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        {backgroundColor: colors.background},
      ]}>
      {children}
    </View>
  );
};
