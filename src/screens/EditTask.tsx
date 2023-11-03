import { StyleSheet, Text, View, Image,TextInput, Pressable, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import type { TabParamList, StackParamList } from '../types/navigation';
import Button from '../components/Button';



const EditTask = () => {

    const [activeButton, setActiveButton] = useState(0);
    const [increment, setIncrement] = useState(2);


    const handleIcrement = () => {
        setIncrement(increment + 1)
    }

    const handleButtonPress = (buttonIndex) => {
      setActiveButton(buttonIndex);
    };
    const navigation = useNavigation<BottomTabScreenProps<TabParamList, 'Pomo'>>();
  return (
   
    <View style={styles.container}>
        <View>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
        <Image source={require('../assets/icons/back.png')} style={styles.backimg}  />

        </Pressable>
      <Text style={styles.txt}>Edit Task</Text>
      </View>
      

      <Text style={styles.subHeading}>Task Name</Text>
      <TextInput placeholder='WorkOut' style={styles.txtInput} placeholderTextColor={'#000000'} />
      <View style={styles.btnContainer}>
         <Text>Task Priority</Text>
         <View style={{ flexDirection: 'row', justifyContent:'space-around', marginTop:10 }}>
      <Pressable
        style={[styles.button, activeButton === 0 && styles.activeButton]}
        onPress={() => handleButtonPress(0)}
      >
        <Text style={[activeButton === 0 && styles.txtActive]}>High</Text>
      </Pressable>
      <Pressable
        style={[styles.button, activeButton === 1 && styles.activeButton]}
        onPress={() => handleButtonPress(1)}
      >
        <Text style={[activeButton === 1 && styles.txtActive]}>Medium</Text>
      </Pressable>
      <Pressable
        style={[styles.button, activeButton === 2 && styles.activeButton]}
        onPress={() => handleButtonPress(2)}
      >
        <Text style={[activeButton === 2 && styles.txtActive]}>Low</Text>
      </Pressable>
    </View>
      </View>
      <Text style={{marginTop:20, marginLeft:10}}>No. of times {'(Repetitions)'}</Text>
      <View style={styles.counterContainer}>
        <Text style={{paddingLeft:20}}>{increment}</Text>
        <Pressable onPress={handleIcrement}>
            <Text style={{fontSize:20, fontWeight:'bold', paddingRight:20}}>+</Text>
        </Pressable>
      </View>
      </View>
      <View style={styles.footerContainer}>
      <Button btntext='Update Task' onPress={() => navigation.navigate('NewTask')} />
      </View>
    </View>
   
  
  )
}

export default EditTask

const styles = StyleSheet.create({

    
    container:{
        flex:1,
        // backgroundColor:'red',
        paddingHorizontal:25,
        justifyContent:'space-between'
    },
    backimg:{
        width:20,
        height:20
    },
    headerContainer:{
       flexDirection:'row',
       marginTop:29,
       width:'100%'
    },
    txt:{
        marginLeft:80,
        fontSize:18,
        alignSelf:'center'
    },
    subHeading:{
        marginTop:30

    },
    txtInput:{
       borderRadius:5,
       borderWidth:0.5,
       marginTop:10,
       paddingLeft:20,
       borderColor:'gray' 
    },
    btnContainer:{
        marginTop:20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 0.5,
        borderColor: 'gray',
        height:50,
        width:100,
        borderRadius:10,

      },
      activeButton: {
        backgroundColor: '#F9692C',
      },
      counterContainer:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        borderWidth: 0.5,
        borderColor: 'gray',
        height:50,
        width:'99%',
        borderRadius:10,
        marginTop:10,
        
      },
      footerContainer:{
       alignItems:'center',
        paddingBottom:30
      },
     
    txtActive:{
        color:'#FFFFFF'
    }

})