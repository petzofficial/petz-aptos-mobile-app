// NTF.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const NTF = () => {

    const handleSaveTask = () => {
        // Add your logic here to save the task
       
        // Add your logic to save the task to your data source
      };


  const hpValue = 0.8; // You can replace this with the actual HP value
  const productivityValue = 0.8; // Replace with actual productivity value
  const concentrationValue = 0.6; // Replace with actual concentration value
  const fortuneValue = 0.4; // Replace with actual fortune value
  const longevityValue = 0.2; // Replace with actual longevity value

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 0 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.c1}>

       <View style={styles.c2}>
       <Image source={require('../assets/images/card3.png')} style={styles.image} />
            </View>
            <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>#1273</Text>
          <Text style={styles.detailText}>pitbull</Text>
        </View>
      </View>

      {/* Rating Stars */}
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Text key={star} style={styles.star}>
            ★
          </Text>
        ))}
      </View>

      {/* HP Bar */}
      <View style={styles.barContainer}>
        <Progress.Bar progress={hpValue} width={250} color={'#ff6500'} />
        <Text style={styles.barText}>HP</Text>
      </View>

      <View style={styles.barContainer2}>
      {/* Productivity Bar */}
      <View style={styles.barContainer}>
      <Text style={[styles.barText2, {marginRight: 30}]}>Productivity</Text>
        <Progress.Bar progress={productivityValue} width={130} color={'#ff6500'} />
        <Text style={styles.barText3}>42.6</Text>
        
      </View>

      {/* Concentration Bar */}
      <View style={styles.barContainer}>
      <Text style={[styles.barText2, {marginRight: 13}]}>Concentration</Text>
        <Progress.Bar progress={concentrationValue} width={130} color={'#ff6500'} />
        <Text style={styles.barText3}>11.5</Text>
      </View>

      {/* Fortune Bar */}
      <View style={styles.barContainer}>
      <Text style={[styles.barText2, {marginRight: 58}]}>Fortune</Text>
        <Progress.Bar progress={fortuneValue} width={130} color={'#ff6500'} />
        <Text style={styles.barText3}>5.9</Text>
      </View>

      {/* Longevity Bar */}
      <View style={styles.barContainer}>
      <Text style={[styles.barText2, {marginRight: 45}]}>Longevity</Text>
        <Progress.Bar progress={longevityValue} width={130} color={'#ff6500'} />
        <Text style={styles.barText3}>4.5</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveTask}
      >
        <Text style={styles.saveButtonText}>Sell</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton2}
        onPress={handleSaveTask}
      >
        <Text style={styles.saveButtonText2}>Select</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 120,
    height: 150,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  star: {
    fontSize: 30,
    color: '#ffcc00',
    marginRight: 5,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  barContainer2: {
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left',
    marginRight: 60,
  },
 
  detailText: {
    fontSize: 16,
    textAlign: 'left',
  },
  barText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#ff6500'
  },
  barText2: {
    fontSize: 16,
  },
  barText3: {
    fontSize: 16,
    marginLeft: 10,
    color: '#ff6500'
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
  c1: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 240,
    width: 200,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderColor: '#dcdcdc', 
  },

  c2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    height: 180,
    width: 170,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    backgroundColor: '#fff8f2'

  }
});

export default NTF;
