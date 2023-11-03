import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({btntext,onPress}) => {
  return (
   
     <Pressable style={styles.btnStyle} onPress={onPress}>
        <Text style={{color:'#FFFFFF'}}>{btntext}</Text>
      </Pressable>
   
  )
}

export default Button

const styles = StyleSheet.create({

    btnStyle:{
        backgroundColor: '#F9692C',
        width:'95%',
        height:50,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10     
    },
})