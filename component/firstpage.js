import React, {Component,Fragment,useEffect} from 'react';
import {
  SafeAreaView,
  View,Image,StyleSheet,Alert,Text
} from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import smapleimg from '../assets/sample.jpeg'
import { TextInput } from 'react-native-gesture-handler';
import styles from '../Style/styles'
import dashboard from '../component/dashboard'
import notification from '../component/notification'
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
        {/* center Logo deisgn  */}
        </SafeAreaView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    firstpage: firstpage,
    dashboard: dashboard,
    notification: notification
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


