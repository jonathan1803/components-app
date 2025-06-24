import React, {useRef} from 'react';
import {Animated, Easing, View} from 'react-native';

export const useAnimations = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  // animaciones RN
  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    })
      //   Animated.timing(animatedTop, {
      //     toValue: 0,
      //     duration: 700,
      //     useNativeDriver: true,
      //     easing: Easing.bounce,
      //   })
      .start(callback);
  };

  const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    })
      //   Animated.timing(animatedTop, {
      //     toValue: -100,
      //     duration: 300,
      //     useNativeDriver: true,
      //   }),
      .start(callback);
    //   animatedTop.resetAnimation();
  };

  const startMovingPosition = ({
    initialPosition = 0,
    duration = 300,
    toValue = 0,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    // animatedTop.setValue(0); envia los valores para la animacion
    // animatedTop.setValue(-100); envia los valores para la animacion
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    //methods
    startMovingPosition,
    fadeIn,
    fadeOut,
    //properties
    animatedOpacity,
    animatedTop,
  };
};
