import { SplitView } from '@/components/SplitView';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpaper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, useColorScheme } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedSafeAreaView style={styles.container}>
        <Tab.Navigator style={{
            flex: 1,
        }} screenOptions={{
            tabBarActiveTintColor: Colors[theme].tint,
            tabBarStyle: {
                backgroundColor: Colors[theme].background,
            }, 
            tabBarIndicatorStyle: {
                backgroundColor: Colors[theme].background,
                height: 5
            }
        }}>
            <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Liked" component={LikedScreen} />
            <Tab.Screen name="Suggested" component={SuggestedScreen} />
        </Tab.Navigator>
    </ThemedSafeAreaView>
  );
}

function LibraryScreen() {
    const walletpapers = useLibraryWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={walletpapers} />
    </ThemedView>
}

function LikedScreen() {
    const walletpapers = useLikedWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={walletpapers} />
    </ThemedView>
}

function SuggestedScreen() {
    const walletpapers = useSuggestedWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={walletpapers} />
    </ThemedView>
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})





// https://ideogram.ai/assets/progressive-image/balanced/response/IHIveu1cQiO57AyfnoQNCw
// https://ideogram.ai/assets/progressive-image/balanced/response/cY6XTuesToqrIRmVTasL7w
// https://ideogram.ai/assets/progressive-image/balanced/response/kPXVENarTgekkIU6S3WEQw
// https://ideogram.ai/assets/progressive-image/balanced/response/SnNUnDJzT7-MNWdcqCtW1g



// import { StyleSheet, Image,Text, SafeAreaView, View } from 'react-native';
// import React from 'react';
// import { Link } from 'expo-router';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import useWallpaper, { Wallpaper } from '@/hooks/useWallpaper';
// import ImageCard from '@/components/ImageCard';

// export default function explore() {
//   const wallpapers = useWallpaper();
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* Add padding at the top to prevent merging with the top icons */}
//       <ParallaxScrollView 
//         headerBackgroundColor={{dark:"black",light:"white"}} 
//         headerImage={<Image style={{flex:1}} source={{uri: wallpapers[0]?.url ?? "" }}/>}>
//           {/* {wallpapers.map((w:Wallpaper)=> <ImageCard wallpaper = {w} />)} */}
//           <View style={styles.imageListContainer}>
//             {wallpapers.map((w: Wallpaper) => (
//               <ImageCard key={w.url} wallpaper={w} />
//             ))}
//           </View>
//           <View style={styles.imageListContainer}>
//             {wallpapers.map((w: Wallpaper) => (
//               <ImageCard key={w.url} wallpaper={w} />
//             ))}
//           </View>
//         <Text>Explore Page</Text>
//       </ParallaxScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   imageListContainer:{
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   }
// })

// --------------------------------------------------------------------------------------------

// export default function explore() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* Add padding at the top to prevent merging with the top icons */}
//       <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Explore page</Text>
//         <Link href="/accountInfo">
//           <Text style={{ marginTop: 10 }}>Take to Account Info page</Text>
//         </Link>
//       </View>
//     </SafeAreaView>
//   );
// }

