// Account.tsx
import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView, } from 'react-native';

const Account = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigation = useNavigation();
  const [selectedSection, setSelectedSection] = useState('name');

  const handleCardPress = (cardId) => {
    navigation.navigate('NTF');
    setSelectedCard(cardId);
  };

  const handleSectionPress = (section: string) => {
    setSelectedSection(section);
  };

  const Levelprogress = 0.6; // Set the progress to 60%
  const Levelpercentage = Math.round(Levelprogress * 100);

  const Energyprogress = 0.8; // Set the progress to 30% for the second progress bar
const Energypercentage = Math.round(Energyprogress * 100);

  return (
    <View style={{ backgroundColor: '#ffffff' }}>
       {/* Header Section */}
       <View style={styles.header}>
      <View style={styles.h1}>
        {/* First Item */}
        <View style={styles.rowItem}>
          <Image
            source={require('../assets/images/apt.png')} // Replace with the correct path to your first image
            style={styles.image1}
          />
          <Text style={styles.text1}>100 APT</Text>
        </View>

        {/* Second Item */}
        <View style={styles.rowItem}>
          <Image
            source={require('../assets/images/pgt.png')} // Replace with the correct path to your second image
            style={styles.image1}
          />
          <Text style={styles.text1}>100 PGT</Text>
        </View>

        {/* Third Item */}
        <View style={styles.rowItem}>
          <Image
            source={require('../assets/images/pst.png')} // Replace with the correct path to your third image
            style={styles.image1}
          />
          <Text style={styles.text1}>100 PST</Text>
        </View>
      </View>
    </View>
      <StatusBar backgroundColor="#ff6900" barStyle="light-content" />
<ScrollView>
      <View style={styles.progressBarContainer}>
      <View style={styles.progressAndTextContainer}>
    <Text style={[styles.statusText, {color: '#ff6900'}]}>Level</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Progress.Bar 
        progress={Levelprogress}
        width={null}
        color={'#4cb54a'}
        unfilledColor={'#d1d8dd'}
        style={{ flex: 1, marginRight: 8 }}
      />
      <Text style={styles.percentageText}>{`${Levelpercentage}%`}</Text>
    </View>
  </View>

  {/* Second Progress Bar */}
  <View style={[styles.progressAndTextContainer, {marginBottom: 15}]}>
  <Text style={[styles.statusText, {color: '#ff6900'}]}>Energy</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Progress.Bar 
      progress={Energyprogress}
      width={null}
      color={'#4285f4'} // Customize the color for the second progress bar
      unfilledColor={'#d1d8dd'}
      style={{ flex: 1, marginRight: 8 }}
    />
    <Text style={styles.percentageText}>{`${Energypercentage}%`}</Text>
  </View>
</View>
</View>

    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleSectionPress('name')}
          style={[
            styles.button,
            selectedSection === 'name' && styles.selectedButton,
          ]}
        >
          <Text style={styles.text}>Token</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSectionPress('description')}
          style={[
            styles.button,
            selectedSection === 'description' && styles.selectedButton,
          ]}
        >
          <Text style={styles.text}>Transactions</Text>
        </TouchableOpacity>
        <View style={styles.iconcontainer}>
        <Image source={require('../assets/images/addtocard.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
      {selectedSection === 'name' && (
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
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>#1273</Text>
          <Text style={styles.detailText}>pitbull</Text>
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
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>#1273</Text>
          <Text style={styles.detailText}>pitbull</Text>
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
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>#1273</Text>
          <Text style={styles.detailText}>pitbull</Text>
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
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>#1273</Text>
          <Text style={styles.detailText}>pitbull</Text>
        </View>
      </TouchableOpacity>
    </View>
    
  </View>
)}

        {selectedSection === 'description' && (
          <View>
          
          <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('Transaction')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/percentage.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>Network fee</Text>
              <Text style={styles.confirmedText}>Confirmed. 2D</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>0.00951 APT</Text>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: '#d3d3d3'}]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('Transaction')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/percentage.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>Network fee</Text>
              <Text style={styles.confirmedText}>Confirmed. 2D</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>0.00951 APT</Text>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: '#d3d3d3'}]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('Transaction')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/percentage.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>Network fee</Text>
              <Text style={styles.confirmedText}>Confirmed. 2D</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>0.00951 APT</Text>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: '#d3d3d3'}]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('Transaction')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/percentage.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>Network fee</Text>
              <Text style={styles.confirmedText}>Confirmed. 2D</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>0.00951 APT</Text>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: '#d3d3d3'}]} />
            </View>
          </TouchableOpacity>
        </View>
      )}
      </View>
    </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 50,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: '#ff6900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "white",
    height: 40,
    width: '90%',
    borderRadius: 12,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image1: {
    width: 28,
    height: 28, 
    resizeMode: 'contain', 
  },
  text1: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '600',
    color: "#ff6500"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 8,
  },
  selectedButton: {
    borderBottomWidth: 2,
    borderColor: '#ff6900', // Underline color for the selected button
  },
  text: {
  fontSize: 16,
  fontWeight: '800',
  color: 'black',
  },
  selectedButtonText: {
    color: '#ff6900', // Text color for the selected button
  },
  content: {
    padding: 10,
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
  progressBarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d1d8dd',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  progressAndTextContainer: {
    flexDirection: 'column', // Change to column to stack text and progress bar vertically
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
  },

  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black', // Customize the color of the status text
    marginTop: 10,
    textAlign: 'left',
  },

  percentageText: {
    fontSize: 14,
    marginTop: 5,
    color: 'black', // Customize the color of the percentage text
  },
  icon: {
    height: 24,
    width: 24,
  },
  iconcontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#ff6500'
  },
  networkFeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#d1d8dd',
  },

  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: '#f2f4f9',
    borderRadius: 12,
    height: 50,
    width: 50,
    
  },

  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },

  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  networkFeeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  confirmedText: {
    fontSize: 14,
    color: 'grey',
  },

  amountText: {
    fontSize: 16,
    color: 'grey',
    marginRight: 5,
  },
  c1: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 210,
    width: 160,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderColor: '#dcdcdc', 
  },

  c2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    height: 160,
    width: 130,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    backgroundColor: '#fff8f2'
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
    marginRight: 40,
  },
 
  detailText: {
    fontSize: 16,
    textAlign: 'left',
  },
});

export default Account;
