/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

      
const styles = StyleSheet.create({
  colorBlue:{
    backgroundColor:'powderblue',
  },
 foreColor:{
   color:'pink',
   fontSize:30,
 }
});

export default class Style1 extends Component {

  render() {
    return(
      <View style={styles.colorBlue}>
      
      <Text style={styles.foreColor}>Hi ..With Color</Text>
      <Text>Hello... without color</Text>
      </View>
    )
  }
}
