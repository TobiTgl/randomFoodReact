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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Homecomp(props) {
    
    const [food, setFood] = useState('Nothing');
    const [randomFood, setRandomFood] = useState('Random Food');
    const [foodCategory, setfoodCategory] = useState('Nothing');
    const [foodArr, setFoodArr] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCategoryList, setSelectedCategoryList] = useState('All');
    
    useEffect(()=>{localStoreGet()}, [])

    const Tab = createBottomTabNavigator();

    insertNewFood=async()=>{
        const foodName = food
        const id = uuidv4()
        const category = foodCategory
        console.log(id)
        let newArr = [...foodArr]
    
        newArr.push({id: id, name: foodName, category: foodCategory})
    
        setFoodArr(newArr)
        const arrForStorage = JSON.stringify(newArr)
        try {

            await AsyncStorage.setItem('foodArr', arrForStorage)

          } catch (e) {
            // saving error
          }
        
    }
    randomFoodFunct =()=>{
        const arrOhneCat = foodArr
        if(selectedCategory !== 'All'){
            const arrayMitCat = arrOhneCat.filter(food => food.category === selectedCategory)
            console.log(arrayMitCat+"filter" + selectedCategory)

            const rand = Math.floor(Math.random() * arrayMitCat.length) + 1 ;
        setRandomFood(arrayMitCat[rand-1].name)
        }else{
            const rand = Math.floor(Math.random() * arrOhneCat.length) + 1 ;
            setRandomFood(arrOhneCat[rand-1].name)
        }
        

    }

    eingabeAddFood=(text)=>{
        setFood(text)
    }
    eingabeAddCategory=(text)=>{
        setfoodCategory(text)
    }

    onDeleteClick=async(id)=>{
        console.log(id)
        const filteredArr = foodArr.filter(food => food.id !== id)
        setFoodArr(filteredArr)
        const arrForStorage = JSON.stringify(filteredArr)
        try {        

            await AsyncStorage.setItem('foodArr', arrForStorage)
            
          } catch (e) {
            // saving error
          }
    }

    localStore = async ()=>{
        console.log("Local store add")
        try {
            const arr = [{ "id": "1", "name": "HAMBURGOAR",  "category":"Fast Food"}, { "id": "2", "name": "Pizza",  "category":"Fast Food"}]
            const jsonValue = JSON.stringify(arr)
            setFoodArr([{ "id": "2", "name": "test", "category":"test"}])
           
            await AsyncStorage.setItem('foodArr', jsonValue)
            
          } catch (e) {
            // saving error
          }
    }

    localStoreGet=async()=>{
       try {
                const jsonValue = await AsyncStorage.getItem('foodArr')
                console.log(jsonValue)
                const fok = JSON.parse(jsonValue)
                fok.sort((a, b) => (a.category > b.category) ? 1 : (a.category === b.category) ? ((a.name > b.name) ? 1 : -1) : -1 )
                console.log(jsonValue+"sorted")
                setFoodArr(fok)
                
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch(e) {
                // error reading value

                console.log(e)
            }
    }

    setSelectCategry=(itemValue, itemIndex)=>{
        
        setSelectedCategory(itemValue)
        
    }
    setSelectCategryList=async(itemValue, itemIndex)=>{
        
        setSelectedCategoryList(itemValue)
        /*
        const arrOhneCat = foodArr
        if(selectedCategoryList !== 'All'){
            const arrayMitCat = arrOhneCat.filter(food => food.category === selectedCategoryList)
            console.log(arrayMitCat+"filter" + selectedCategoryList)
            setFoodArr(arrayMitCat)
            
        }else{
            try {
                const jsonValue = await AsyncStorage.getItem('foodArr')
                console.log(jsonValue)
                const fok = JSON.parse(jsonValue)
                fok.sort((a, b) => (a.category > b.category) ? 1 : (a.category === b.category) ? ((a.name > b.name) ? 1 : -1) : -1 )
                console.log(jsonValue+"sorted")
                setFoodArr(fok)
                
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch(e) {
                // error reading value

                console.log(e)
            }
            
        }
        */
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
                                localStore = {localStore}
                                localStoreGet = {localStoreGet}
                                selectedCategory = {selectedCategory}
                                setSelectCategry={setSelectCategry}
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
                                onTypeCategory = {eingabeAddCategory}
                                onDeleteClick = {onDeleteClick}
                                selectedCategory = {selectedCategory}
                                setSelectCategryList={setSelectCategryList}
                                
                            >

                            </AddFoodPage>
                    }
                
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
