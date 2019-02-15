
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity, StyleSheet, Text, View,Dimensions} from 'react-native';
import background from './images/background.jpg';
import logo from './images/logo.png';
import Ihome from './Ihome';







const 
 { width:WIDTH} = Dimensions.get('window')


export default class Ilogin extends Component{

  
  render() {
    return (
<ImageBackground style={styles.container} source={background}>
<View style={styles.logocontainer}>
  <Image source={logo} style={styles.logo} ></Image>
  <Text style={styles.Text}> Instagram</Text>
</View>

<View style={styles.inputtext}>

<TextInput 
style={styles.TextInput}
placeholder={'Username'}

/>

</View>
<View style={styles.inputtext}>

<TextInput 
style={styles.TextInput}
placeholder={'Password'}

/>

</View>

<TouchableOpacity style={styles.touch}>

<View>
  <Text style={styles.texttouch}>Login</Text>
</View>

</TouchableOpacity>



<View>
  <Text style={{fontWeight:'bold', marginTop:10}}>

    Forgot your Password? get help Singing in
  </Text>

  <Text style={{fontWeight:'bold', marginTop:10 , fontSize:15,textAlign:'center'}}>

OR
  </Text>
  
  </View>
  <TouchableOpacity style={styles.touch}>

<View>
  <Text style={styles.textfacebook}>Login With Facebook </Text>
</View>

</TouchableOpacity>

</ImageBackground>



    );
      }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  logocontainer:{
alignItems:'center'
  },
  logo:{
    width:120,
    height:120,

  },
  Text:{

    fontFamily:"IndieFlower",
    fontSize:30,
  },
  TextInput:{
    width: WIDTH - 55,
    height:45,
    borderRadius:10,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgb(171, 58, 129)',
    opacity:0.5
  },
  inputtext:{
    marginTop:10,
  },
  touch:{
  
    width: WIDTH - 200,
    marginTop:10,
   
    borderRadius:10,
    backgroundColor:'rgb(197, 30, 75)'
  },
  texttouch:{
    fontSize:20 ,
     fontFamily:'IndieFlower',
     textAlign:'center'
  },
  textfacebook:{
    color:'white',
    width: WIDTH - 200,
    height:30,
    textAlign:'center',
    borderRadius:10,
    fontWeight:'bold',
    backgroundColor:'rgb(197, 30, 75)',

  }
});
