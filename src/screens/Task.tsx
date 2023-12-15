import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Task = () => {
    const navigation = useNavigation();
  const [taskPriority, setTaskPriority] = useState('medium');

  const handlePriorityChange = (priority: string) => {
    setTaskPriority(priority);
  };

  const handleSaveTask = () => {
    // Add your logic here to save the task
    console.log('Task Priority:', taskPriority);
    // Add your logic to save the task to your data source
  };

  const handleEditTask = () => {
    navigation.navigate('EditTask');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 0 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.detailRow}>
          <Text style={styles.headerLeft}>Status</Text>
          <Text style={styles.headerRight}>In Progess</Text>
        </View>
        <LineSeparator />
        <View style={styles.priorityContainer}>
        <PriorityButton
          isSelected={taskPriority === 'high'}
          onPress={() => handlePriorityChange('high')}
          iconSource={require('../assets/images/stop.png')}
        />
        <PriorityButton
          isSelected={taskPriority === 'medium'}
          onPress={() => handlePriorityChange('medium')}
          iconSource={require('../assets/images/playy.png')}
        />
        <PriorityButton
          isSelected={taskPriority === 'low'}
          onPress={() => handlePriorityChange('low')}
          iconSource={require('../assets/images/reset.png')}
        />
      </View>
      <View style={styles.taskDetails}>
      <Text style={styles.Label}>Information</Text>
      </View>
      <View style={styles.taskDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Task Name</Text>
          <Text style={styles.detailText}>Work</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Task Description</Text>
          <Text style={styles.detailText}>Task Description</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailText}>19 Aug 2020</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Task Priority</Text>
          <Text style={styles.detailText}>Low</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Cycle Count</Text>
          <Text style={styles.detailText}>2</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Session</Text>
          <Text style={styles.detailText}>1/4</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Total Time Spent</Text>
          <Text style={styles.detailText}>30 minutes</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Fee in APT</Text>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/images/apt.png')} style={styles.icon2} />
            <Text style={styles.detailText2}>100 APT</Text>
          </View>
      </View>

      <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>PGT Reward</Text>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/images/pgt.png')} style={styles.icon2} />
            <Text style={styles.detailText2}>100 PGT</Text>
          </View>
      </View>

      <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>PST Reward</Text>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/images/pst.png')} style={styles.icon2} />
            <Text style={styles.detailText2}>100 PST</Text>
          </View>
      </View>

      <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Transection</Text>
          <TouchableOpacity onPress={() => navigation.navigate('YourTargetComponent')}>
          <Text style={[styles.detailText2, {textDecorationLine: 'underline'}]}>View</Text>
          </TouchableOpacity>
      </View>


      </View>

      <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#ff6900', borderColor: '#ff6900'}]} onPress={handleSaveTask}>
            <Text style={[styles.buttonText, {color: '#fff'}]}>Mark As Complete</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, {borderColor: '#ff6900'}]} onPress={handleEditTask}>
            <Text style={[styles.buttonText, {color: '#ff6900'}]}>Edit Task</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, {borderColor: '#b70b0b'}]} onPress={handleSaveTask}>
            <Text style={[styles.buttonText, {color: '#b70b0b'}]}>Delete Task</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
};
 
const LineSeparator = () => {
    return <View style={[styles.lineSeparator, { borderBottomColor: "#a9a9a9" }]} />;
  };
  
  const PriorityButton = ({ isSelected, onPress, iconSource }) => (
    <TouchableOpacity
      style={[
        styles.priorityButton,
        { backgroundColor: isSelected ? '#ff6900' : '#ffffff' },
      ]}
      onPress={onPress}
    >
      {iconSource && (
        <Image
          source={iconSource}
          style={[
            styles.priorityButtonIcon,
            { tintColor: isSelected ? '#fff' : '#ff6900' },
          ]}
        />
      )}
    </TouchableOpacity>
  );
  

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  priorityButtonIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon2: {
    width: 24, // Adjust the width and height as needed
    height: 24,
    resizeMode: 'contain',
    marginRight: 8,
  },
  
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  taskDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerLeft: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    marginRight: 8,
  },
  headerRight: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'right',
    color: '#ff6900'
  },
  detailLabel: {
    fontSize: 16,
    textAlign: 'left',
    marginRight: 8,
  },
  Label: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
    marginRight: 8,
  },
  detailText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
  },
  detailText2: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    color: '#ff6900',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  lineSeparator: {
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  button: {
    padding: 20,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
  },
  
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginBottom: 40,
  },
  priorityButton: {
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff6900',
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
  },
  priorityButtonText: {
    fontSize: 16,
  },
});

export default Task;