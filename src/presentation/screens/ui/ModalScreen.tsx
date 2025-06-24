import React, {useState} from 'react';
import {View, Text, Modal, Platform} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView>
      <Title text="Modal" safe />
      <Button text="Open modal" onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
          <View style={{paddingHorizontal: 10}}>
            <Title safe text="Modal Content" />
          </View>
        </View>
        <Button
          text="Colse Modal"
          onPress={() => setIsVisible(false)}
          style={{height: Platform.OS === 'android' ? 40 : 60, borderRadius: 0}}
        />
      </Modal>
    </CustomView>
  );
};
