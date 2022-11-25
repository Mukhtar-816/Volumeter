import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const In = ({Input, Shape}) => {
    return(
        <TextInput style = {{
            width : "90%",
            height : 40,
            //borderBottomColor : "black",
            borderBottomWidth : 1,
            alignSelf : 'center',
            padding : 5
        }}
        placeholder = {Input}>

        </TextInput>
    )
}

export default In;