import React, { useCallback, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, Button, useColorScheme, Pressable, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpaper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

export const DownloadPicture = ({ onClose, wallpaper}: {
    onClose: () => void;
    wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? 'light';

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{flex: 1}}>
          <Image style={styles.image} source={{uri: wallpaper.url}} />
          <View style={styles.topbar}>
            <Ionicons
                onPress={onClose}
                name={'close'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
            />
            <View style={styles.topbarInner}>
              <Ionicons
                  name={'heart'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
              />
              <Ionicons
                  name={'share'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                  style={{paddingLeft: 4}}
              />
            </View>
          </View>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </ThemedView>
          <DownloadButton url={wallpaper.url} />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton({ url }: { url: string }) {
  const theme = useColorScheme() ?? 'light';
  return <Pressable onPress={async () => {
    let date = new Date().getTime();
    let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
    
    try {
        await FileSystem.downloadAsync(url, fileUri)
        const response = await MediaLibrary.requestPermissionsAsync(true)
        if (response.granted) {
          MediaLibrary.createAssetAsync(fileUri)
          alert("Image saved")
        } else {
          console.error("permission not granted")
        }
    } catch (err) {
        console.log("FS Err: ", err)
    }
  }} style={{
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 20,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon,
  }}>
    <Ionicons
      name={'download'}
      size={24}
      color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
      style={{paddingRight: 4}}
    />
    <Text style={{
      fontSize: 20,
      color: "white",
      fontWeight: "600",
    }}>Download</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "70%",
    borderRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
  topbarInner: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    width: "100%"
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600"
  }
});









// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

// export const DownloadPicture = (/*adding a prop*/ {onClose}:{ 
//     onClose:()=>void
// })=> {
//   // ref
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // snapPoints define how much of the screen the BottomSheet will occupy
//   const snapPoints = useMemo(() => ['100%', '100%'], []);

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//      // function to open the bottom sheet
//   const openBottomSheet = () => {
//     bottomSheetRef.current?.expand();  // expand the sheet to the first point
//   };

//   // renders
//   return (
//     <View style={styles.container}>
            
//       <BottomSheet
//         onClose={onClose}
//         ref={bottomSheetRef}
//         snapPoints={snapPoints}  // Correctly providing snapPoints
//         onChange={handleSheetChanges}
//         enablePanDownToClose={true} // Optional: allows closing the bottom sheet by swiping down
//         handleIndicatorStyle={{height:0}} >

//         <BottomSheetView style={styles.contentContainer}>
//           <Text style={styles.text}>Awesome 🎉</Text>
//         </BottomSheetView>
//       </BottomSheet>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,  // Adjust text size for visibility
//     color: 'black',
//   }
// });

// export default DownloadPicture;