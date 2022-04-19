import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import GamingImg from "../assets/gaming.svg";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function StartScreen({ navigation }) {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>GAMEON</Text>
        </View>
        <View style={styles.imageContainer}>
          <GamingImg width={300} height={300} style={styles.image} />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.button}>
          <Text style={styles.btnText}>Let's begin</Text>
          <MaterialIcon name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: "#20315f",
    fontFamily: "InterBold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    transform: [
      {
        rotate: "-15deg",
      },
    ],
  },
  button: {
    backgroundColor: "#AD40AF",
    padding: 20,
    width: "90%",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "RobotoBoldItalic",
  },
});
