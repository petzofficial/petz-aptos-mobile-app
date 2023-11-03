import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import React,{useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import type { TabParamList, StackParamList } from '../types/navigation';

const SplashScreen = () => {

    const Imagesource = require('../assets/icons/SplashScreen.png')
    const navigation = useNavigation<BottomTabScreenProps<TabParamList, 'Pomo'>>();

    useEffect(() => {
      setTimeout(() => {
       navigation.navigate('MainTabs')
      },300)
    })

  return (
    <View>
     <ImageBackground source={Imagesource} style={styles.img} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

    img:{
        width:'100%',
        height:'100%'
    }
})