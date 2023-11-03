import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView,TouchableOpacity } from 'react-native';

// create a component
const HelpScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.boxView}>
                    <Image resizeMode='contain' style={{ width: 13, height: 7, }} source={require('../assets/icons/Vectorr.png')} />
                    <Text style={styles.HelpText}>Help and Support</Text>
                     
                </View>
                <View style={{alignItems:"center",marginTop:64}}>
                <Image resizeMode='contain' source={require('../assets/icons/Nodata.png')} style={styles.Image}/>

                <Text style={styles.text}>How can we help you?</Text>
                <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vitae sed in tellus feugiat adipiscing a, sit.</Text>
                </View>

                <View style={styles.boxBtn}>
                    <TouchableOpacity style={styles.btn}>
                       <Image style={styles.btnimage} source={require('../assets/icons/Communication.png')}/>
                       <Text style={styles.text1}>Chat with us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('RecentActiviry')}>
                       <Image style={styles.btnimage} source={require('../assets/icons/Mail.png')}/>
                       <Text style={styles.text1}>Email us</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 24
    },
    boxView:{
        flexDirection:'row',
        alignItems:'center',
       
    },
    HelpText:{
        fontSize:18,
        fontWeight:'700',
        color:'#FF975C',
        marginLeft:20
    },
    Image:{
        height:200,
        alignItems:'center',
       
    },
    text:{
        fontSize:16,
        fontWeight:'700',
        marginTop:30
    },
    para:{
        fontSize:12,
        fontWeight:'400',
        color:'#0000007D',
        paddingHorizontal:50,
        textAlign:"center"
    },
    btn:{
        width:137,
        height:125,
        backgroundColor:'#F9F5F4',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    boxBtn:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:20,
        paddingHorizontal:20,
        flex:1,
        alignItems:'flex-end'
    },
    btnimage:{
        width:40,
        height:40
    },
    text1:{
        fontSize:15,
        fontWeight:'500',
        color:'#FF975C',
        marginTop:20
        
    }
});

//make this component available to the app
export default HelpScreen;