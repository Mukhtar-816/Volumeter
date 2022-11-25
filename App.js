import React, { useDebugValue, useState } from "react";
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import H from "./head";
import Pic from "./pics";
import In from "./input"
import BUTTON from "./Buttons";

const pi = 3.1415926535897932384626433832795028841971 
693993751058209749445923078164062862089986280348253421170679;

var onP;


const PS = () => {
  const[Shape, setShape] = useState('')
  const[Radius, setRadius] = useState('')
  const[Radiusc, setRadiusc] = useState('')
  const[Height, setHeight] = useState('')
  const[Showtext, setShowtext] = useState('')

  const Check = () => {
    if (!Radius)
    {
     alert('Enter the Radius please!')
     return;
    }
   const VOS = ( (4/3) * pi * Radius * Radius * Radius ).toFixed(5)
   alert(VOS);
  }

  const Check2 = () => {
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
  
  
  return(
    <View style = {style.create}>
      <H />
      <Text style = {{
        marginLeft : 50,
        marginTop : 10,
        fontSize : 15,
        height : "8%"
      }}> Calculate Volume with our app</Text>
      <View style = {{
        flexDirection  : 'row',
        justifyContent : 'center',
        alignSelf : 'center',
      }}>
      <Pic 
      img = {require('./Capture.png')}
      Shape={'Sphere'}
      onPressOut={() => {
      setShape('Sphere')}}
      isSelected ={Shape === 'Sphere'}
      onPress = {() => {
        setShowtext('Sphere')
    }}
      />
      
      
      <Pic 
      img = {require('./12.png')}
      Shape={'Cylinder'}
      onPressOut={() => {
        setShape('Cylinder')}}
      isSelected = {Shape === 'Cylinder'}
      onPress = {() => {
        setShowtext('Cylinder')
    }}
      />
      </View>
      {Showtext == 'Sphere'? <TextInput style = {style.sty} placeholder="Enter the radius of Sphere" value={Radius} 
      onChangeText = {r => {setRadius(r)}} />  : 

      Showtext == 'Cylinder'? <TextInput style ={style.sty} placeholder="Enter the radius of Cylinder"  value={Radiusc} 
      onChangeText = {rc => {setRadiusc(rc)}}/> : 
      
      Showtext == '' ? <Text style = {style.text}>Choose the Shape</Text> : null }
      {Showtext == 'Cylinder' ? <TextInput style ={style.sty} placeholder="Enter the height of Cylinder"  value={Height} 
      onChangeText = {h => {setHeight(h)}}/> : null}


      {Showtext == 'Sphere' ? onP = {Check}: Showtext == 'Cylinder' ? onP = {Check2} : null}
        
        <TouchableOpacity 
            onPress={onP}
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
        }}>Calculate!</Text>
      </TouchableOpacity>

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
    alignSelf : 'center',
    fontWeight : 'bold',
  },
  sty : {
    borderBottomColor : 'black',
    borderBottomWidth : 1,
    padding : 10,
    marginTop : 10,
    width : "90%",
    alignSelf : 'center'}

})




export default PS;