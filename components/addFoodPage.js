import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import FoodListElement from './FoodListElement'

export default function AddFoodPage(props) {
    const addTextInput = React.createRef();
    const addCategoryInput = React.createRef();
      
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    ref={addTextInput}
                    placeholder={'Enter food here...'}
                    style={{backgroundColor: 'grey', borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'black',height: 40, width:200, marginBottom: 10, alignSelf: 'center',}}
                    onChangeText={(text)=> props.onTypeFood(text)}
                    onSubmitEditing={()=> {props.onInsertNewFood();addTextInput.current.clear(); addCategoryInput.current.clear()}}
                    
                    >
                
                </TextInput>
                <TextInput 
                    ref={addCategoryInput}
                    placeholder={'Enter category here...'}
                    style={{backgroundColor: 'grey', borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'black',height: 40, width:200, marginBottom: 10, alignSelf: 'center',}}
                    onChangeText={(text)=> props.onTypeCategory(text)}
                    onSubmitEditing={()=> {props.onInsertNewFood();addCategoryInput.current.clear(); addCategoryInput.current.clear()}}
                    
                    >
                
                </TextInput>
                <Button color="green" title="Add new food" onPress={()=>{ props.onInsertNewFood(); addTextInput.current.clear(); addCategoryInput.current.clear()}}></Button>
            </View>
            <View style={styles.headingContainer}>
                <View style={styles.headingName}>
                    <Text style={{color:'white'} }>Name:</Text>
                </View>
                <View style={styles.headingCategory}>
                    <Text style={{color:'white'} }>Category:</Text>
                </View>
            </View>
            <ScrollView>
            {props.foodArr.map(s=><FoodListElement foodEle= {s} style={styles.foodContainer }key={s.id} id={s.id} name={s.name}  onDeleteClick={props.onDeleteClick}></FoodListElement>)}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: 'black',
    
    },
    foodContainer:{
        backgroundColor: 'white',
        
    },
    inputContainer:{
       marginTop: 50,
       padding:50
       
        
    },
    headingContainer: {
        flexDirection: 'row',
        padding:10,
        alignItems: 'flex-start',
       
       
        backgroundColor: 'black',
        
       
    },
    headingName:{
        alignItems: 'flex-start',
        flex:3,
        color:'white'
    },
    headingCategory:{
        alignItems: 'flex-start',
        flex:1.8,
        color:'white'
    }
  });
