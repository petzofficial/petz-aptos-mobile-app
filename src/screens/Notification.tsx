import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';

const Notification: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const calculateTimeDifference = (timestamp: number) => {
    const now = new Date();
    const notificationTime = new Date(timestamp);
    const difference = now.getTime() - notificationTime.getTime();
    const minutes = Math.floor(difference / 60000);
    return `${minutes}m ago`;
  };

  const handleNotificationPress = (notificationId: number) => {
    navigation.navigate('Description', { notificationId });
  };
  

  const notifications = [
    { id: 1, heading: 'Lorem ipsum dolor sit amet', text: 'Tap to see the message', timestamp: Date.now() - 120000, icon: require('../assets/images/msg.png') },
    { id: 2, heading: 'Lorem ipsum dolor sit amet consectetur. Ultricies ravida.', text: 'Tap to see the detai shipping', timestamp: Date.now() - 120000, icon: require('../assets/images/ship.png') },
    { id: 3, heading: 'Lorem ipsum dolor sit amet consectetur. Volutpat varius.', text: 'Lets try the feature we provide', timestamp: Date.now() - 120000, icon: require('../assets/images/msg.png') },
    { id: 4, heading: 'Lorem ipsum dolor sit amet consectetur. Id quam.', text: 'For all transaction without requirements', timestamp: Date.now() - 600000, icon: require('../assets/images/money.png') },
    // Add more notifications with your desired text and icon paths
  ];

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.recentButton}>
            <Text style={styles.recentButtonText}>Recent</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>4</Text>
            </View>
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity>
          <Text style={[styles.optionText, { color: theme.colors.primary }]}>Clear</Text>
        </TouchableOpacity>
      </View>
  
      <View style={styles.notificationContainer}>
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            onPress={() => handleNotificationPress(notification.id)}
            style={styles.notificationItem}
          >
            <View style={styles.iconCircle}>
              <Image
                source={notification.icon}
                style={styles.icon}
              />
            </View>
            
            <View style={styles.notificationContent}>
              <View style={styles.notificationRow}>
                <Text style={[styles.headingText, { color: theme.colors.headingText }]}>
                  {notification.heading}
                </Text>
                <Text style={[styles.notificationTimestamp, { color: theme.colors.text }]}>
                  {calculateTimeDifference(notification.timestamp)}
                </Text>
              </View>
              <Text style={[styles.notificationText, { color: "grey" }]}>
                {notification.text}
              </Text>
              <Text style={styles.notificationSeparator}></Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },

  headingText: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
    width: "80%"
  },

  optionText: {
    fontSize: 16,
    fontWeight: '600',
  },

  notificationContainer: {
    padding: 16,
  },

  recentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  recentButtonText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },

  notificationBadge: {
    backgroundColor: 'red',
    borderRadius: 15, 
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  notificationText: {
    fontSize: 14,
    marginBottom: 8,
  },

  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  notificationTimestamp: {
    fontSize: 12,
  },

  notificationSeparator: {
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    marginBottom: 8,
  },

  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#ff6500',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 30,
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff'
    // Add any necessary styles for your icon
  },

  notificationContent: {
    flex: 1,
    // Add any necessary styles for your notification content
  },
});

export default Notification;
