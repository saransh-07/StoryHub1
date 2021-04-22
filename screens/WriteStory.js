import * as React from 'react';
import {View, Text, StyleSheet, TextInput , TouchableOpacity } from 'react-native';

export default class Write extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
            <View style = {styles.headingContainer}>
                <Text style = {styles.heading}>
                    Write Story
                </Text>
            </View>
            <View>
                <TextInput style = {styles.inputBox} placeholder = '  Enter Story Title'/>
                <TextInput style = {styles.inputBox} placeholder = '  Enter Author Name(Yours infact)'/>
                <TextInput style = {[styles.inputBox,{height : 250}]} placeholder = '  Your Story Here!' multiline = {true} />
            </View>
                 <TouchableOpacity style = {styles.button} >
                     <Text style ={[styles.heading,{fontSize : 20}]}>
                         Submit
                     </Text>
                 </TouchableOpacity>
            </View>
          
        )
    }
}
const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flex : 1,
        backgroundColor : 'green',
        marginTop : 60
    },
    heading : {
        fontWeight : 'bold',
        fontSize : 40,
        color : 'white',
        textAlign : 'center'
    },
    headingContainer : {
        marginTop : 20,
        backgroundColor : '#00BFFF',
        height : 150,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'

    },
    inputBox : {
        width : '80%',
        height : 60,
        borderStyle : 'solid',
       alignSelf :'center',
        borderWidth : 3,
        marginTop : 50,
        backgroundColor : '#FAEBD7',
       
    },
    button : {
       
        display : 'flex',
        backgroundColor : '#00BFFF',
        width : '30%',
        height : 40,
        justifyContent : 'center',
        marginTop : 10,
        alignSelf : 'center'
    }
})