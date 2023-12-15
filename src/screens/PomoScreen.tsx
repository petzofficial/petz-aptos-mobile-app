import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import * as Progress from 'react-native-progress';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import PlayerActions from '../components/PlayerActions';
import Countdown from '../components/Countdown';
import PomoModule from '../native/PomoModule';
import type { TabParamList } from '../types/navigation';
import { useTheme } from '../hooks/useTheme';
import { usePomoTimer } from '../hooks/usePomoTimer';
import { Orientation, useOrientation } from '../hooks/useOrientation';

type PomoScreenProps = BottomTabScreenProps<TabParamList, 'Pomo'>;

const PomoScreen = (_props: PomoScreenProps) => {
  const theme = useTheme();
  const orientation = useOrientation();

  const { running, time, percent, cycle, cycleCount, cycleDuration, state } =
    usePomoTimer();

    const Levelprogress = 0.6; // Set the progress to 60%
  const Levelpercentage = Math.round(Levelprogress * 100);

  const Energyprogress = 0.8; // Set the progress to 30% for the second progress bar
const Energypercentage = Math.round(Energyprogress * 100);



  return (
    
       <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#ff6900" barStyle="dark-content" />

      {/* Header Section */}
      <View style={styles.header}>
      <View style={styles.h1}>
        {/* First Item */}
        <View style={styles.rowItem}>
          <Image
            source={require('../assets/images/apt.png')} // Replace with the correct path to your first image
            style={styles.image}
          />
          <Text style={styles.text}>100 APT</Text>
        </View>

        {/* Second Item */}
        <View style={styles.rowItem}>
          <Image
            source={require('../assets/images/pgt.png')} // Replace with the correct path to your second image
            style={styles.image}
          />
          <Text style={styles.text}>100 PGT</Text>
        </View>

        {/* Third Item */}
        <View style={styles.rowItem}>
          <Image
            source={require('../assets/images/pst.png')} // Replace with the correct path to your third image
            style={styles.image}
          />
          <Text style={styles.text}>100 PST</Text>
        </View>
      </View>
    </View>
      <ScrollView
      style={{ backgroundColor: '#ffffff', paddingHorizontal: 0 }}
    >

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

<TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            // Add your button onPress logic here
          }}
        >
          <Text style={styles.buttonText}>Choose Task</Text>
          <Image
            source={require('../assets/images/down-arrow.png')} // Update with your actual icon file path
            style={{ width: 25, height: 25, marginRight: 8 }} // Adjust the width and height as needed
          />
          
        </TouchableOpacity>


      {cycleDuration !== 0 && (
        <View
          style={[
            styles.container,
            orientation === Orientation.PORTRAIT
              ? styles.containerPortrait
              : styles.containerLandscape,
          ]}>
          <View style={styles.countdown}>
            <Countdown time={time} percent={percent} state={state} />

            <Text style={[{ color: theme.colors.text }, styles.cycleText]}>
              {cycle}/{cycleCount}
            </Text>
          </View>

          <PlayerActions
            playing={running}
            onPlay={() => PomoModule.play()}
            onPause={() => PomoModule.pause()}
            onStop={() => PomoModule.stop()}
            onReset={() => PomoModule.reset()}
          />
        </View>
      )}

<View style={styles.bottomImageContainer}>
          <Image
            source={require('../assets/images/homepet.png')} // Update with the actual path to your image
            style={{ width: '100%', height: 250 }} // Adjust width and height as needed
          />
        </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  image: {
    width: 28,
    height: 28, 
    resizeMode: 'contain', 
  },
  text: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '600',
    color: "#ff6500"
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d1d8dd',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 30,
    
  },

  countdown: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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

  bottomImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items to the start and end of the container
    backgroundColor: '#ffffff', // Customize the background color of the button
    borderColor: '#d1d8dd',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 20,
    height: 60
  },

  buttonText: {
    fontSize: 16,
    color: '#a9a9a9', 
    marginLeft: 10,
  },
  cycleText: {
    marginTop: 16,
    fontSize: 14,
  },
});

export default PomoScreen;