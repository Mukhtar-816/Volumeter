import React from "react";
import { View, Text, TouchableOpacity, StyleSheet  } from "react-native";


const BUTTON = ({Name, onPress}) => {
    return(
            <TouchableOpacity 
            onPress={onPress}
            style = {{
        width : "90%",
        height : "12%",
        backgroundColor : '#6a0dad',
        marginLeft : 15,
        marginTop: 25,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8
      }}>
        <Text style = {{
          fontSize : 18,
          color : 'white',
          fontWeight : 'bold',
          letterSpacing : 1
        }}>{Name}</Text>
      </TouchableOpacity>
    )
}

export default BUTTON;






const Cylinder1 = () => {
    if (!Height) 
    {
      alert('Enter the Height of Cylinder please!')
    }
    else if (!Radiusc) 
    {
      alert('Enter the Radius of Cylinder please!')
    }
    const VOC = ( pi * Radiusc * Radiusc * Height)
    alert(VOC);
  }


  {Showtext == 'Sphere' ? onPress = {Sphere1}: Showtext == 'Cylinder' ? onPress = {Cylinder1} : null}