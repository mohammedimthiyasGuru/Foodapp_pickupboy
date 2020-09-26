import React, {Component,Fragment,useEffect} from 'react';
import {
  SafeAreaView,
  View,Image,StyleSheet,Alert,Text
} from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import smapleimg from '../assets/sample.jpeg'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Style/styles'
import dashboard from '../component/dashboard'
import notification from '../component/notification'
import welcomepage from '../component/welcomepage'
import seconddemo from '../component/seconddemo'
import thirdpage from '../component/thirdpage'
export class firstpage extends Component {
  interval = setTimeout(() => {
    if (this.state.loginstatus != "true") {
    //   this.props.navigation.navigate('loginpage')
    console.log("moving to page")
    }else{
    //   this.props.navigation.navigate('Dashboard')
    console.log("moving to page")
    }
    
}, 5000);
state = {
  loginstatus : ""
}



componentDidMount(){
    console.log("moving to page")
}


  render() {
    return (
      <SafeAreaView>
        {/* center Logo deisgn  */}
            <View style={{width:"100%",height:"100%"},styles.appcolor}>
             <View style={{width:"100%",height:"80%"}}></View>
             <View style={{width:"100%",height:"20%",justifyContent:'center'}}>
                <View style={{width:"100%",height:"30%",backgroundColor:'clear'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <View style={{width:"60%",height:"100%"}}>

                </View>
                <View style={{width:"40%",height:"100%",backgroundColor:'white',borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{width:"100%",height:"100%",justifyContent:'center',alignItems:'center'}}onPress={()=> this.props.navigation.navigate('seconddemo')}>
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

const RootStack = createStackNavigator(
  {
    firstpage: firstpage,
    dashboard: dashboard,
    notification: notification,
    welcomepage: welcomepage,
    seconddemo: seconddemo,
    thirdpage: thirdpage
  }
  ,{
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled:false
    }},
    
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

