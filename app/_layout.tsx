import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function LayoutRoot() {
  return (
    <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown:false
        }}>
          <Stack.Screen name="(nobottombar)/accountInfo" options={{ headerShown: true ,
            headerTitle: 'Account Info', headerBackTitle:"Go Back"}} />
        </Stack>
    </GestureHandlerRootView>
  )
}