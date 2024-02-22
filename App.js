import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Task from './components/Task';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={textStyles.header}>
          Todo List
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.items}>
          <Task></Task>
        </ScrollView>
      </View>
      <View style={styles.footer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#eaf3fd',
  },
  header : {
    flex : 1,
    paddingTop : 20,
    paddingHorizontal : 10
  },
  body : {
    flex: 8,
  },
  items : {
    marginVertical : 5,
  },
});

const textStyles = StyleSheet.create({
  header : {
    fontSize : 26,
    color : '#58cdee',
    fontWeight : 'bold' 
  },
})