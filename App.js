import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {pi, sayHello} from './a'
import CounterText from './counterText'
export default function App(){
  let [count,setCount] = useState(0)
  function increment(){ 
    setCount(count + 1)
  }

  function decrement(){ 
    setCount(count - 1)
  }


  function renderEncouragingText(){
    if (count >= 20){
      return "Great job! Is your hand pain?"
    }else if(count >= 10){
      return "Keep Going"
    }
  }
  return (
    <View style={styles.container}>
        <CounterText color="red" font={10} margin={20}>{count}</CounterText>
        <CounterText color="red" font={20} margin={20}>{count}</CounterText>
        <CounterText color="red" font={30} margin={20}>{count}</CounterText>
        <CounterText color="red" font={40} margin={20}>{count}</CounterText>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>Decrease</Text>
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
    marginBottom:10,
  },
  buttonText: {
    padding:10,
    color:'white',
  }
})
