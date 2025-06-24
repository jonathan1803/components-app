import React, {useState} from 'react';
import {CustomView} from './ui/CustomView';
import {Title} from './ui/Title';
import {FlatList, Text} from 'react-native-gesture-handler';
import {colors} from '../../config/theme/theme';
import {ActivityIndicator, Image, View} from 'react-native';
import {FadeInImage} from './ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    const newArray = Array.from({length: 10}, (_, i) => i + numbers.length);
    setTimeout(() => {
      // Simulando una carga de datos
      setNumbers([...numbers, ...newArray]);
    }, 3000);
    // setNumbers([...numbers, ...newArray]);
  };
  // FlatList tiene una propiedad llamada onEndReached que se ejecuta cuando el usuario llega al final de la lista
  // y se puede usar para cargar más datos.

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6} // Cuanto más cerca del final de la lista, más rápido se cargan los datos
        renderItem={({item}) => <ListItems item={item} />}
        ListFooterComponent={() => (
          // Componente que se renderiza al final de la lista
          // Se puede usar para mostrar un indicador de carga o un mensaje de "cargando más"
          <View
            style={{
              height: 150,
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  item: number;
}
const ListItems = ({item}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${item}/200/300`}
      style={{
        width: '100%',
        height: 300,
      }}
    />
    // <Image
    //   source={{uri: `https://picsum.photos/id/${item}/200/300`}}
    //   style={{width: '100%', height: 300}}
    //   resizeMode="cover"
    //   resizeMethod="resize"
    // />
  );
};
