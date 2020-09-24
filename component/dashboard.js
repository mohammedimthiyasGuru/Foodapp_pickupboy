import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,Dimensions
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from '../component/menu';
import notification from '../component/notification'
const image = require('../assets/sample.jpeg');
import Carousel from 'react-native-banner-carousel';
import { ScrollView } from 'react-native-gesture-handler';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [
    "http://placehold.it/120x120&text=image1",
    "http://placehold.it/120x120&text=image2",
    "http://placehold.it/120x120&text=image1"
];
 
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item => this.callmenu(item)

  callmenu(data){
    this.setState({
      isOpen: false,
      selectedItem: data,
    });
    console.log(data)
    if (data == "Notifications"){
      this.props.navigation.navigate('notification')
    }
  }
    componentDidMount() {
      console.disableYellowBox = true;
     }
     renderPage(image, index) {
      return (
          <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
          </View>
      );
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SafeAreaView>
          <View style={{width:"100%",height:"100%"}}></View>
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}
        >
          <View style={styles.container}>
          <View style={{width:"100%",height:60,backgroundColor:'gray',marginTop:65}}>
          <TouchableOpacity
            onPress={this.toggle}
            style={styles.button}
          >
            <Image
              source={image}
              style={{ width: 52, height: 52 }}
            />
          </TouchableOpacity>
          </View>
          <View style={{width:"100%",height:"80%"}}>
            <ScrollView>
            <View style={{width:"100%",height:260}}>
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
                <View style={{width:"100%",height:130, marginTop: 10}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"1%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 1 </Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"3.5%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 2 </Text>
               </TouchableOpacity>
          </View>
        </View>
        <View style={{width:"100%",height:130, marginTop: 10}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"1%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 1 </Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"3.5%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 2 </Text>
               </TouchableOpacity>
          </View>
        </View>
        <View style={{width:"100%",height:130, marginTop: 10}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"1%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 1 </Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"3.5%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 2 </Text>
               </TouchableOpacity>
          </View>
        </View>
        <View style={{width:"100%",height:130, marginTop: 10}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"1%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 1 </Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"3.5%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 2 </Text>
               </TouchableOpacity>
          </View>
        </View>
        <View style={{width:"100%",height:130, marginTop: 10}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"1%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 1 </Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"3.5%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 2 </Text>
               </TouchableOpacity>
          </View>
        </View>
        <View style={{width:"100%",height:130, marginTop: 10}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"1%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 1 </Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={{width:"45%",height:"90%",backgroundColor:'white',marginLeft:"3.5%",borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,  
    elevation: 5,alignItems:'center',justifyContent:'center'}} >
    <Image style={{width: "30%",height: "40%"}} source={image} />
    <Text>  </Text>
    <Text style={{fontSize:14,fontWeight:'300'}}> Title 2 </Text>
               </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
        </View>
          </View>
        </SideMenu>
        <View style={{width:"100%",height:60,backgroundColor:'gray'}}>
          <TouchableOpacity
            onPress={this.toggle}
            style={styles.button}
          >
            <Image
              source={image}
              style={{ width: 52, height: 52 }}
            />
          </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
}

