
// import React, {Component,Fragment,useEffect} from 'react';
// import {
//   SafeAreaView,
//   View,Image,StyleSheet,Alert,Text
// } from 'react-native';
// import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
// import { createStackNavigator } from 'react-navigation-stack';
// import AsyncStorage from '@react-native-community/async-storage';
// import smapleimg from '../assets/sample.jpeg'
// import { TextInput } from 'react-native-gesture-handler';
// import styles from '../Style/styles'
// import dashboard from '../component/dashboard'
// import notification from '../component/notification'
// import firstpage from '../component/firstpage'
// export class welcomepage extends Component {
//   interval = setTimeout(() => {
//     if (this.state.loginstatus != "true") {
//     //   this.props.navigation.navigate('loginpage')
//     console.log("moving to page")
//     }else{
//     //   this.props.navigation.navigate('Dashboard')
//     console.log("moving to page")
//     }
    
// }, 5000);
// state = {
//   loginstatus : ""
// }



// componentDidMount(){
//     console.log("moving to page")
// }


//   render() {
//     return (
//       <SafeAreaView>
//         {/* center Logo deisgn  */}
//             <View style={styles.mainview}>
//                  <View style={styles.submenu}>
//                      <Text style={styles.textlabelsize}>Text 1</Text>
//                      <TextInput style={styles.textinputsize}/>
//                      <Text style={styles.textlabelsize}>Text 2</Text>
//                      <TextInput style={styles.textinputsize}/>
//                      <View style={styles.borderline}/>
//                      <View style={styles.subviewdummyview}></View>
//                      <View style={styles.buttonstylelarge}>
//                          <Text style={styles.textsizetofit,styles.textcenter} onPress={()=>this.props.navigation.navigate('dashboard')}>submit</Text>
//                      </View>
//                      <View style={styles.subviewdummyview}></View>
//                      <View style={styles.lengthbuttonstyle}>
//                          <Text style={styles.textsizetofit, styles.textAlignright}>Forgot Password ?</Text>
//                      </View>
//                      <TextInput/>
//                      </View>
//                      <View style={styles.mainviewdummyview}></View>
//                      <View style={styles.buttonstylesmall}>
//                          <Text style={styles.textsizetofit, styles.textcenter}>Signup</Text>
//                      </View>
//                      <View style={styles.mainviewdummyview}></View>
//                      <View style={styles.socialbuttonstyle}>
//                          <Text style={styles.socialtextfit}>Google</Text>
//                          <Text style={styles.socialtextfit}>Facebook</Text>
//                      </View>
//                      <View style={styles.mainviewdummyview}></View>
//             </View>
//         {/* center Logo deisgn  */}
//         </SafeAreaView>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     firstpage: firstpage,
//     dashboard: dashboard,
//     notification: notification,
//     welcomepage:welcomepage
//   }
//   ,{
//     defaultNavigationOptions: {
//       headerShown: false,
//       gestureEnabled:false
//     }},
    
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
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
export default class welcomepage extends Component {
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
     <View style={styles.mainview}>
                 <View style={styles.submenu}>
                      <Text style={styles.textlabelsize}>Text 1</Text>
                      <TextInput style={styles.textinputsize}/>
                      <Text style={styles.textlabelsize}>Text 2</Text>
                      <TextInput style={styles.textinputsize}/>
                      <View style={styles.borderline}/>
                      <View style={styles.subviewdummyview}></View>
                      <View style={styles.buttonstylelarge}>
                          <Text style={styles.textsizetofit,styles.textcenter} onPress={()=>this.props.navigation.navigate('dashboard')}>submit</Text>
                      </View>
                      <View style={styles.subviewdummyview}></View>
                      <View style={styles.lengthbuttonstyle}>
                          <Text style={styles.textsizetofit, styles.textAlignright}>Forgot Password ?</Text>
                      </View>
                      <TextInput/>
                      </View>
                      <View style={styles.mainviewdummyview}></View>
                      <View style={styles.buttonstylesmall}>
                          <Text style={styles.textsizetofit, styles.textcenter}>Signup</Text>
                      </View>
                      <View style={styles.mainviewdummyview}></View>
                      <View style={styles.socialbuttonstyle}>
                          <Text style={styles.socialtextfit}>Google</Text>
                          <Text style={styles.socialtextfit}>Facebook</Text>
                      </View>
                      <View style={styles.mainviewdummyview}></View>
             </View>
      </SafeAreaView>
    );
  }
}


