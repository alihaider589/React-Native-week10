
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity,ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import google from './images/google.png'
import Car from './images/Car.png'





export default class Careemfirst extends Component{


  render() {
    return (
<View style={{flex:1}}>
<ImageBackground source={google} style={styles.container}>
<ScrollView >
<TouchableOpacity>
<Text style={styles.text}>
    |||
</Text>

</TouchableOpacity>
<Text style={styles.text}>

    Pickup location

</Text>
<TextInput placeholder="Enter your pickup location..." style={styles.TextInput}>



</TextInput>
<View>


    <Text>
        Careem requires accesss to your 
    </Text>
</View>

<View style={{flexDirection:'row',marginTop:200,height:50, width:400}}>
<TouchableOpacity>
    <Image source={Car} style={styles.con}></Image>
    <Text>Go</Text>
</TouchableOpacity>
</View>
</ScrollView>


</ImageBackground>
</View>
        );
      }
}
const styles = StyleSheet.create({
con:{
height:50,
width:50
}

    ,TextInput:{
    backgroundColor:'rgba(255,255,255,0.5)',
    marginLeft:50,
    alignContent:'center',
    marginTop:10,
    borderWidth:1,
    borderRadius:10,
    width:240,
    
}

    ,text:{
    marginLeft:10,
    marginTop:20,
  color:'rgb(0, 0, 0)',
fontWeight:'bold',
fontFamily:'Roboto',
fontSize:30

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
    flex: 4,

    justifyContent: 'center',
    
   

  },



})

 