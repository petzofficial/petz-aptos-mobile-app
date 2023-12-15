import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import type { TabParamList } from '../types/navigation';
import PeriodSelector from '../components/PeriodSelector';

type TaskStatScreenProps = BottomTabScreenProps<TabParamList, 'TaskStat'>;

const TaskStatScreen = (_props: TaskStatScreenProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState(['Workout', 'ElectroChemistry']);

  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const focusEffectCb = useCallback(() => {
    setIsLoading(true);
    // Add logic to fetch task data based on the selected period
    // You can use a function like getTaskData(selectedPeriod) for this purpose
    setIsLoading(false);
  }, [selectedPeriod]);

  useFocusEffect(focusEffectCb);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#ff6900" barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.header}>
        <PeriodSelector
          periods={[
            { value: 'All', label: 'All' },
            { value: 'Complete', label: 'Complete' },
            { value: 'In Progress', label: 'In Progress' },
            { value: 'Pending', label: 'Pending' },
          ]}
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 0 }}>
        <View style={styles.container}>
          {selectedPeriod === 'All' &&
            tasks.map((task, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // Add logic to navigate to another component based on the task
                  if (task === 'Workout') {
                    navigation.navigate('Task'); // Replace 'WorkoutComponent' with the actual name of your component
                  } else if (task === 'ElectroChemistry') {
                    navigation.navigate('Task'); // Replace 'ElectroChemistryComponent' with the actual name of your component
                  }
                }}
              >
                <View style={styles.taskContainer}>
                  <View style={styles.circle} />
                  <View style={styles.taskTextContainer}>
                    <Text style={styles.taskText}>{task}</Text>
                    <Text style={styles.timeAgoText}>{`${index + 1} Minutes`}</Text>
                  </View>
                  <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>0/1</Text>
                    <Text style={styles.timeAgoText}>{`25 min`}</Text>
                  </View>
                  <Image
                    source={require('../assets/images/play.png')}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          {/* Add your task-related components and logic here */}
        </View>
      </ScrollView>

      {/* "Add new task" button at the bottom of the page */}
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('NewTask');
          }}
        >
          <Text style={styles.buttonText}>+ Add New Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff6900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    margin: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: '#ffffff',
    height: 60,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#bc4e60', // Customize the circle color
    marginHorizontal: 10,
  },
  taskTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  taskText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black'
  },
  timeAgoText: {
    fontSize: 12,
    color: '#555', // Customize the color of the time ago text
  },
  addButtonContainer: {
    marginVertical: 20,
    marginBottom: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fffaf0',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6900',
    borderRadius: 12,
    height: 60,
    width: '90%',
  },
  statusContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingRight: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default TaskStatScreen;
