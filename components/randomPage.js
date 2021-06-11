import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {Picker} from '@react-native-picker/picker';
import ReelSet from './ReelSet'


export default function RandomPage(props) {
    const [reelSet, setReelSet] = useState(null)
    const [disableButton, setdisableButton] = useState(false)
    
    buttonSet=()=>{    
        setdisableButton(true)
        setTimeout(()=> setdisableButton(false), 2100)
    }
    //            <Text style={styles.textField }>{props.randomFood}</Text>
    return (
        <View style={styles.container}>
            <View style={styles.slotContainer}>
                
            </View>
            <View style={styles.picContainer}>
                <Image
                    style={styles.pic}
                    source={require('../assets/dreieck.png')}
                 />

                <ReelSet style={styles.reelSet} ref = {(ref) => setReelSet(ref)} key={props.multipleArrs} multipleArrs = {props.multipleArrs} foodArr={props.foodArr} buttonSet={buttonSet} selectedCategory = {props.selectedCategory}></ReelSet>
            </View>
            <Image
                    style={styles.pic2}
                    source={require('../assets/fullslot.png')}
                />
            <View style={styles.pickerContainer}>
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
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.randomButton} onPress={()=> {buttonSet(); reelSet.spin()}} disabled={disableButton}>
                    <View style={styles.inner} >
                        <Text style={({color:'white'})}>SPIN!</Text>            
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar 
                style="light"
                backgroundColor="black"
                 
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
    slotContainer: {
        
        
    }, 
    buttonContainer: {
       
    }, 
    picContainer: {
       
    }, 
    randomButton: {
        backgroundColor:"green",
        borderRadius: 100,
        height:100,
        width:100, 
        //marginBottom:-630,
        color:'white',
        padding:20,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inner: {
        height: "150%",
        borderRadius: 100,
        width:'150%',
        borderWidth:1,
        borderColor:"darkgreen",
        elevation:50,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
      },
    picker:{
        color: 'white',
        backgroundColor: 'grey',
        backgroundColor: 'green',
        width: 129,
       
        fontSize: 12,
       
        //marginTop:-200,
        height: 50

    },
    pic: {
        height: '10%',
        width: '10%',
       
     },
     pic2: {
        
        height: '100%',
        width: '100%',
        position: 'absolute',
        //marginTop:-590
     },
     picContainer: {
        marginTop: 100,
        //borderWidth: 1,
        //borderColor: 'white',
        //position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
     }
  });