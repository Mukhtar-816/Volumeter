import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const H = () => {
    return(
        <View style = {{
            backgroundColor : '#6a0dad',
            width : "100%",
            height : 100,
        }}>
          <Text style ={{
            color : 'white',
            width : "100%",
            height : "100%",
            marginTop : 50,
            marginLeft : 10,
            fontSize : 18,
            fontWeight : 'bold'
          }}> CALCULATE VOLUME OF SHAPES</Text>
        </View>
    )
}




style = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : "#fff",
     
    },
    text : {
      justifyContent : "center",
      color : 'black'
    }
    
  
  })
  

export default H;
  