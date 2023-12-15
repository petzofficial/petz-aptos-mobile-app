import React, { useState } from 'react';
import { View, Text, ScrollView ,TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { color } from 'react-native-reanimated';

const NewTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('medium');
  const [taskDescription, setTaskDescription] = useState('');

  const handlePriorityChange = (priority: string) => {
    setTaskPriority(priority);
  };

  const handleSaveTask = () => {
    // Add your logic here to save the task
    console.log('Task Name:', taskName);
    console.log('Task Priority:', taskPriority);
    console.log('Task Description:', taskDescription);
    // Add your logic to save the task to your data source
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 0 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    <View style={styles.container}>
      <Text style={styles.label}>Task name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />

      <Text style={styles.label}>Task priority</Text>
      <View style={styles.priorityContainer}>
        <PriorityButton
          label="High"
          isSelected={taskPriority === 'high'}
          onPress={() => handlePriorityChange('high')}
        />
        <PriorityButton
          label="Medium"
          isSelected={taskPriority === 'medium'}
          onPress={() => handlePriorityChange('medium')}
        />
        <PriorityButton
          label="Low"
          isSelected={taskPriority === 'low'}
          onPress={() => handlePriorityChange('low')}
        />
      </View>

      <Text style={styles.label}>Description</Text>
      <TextInput
  style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
  placeholder="Enter task description"
  multiline
  value={taskDescription}
  onChangeText={(text) => setTaskDescription(text)}
/>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveTask}
      >
        <Text style={styles.saveButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const PriorityButton = ({ label, isSelected, onPress }) => (
  <TouchableOpacity
    style={[
      styles.priorityButton,
      { backgroundColor: isSelected ? '#ff6900' : '#ffffff' },
    ]}
    onPress={onPress}
  >
    <Text style={[styles.priorityButtonText, {color: isSelected ? 'white' : 'black'}]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#d1d8dd',
    padding: 8,
    marginBottom: 40,
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  priorityButton: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d8dd',
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
  },
  priorityButtonText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#ff6900',
    padding: 20,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 100,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
});

export default NewTask;