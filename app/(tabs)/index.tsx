import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (

    <Tab.Navigator>
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Library" component={LibraryScreen}/>
    </Tab.Navigator>
    
    
  );
}

function SuggestedScreen()
{
    return(
        <View>
            <Text>Suggested Screen</Text>
        </View>
    )
}
function LikedScreen()
{
    return(
        <View>
            <Text>Liked Screen</Text>
        </View>
    )
}

function LibraryScreen()
{
    return (
        <View>
            <Text>Library Screen</Text>
        </View>
    )
}







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