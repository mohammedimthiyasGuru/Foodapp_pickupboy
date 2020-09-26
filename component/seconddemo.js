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
  ScrollView
} from 'react-native';
import styles from '../Style/styles'
import Back from '../assets/sample.jpeg'
export default class seconddemo extends Component {
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


  

 
   //Attendance , Tima Table, Result, Exam, Assignment, Announcement, Leave, Librarie Book, Call Request, user details
   componentDidMount() {
   
   }
   
  render() {
    return (
      <SafeAreaView>
      <View style={{width:"100%",height:"100%",backgroundColor:'white'}}>
             <View style={{width:"100%",height:"80%"}}></View>
             <View style={{width:"100%",height:"20%",justifyContent:'center'}}>
                <View style={{width:"100%",height:"30%"}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <View style={{width:"60%",height:"100%"}}>
                </View>
                <View style={{width:"40%",height:"100%",borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#F4AF42'}}>
                    <TouchableOpacity style={{width:"100%",height:"100%",justifyContent:'center',alignItems:'center'},styles.appcolor}onPress={()=> this.props.navigation.navigate('thirdpage')}>
                    <Text style={{fontSize:14,fontWeight:'bold'}}>Next</Text>
                    </TouchableOpacity>
                </View>
                </View>
                
                </View>
             </View>
            </View>
        {/* center Logo deisgn  */}
      </SafeAreaView>
    );
  }
}

