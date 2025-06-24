import React from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
export const Button = ({style, text, onPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {opacity: pressed ? 0.8 : 1, backgroundColor: colors.primary},
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[globalStyles.btnPrimaryText, {color: colors.buttonTextColor}]}>
        {text}
      </Text>
    </Pressable>
  );
};
