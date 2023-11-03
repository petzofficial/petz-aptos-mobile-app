import { StyleSheet, Text, Image, Pressable, View } from 'react-native';
import React from 'react';

const SettingBtn = (props) => {
  const { icon1, txt, icon2,onPress } = props;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.subContainer}>
        <Image source={icon1} style={styles.img1} />
        <Text style={styles.heading}>{txt}</Text>
      </View>

      <Image source={icon2} style={styles.img2} />
    </Pressable>
  );
};

export default SettingBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'red',
    alignItems:'center',
    borderWidth:0.3,
    borderRadius:5,
    height:50,
    marginTop:15

  },
  subContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
   paddingLeft:20
  },
  img1:{
  width:27,
  height:27,
  marginLeft:15
  },
  img2:{
    width:27,
    height:27,
    marginRight:10
  }
});
