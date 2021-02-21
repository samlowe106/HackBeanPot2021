import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import {COLORS} from './colors.js'

import bird_button from './assets/bird_button.png'
import goal_button from './assets/goal_button.png'
import resource_button from './assets/resource_button.png'
import tree_button from './assets/tree_button.png'

export default function App() {
  const [currentPage, setCurrentPage] = useState("tree")
  return (
    <View style={styles.container}>
      <SafeAreaView style = {{ flex : 0, backgroundColor: COLORS.grey_lightest }}></SafeAreaView>
      { currentPage === 'tree' && (
      <SafeAreaView>
        <Text>{currentPage}</Text>
        <StatusBar style="auto"/>
      <TouchableOpacity onPress={() =>  console.log("presse")}>
        <Image source={{
          width: 200,
          height: 300,
          uri: "https://media.istockphoto.com/photos/single-tree-with-clipping-path-and-alpha-channel-picture-id1147108546?k=6&m=1147108546&s=612x612&w=0&h=NyuGEept3ua05KLTqJaoqPyCIGD9vI_NQhFsuhBArIY="
        }}
        />
      </TouchableOpacity>
      </SafeAreaView>
)}
      
    <View style={ styles.rowButtonContainer} >
      <TouchableHighlight onPress={() =>  setCurrentPage("tree")}>
        <View style = {styles.pageLogo}>
         <Image
          style = {styles.pageLogo}
          source = { tree_button }
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() =>  setCurrentPage("goal")}>
        <View style = {styles.pageLogo}>
         <Image
          style = {styles.pageLogo}
          source = { goal_button }
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() =>  setCurrentPage("resource")}>
        <View style = {styles.pageLogo}>
         <Image
          style = {styles.pageLogo}
          source = { resource_button }
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() =>  setCurrentPage("bird")}>
        <View style = {styles.pageLogo}>
         <Image
          style = {styles.pageLogo}
          source = { bird_button }
          />
        </View>
      </TouchableHighlight>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
