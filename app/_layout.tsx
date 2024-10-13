import { Slot } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function LayoutRoot() {
  return (
    <GestureHandlerRootView>
        <Slot/>
    </GestureHandlerRootView>
  )
}