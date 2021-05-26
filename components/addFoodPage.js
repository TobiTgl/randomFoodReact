import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function AddFoodPage(props) {
    const addTextInput = React.createRef();
      

    return (
        <View style={styles.container}>
      
            <TextInput 
                ref={addTextInput}
                style={{backgroundColor: 'grey', borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'black',height: 40, width:200, marginBottom: 10, alignSelf: 'center',}}
                onChangeText={(text)=> props.onTypeFood(text)}
                onSubmitEditing={()=> {props.onInsertNewFood();addTextInput.current.clear()}}
                
                >
            
            </TextInput>
            <Button title="Add new food" onPress={()=>{ props.onInsertNewFood(); addTextInput.current.clear()}}></Button>
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
