import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function explore() {
  return (
    <SafeAreaView>
        <View>
            <Text>Explore page</Text>
            <Link href={"/accountInfo"}>
                <Text>Take to Account Info page</Text>
            </Link>

        </View>
    </SafeAreaView>
  )
}