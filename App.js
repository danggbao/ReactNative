import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
import React, { useState } from 'react'
export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    setTaskList([...taskList, task])
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Todo List
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task />
            })
          }
        </ScrollView>
      </View>
    <Form onAddTask={handleAddTask}></Form>
    </View>
  );
}
