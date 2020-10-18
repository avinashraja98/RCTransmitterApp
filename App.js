import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, PanResponder, Animated } from 'react-native';
import Draggable from "./Draggable";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.leftStick}>
        <Draggable />
      </View>

      <View style={styles.midContainer}>
        <View style={styles.armContainer}></View>
        <View style={styles.statusContainer}></View>
      </View>

      <View style={styles.rightStick}>
        <Draggable />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  midContainer: {
    backgroundColor: "#E6E6E6",
    height: "60%",
    aspectRatio: 0.75,
    alignSelf: "flex-start",
    marginTop: "10%",

  },
  armContainer: {
    flex: 0.5,
    backgroundColor: "rgba(222, 222, 222,1)"
  },
  statusContainer: {
    flex: 0.5,
    backgroundColor: "rgba(204, 204, 204,1)"
  },
  leftStick: {
    backgroundColor: "#E6E6E6",
    height: '50%',
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  rightStick: {
    backgroundColor: "#E6E6E6",
    height: '50%',
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});