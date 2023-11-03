import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React,{useState} from 'react'
import { useTheme } from '../hooks/useTheme';
import Card from '../components/Card';
import Button from '../components/Button';

const NftScreen = () => {

    const theme = useTheme();

    const [activeCard, setActiveCard] = useState(1);

    const handleCardPress = (cardIndex) => {
      setActiveCard(cardIndex);
    }

  return (
    <ScrollView style={styles.container} >
      <Text style={[{ color: theme.colors.MainColor }, styles.title]}>NFT</Text>
      <Text style={[{ color: theme.colors.textOff }, styles.title]}>Select your favorite nft to get started</Text>
      <View style={styles.card}>
      <Card txt1='#1273' txt2='Pitbull' img={require('../assets/icons/3.png')}  isActive={activeCard === 0} onPress={() => handleCardPress(0)} />
      <Card txt1='#1273' txt2='Pitbull' img={require('../assets/icons/2.png')} isActive={activeCard === 1} onPress={() => handleCardPress(1)}  />
      <Card txt1='#1273' txt2='Pitbull' img={require('../assets/icons/3.png')} isActive={activeCard === 2} onPress={() => handleCardPress(2)}  />
      <Card txt1='#1273' txt2='Pitbull' img={require('../assets/icons/2.png')} isActive={activeCard === 3} onPress={() => handleCardPress(3)}  />
      <View style={styles.btnContainer}>
      <Button btntext={'Continue'} />
      <Pressable style={styles.Nft}>
        <Text style={[{ color: theme.colors.MainColor }, styles.title]} >Continue without NFT</Text>
      </Pressable>
      </View>
      <Text style={[{ color: theme.colors.textOff }, styles.footerTxt]}>Don't have petz nft? Buy it from here https://{'n'} nftrade.com/</Text>
      </View>
    </ScrollView>
  ) 
}

export default NftScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:30,
        paddingHorizontal:20
    },
    card:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:30,
        flexWrap:'wrap'
      },
      btnContainer:{
        width:'100%',
        marginTop:35,
        alignItems:'center'
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
      title:{
        fontWeight:'700'
      },
      footerTxt:{
        marginTop:20,
        justifyContent:'center',
        alignSelf:'center',
        textAlign:'center',
        
      }
})