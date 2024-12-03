import { DownloadPicture } from '@/components/BottomSheet';
import { useWallpapers } from '@/hooks/useWallpaper';
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {
    const walletpapers = useWallpapers();
    return <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown: false
        }} >
            {/* <Stack.Screen name="(nobottombar)/accountinfo" options={{ headerShown: true, headerTitle: "Account info", headerBackTitle: "Go Back" }} /> */}
        </Stack>
    </GestureHandlerRootView>
}



// import { Colors } from '@/constants/Colors';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Tabs } from 'expo-router';
// import { useColorScheme } from 'react-native';

// export default function TabLayout() {
//   const theme = useColorScheme() ?? "light";

//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: Colors[theme].tint, headerShown: false, tabBarStyle: {
//       backgroundColor: Colors[theme].background
//     }}}>
//       <Tabs.Screen
//         name="foryou"
//         options={{
//           title: 'For you',
//           tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <FontAwesome size={28} name="feed" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="account"
//         options={{
//           title: 'Account',
//           tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
//         }}
//       />

//     </Tabs>
//   );
// }

















// import { Stack } from "expo-router";
// import React from "react";
// import { GestureHandlerRootView } from "react-native-gesture-handler";


// export default function LayoutRoot() {
//   return (
//     <GestureHandlerRootView>
//         <Stack screenOptions={{
//             headerShown:false
//         }}>
//           <Stack.Screen name="(nobottombar)/accountInfo" options={{ headerShown: true ,
//             headerTitle: 'Account Info', headerBackTitle:"Go Back"}} />
//         </Stack>
//     </GestureHandlerRootView>
//   )
// }