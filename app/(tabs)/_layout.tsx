import React from 'react'
import { Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import TabBar from '../components/TabBar'

const layout = () => {
    return (
    <SafeAreaView style={{ flex: 1 }}>
        <Tabs tabBar={(props) => <TabBar {...props} />}>
          <Tabs.Screen name="index" options={{ title: 'HOME' }} />
          <Tabs.Screen name="explore" options={{ title: 'EXPLORE' }} />
          <Tabs.Screen name="account" options={{ title: 'ACCOUNT' }} />
        </Tabs>
    </SafeAreaView>
      
    )
}

export default layout

/*
return (
<Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    <Tabs.Screen
    name="index"
    options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
    }}
    />
    <Tabs.Screen
    name="account"
    options={{
        title: 'Account',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
    }}
    />
    <Tabs.Screen
    name="explore"
    options={{
        title: 'Explore',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
    }}
    />
</Tabs>
)
*/