import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const HelpAndSupport = () => {
  const theme = useTheme();

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
        {/* Image at the top */}
        <Image
          source={require('../assets/images/support.png')} // Replace 'your_image_filename' with the actual image filename
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={[{ color: theme.colors.text, textAlign: 'center' }, styles.title]}>
          How can we help you?
        </Text>

        <Text style={[{ color: theme.colors.text, textAlign: 'center' }, styles.paragraph]}>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Tincidunt vitae sed in tellus
        feugiat adipiscing a, sit.
        </Text>
        
      </View>
      <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#ff6500' }]}>
          <Image source={require('../assets/images/message.png')} style={[styles.buttonIcon, { tintColor: '#fff' }]} />
          <Text style={styles.buttonText}>Contact Via Message</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button2, { backgroundColor: '#ffffff', marginTop: 10 }]}>
          <Image source={require('../assets/images/email.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText2}>Contact Via Email</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 20,
  },

  image: {
    width: '90%', 
    height: 250,  
    resizeMode: 'contain', 
    marginTop: 50,
    alignSelf: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 16,
    color: "#ff6500",
  },

  paragraph: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 16,
    color: '#a9a9a9',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 30,
  },

  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 1, // Add border width
    borderColor: 'grey', // Add border color
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
  },

  buttonText2: {
    color: 'black',
    fontSize: 18,
    marginLeft: 8,
  },

  buttonIcon: {
    width: 24,
    height: 24,
  },
});

export default HelpAndSupport;