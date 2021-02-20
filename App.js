import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hewwwo!!!</Text>
      <StatusBar style="auto" />
    <TouchableOpacity onPress={() =>  console.log("presse")}>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://media.istockphoto.com/photos/single-tree-with-clipping-path-and-alpha-channel-picture-id1147108546?k=6&m=1147108546&s=612x612&w=0&h=NyuGEept3ua05KLTqJaoqPyCIGD9vI_NQhFsuhBArIY="}}
      />
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
