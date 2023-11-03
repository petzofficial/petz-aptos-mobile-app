import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React,{useState} from 'react'




const Card = ({txt1,txt2,img,isActive, onPress}) => {

 

    const containerStyle = isActive ? [styles.containerMain, styles.activeContainer] : styles.containerMain;
  
  return (
    <Pressable style={containerStyle} onPress={onPress}> 
    <Image source={img} style={styles.imgBox} />
    <View style={styles.content}>
        <Text style={isActive? styles.active : styles.deActive }>{txt1}</Text>
        <Text style={isActive? styles.active : styles.deActive2}>{txt2}</Text>

    </View>
      
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({

    containerMain: {
        height: 200,
        width: 150,
        backgroundColor: 'white', // Set the background color to white for the shadow to be visible
        borderRadius: 10,
        marginTop: 20,
        // Android shadow
        elevation: 5, // Adjust the elevation value to control the shadow depth
    
        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    activeContainer: {
        height:200,
        width:170,
        backgroundColor:'#F9692C',
        borderRadius:10,
        marginTop:20
      },
    imgBox:{
        height:'70%',
        width:'80%',
        resizeMode:'contain',
        marginTop:10,
        borderRadius:5,
        alignSelf:'center'
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        flex:1
    },
    active:{
      color:'#FFFFFF'
    },
    deActive:{
      color:'#000000',
      fontWeight:'600'
    }
})