
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
const Styles = StyleSheet.create({
    // view
    appcolor:{
      backgroundColor:'#F4AF42'
    },
    justifycenter:{
    justifyContent:'center'
    },
    alignItemscenter:{
        alignItems:'center'
    },
    flexdirrow:{
        flexDirection:'row'
    },
    flexdircolumn:{
        flexDirection:'column'
    },
    mainview: {
        width: "100%",
        height:"100%",
        backgroundColor:'white',
        alignItems: "center",
      },
      submenu:{
         width: "80%",
         height: "30%",
         marginTop:"50%",
         backgroundColor:'gray',
         alignItems:'center'
      },
      // view
      // bottom line 
      borderline:{
        width: "90%",
        height: "0.1%",
        backgroundColor:'black',
      },
       // bottom line
         // bottom Space
       subviewdummyview:{
        width: "90%",
        height: "10%",
      }, 
      mainviewdummyview:{
        width: "90%",
        height: "5%",
      }, 

        // bottom Space
       // Text
      textinputsize:{
        width: "90%",
        height: "13%",
        marginTop:"1%",
        borderWidth:0.5,
      },
      textlabelsize:{
        width: "90%",
        height: "9%",
        marginTop:"1%"
      },
      // Text
      // Button Style
      buttonstyleXlarge:{
        width: "20%",
        height: "15%",
        backgroundColor:'lightgray',
        alignItems:'center',
        justifyContent:'center'
      },
      buttonstylelarge:{
        width: "20%",
        height: "8%",
        backgroundColor:'lightgray',
        alignItems:'center',
        justifyContent:'center'
      },
      buttonstylesmall:{
        width: "20%",
        height: "5%",
        backgroundColor:'lightgray',
        alignItems:'center',
        justifyContent:'center'
      },
      lengthbuttonstyle:{
        width: "95%",
        height: "9%",
        backgroundColor:'lightgray'
      },
      socialbuttonstyle:{
        width: "95%",
        height: "5%",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'lightgray'
      },
       // Button Style
       // Text style
      textcenter:{
          textAlign:"center"
      },
      textAlignleft:{
          textAlign:'left'
      },
      textAlignright:{
        textAlign:'right',
        fontWeight:'bold'
      },
      textsizetofit:{
        width:"100%",
        height:"100%"
    },
    socialtextfit:{
      width:"50%",
        height:"50%",
        textAlign:'center'
    }
 })

export default Styles;