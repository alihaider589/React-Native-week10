
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity,ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import background from './images/background.jpg';
import logo from './images/logo.png';
import Ihome from './Ihome';
import hito from './images/hito.jpg'
import jimmy from './images/jimmy.jpg'
import lucciola from './images/lucciola.jpg'
import mex from './images/mex.jpg'
import rag from './images/rag.jpg'
import spice from './images/spice.jpg'
import tost from './images/tost.jpg'
import twin from './images/twin.jpg';
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
import a from './images/a.jpg'
import b from './images/b.jpg'
import c from './images/c.jpg'
import d from './images/d.jpg'
import e from './images/e.jpg'
import f from './images/f.jpg'
import g from './images/g.png'
import h from './images/h.jpg';
import aa from './images/aa.jpg';
import bb from './images/bb.jpg';
import cc from './images/cc.jpg';
import dd from './images/dd.jpg';
import ee from './images/ee.png';
// import ff from './images/ff.jpg';
import gg from './images/gg.jpg';
import hh from './images/hh.jpg';
import ii from './images/ii.jpg';
import jj from './images/jj.jpg';
import kk from './images/kk.png';
import ll from './images/ll.jpg';
import mm from './images/mm.jpg';
import nn from './images/nn.jpg';
import oo from './images/oo.jpg';
// import pp from './images/pp.JPG';
import qq from './images/qq.jpg';
import rr from './images/rr.jpg';
import ss from './images/ss.jpg';
import tt from './images/tt.jpg';
import uu from './images/uu.jpg';
// import vv from './images/vv.jpg';
import ww from './images/ww.jpg';
import xx from './images/xx.jpg';
import yy from './images/yy.jpg';
import zz from './images/zz.jpg';
import search from './images/search.png';
import gps from './images/gps.png'
import ifeedcamera from './images/ifeedcamera.png'
import ifeedheart from './images/ifeedheart.png'
import ifeedhome from './images/ifeedhome.png'
import ifeedmessage from './images/ifeedmessage.png'
import ifeedplus from './images/ifeedplus.png'
import ifeeduser from './images/ifeeduser.png'
import ifeedtv from './images/ifeetv.png';
import instagram from './images/instagram.png'
import comment from './images/comment.png';

















const 
 { width:WIDTH} = Dimensions.get('window')


export default class Ifeeds extends Component{

  
  render() {
    return (
        <View  style={{flex:1}}> 
        <ScrollView>
<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedcamera} style={{width:30,height:30,marginTop:10,marginLeft:5}}>
</Image>  
</TouchableOpacity>
<Image source={instagram} style={{width:100,height:30,marginTop:10,marginLeft:10}}>
</Image>
<TouchableOpacity>
<Image source={ifeedtv} style={{width:30,height:30,marginTop:10,marginLeft:130}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>
<Image source={ifeedmessage} style={{width:28,height:28,marginTop:10,marginLeft:10}}>
</Image>
</TouchableOpacity>
</View>





















<ScrollView horizontal={true}>
        <View style={{flexDirection:'row',marginLeft:5}}>

        <TouchableOpacity>
<Image source={profile}style={{height:50,width:50,marginTop:10,borderRadius:30,}} ></Image>
<Text>the_dud.</Text>

        </TouchableOpacity>
        <TouchableOpacity>
<Image source={back1}style={{height:50,paddingRight:10,width:50,marginLeft:10,marginTop:10,borderRadius:30}} ></Image>
<Text>  meet_yo.</Text>

        </TouchableOpacity>
<TouchableOpacity>
<Image source={back2}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Text>  daffyd.</Text>

</TouchableOpacity>
<TouchableOpacity><Image source={sixth}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Text>  stackd.</Text>

</TouchableOpacity>
<TouchableOpacity>
<Image source={fifth}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Text>  callmea.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={back4}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Text>  rohan1.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={back33}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Text>   kami.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={first}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Text>  50_sha.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={second}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Text>  whatay.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={third}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Text>  coderb.</Text>

</TouchableOpacity>
</View>
</ScrollView>





















<View style={{alignItems:'center'}}>

  <View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={profile} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold'}}> the_dude_ali.h </Text>

<Image source={jimmy} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold'}}>the_dude_ali.h : Visited The jimmy's.</Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270}}>160 likes</Text>



















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={first} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold'}}> daffy_duck </Text>

<Image source={sixth} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold'}}>daffy_duck: COD is life  </Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270}}>2039 likes</Text>


















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={third} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold'}}> meet_your_developers </Text>

<Image source={back4} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold'}}>meet_your_developers:Witcher 3 for sale  </Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270}}>900 likes</Text>




















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={third} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold'}}> rohan1 </Text>

<Image source={nn} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold'}}>rohan1:Random click </Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270}}>60 likes</Text>




















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={second} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold'}}>CoderBoy</Text>

<Image source={back1} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold'}}>CoderBoy:Hello world </Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270}}>9000 likes</Text>



















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={back2} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold'}}> PookieChips </Text>

<Image source={sixth} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold'}}>PookieChips:Subscribe to pwediepie  </Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270}}>2.3M likes</Text>













</View>

</ScrollView>
<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedhome} style={{width:30,height:30,marginTop:10,marginLeft:10}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={search} style={{width:30,height:30,marginTop:10,marginLeft:50}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedplus} style={{width:30,height:30,marginTop:10,marginLeft:50}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30,marginTop:10,marginLeft:50}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>
<Image source={ifeeduser} style={{width:28,height:28,marginTop:10,marginLeft:50}}>
</Image>
</TouchableOpacity>
</View>
</View>

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
    
    TextInput:{
        marginLeft:5,
        marginTop:10,
        height:30,
        width:'70%',
    borderRadius:1,
    borderWidth:1,
    borderColor:'rgb(0,0,0)'
    
    
    }
    
    ,
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
    
     