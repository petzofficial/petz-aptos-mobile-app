import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import PlayerActions from '../components/PlayerActions';
import Countdown from '../components/Countdown';
import PomoModule from '../native/PomoModule';
import type { TabParamList, StackParamList } from '../types/navigation';
import { useTheme } from '../hooks/useTheme';
import { usePomoTimer } from '../hooks/usePomoTimer';
import { Orientation, useOrientation } from '../hooks/useOrientation';
import HeaderButton from '../components/HeaderButton';
import { useNavigation } from '@react-navigation/native';
import InfoIcon from '../assets/icons/info.svg';
import Notifi from '../assets/icons/alert-triangle.svg';
import * as Progress from 'react-native-progress';
import Card from '../components/Card';

type PomoScreenProps = BottomTabScreenProps<TabParamList, 'Pomo'>;

const HomeScreen = (_props: PomoScreenProps) => {
  const theme = useTheme();
  const orientation = useOrientation();
  // const navigation = useNavigation();
  const navigation =
    useNavigation<BottomTabScreenProps<TabParamList, 'Pomo'>>();
  const { running, time, percent, cycle, cycleCount, cycleDuration, state } =
    usePomoTimer();

  const [activeCard, setActiveCard] = useState(1);

  const handleCardPress = (cardIndex) => {
    setActiveCard(cardIndex);
  };
  return (
    <View style={{flex:1}}>
     <View style={{flex:1}}>
     <HeaderButton onPress={() => navigation.navigate('About')}>
        <View style={styles.headerContainer}>
          <View style={styles.subContainer}>
            {/* <Notifi color={theme.colors.notification} width={24} height={24}  /> */}
            <Text></Text>
            <Text style={styles.TextColor}>Account</Text>
            <InfoIcon color={theme.colors.text} width={24} height={24} />
          </View>
          <View style={styles.flexView}>
            <View style={styles.boxWhite}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../assets/icons/pgt-removebg-preview.png')}
                  style={{ width: 24, height: 24, marginLeft: 4 }}
                />

                <Text
                  style={[
                    styles.TextColor,
                    { color: 'orange', fontSize: 16, marginLeft: 4 },
                  ]}>
                  100 APT
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 6,
                }}>
                <Image
                  source={require('../assets/icons/pst-removebg-preview.png')}
                  style={{ width: 24, height: 24 }}
                />

                <Text
                  style={[
                    styles.TextColor,
                    { color: 'orange', fontSize: 16, marginLeft: 4 },
                  ]}>
                  100 APT
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 6,
                }}>
                <Image
                  source={require('../assets/icons/pgt-removebg-preview.png')}
                  style={{ width: 24, height: 24 }}
                />

                <Text
                  style={[
                    styles.TextColor,
                    { color: 'orange', fontSize: 16, marginLeft: 4 },
                  ]}>
                  100 APT
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.boxView}>
          <Text style={[styles.TextColor, { color: 'orange', fontSize: 16 }]}>
            Level
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <Progress.Bar
                progress={0.6}
                width={270}
                color="#2AAA8A"
                unfilledColor="#D3D3D3"
                borderWidth={0}
              />
            </View>
            <Text style={{ marginLeft: 10 }}>60%</Text>
          </View>

          <Text
            style={[
              styles.TextColor,
              { color: 'orange', fontSize: 16, marginTop: 10 },
            ]}>
            Energy
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <Progress.Bar
                progress={0.8}
                width={270}
                color="blue"
                unfilledColor="#D3D3D3"
                borderWidth={0}
              />
            </View>
            <Text style={{ marginLeft: 10 }}>80%</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Text style={[styles.TextColor, { color: 'black', fontSize: 16 }]}>
            PetZ Net CollEction
          </Text>
          <View style={styles.boxView1}>
            <Image
              source={require('../assets/icons/cart.png')}
              style={{ width: 24, height: 24 }}
            />
          </View>
        </View>

      </HeaderButton>
     </View>
      
        <ScrollView style={{flex:1}}>
        <View style={styles.card}>
          <Card
            txt1="#1273"
            txt2="Pitbull"
            img={require('../assets/icons/2.png')}
            isActive={activeCard === 0}
            onPress={() => navigation.navigate('Tasks')}
          />
          <Card
            txt1="#1273"
            txt2="Pitbull"
            img={require('../assets/icons/3.png')}
            isActive={activeCard === 1}
            onPress={() => handleCardPress(1)}
          />
          <Card
            txt1="#1273"
            txt2="Pitbull"
            img={require('../assets/icons/2.png')}
            isActive={activeCard === 2}
            onPress={() => navigation.navigate('NftScreen')}
          />
          <Card
            txt1="#1273"
            txt2="Pitbull"
            img={require('../assets/icons/3.png')}
            isActive={activeCard === 3}
            onPress={() => navigation.navigate('NftSelling')}
          />
          <Card
            txt1="#1273"
            txt2="Pitbull"
            img={require('../assets/icons/3.png')}
            isActive={activeCard === 3}
            onPress={() => navigation.navigate('Feedback')}
          />
          <Card
            txt1="#1273"
            txt2="Pitbull"
            img={require('../assets/icons/3.png')}
            isActive={activeCard === 3}
            onPress={() => navigation.navigate('HelpScreen')}
          />
          
           </View>
        </ScrollView>
     
    </View>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  countdown: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerPortrait: {
    flexDirection: 'column',
    marginVertical: 48,
  },

  containerLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },

  cycleText: {
    marginTop: 16,
    fontSize: 14,
  },

  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  flexView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  headerContainer: {
    backgroundColor: '#F9692C',
    height: 150,
    paddingVertical: 30,
  },
  boxWhite: {
    backgroundColor: 'white',
    height: 35,
    flexDirection: 'row',

    borderRadius: 10,

    width: '100%',
    paddingRight: 30,
    justifyContent: 'space-around',
  },
  TextColor: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  boxView: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    //  height:100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 20,
    borderRadius: 10,
  },
  boxView1: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    //  height:100,
    width: 110,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
});

export default HomeScreen;
