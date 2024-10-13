import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, {BottomSheetModalProvider, BottomSheetView} from '@gorhom/bottom-sheet';

export const DownloadPicture = (/*adding a prop*/ {onClose}:{ 
    onClose:()=>void
})=> {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snapPoints define how much of the screen the BottomSheet will occupy
  const snapPoints = useMemo(() => ['100%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

     // function to open the bottom sheet
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();  // expand the sheet to the first point
  };

  // renders
  return (
    <View style={styles.container}>
            
      <BottomSheet
        onClose={onClose}
        ref={bottomSheetRef}
        snapPoints={snapPoints}  // Correctly providing snapPoints
        onChange={handleSheetChanges}
        enablePanDownToClose={true} // Optional: allows closing the bottom sheet by swiping down
        handleIndicatorStyle={{height:0}} >

        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.text}>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,  // Adjust text size for visibility
    color: 'black',
  }
});

export default DownloadPicture;