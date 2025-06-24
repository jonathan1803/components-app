import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimations} from '../../hooks/useAnimations';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri, style}: Props) => {
  const {fadeIn, animatedOpacity} = useAnimations();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          size={30}
          color={'gray'}
          style={{
            position: 'absolute',
          }}
        />
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn({duration: 1000});
          setIsLoading(false);
        }}
        style={[style, {opacity: animatedOpacity}]}
      />
    </View>
  );
};
