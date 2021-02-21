import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "./colors.js";
import styles from "./styles.js";

import bird_button from "./assets/bird_button.png";
import goal_button from "./assets/goal_button.png";
import resource_button from "./assets/resource_button.png";
import tree_button from "./assets/tree_button.png";

export default function Tree() {
  return (
    <SafeAreaView>
      <Text>hewwwo!!!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => console.log("presse")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri:
              "https://media.istockphoto.com/photos/single-tree-with-clipping-path-and-alpha-channel-picture-id1147108546?k=6&m=1147108546&s=612x612&w=0&h=NyuGEept3ua05KLTqJaoqPyCIGD9vI_NQhFsuhBArIY=",
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
