import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet,  } from 'react-native'

export default function Symbol(props) {

    const [foodSpin, setFoodSpin] = useState('RandomFoodHook')

    useEffect(()=> {getText()}, [])

    /*getText = () => {
        switch (props.symbol){
            case "B":
                setFoodSpin("Burger")
                break;
            case "C":
                setFoodSpin("Chips")
                break;
            case "X":
                setFoodSpin("Xylophon")
                break;
            case "D":
                setFoodSpin("Deine Mum")
                break;
            case "L":
                setFoodSpin("Lol")
                break;
            case "M":
                setFoodSpin("Melone")
                break;
            case "O":
                setFoodSpin("Orange")
                break;
            case "P":
                setFoodSpin("Pflaume")
                break;
             case "7":
                setFoodSpin("Nummer 7")
                break;
            case "S":
                setFoodSpin("Spätzle")
                break;
            default:
                setFoodSpin("Random Food")

        }
    }*/
    getText = () => {
        switch (props.symbol){
            case "B":
                return "Burger"
                break;
            case "C":
                return "Chips"
                break;
            case "X":
                return "Xylophon"
                break;
            case "D":
                return "Deine Mum"
                break;
            case "L":
                return "Lol"
                break;
            case "M":
                return "Melone"
                break;
            case "O":
                return "Orange"
                break;
            case "P":
                return "Pflaume"
                break;
             case "7":
                return "Nummer 7"
                break;
            case "S":
                return "Spätzle"
                break;
            default:
                return "Random Food"

        }
    }
    let text = getText()

    return (
        
        <View style={styles.container}>
            <Text style={{fontSize:40, color:'white'}}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderWidth: 1,        
        borderColor: 'white',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    }
})