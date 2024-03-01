import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
import React, { useState } from 'react'
export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    setTaskList([...taskList, task])
  }
  const handleDeleteTask = (index) => {
    Alert.alert('Thông báo!!!', 'Bạn có chắc chắn muốn xóa?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        let taskListTmp = [...taskList];
        taskListTmp.splice(index, 1);
        setTaskList(taskListTmp);
      }},
    ]);
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
              return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
    <Form onAddTask={handleAddTask}></Form>
    </View>
  );
}
