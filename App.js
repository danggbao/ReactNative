import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={textStyles.header}>
          Todo List
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text>01</Text>
          </View>
          <View>
            <Text>Abc</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text>02</Text>
          </View>
          <View>
            <Text>Def</Text>
          </View>
        </View>
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
    flex: 1
  },
  item : {
    flexDirection : 'row',
    backgroundColor : '#ffffff',
    paddingVertical : 3,
    paddingHorizontal : 20,
    marginBottom : 15,
    borderRadius : 18,
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  square : {
    width : 48,
    height : 36,
    borderRadius : 10,
    backgroundColor : '#34a9e6',
    justifyContent : 'center',
    alignItems : 'center'
  }
});

const textStyles = StyleSheet.create({
  header : {
    fontSize : 26,
    color : '#58cdee',
    fontWeight : 'bold'
  }
});