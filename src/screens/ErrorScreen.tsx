import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';

const ErrorScreen = ({ navigation }) => {
    const handleSaveTask = () => {
      navigation.navigate('NFTselect');
    };

    const handleNot = () => {
        navigation.navigate('Main');
      };
    

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 0 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      
      <View style={styles.container}>
  
      <Image source={require('../assets/images/error.png')} style={styles.image} />
  
      <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>OOPS</Text>
          <Text style={styles.detailText}>No data found...</Text>
        </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveTask}
      >
        <Text style={styles.saveButtonText}>Buy PetZ NTF</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton2}
        onPress={handleNot}
      >
        <Text style={styles.saveButtonText2}>Continue without NTF</Text>
      </TouchableOpacity>

      <Text style={[{ color: 'grey', textAlign: 'center' },]}>
        Don't have petz ntf? Buy it from here http://nftrade.com/
        </Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    padding: 25,
    flex: 1,
  },
 
  detailRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' ,
    marginBottom: 20,
  },
  
  detailLabel: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ff6500',
    textAlign: 'left',
    marginRight: 8,
  },
 
  detailText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 100,

  },
  
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 220,
    marginVertical: 20,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  saveButton: {
    marginBottom: 20,
    backgroundColor: '#ff6900',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,
  },
  saveButton2: {
    marginBottom: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff6500',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  saveButtonText2: {
    color: '#ff6500',
    fontSize: 16,
    fontWeight: '800',
  },
});

export default ErrorScreen;