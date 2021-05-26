import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



export default function Homecomp() {
    const [food, setFood] = useState('Nothing');
    const [randomFood, setRandomFood] = useState('');
    const [foodArr, setFoodArr] = useState([
        
            {
                "id": "1",
                "name": "HAMBURGOAR"
            },
            {
                "id": "2",
                "name": "Bredle"
    
    
            },
            {
                "id": "3",
                "name": "Collla"
    
    
            },
            {
                "id": "4",
                "name": "Collla"
    
    
            }
            ,
            {
                "id": "5",
                "name": "Collla"
    
    
            }
        
        
    ]);

    insertNewFood=()=>{
        const foodName = food
        const id = uuidv4()
        console.log(id)
        let newArr = [...foodArr]
    
       newArr.push({id: id, name: foodName})
    
        setFoodArr(newArr)
    }
    randomFoodFunct =()=>{
        const rand = Math.floor(Math.random() * foodArr.length) + 1 ;
        setRandomFood(foodArr[rand-1].name)

    }
    return (
    <View style={styles.container}>
      <TextInput 
        style={{backgroundColor: 'grey', borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'black',height: 40, width:200, marginBottom: 10, alignSelf: 'center',}}
        onChangeText={(text)=> setFood(text)}

      ></TextInput>
      <Button title="Add new food" onPress={()=> insertNewFood()}></Button>
      <Button title="random food" onPress={()=> randomFoodFunct()}></Button>
      <Text style={{color:'white'} }>Random: {randomFood}</Text>
      {foodArr.map(s=> <Text style={{color:'white'} }key={s.id}>{s.name}</Text>)}
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
