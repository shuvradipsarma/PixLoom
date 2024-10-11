import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' , headerShown:false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'For You',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}







/*
Layout page is fixed/static for all pages
i.e bottom bar layout(shows on screen) will be present in all pages

content of index page will be rendered below or above the layout designed
in _layout page. In our case _layout is bottom bar hence everything 
in index.jsx shall render above it 
*/


// import { View, Text } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { Link, Slot } from 'expo-router'

// export default function Layout() {
//   return (

//     <SafeAreaView>
//        {/* page's content is rendered(i.e on clicking any of 3 buttons)above the 3 tabs on screen  */}
       
//       <Slot/>
//       <Link href={"/account"}>
//         <Text>Take me to account page</Text>
//       </Link>

//       <Link href={"/explore"}>
//         <Text>Take me to explore page</Text>
//       </Link>

//         {/* "/" -> refers to index.tsx file route  */}

//       <Link href={"/"}>
//         <Text>Take me to for you page</Text>
//       </Link>
      
//     </SafeAreaView>    
//   )
// }

