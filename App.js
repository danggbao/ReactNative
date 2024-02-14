import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor : '#92f1f1',
  },
  containerTop: {
    flex: 1,  
  },
  top: {
    marginTop: 30,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: 'red',
  },
  topText: {
    color: '#4682b4',
    fontWeight: 'bold',
    fontSize: 20
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    width: 200,
    height: 200,
    backgroundColor: '#5df153',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    color: '#4682b4',
    fontWeight: 'bold',
  },
  containerBottom: {
    flex: 1,
  },
  bottom: {
    marginTop: 120,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: '#0098ff',
    borderColor: '#f44336',
  },
  bottomText: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'white',
  }
});
