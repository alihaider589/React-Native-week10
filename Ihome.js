
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,ScrollView,TouchableOpacity, StyleSheet, Text, View,Dimensions} from 'react-native';
import profile from './images/profile.jpg';
import back1 from './images/back1.jpg';
import back2 from './images/back2.jpg';
import back33 from './images/back33.jpg';
import back4 from './images/back4.jpg';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fifth from './images/fifth.jpg';
import sixth from './images/sixth.jpg'













const 
 { width:WIDTH} = Dimensions.get('window')


export default class Ihome extends Component{

  
  render() {
    return (
      <ScrollView>

<View style={styles.menubar}>
<Text>the_dude_ali.h                                                                         |||</Text>




<View style={styles.profilecontainer}>
  <Image source={profile} style={styles.profile} ></Image>
  <Text style={styles.Text}>  Ali Haider</Text>


<Text style={{marginTop:-70,alignContent:'space-around',alignItems:'flex-end'}}>                                                  60           248             88</Text>

<Text style={{marginTop:4,alignContent:'space-around',alignItems:'flex-end'}}>                                                  posts    followers   following </Text>

<View style={{flexDirection:'row', justifyContent:"space-around", alignItems:"center"}}>
<TouchableOpacity><Text style={{ width: WIDTH - 280, padding:5,marginTop:30,
    marginLeft:180, borderRadius:5,borderWidth:1,fontSize:12,  backgroundColor:'rgb(255, 255, 255)'}}>Promotions </Text></TouchableOpacity>
<TouchableOpacity>
  <Text style={{ width: WIDTH - 280, padding:5
    ,marginLeft:10, marginTop:30, fontSize:12,
    borderWidth:1,  borderRadius:5,
      backgroundColor:'rgb(255, 255, 255)'}}>
      Edit Profile  </Text>
      </TouchableOpacity>
</View>
</View>
<View style={{marginLeft:5}}><Text>Profile Status</Text></View>
<View style={{marginTop:20,marginLeft:5}}><Text>Stories</Text></View>
<View style={{flexDirection:'row',marginLeft:5}}>
<Image source={profile}style={{height:50,width:50,marginTop:10,borderRadius:30,}} ></Image>
<Image source={back1}style={{height:50,paddingRight:10,width:50,marginLeft:10,marginTop:10,borderRadius:30}} ></Image>
<Image source={back2}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Image source={sixth}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Image source={fifth}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
</View>

<View><Text style={{fontSize:20,marginTop:20}}> Posts</Text></View>
<View style={{alignItems:'center'}}>
<View style={{flexDirection:'row',marginLeft:5}}>

<Image source={back1} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>
<Image source={back33} style={{height:110,width:120,marginTop:5,marginRight:5}}></Image>
<Image source={first} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>



</View>

<View style={{flexDirection:'row',marginLeft:5}}>
<Image source={back2} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>
<Image source={back4} style={{height:110,width:120,marginTop:5,marginRight:5}}></Image>
<Image source={second} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>



</View>


<View style={{flexDirection:'row',marginLeft:5}}>
<Image source={back2} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>
<Image source={profile} style={{height:110,width:120,marginTop:5,marginRight:5}}></Image>
<Image source={third} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>



</View>
</View>
</View>

</ScrollView>
    );
      }
}





const styles = StyleSheet.create({
  profilecontainer:{
    alignItems:'flex-start',
    marginTop:20,
    marginLeft:5,
  
   
  
      },
      profile:{
        borderRadius:40,
        marginTop:5,
        alignItems:'flex-start',
        width:70,
        height:70,
        marginLeft:5
        
        
    
}});