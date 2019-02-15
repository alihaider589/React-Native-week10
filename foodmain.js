
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity,ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import search from './images/search.png';
import gps from './images/gps.png'
import hito from './images/hito.jpg'
import jimmy from './images/jimmy.jpg'
import lucciola from './images/lucciola.jpg'
import mex from './images/mex.jpg'
import rag from './images/rag.jpg'
import spice from './images/spice.jpg'
import tost from './images/tost.jpg'
import twin from './images/twin.jpg';
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


















export default class Foodmain extends Component{


  render() {
    return (
<ScrollView style={{flex:1,alignItem:'center'}}>
<View style={{flexDirection:'row'}}>
<TouchableOpacity>
  <Text style={{fontSize:30}}>|||</Text>
</TouchableOpacity>
<TextInput style={styles.TextInput} placeholder="Search locations"></TextInput>
<TouchableOpacity>
<Image source={search} style={{width:30,height:30,marginTop:10,marginLeft:5}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>
<Image source={gps} style={{width:28,height:28,marginTop:10,marginLeft:10}}>
</Image>
</TouchableOpacity>
</View>





<View><Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:10}}>Featured</Text></View>
<View>
<ScrollView style={{height:170,marginTop:5}} horizontal={true}>
    

<TouchableOpacity style={{MarginLeft:10}}>
<Image source={hito} style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Hitoshianaya</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.9 ★★★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>
<TouchableOpacity style={{MarginLeft:5}}>
<Image source={jimmy}style={{height:100 ,width:150}}>
</Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Jimmy Mac's Resturant</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.9 ★★★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={lucciola}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>lucciola </Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.8 ★★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={mex}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>The Mexican Resturant</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.7 ★★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={rag}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Le Rozeli</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.6 ★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={spice}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>The Spice Club</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.6 ★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={tost}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Toast</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.5 ★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={twin}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Twin Peaks</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.5 ★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>


</ScrollView>
</View>
 













<View><Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:10}}>Nearby Resturants</Text></View>
<View>
<ScrollView style={{height:170,marginTop:5}} horizontal={true}>
    

<TouchableOpacity style={{MarginLeft:10}}>
<Image source={a} style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Cine Moosh</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>15 minutes away</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>
<TouchableOpacity style={{MarginLeft:5}}>
<Image source={b}style={{height:100 ,width:150}}>
</Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Monal Resturant</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>20 minutes away</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={c}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Jammin Java Coffee </Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>25 minutes away</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={d}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Mr Burger</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>30 minutes away</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={e}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Ravi Resturant</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>50 minutes away</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={f}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>KFC</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>1 hour 2 minutes away</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={g}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Chai Avenue</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>2 hours away</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={h}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Resturant Horror</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>3 hours away</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>


</ScrollView>
</View>


















<View><Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:10}}>New At Your Location</Text></View>
<View>
<ScrollView style={{height:170,marginTop:5}} horizontal={true}>
    

<TouchableOpacity style={{MarginLeft:10}}>
<Image source={aa} style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Kebab In</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.9 ★★★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>
<TouchableOpacity style={{MarginLeft:5}}>
<Image source={bb}style={{height:100 ,width:150}}>
</Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Bundo Khan </Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.7 ★★★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={cc}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Thaali In </Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.8 ★★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={dd}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Food Center</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.9 ★★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={ee}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Pappu Jalebi</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.6 ★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={aa}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Khan Kebabs </Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.6 ★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={gg}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Babu Paye</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.5 ★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={hh}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Mamu boti</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.5 ★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>


</ScrollView>
</View>



















<View><Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:10}}>Promotions★</Text></View>
<View>
<ScrollView style={{height:170,marginTop:5}} horizontal={true}>
    

<TouchableOpacity style={{MarginLeft:10}}>
<Image source={ii} style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Meetha House</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.9 ★★★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>
<TouchableOpacity style={{MarginLeft:5}}>
<Image source={jj}style={{height:100 ,width:150}}>
</Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>The Nuggets</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.9 ★★★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={kk}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Ajmal halwai </Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.8 ★★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={ll}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Karhai in</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.7 ★★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={mm}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Roll House</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.6 ★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={nn}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Chacha's theela</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.6 ★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={oo}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Meetha in</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.5 ★★★</Text>


</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>

<TouchableOpacity style={{MarginLeft:5}}>
<Image source={aa}style={{height:100 ,width:150}}></Image>
<Text style={{marginTop:5,fontWeight:'bold'}}>Kebabs</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.5 ★★★</Text>

</TouchableOpacity>
<Text style={{color:'rgb(255, 255, 255)'}}>h</Text>


</ScrollView>
</View>










<Text style={{fontSize:20,marginLeft:25}}>All Other Restaurants(10)</Text>
<View style={{alignItems:'center'}}>
<TouchableOpacity>
<Image source={qq} style ={{height:200,width:300,marginTop:10}}></Image>
<Text style={{fontSize:20}}> Karachi Gol gappy </Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.8 ★★★★</Text>

</TouchableOpacity>
<TouchableOpacity>
<Image source={rr} style ={{height:200,width:300,marginTop:10}}></Image>

<Text style={{fontSize:20}}>Food Center</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:5.0 ★★★★★★</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={ss} style ={{height:200,width:300,marginTop:10}}></Image>

<Text style={{fontSize:20}}>Papu Halwai</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:3.0 ★★★</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={tt} style ={{height:200,width:300,marginTop:10}}></Image>

<Text style={{fontSize:20}}>Bundo House</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.0 ★★★★</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={uu} style ={{height:200,width:300,marginTop:10}}></Image>

<Text style={{fontSize:20}}>Tajuu Meetha Center</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.4 ★★★★</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={nn} style ={{height:200,width:300,marginTop:10}}></Image>

<Text style={{fontSize:20}}>Chacha Teeha</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:2.0 ★</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={ww} style ={{height:200,width:300,marginTop:10}}></Image>

<Text style={{fontSize:20}}>Karey In</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.2 ★★★</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={xx} style ={{height:200,width:300,marginTop:10}}></Image>
<Text style={{fontSize:20}}>Kaka Biryani</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:4.4 ★★★★</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={yy} style ={{height:200,width:300,marginTop:10}}></Image>
<Text style={{fontSize:20}}>Angrezi sawayan</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:1.0 ★</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={zz} style ={{height:200,width:300,marginTop:10}}></Image>
<Text style={{fontSize:20}}>Karachi Keema</Text>
<Text style={{marginTop:5,fontWeight:'bold'}}>Rating:3.4 ★★★</Text>
</TouchableOpacity>


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

 