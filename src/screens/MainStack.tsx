import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from '../hooks/useTheme';
import type { StackParamList } from '../types/navigation';
import HeaderButton from '../components/HeaderButton';
import InfoIcon from '../assets/icons/info.svg';

import AboutScreen from './AboutScreen';
import MainTabs from './MainTabs';
import { View,StyleSheet } from 'react-native';
import EditTask from './EditTask';
import NftScreen from './NftScreen';
import NewTask from './NewTaskScreen';
import NftSelling from './NftSellingScreen';
import ContinueWithoutNft from './ContinueWithoutNft';
import Tasks from './Tasks';
import SplashScreen from './SplashScreen';
import HelpScreen from './HelpScreen';
import Feedback from './Feedback';

const Stack = createNativeStackNavigator<StackParamList>();

const MainStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
    screenOptions={{
     headerShown:false
    }}>
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
    
    />
  <Stack.Screen
      name="MainTabs"
      component={MainTabs}
    
    />
    <Stack.Screen
      name="About"
      component={AboutScreen}
      options={{ title: 'About' }}
    />
    <Stack.Screen
      name="EditTask"
      component={EditTask}
    
    />
     <Stack.Screen
      name="NftScreen"
      component={NftScreen}
    
    />
      <Stack.Screen
      name="NewTask"
      component={NewTask}
    
    />
    <Stack.Screen
      name="NftSelling"
      component={NftSelling}
    
    />
     <Stack.Screen
      name="ContinueWithoutNft"
      component={ContinueWithoutNft}
    
    />
     <Stack.Screen
      name="Tasks"
      component={Tasks}
    
    />
     <Stack.Screen
      name="HelpScreen"
      component={HelpScreen}
    
    />
         <Stack.Screen
      name="Feedback"
      component={Feedback}
    
    />
     
  </Stack.Navigator>
  );
};

export default MainStack;
