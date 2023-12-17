import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';

const NFTselect = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);


  const handleCardPress = (cardId) => {
    setSelectedCard(cardId);
  };


    const handleSaveTask = () => {
      navigation.navigate('Main');
    };

    const handleNot = () => {
        navigation.navigate('ErrorScreen');
      };
    

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 0 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      
      <View style={styles.container}>
      <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>NTF</Text>
          <Text style={styles.detailText}>Select your favorite ntf to get started.</Text>
        </View>
      <View style={styles.content}>
  <View>
  <View style={styles.imageContainer}>
    <TouchableOpacity
        onPress={() => handleCardPress(1)}
        style={[
          styles.c1,
          selectedCard === 1 && { backgroundColor: '#ff6500' },
        ]}
      >
        <View style={styles.c2}>
          <Image source={require('../assets/images/card1.png')} style={styles.image} />
        </View>
        <View style={styles.detailRow1}>
          <Text style={styles.detailLabel1}>#1273</Text>
          <Text style={styles.detailText1}>pitbull</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleCardPress(2)}
        style={[
          styles.c1,
          selectedCard === 2 && { backgroundColor: '#ff6500' },
        ]}
      >
        <View style={styles.c2}>
          <Image source={require('../assets/images/card2.png')} style={styles.image} />
        </View>
        <View style={styles.detailRow1}>
          <Text style={styles.detailLabel1}>#1273</Text>
          <Text style={styles.detailText1}>pitbull</Text>
        </View>
      </TouchableOpacity>
   
    </View>

    <View style={styles.imageContainer}>
    <TouchableOpacity
        onPress={() => handleCardPress(3)}
        style={[
          styles.c1,
          selectedCard === 3 && { backgroundColor: '#ff6500' },
        ]}
      >
        <View style={styles.c2}>
          <Image source={require('../assets/images/card3.png')} style={styles.image} />
        </View>
        <View style={styles.detailRow1}>
          <Text style={styles.detailLabel1}>#1273</Text>
          <Text style={styles.detailText1}>pitbull</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleCardPress(4)}
        style={[
          styles.c1,
          selectedCard === 4 && { backgroundColor: '#ff6500' },
        ]}
      >
        <View style={styles.c2}>
          <Image source={require('../assets/images/card4.png')} style={styles.image} />
        </View>
        <View style={styles.detailRow1}>
          <Text style={styles.detailLabel1}>#1273</Text>
          <Text style={styles.detailText1}>pitbull</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveTask}
      >
        <Text style={styles.saveButtonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton2}
        onPress={handleNot}
      >
        <Text style={styles.saveButtonText2}>Continue without NTF</Text>
      </TouchableOpacity>

      <Text style={[{ color: 'grey', textAlign: 'center', marginHorizontal: 20 },]}>
        Don't have petz ntf? Buy it from here http://nftrade.com/
        </Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 20,
    flex: 1,
  },
 
  detailRow: {
    flexDirection: 'column' ,
    justifyContent: 'space-between',
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

  },
  content: {
    marginVertical: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 150,
  },
  saveButton: {
    marginBottom: 20,
    backgroundColor: '#ff6500',
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
  c1: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 200,
    width: 150,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderColor: '#dcdcdc', 
  },

  c2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    height: 160,
    width: 130,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    backgroundColor: '#fff8f2'
  },
  detailRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  
  detailLabel1: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left',
    marginRight: 40,
  },
 
  detailText1: {
    fontSize: 16,
    textAlign: 'left',
  },
});

export default NFTselect;
