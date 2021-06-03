import React, {useState, useEffect, Component} from 'react'
import { render } from 'react-dom'
import { View, Text, StyleSheet } from 'react-native'
import Reel from './Reel'

export default class ReelSet extends Component {
    constructor(props) {
        super(props)
        this.reels=[]
    }

   
    randomBetween = (min,max) =>{
        return Math.floor(Math.random() * (max-min +1) +min)
    }
   

    spin = ()=> {
        console.log(this.randomBetween(5, 15))
        this.reels[0].scrollByOffset(this.randomBetween(5, 15))
    }


    renderReels =()=>{
        let reelList = Array.apply(null, Array(1)).map((el, idx) => {
            return <Reel width={'90%'}  key={idx} index={idx} ref= {(ref) => {this.reels[idx] = ref}}></Reel>
        })

        return(
            <>
            {reelList}
            </>
        )

    }

    render(){
    

    return (
        <View style={styles.container}>
            {this.renderReels()}
        </View>
    )
    }


}

const styles = StyleSheet.create({
    container: {
       
        height: 90,
        width: '90%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    }
})