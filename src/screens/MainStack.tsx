import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity } from 'react-native';

import { useTheme } from '../hooks/useTheme';
import type { StackParamList } from '../types/navigation';
import HeaderButton from '../components/HeaderButton';
import InfoIcon from '../assets/icons/info.svg';
import TermsAndConditions from './TermsAndConditions';
import PomoScreen from './PomoScreen';
import PrivacyPolicy from './PrivacyPolicy';
import HelpAndSupport from './HelpAndSupport';
import ChangeAccount from './ChangeAccount';
import AboutScreen from './AboutScreen';
import MainTabs from './MainTabs';
import Notification from './Notification';
import Description from './Description';
import SettingsScreen from './SettingsScreen';
import NewTask from './NewTask';
import Task from './Task';
import EditTask from './EditTask';
import NTF from './NTF';
import Transaction from './Transaction';
import NFTselect from './NFTselect';
import ErrorScreen from './ErrorScreen';


const Stack = createNativeStackNavigator<StackParamList>();

const MainStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen
  name="ChangeAccount"
  component={ChangeAccount}
  options={{
    headerStyle: {
      backgroundColor: '#fffaf0',
    },
    headerTitleStyle: {
      color: 'black',
    },
    headerShown: false, 
  }}
/>



      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={({ navigation }) => ({
          title: 'PetZ Money',
          headerStyle: {
            backgroundColor: '#ff6347',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerRight: () => {
            return (
              
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Image
                source={require('../assets/images/notification.png')} // Adjust the path as needed
                style={{ width: 24, height: 24, tintColor: '#fff' }}
              />
            </TouchableOpacity>
            );
          },
          headerShown: false,
        })}
      />

<Stack.Screen
  name="About"
  component={AboutScreen}
  options={{
    title: 'About PetZ Money', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="TermsAndConditions"
  component={TermsAndConditions}
  options={{
    title: 'Terms & Conditions', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="PrivacyPolicy"
  component={PrivacyPolicy}
  options={{
    title: 'Privacy Policy', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="HelpAndSupport"
  component={HelpAndSupport}
  options={{
    title: 'Help & Support', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>



<Stack.Screen
  name="NFTselect"
  component={NFTselect}
  options={{
    headerStyle: {
      backgroundColor: '#fffaf0',
    },
    headerTitleStyle: {
      color: 'black',
    },
    headerShown: false, 
  }}
/>

<Stack.Screen
  name="ErrorScreen"
  component={ErrorScreen}
  options={{
    headerStyle: {
      backgroundColor: '#fffaf0',
    },
    headerTitleStyle: {
      color: 'black',
    },
    headerShown: false, 
  }}
/>

<Stack.Screen
  name="Notification"
  component={Notification}
  options={{
    title: 'Notification', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="Description"
  component={Description}
  options={{
    title: 'Notification', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="SettingScreen"
  component={SettingsScreen}
  options={{
    title: 'Settings', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="NewTask"
  component={NewTask}
  options={{
    title: 'New Task', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="EditTask"
  component={EditTask}
  options={{
    title: 'Edit Task', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="Task"
  component={Task}
  options={{
    title: 'Task', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="NTF"
  component={NTF}
  options={{
    title: 'NTF', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>

<Stack.Screen
  name="Transaction"
  component={Transaction}
  options={{
    title: 'Transaction', 
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      color: 'black',
    },
  }}
/>




    </Stack.Navigator>
  );
};

export default MainStack;