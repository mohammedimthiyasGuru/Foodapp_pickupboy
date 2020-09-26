/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
//import rect in our project
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Text, Platform, Alert, TextInput,
  ScrollView,Dimensions
} from 'react-native';
import styles from '../Style/styles'
import Back from '../assets/sample.jpeg'

import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = "100%";
 
const images = [
    "http://placehold.it/120x120&text=image1",
    "http://placehold.it/120x120&text=image2",
    "http://placehold.it/120x120&text=image1"
];

export default class thirdpage extends Component {
    
  constructor() {
    super();
    this.state = {
      checkdelete: false,
      checkaddaction: false,
      usertype:"",
      netchk: -1,
      logindata: null,
      userid:"",
      authenToken:"",
      loginload: -1,
      loadstatus: true,
      selecteddatelist : ["data1","data2","data3","data4","data5","data6"],
      arrayholder:[],
      };
  }

  checkconnection(){
    NetInfo.fetch().then(state => {
      console.log(state.isConnected)
      if (state.isConnected){
        console.log("connection",-1)
        this.setState({
          netchk: -1
        })
      }else{
        console.log("not connection",1)
        this.setState({
          netchk: 1
        })
      }
       }); 
  }




  renderPage(image, index) {
    return (
        <View key={index}>
            <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
        </View>
    );
}

  

 
   //Attendance , Tima Table, Result, Exam, Assignment, Announcement, Leave, Librarie Book, Call Request, user details
   componentDidMount() {
        
   }
   
  render() {
    return (
      <SafeAreaView>
       <View style={{width:"100%",height:"100%"},styles.appcolor}>
             <View style={{width:"100%",height:"90%"}}>
             <View style={{width:"100%",height: "100%"}}>
          <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
                </View>
             </View>
             <View style={{width:"100%",height:"10%",justifyContent:'center',backgroundColor:'white'}}>
                <View style={{width:"100%",height:"50%",backgroundColor:'clear',alignItems:'center',justifyContent:'center'}}>
                <View style={{width:"40%",height:"100%",borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#F4AF42'}}>
                    <TouchableOpacity style={{width:"100%",height:"100%",justifyContent:'center',alignItems:'center'},styles.appcolor}onPress={()=> this.props.navigation.navigate('welcomepage')}>
                    <Text style={{fontSize:14,fontWeight:'bold'}}>Next</Text>
                    </TouchableOpacity>
                </View>
                
                </View>
             </View>
            </View>
        {/* center Logo deisgn  */}
      </SafeAreaView>
    );
  }
}

