import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-get-random-values';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { v4 as uuidv4 } from 'uuid';
import RandomPage from './RandomPage';
import AddFoodPage from './AddFoodPage';
import { Ionicons } from 'react-native-vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 



export default function Homecomp(props) {
    
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

    const Tab = createBottomTabNavigator();

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

    eingabeAddFood=(text)=>{
        setFood(text)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                activeTintColor: 'green',
                style: {
                backgroundColor: '#000000',
                                }}}>
                <Tab.Screen  
                    name="Random Food"
                      
                    options={{ 
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="random" color={color} size={size} />)
                }}>
                    {
                        props=> 
                            <RandomPage
                                {...props}
                                foodArr={foodArr}
                                food = {food}
                                randomFood = {randomFood}
                                onRandomClick = {randomFoodFunct}
                                onInsertNewFood = {insertNewFood}
                            >

                            </RandomPage>
                    }
                
                </Tab.Screen>
                <Tab.Screen  
                    name="Add Food"
                 
                    options={{ 
                    tabBarIcon: ({ color, size }) => (
                    <Entypo name="add-to-list" color={color} size={size} />)
                }}>
{
                        props=> 
                            <AddFoodPage
                                {...props}
                                foodArr={foodArr}
                                food = {food}
                                randomFood = {randomFood}
                                onRandomClick = {randomFoodFunct}
                                onInsertNewFood = {insertNewFood}
                                onTypeFood = {eingabeAddFood}
                            >

                            </AddFoodPage>
                    }
                
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

