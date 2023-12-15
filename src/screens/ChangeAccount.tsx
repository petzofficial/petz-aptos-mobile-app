// HelpAndSupport.tsx

import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';



const ChangeAccount: React.FC = () => {
    const theme = useTheme();
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    const navigation = useNavigation();

    

      const handleWalletPress = (walletName: string) => {
        setSelectedWallet(walletName);
        navigation.navigate('NFTselect');
      };
    
      
  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
        

        <Text style={[{ color: theme.colors.text, }, styles.title]}>
          Connect Account
        </Text>

        <Text style={[{ color: theme.colors.text, }, styles.paragraph]}>
          Start with connecting with one of the following wallet providers
          or create a new wallet entirely
        </Text>
      </View>
      <View style={styles.container}>
        

      <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: '#ffffff', marginTop: 10, borderColor: selectedWallet === 'Petra Wallet' ? '#ff6500' : '#d3d3d3' },
          ]}
          onPress={() => handleWalletPress('Petra Wallet')}
        >
          <Image source={require('../assets/images/petra.png')} style={styles.button1Icon} />
          <Text style={styles.buttonText}>Petra Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: '#ffffff', marginTop: 10, borderColor: selectedWallet === 'Pontem Wallet' ? '#ff4500' : '#d3d3d3' },
          ]}
          onPress={() => handleWalletPress('Pontem Wallet')}
        >
          <Image source={require('../assets/images/pontem.png')} style={styles.button2Icon} />
          <Text style={styles.buttonText}>Pontem Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: '#ffffff', marginTop: 10, borderColor: selectedWallet === 'Trust Wallet' ? '#ff4500' : '#d3d3d3' },
          ]}
          onPress={() => handleWalletPress('Trust Wallet')}
        >
          <Image source={require('../assets/images/trust.png')} style={styles.button3Icon} />
          <Text style={styles.buttonText}>Trust Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: '#ffffff', marginTop: 10, borderColor: selectedWallet === 'Martiam Wallet' ? '#ff4500' : '#d3d3d3' },
          ]}
          onPress={() => handleWalletPress('Martiam Wallet')}
        >
          <Image source={require('../assets/images/martiam.png')} style={styles.button4Icon} />
          <Text style={styles.buttonText}>Martiam Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: '#ffffff', marginTop: 10, borderColor: selectedWallet === 'Blocto Wallet' ? '#ff4500' : '#d3d3d3' },
          ]}
          onPress={() => handleWalletPress('Blocto Wallet')}
        >
          <Image source={require('../assets/images/blocto.png')} style={styles.button5Icon} />
          <Text style={styles.buttonText}>Blocto Wallet</Text>
        </TouchableOpacity>

        
        <Text style={{ color: theme.colors.text, marginTop: 20, textAlign: 'center' }}>
        By connecting to our platform, I agree to the{' '}
        <Text style={{ color: '#ff6500', textDecorationLine: 'underline' }}>terms and conditions</Text> and{' '}
        <Text style={{ color: '#ff6500', textDecorationLine: 'underline' }}>privacy policy</Text>
      </Text>

      <Text style={[{ color: theme.colors.text, textAlign: 'center' }, styles.paragraph2]}>
      We do not own your private keys and cannot access
your funds without your confirmation
        </Text>


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


  title: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 20,
    color: '#ff6500',
  },

  paragraph: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 16,
    color: '#a9a9a9',
  },

  paragraph2: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 100,
    color: '#a9a9a9',
  },

  

  button: {
    flexDirection: 'row',
    alignItems: 'center',  
    justifyContent: 'flex-start',  
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: '#d3d3d3',
    height: 65,
    marginBottom: 10,
  },


  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 20,
  },

  button1Icon: {
    width: 28,
    height: 28,
    marginLeft: 22,
  },
  button2Icon: {
    width: 24,
    height: 24,
    marginLeft: 25,
  },
  button3Icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  button4Icon: {
    width: 24,
    height: 24,
    marginLeft: 25,
  },
  button5Icon: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
});

export default ChangeAccount;
