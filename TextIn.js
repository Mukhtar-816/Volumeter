import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const Val = ({value}) => {
    //value = {value}
    if (value == 1) 
    {
        return(
            <TextInput 
            placeholder='Enter the radius of Sphere'
            style = {style.sty}></TextInput>
        )
    }
    else if (value == 2)
    {
        return(
            <TextInput
            placeholder="Enter the Height "
            style = {style.sty}></TextInput>
        )
    }
    else 
    {
        return;
    }
}



style = StyleSheet.create({
    sty : {
        borderBottomColor : 'black',
        borderBottomWidth : 1,
        padding : 5,
        marginTop : 20,
        width : "90%",
        alignSelf : 'center'
    }
})
export default Val;