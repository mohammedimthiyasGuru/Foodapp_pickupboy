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
import Back from '../assets/sample.jpeg'
export default class notification extends Component {
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
      <View style={{width:"100%",height:"100%"}}>
        <View style={{width:"100%",height:"10%"}}>
          <View style={{flex:1,flexDirection:'row',marginTop:"10%",justifyContent:'center'}}>
          <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={{width: 26,height: 26}}  onPress={()=> this.props.navigation.navigate('dashboard')}>
               <Image style={{width: 26,height: 26,marginLeft:20,marginTop:-10}} source={Back} />
               </TouchableOpacity>
               <Image style={{width: "10%",height: "100%",marginLeft:"3%",marginTop:-10}} />
               <View style={{width: "50%",height: "70%",marginLeft:"3%",justifyContent:'center',marginTop:-10}}>
                    <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}> Notification </Text>
               </View>
               </View>
           </View>
        </View>
        
        <ScrollView>
        <View style={{marginTop:10}}>
              {
                 this.state.selecteddatelist.map((item, index) => (
                  <View  style={{width:"100%",height: 110,alignItems:'center',marginTop:7}}>
                  <View style={{width:"95%",height:"100%",backgroundColor:'white',borderRadius:10,shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 5,  
              elevation: 5}}>
                        <View style={{width:"100%",height:"100%",justifyContent:"center"}}>
                           <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
                                  <View style={{width:"80%",height:"100%",marginLeft:5,justifyContent:"center"}}>
                                  <View style={{flexDirection:'row', alignItems:'center'}}>
                                  <Text style = {styles.lsitusertextstyle}>Tittle</Text>
                                  <Text > : </Text>
                                  <Text adjustsFontSizeToFit style = {{width : "70%",fontSize:12}}>{this.state.selecteddatelist[index]}</Text>
                                  </View>
                                  <View style={{flexDirection:'row', alignItems:'center'}}>
                                  <Text style = {styles.lsitusertextstyle}>Subject</Text>
                                  <Text > : </Text>
                                  <Text adjustsFontSizeToFit style = {{width : "70%",fontSize:12}}>{this.state.selecteddatelist[index]}</Text>
                                  </View>
                                  </View>
                           </View>
                          
                        </View>
                        </View>
                    </View>
                 ))
              }
           </View>
           </ScrollView>
            {
                                    this.state.checkaddaction === true ?
           <ActionButton
  buttonColor="rgba(52, 107, 235,1)"
  onPress={() => this.showalert()}
  /> : null}
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  lsitusertextstyle :{
    width : 75,
    fontWeight:'bold',
    fontSize:12
  },
  flexrow:{
    flex:1,
    flexDirection:'row'
  },
});

