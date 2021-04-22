import * as React from 'react';
import {View, Text, StyleSheet, TextInput , Image , TouchableOpacity } from 'react-native';

export default class Read extends React.Component{
    render(){
        return(
            <View style ={styles.headingContainer}>
                <Text style = {styles.heading}>Read Story Screen</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    heading : {
        fontWeight : 'bold',
        fontSize : 30,
        color : 'white',textAlign:'center'
    },
    headingContainer : {
        marginTop : 40,
        backgroundColor : 'blue',
        height : 100,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'

    }
})