import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import {useContext} from 'react';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: colors.cardBackground,
      }}>
      <View
        style={[
          {
            backgroundColor: colors.text,
            width: '100%',
            height: 1,
            marginVertical: 8,
            opacity: 0.1,
            alignSelf: 'center',
          },
          style,
        ]}
      />
    </View>
  );
};
