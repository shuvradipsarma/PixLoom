
import { StyleSheet, Dimensions, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWallpapers } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";
import Carousel from 'react-native-reanimated-carousel';
import { useState } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import React from "react";

const TOPBAR_HEIGHT = 250;

export default function explore() {
    const wallpapers = useWallpapers();
    const width = Dimensions.get('window').width;
    const [yOffset, setScrollY] = useState(0);
    const carouselItems = useCarousel();

    const headerAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(yOffset, [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT], [1.5, 1, 1]),
          },
        ],
      };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(yOffset, [-TOPBAR_HEIGHT, TOPBAR_HEIGHT / 2, TOPBAR_HEIGHT], [1, 1, 0]),
      };
    });

    return <ThemedSafeAreaView style={{flex: 1}}>
      <Animated.View style={[{height: Math.max(0, TOPBAR_HEIGHT - yOffset)}, headerAnimatedStyle]}>
        <Carousel
          width={width}
          data={carouselItems}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ index }) => (
            <>
              <View
                style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                }}
              >
                <Image source={{uri: carouselItems[index].image}} style={{height: TOPBAR_HEIGHT}} />
              </View>

              <LinearGradient colors={['transparent', 'black']} style={{flex: 1, position: "absolute", zIndex: 10, height: TOPBAR_HEIGHT / 2, width: "100%", bottom: 0}}>
                <Animated.View style={textAnimatedStyle}>
                  <Text style={[{color: "white", paddingTop: TOPBAR_HEIGHT / 3, textAlign: "center", fontSize: 30, fontWeight: "600"}]}>{carouselItems[index].title}</Text>
                </Animated.View>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>
      <View style={{borderRadius: 20}}>
        <SplitView onScroll={(yOffset) => {
          setScrollY(yOffset)
        }} wallpapers={wallpapers} />
      </View>
    </ThemedSafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 10
    },
    imageContainer: {
        paddingVertical: 10
    }
})










// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { View,Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Tab = createMaterialTopTabNavigator();

// export default function ForYou() {
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//           <Tab.Navigator>
//             <Tab.Screen name="Suggested" component={SuggestedScreen} />
//             <Tab.Screen name="Liked" component={LikedScreen} />
//             <Tab.Screen name="Library" component={LibraryScreen} />
//           </Tab.Navigator>
//         </SafeAreaView>
//     );
    
// }

// function SuggestedScreen()
// {
//     return(
//         <View>
//             <Text>Suggested Screen</Text>
//         </View>
//     )
// }
// function LikedScreen()
// {
//     return(
//         <View>
//             <Text>Liked Screen</Text>
//         </View>
//     )
// }

// function LibraryScreen()
// {
//     return (
//         <View>
//             <Text>Library Screen</Text>
//         </View>
//     )
// }







/*
By default index.jsx page will render since its the entry point
of the application.
In our case we want the content of For You page(For you tab)
is rendered first on screen on opening the application.
*/

// import { View, Text, SafeAreaView } from 'react-native'
// import React from 'react'
// import { Link } from 'expo-router'

// export default function foryou() {
//   return (
//     <SafeAreaView>
//         <Text>For you page(Home)</Text>  
//         <Link href={"/library"}>
//             <Text>Go to Library Page</Text>
//         </Link>
//         <Link href={"/liked"}>
//             <Text>Go to Liked Page</Text>
//         </Link>  
//         <Link href={"/suggested"}>
//             <Text>Go to Suggested Page</Text>
//         </Link>  
//     </SafeAreaView>
//   )
// }