import React, {useState, useEffect, Component} from 'react'
import { render } from 'react-dom'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native'
import Symbol from './Symbol'

export default class Reel extends Component {
    constructor(props) {
        super(props)

        this.symbols= "BBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBLBBCDGLGLCCCLLDDMS777XDBL";
        this.textHeight = 40;
        this.position = (this.symbols.length*40) *-1
        this.currentScrollPos = this.position +105;
        console.log(this.position)
        this.state = {
            
    
            scrollPos: new Animated.Value(this.currentScrollPos),
            
        }
    }
    

    scrollByOffset=(offset) => {
        this.currentScrollPos = this.currentScrollPos + (80*offset)
        Animated.timing(
            this.state.scrollPos, 
            {
                toValue: this.currentScrollPos,
                duration: 2000,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.cubic)
            }
        ).start(()=>{})

        this.position = (192*40*-1) + this.position % this.symbols.length
        this.currentScrollPos = this.position +105
    }

    render(){
        return (
            <View style={styles.container}>
                <Animated.View style={{width:'100%', height:'100%', transform: [{translateY: this.state.scrollPos}]}}>
                    {this.symbols.split("").map((el, idx) => {
                    return <Symbol symbol={el} key={idx} index={idx} width={'100%'} height={this.textHeight}/>
                    })}
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    element: {
        height: 40,
        width: '100%',
        
        alignItems: 'center',
        justifyContent: 'center',
    }
})