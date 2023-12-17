import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { TabParamList } from '../types/navigation';
import { useTheme } from '../hooks/useTheme';
import TimerIcon from '../assets/icons/timer.svg';
import InsightsIcon from '../assets/icons/insights.svg';
import SettingsIcon from '../assets/icons/settings.svg';

import PomoScreen from './PomoScreen';
import SettingsScreen from './SettingsScreen';
import StatScreen from './StatScreen';
import TaskStatScreen from './TaskStatScreen';
import Account from './Account';

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const MainTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Pomo"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f26400',
        },
        headerTitleStyle: {
          color: 'white',
        },
        tabBarActiveTintColor: '#ff6900',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          paddingBottom: 4,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
            <Image
              source={require('../assets/images/setting.png')}
              style={{ width: 24, height: 24, tintColor: '#fff', marginLeft: 20 }}
            />
          </TouchableOpacity>
        ),
        
        headerRight: () => {
          return (
            
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              source={require('../assets/images/notification.png')} // Adjust the path as needed
              style={{ width: 24, height: 24, tintColor: '#fff', marginRight: 20, }}
            />
          </TouchableOpacity>
          );
        },
      })}
      >
 

  


        
 <Tab.Screen
  name="Pomo"
  component={PomoScreen}
  options={({ route, navigation }) => ({  // Include navigation in the options
    headerTitle: 'PetZ Money',
    tabBarLabel: 'Home',
    
    tabBarIcon: ({ color, size }) => (
      <Image
        source={require('../assets/images/home.png')}
        style={[styles.Icon, { tintColor: color }]}
      />
    ),
  })}
/>

<Tab.Screen
        name="TaskStatScreen"
        component={TaskStatScreen}
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Image
        source={require('../assets/images/task.png')}
        style={[styles.Icon, { tintColor: color }]}
      />
          ),
        }}
      />



      <Tab.Screen
        name="Stat"
        component={StatScreen}
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color, size }) => (
            <Image
        source={require('../assets/images/statistics.png')}
        style={[styles.Icon, { tintColor: color }]}
      />
          ),
        }}
      />

<Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Image
        source={require('../assets/images/account.png')}
        style={[styles.Icon, { tintColor: color }]}
      />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export const styles = StyleSheet.create({
  Icon: {
    width: 24,
    height: 24,
  },
});

export default MainTabs;
