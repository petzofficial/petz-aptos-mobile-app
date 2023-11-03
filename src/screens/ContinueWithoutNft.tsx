import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/Button';

const ContinueWithoutNft = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/Nodata.png')}
        style={styles.img}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.subContainer}>
          <Text style={[{ color: theme.colors.primaryDarken }, styles.title]}>OOPS</Text>
          <Text style={[{ color: theme.colors.textOff }, styles.noData]}>No data found</Text>
        </View>
        <View style={styles.footer}>
          <Button btntext='Buy PetZ NFT' />
          <Pressable style={styles.Nft}>
            <Text style={[{ color: theme.colors.MainColor }, styles.title]}>Continue without NFT</Text>
          </Pressable>
        </View>
        <Text style={[{ color: theme.colors.textOff }, styles.footerTxt]}>
          Don't have petz NFT? Buy it from here https://nftrade.com/
        </Text>
      </ScrollView>
    </View>
  );
};

export default ContinueWithoutNft;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  img: {
    width: '70%',
    height: '30%',
    alignSelf: 'center',
    marginTop: 50,
  },
  scrollView: {
    flex: 1,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  noData: {
    marginTop: 10,
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height:320
    
  },
  Nft: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#F9692C',
  },
  title: {
    fontWeight: '700',
  },
  footerTxt: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
