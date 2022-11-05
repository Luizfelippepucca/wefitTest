import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Home from "./src/Home";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}
