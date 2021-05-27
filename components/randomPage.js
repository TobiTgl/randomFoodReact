import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {Picker} from '@react-native-picker/picker';

export default function RandomPage(props) {
    

   
    
    return (
        <View style={styles.container}>
            <Text style={styles.textField }>{props.randomFood}</Text>
            <Picker
                style={styles.picker}
                selectedValue={props.selectedCategory}
                onValueChange={(itemValue, itemIndex) =>
                    props.setSelectCategry(itemValue, itemIndex)
                  }
                >
                <Picker.Item label="Select Category" value="All" />
                <Picker.Item label="Dessert" value="Dessert" />
                <Picker.Item label="Fast Food" value="Fast Food" />
                <Picker.Item label="Fleischig" value="Fleischig" />
                <Picker.Item label="Pasta" value="Pasta" />
                <Picker.Item label="Reis" value="Reis" />
                <Picker.Item label="Vegetarisch" value="Vegetarisch" />
                <Picker.Item label="Sonstiges" value="Sonstiges" />
            
                
                
            </Picker>
            <View style={styles.randomButton}>
                <Button color="green" title="random food" onPress={()=> props.onRandomClick()}></Button>                
            </View>
            <StatusBar animated={true}
                 backgroundColor="#8cff9a" 
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
    textField: {
        fontSize: 40,
        color:'white',
        marginBottom:20,
        marginTop:50
    },
    randomButton: {
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
       
        color:'white',
        marginBottom:20
    }, 
    picker:{
        color: 'white',
        backgroundColor: 'green',
        width: 129,
       
        fontSize: 12,
        marginBottom:20,
        height: 50

    }
  });