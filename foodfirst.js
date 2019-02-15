
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity,ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import foodlogo from './images/foodlogo.png';
import backfood from './images/backfood.png'









export default class Food extends Component{


  render() {
    return (
<ScrollView style={{backgroundColor:'rgb(255, 0, 128)'}}>
<View style={styles.pos}>

<Image source={foodlogo} style={styles.logo}></Image>
<Text style={styles.text}>Food Panda</Text>

<TouchableOpacity style={styles.btn}><Text style={styles.text}>Get Started</Text></TouchableOpacity>
</View>
</ScrollView>


        );
      }
}
const styles = StyleSheet.create({
text:{
  color:'rgb(0, 0, 0)',
fontWeight:'bold',
fontFamily:'Roboto',
fontSize:20
},
btn:{
  backgroundColor:'rgba(0,0,0,0.2)',
  marginTop:280,
  borderWidth:1,

  color:'pink',
  borderColor:'pink',
  alignItems:'center',
  borderRadius:5,
  width:200
}
  ,

pos:{
marginTop:40,
alignItems:'center',

}
 , logo:{

width:100,
height:100,


}, 
container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'stretch',
    width:400,
    height:600,
    marginTop:-10

  },



})

 