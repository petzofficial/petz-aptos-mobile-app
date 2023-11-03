import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { TabParamList, StackParamList } from '../types/navigation';
import Card from '../components/Card';
import { Rating, AirbnbRating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ProgressCard from '../components/ProgressCard';
import Button from '../components/Button';
import { useTheme } from '../hooks/useTheme';

const NftSelling = () => {

  const theme = useTheme();

  const navigation =
    useNavigation<BottomTabScreenProps<TabParamList, 'Pomo'>>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backimg}
          />
        </Pressable>
        <Text style={styles.txt}>NFT</Text>
      </View>
      <View style={styles.crd}>
        <Card
          txt1="#1273"
          txt2="Pitbull"
          img={require('../assets/icons/2.png')}
        />

        <Rating style={{ paddingVertical: 25 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Progress.Bar
              progress={0.6}
              width={270}
              height={7}
              color="#F9692C"
              unfilledColor="#D3D3D3"
              borderWidth={0}
            />
          </View>
          <Text
            style={{ marginLeft: 10, color: '#F9692C', fontWeight: 'bold' }}>
            HP
          </Text>
        </View>
      </View>
   
      <View style={styles.cardProgress} >
       <ProgressCard  txt='Productivity' value='0.8' value2 ='42.2' />
       <ProgressCard  txt='Concenrative' value='0.7' value2 ='11.5' />
       <ProgressCard  txt='Fortune' value='0.5' value2 ='5.9' />
       <ProgressCard  txt='Longevity' value='0.4' value2 ='4.5' />

    </View>
    <View style={styles.btn}>
    <Button btntext='Sell' />
    <Pressable style={styles.Nft}>
        <Text style={[{ color: theme.colors.MainColor }, styles.title]} >Select</Text>
      </Pressable>
    </View>

    </ScrollView>
  );
};

export default NftSelling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor:'red'
    paddingHorizontal: 20,
  },
  backimg: {
    width: 20,
    height: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 29,
    width: '100%',
  },
  txt: {
    marginLeft: 80,
    fontSize: 18,
    alignSelf: 'center',
    color: '#000000',
    fontWeight: '600',
  },
  crd: {
    height: 400,
    // backgroundColor:'red',
    marginTop: 20,

    alignItems: 'center',
  },

  cardProgress: {
    height: 200,
    borderRadius: 1,
    justifyContent: 'space-around',
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1, // Adjust the shadow offset if needed
    },
    shadowOpacity: 0.1, // Reduce shadow opacity
    shadowRadius: 1, // Reduce shadow radius
    elevation: 2, // For Android
  },
  btn:{
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:20
  },
  Nft:{
    width:'95%',
    height:50,
    justifyContent:"center",
    alignItems:'center',
    borderRadius:10 ,
    marginTop:25,
    borderWidth:1,
    borderColor:'#F9692C'   
    
  },

});
