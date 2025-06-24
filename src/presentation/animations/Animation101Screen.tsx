import React, {useContext} from 'react';
import {Animated, Easing, Pressable, StyleSheet, Text} from 'react-native';
import {useAnimations} from '../hooks/useAnimations';
import {ThemeContext} from '../context/ThemeContext';
import {CustomView} from '../components/ui/CustomView';
import {Button} from '../components/ui/Button';

export const Animation101Screen = () => {
  const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingPosition} =
    useAnimations();
  const {colors} = useContext(ThemeContext);
  console.log('Primary:', colors?.primary);
  return (
    <CustomView style={styles.container} margin>
      {/* Animated.View, animated.Image .Text etc is a wrapper for the purpleBox */}
      <Animated.View
        style={[
          styles.purpleBox,
          {backgroundColor: colors?.primary || '#8B5CF6'},
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />
      <Button
        text="Fade In"
        onPress={() => {
          fadeIn({}),
            startMovingPosition({
              initialPosition: -100, // -100 lo mueve hacia arriba 0 es el centro
              easing: Easing.elastic(1),
              duration: 750,
            });
        }}
        style={{marginTop: 10}}
      />

      <Button
        text="Fade Out"
        onPress={() => {
          fadeOut({});
        }}
        style={{marginTop: 10}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
