import React, {useState} from 'react';

import { StyleSheet } from "react-native"
import {COLORS} from './colors.js'


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.grey_lightest,
      flexDirection:'column',
      justifyContent: 'space-between',
    }, 
    rowButtonContainer: {
      backgroundColor : COLORS.grey_light,
      height:84,
      flexDirection : 'row',
      alignItems : "center",
      justifyContent : "space-around"
    },
    rowButton: {
      flexDirection : 'column'
    },
    buttonText: {
      //fontFamily : "Roboto",
      fontSize : 12,
      textAlign : 'center',
    },
    pageLogo: {
      width : 54,
      height : 54
    }
  });