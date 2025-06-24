import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  useWindowDimensions,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {Button} from './Button';
import {useNavigation} from '@react-navigation/native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];
export const SlidesScreen = () => {
  const navigate = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentIndex(currentIndex > 0 ? currentIndex : 0);
  };
  const flatLisRef = useRef<FlatList>(null);
  const scrollToSide = (index: number) => {
    if (!flatLisRef.current) return;
    flatLisRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        ref={flatLisRef}
        // scrollEnabled={false}
        onScroll={onScroll}
      />
      {currentIndex === items.length - 1 ? (
        <Button
          text="Finalizar"
          onPress={() => navigate.goBack()}
          style={{
            position: 'absolute',
            bottom: 60,
            width: 100,
            right: 30,
          }}
        />
      ) : (
        <Button
          text="Continuar"
          onPress={() => scrollToSide(currentIndex + 1)}
          style={{
            position: 'absolute',
            bottom: 60,
            width: 100,
            right: 30,
          }}
        />
      )}
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
}
const SlideItem = ({item}: SlideItemProps) => {
  const {width} = useWindowDimensions();

  const {img, title, desc} = item;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        paddingTop: 40, // Agrega el padding superior del área segura
        justifyContent: 'center',
        width: width,
      }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: colors.primary,
          textAlign: 'center',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: colors.text,
          textAlign: 'center',
          marginTop: 10,
        }}>
        {desc}
      </Text>
    </View>
  );
};
