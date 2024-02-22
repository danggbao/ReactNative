import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>
          Todo List
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.items}>
          <Task></Task>
        </ScrollView>
      </View>
    <Form></Form>
    </View>
  );
}
