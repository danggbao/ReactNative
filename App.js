import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={textStyles.header}>
          Todo List
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={textStyles.squareText}>01</Text>
              </View>
              <View style={textStyles.contentText}>
                <Text>Rua chen</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  item : {
    flexDirection : 'row',
    backgroundColor : '#ffffff',
    paddingVertical : 5,
    paddingHorizontal : 20,
    marginBottom : 10,
    marginHorizontal : 8,
    borderRadius : 8,
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
  },
  squareText : {
    color : '#fff',
    fontWeight : '700'
  },
  contentText : {
    width : '80%',
    fontSize : 16,
  }
});