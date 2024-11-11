import { Image, StyleSheet, View, Text } from 'react-native'
import { Wallpaper } from '@/hooks/useWallpaper'
import React from 'react'

export default function ImageCard({wallpaper}:{
  wallpaper : Wallpaper
}) {
  return (
    <View>
      <Image source = {{uri: wallpaper.url}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
    height:300
  }
})