import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.topText}>
          Top
        </Text>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.bottomLeftText}>
            Bottom Left
          </Text>
        </View>
        <View style={styles.bottomRight}>
          <View style={styles.topRight}>
            <Text style={styles.topRightText}>
              Top Right
            </Text>
          </View>
          <View style={styles.bottomRight}>
            <Text style={styles.bottomRightText}>
              Bottom Right
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  
  container : {
    flex : 1,
  },
  containerTop : {
    flex : 1,
    backgroundColor : '#f3fe7c',
    justifyContent : 'center',
    alignItems : 'center',
  },
  topText : {
    color : '#579e86',
    fontWeight : 'bold',
    fontSize : 20,
  },
  containerBottom : {
    flex : 1,
    flexDirection : 'row'
  },
  bottomLeft : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#36f4a2',
  },
  bottomLeftText : {
    color : '#579e86',
    fontWeight : 'bold',
    fontSize : 20,  
  },
  bottomRight : {
    flex : 1,
  },
  topRight : {
    flex : 2,
    backgroundColor : '#f436e7',
    justifyContent : 'center',
    alignItems : 'center',
  },
  bottomRight : {
    flex : 1,
    backgroundColor : '#3688f4',
    justifyContent : 'center',
    alignSelf : 'center'
  },
  bottomRightText : {
    color : '#579e86',
    fontWeight : 'bold',
    fontSize : 20,  
  },
  topRightText : {
    color : '#579e86',
    fontWeight : 'bold',
    fontSize : 20,  
  }
});
