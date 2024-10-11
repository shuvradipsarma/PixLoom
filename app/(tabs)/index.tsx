import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen()
{
    return(
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}
function SettingsScreen(){
    return(
        <View>
            <Text>Settings Screen</Text>
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