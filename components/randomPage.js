import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function RandomPage(props) {
    

   
    
    return (
        <View style={styles.container}>
      
            <Button title="random food" onPress={()=> props.onRandomClick()}></Button>
            <Text style={{color:'white'} }>Random: {props.randomFood}</Text>
            {props.foodArr.map(s=> <Text style={{color:'white'} }key={s.id}>{s.name}</Text>)}
            <StatusBar animated={true}
                 backgroundColor="grey" 
             />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });