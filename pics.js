import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput  } from "react-native";
import { useState } from "react";
import In from "./input";

const Pic = ({onPress, isSelected, Shape, img, onPressOut}) => {
    return(
        <View style = {{
            
           
        }}>
            <TouchableOpacity
            onPress={onPress}
            onPressOut = {onPressOut}
            style = {{
                borderColor : isSelected ? '#6a0dad' : 'white',
                borderWidth : 2,
                borderRadius : 10,
                //backgroundColor : isSelected ? 'black' : 'white',
                margin : 10,
                marginTop : 20,
                
            }}>    
            <ImageBackground resizeMode="contain" style = {{
                width : 130,
                height : 130,
            }}
            source={img}>
            <Text style = {{
                fontSize : 10,
                marginTop : 118,
                marginLeft : 50
            }}> {Shape} </Text>
            </ImageBackground>
            
            </TouchableOpacity>

 

        </View>
    )
}

export default Pic;

