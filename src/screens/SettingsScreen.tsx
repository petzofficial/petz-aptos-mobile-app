import { useCallback, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, StatusBar, TouchableOpacity, } from 'react-native';
import { useForm } from 'react-hook-form';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import type { TabParamList } from '../types/navigation';
import Switcher from '../components/Switcher';
import NumberInput from '../components/NumberInput';
import SettingsModule from '../native/SettingsModule';
import { useTheme } from '../hooks/useTheme';

type SettingsScreenProps = BottomTabScreenProps<TabParamList, 'Settings'>;

type SettingsFormData = {
  autoStart: boolean;
  focusDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  cycleCount: number;
};


const SettingsScreen = (_props: SettingsScreenProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [saving, setSaving] = useState(false);

  const handleSaveTask = () => {
    navigation.navigate('Main');
  };
  

  const { control, setValue, handleSubmit } = useForm<SettingsFormData>({
    defaultValues: {
      autoStart: false,
      focusDuration: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15,
      cycleCount: 4,
    },
  });

  const focusEffectCb = useCallback(() => {
    SettingsModule.getAll().then((settings) => {
      setValue('autoStart', settings.autoStart);
      setValue('focusDuration', settings.focusDuration / 60);
      setValue('shortBreakDuration', settings.shortBreakDuration / 60);
      setValue('longBreakDuration', settings.longBreakDuration / 60);
      setValue('cycleCount', settings.cycleCount);
    });
  }, [setValue]);

  const onSave = useCallback((data: SettingsFormData) => {
    setSaving(true);

    SettingsModule.setAll({
      autoStart: data.autoStart,
      focusDuration: data.focusDuration * 60,
      shortBreakDuration: data.shortBreakDuration * 60,
      longBreakDuration: data.longBreakDuration * 60,
      cycleCount: data.cycleCount,
    }).then(() => setSaving(false));
  }, []);

  useFocusEffect(focusEffectCb);

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
        <Switcher
          control={control}
          name="autoStart"
          title="Auto start"
          subtitle="Automatically start next focus or break after previous one ends"
        />

        <NumberInput
          control={control}
          name="focusDuration"
          title="Focus (min)"
          subtitle="Duration of the focus period in minutes"
          rules={{
            required: 'Focus duration is required',
            min: {
              value: 5,
              message: 'Minimal focus duration is 5 minutes',
            },
            max: {
              value: 180,
              message: 'Maximum focus duration is 180 minutes',
            },
          }}
        />

        <NumberInput
          control={control}
          name="shortBreakDuration"
          title="Short break (min)"
          subtitle="Duration of the short break between pomodoros in minutes"
          rules={{
            required: 'Short break duration is required',
            min: {
              value: 1,
              message: 'Minimal short break duration is 1 minute',
            },
            max: {
              value: 60,
              message: 'Maximum short break duration is 60 minutes',
            },
          }}
        />

        <NumberInput
          control={control}
          name="longBreakDuration"
          title="Long break (min)"
          subtitle="Duration of the long break between cycles in minutes"
          rules={{
            required: 'Long break duration is required',
            min: {
              value: 1,
              message: 'Minimal long break duration is 1 minute',
            },
            max: {
              value: 60,
              message: 'Maximum long break duration is 60 minutes',
            },
          }}
        />

        <NumberInput
          control={control}
          name="cycleCount"
          title="Cycle count"
          subtitle="Number of cycles to work before long break"
          rules={{
            required: 'Cycle count is required',
            min: {
              value: 1,
              message: 'Minimal cycle count is 1 minute',
            },
            max: {
              value: 60,
              message: 'Maximum cycle count is 60 minutes',
            },
          }}
        />

        <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('About')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/about.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>About</Text>
            </View>
            <View style={styles.amountContainer}>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: 'black'}]} />
            </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/terms.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>Terms & Conditions</Text>
            </View>
            <View style={styles.amountContainer}>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: 'black'}]} />
            </View>
          </TouchableOpacity>
        
        <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('PrivacyPolicy')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/privacy.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>Privacy Policy</Text>
            </View>
            <View style={styles.amountContainer}>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: 'black'}]} />
            </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('HelpAndSupport')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/help.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>Help & Support</Text>
            </View>
            <View style={styles.amountContainer}>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: 'black'}]} />
            </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.networkFeeContainer}
          onPress={() => navigation.navigate('ChangeAccount')}>
            <View style={styles.iconContainer}>
              <Image source={require('../assets/images/changeaccount.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.networkFeeText}>Change Account</Text>
            </View>
            <View style={styles.amountContainer}>
              <Image source={require('../assets/images/arrow.png')} style={[styles.icon, {tintColor: 'black'}]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveTask}
      >
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginVertical: 16,
    marginHorizontal: 20,
  },
  about: {
    marginTop: 16,
    marginLeft: 8,
    borderRadius: 8,
    height: 48,
    justifyContent: 'flex-start', // Align items to the left
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24, // Adjust the width and height based on your icon's size
    height: 24,
  },
  save: {
    marginTop: 32,
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#ff4500', // Change this to your desired color
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
    height: 50,
    width: '100%',
    marginTop: 20,
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
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
    fontWeight: '400',
    color: 'black',
  },
  saveButton: {
    backgroundColor: '#ff6500',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SettingsScreen;
