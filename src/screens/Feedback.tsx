//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';

// create a component
const Feedback = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.boxView}>
                    <Image resizeMode='contain' style={{ width: 13, height: 7, }} source={require('../assets/icons/Vectorr.png')} />
                    <Text style={styles.HelpText}>Referral</Text>

                </View>
                <View style={{ alignItems: "center", marginTop: 64 }}>
                    <Image resizeMode='contain' source={require('../assets/icons/Refer.png')} style={styles.Image} />

                    <Text style={styles.text}>Refer your friends and earn</Text>
                    <View style={styles.btnView}>
                        <Text></Text>
                        <View>
                            <Text >B13882</Text>
                        </View>
                        <TouchableOpacity style={styles.boxBtn1}>

                            <Text>Email us</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                

            </View>
            <View style={styles.flex}>
                    <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vitae sed in tellus feugiat adipiscing a, sit.</Text>
                    <TouchableOpacity style={styles.boxBtn2}>

                        <Text style={{color:'white'}}>INVITE</Text>
                    </TouchableOpacity>
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
    boxView: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    HelpText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FF975C',
        marginLeft: 20
    },
    Image: {
        height: 200,
        alignItems: 'center',

    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 30
    },
    boxBtn1: {
        backgroundColor: '#FF975C',
        width: 106,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 8,
        alignSelf: "flex-end",



    },
    boxBtn2: {
        backgroundColor: '#FF975C',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 41,
        borderRadius: 8,
       



    },
    para: {
        fontSize: 12,
        fontWeight: '400',
        color: '#0000007D',
        paddingHorizontal: 50,
        textAlign: "center"
    },
    btn: {
        width: 137,
        height: 125,
        backgroundColor: '#F9F5F4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    boxBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 20
    },
    btnimage: {
        width: 40,
        height: 40
    },
    text1: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FF975C',
        // marginTop: 20

    },
    btnView: {
        height: 37,
        borderColor: '#FF975C',
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'



    },
    flex: {
        position: 'absolute',
        bottom: 40,
        justifyContent: 'center',
        flex:1,
        // backgroundColor:'red'
        paddingHorizontal:30
        
        
        

    },
    lorem: {
        fontSize: 15,
        color: '#0000007D',
        textAlign: 'center',
        marginBottom:10
        

    }
});

//make this component available to the app
export default Feedback;