import React, {useContext, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {Title} from './Title';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '@react-navigation/native';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };
  return (
    //PULL TO REFRESH, iconos de carga(probar en version 0.75)
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          progressViewOffset={top + 150} //para el icono de carga no se valla a la parte de arriba
          onRefresh={onRefresh}
          progressBackgroundColor={colors.background} //color de fondo del icono de carga
          tintColor={colors.primary} //color del icono de carga
          colors={['#5856D6', 'red', 'orange']}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      <Title text="Pull to Refresh" safe />
    </ScrollView>
  );
};
