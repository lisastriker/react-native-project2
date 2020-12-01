import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
  let [count,setCount] = useState(0)
  function increment(){ 
    setCount(count + 1)
  }

  function renderEncouragingText(){
    if (count == 10){
      return "Keep Going"
    }
  }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
          <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
        <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'yellow',
  },
  text:{
    textAlign:"center",
    fontSize:40,
    color:'red',
    fontWeight:'bold',

  },
  encouragingText:{
    marginTop:50,
  },
  button:{
    backgroundColor:'red',
  },
  buttonText: {
    padding:10,
    color:'white',
  }
})
