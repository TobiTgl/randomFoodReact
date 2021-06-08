import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native'
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
            
            <View style={styles.picContainer}>
                <Image
                    style={styles.pic}
                    source={require('../assets/dreieck.png')}
                 />

                <ReelSet style={styles.reelSet} ref = {(ref) => setReelSet(ref)} key={props.multipleArrs} multipleArrs = {props.multipleArrs} foodArr={props.foodArr} buttonSet={buttonSet} selectedCategory = {props.selectedCategory}></ReelSet>
            </View>
            <Image
                style={styles.pic2}
                source={require('../assets/linie.png')}
            />
            <Image
                style={styles.pic2}
                source={require('../assets/slotmachine.png')}
            />
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
                <Button color="green" title="Spin!" onPress={()=> {buttonSet(); reelSet.spin()}} disabled={disableButton} ></Button>                
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
    reelSet: {
       
    },
    textField: {
        fontSize: 40,
        color:'white',
        backgroundColor: 'grey',
        marginBottom:20,
        marginTop:50,
        padding:50
    },
    randomButton: {
        shadowColor: "#fff",
        backgroundColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
        marginBottom:-605,
        color:'white',
       
        padding:20
    }, 
    picker:{
        color: 'white',
        backgroundColor: 'grey',
        backgroundColor: 'green',
        width: 129,
       
        fontSize: 12,
       
        marginTop:-200,
        height: 50

    },
    pic: {
        height: '10%',
        width: '10%',
        marginTop:73
     },
     pic2: {
        height: '80%',
        width: '100%',
        marginTop:-590
     },
     picContainer: {
        
        borderWidth: 1,
        borderColor: 'white',
        position: 'absolute',
        flexDirection: "row",
     }
  });