import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DisplayItems from '../components/Home/DisplayItems';
import Recents from '../components/Home/Recents';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.mainContainer}>
      <View style={styles.dataContainer}>
        <Recents/>
      </View>
      <View style={styles.dataContainer}>
        <DisplayItems  title={"Recently Played"}/>
        <DisplayItems  title={"Recently Played"}/>
        <DisplayItems  title={"Recently Played"}/>
        <DisplayItems  title={"Recently Played"}/>
        <DisplayItems  title={"Recently Played"}/>
        <DisplayItems  title={"Recently Played"}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#121212",
    paddingTop: 32,
    paddingBottom: 75,
    paddingHorizontal: 16,
    flexDirection: 'column',
    gap: 18
  },
  dataContainer: {
    flexDirection: "column",
    gap: 24,
    flex: 1
  }
});