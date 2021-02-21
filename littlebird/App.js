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
import tree from "./tree.js";

import bird_button from "./assets/bird_button.png";
import goal_button from "./assets/goal_button.png";
import resource_button from "./assets/resource_button.png";
import tree_button from "./assets/tree_button.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState("tree");
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: COLORS.grey_lightest }}
      ></SafeAreaView>
      {currentPage === "tree" && tree()}

      <View style={styles.rowButtonContainer}>
        <TouchableHighlight onPress={() => setCurrentPage("tree")}>
          <View style={styles.pageLogo}>
            <Image style={styles.pageLogo} source={tree_button} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setCurrentPage("goal")}>
          <View style={styles.pageLogo}>
            <Image style={styles.pageLogo} source={goal_button} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setCurrentPage("resource")}>
          <View style={styles.pageLogo}>
            <Image style={styles.pageLogo} source={resource_button} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setCurrentPage("bird")}>
          <View style={styles.pageLogo}>
            <Image style={styles.pageLogo} source={bird_button} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
