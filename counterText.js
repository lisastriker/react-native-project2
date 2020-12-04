import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';
export default function CounterText(props){
    console.log(props)
    return(
        <Text style={[styles.text,{color:props.color,fontSize:props.font, marginBottom:props.margin}]}>{props.children}</Text>
    )
}

const styles=StyleSheet.create(
    {
        text:{
            fontWeight:"bold"
        }
    }
)