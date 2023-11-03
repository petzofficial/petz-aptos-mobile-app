import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';



const ProgressCard = ({txt,value,value2}) => {
  
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', }} >
      <Text >{txt}</Text>
      <View >
            <Progress.Bar
              progress={value}
              width={150}
              height={7}
              color="#F9692C"
              unfilledColor="#D3D3D3"
              borderWidth={0}
            />
            
          </View>
          <Text>{value2}</Text>
    </View>
  )
}

export default ProgressCard

const styles = StyleSheet.create({

    
      
})