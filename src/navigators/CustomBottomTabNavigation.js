import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomBottomTabNavigation() {
    return (
        <View style={styles.mainContainer}>
            <View></View>
            <LinearGradient colors={["", "#131313"]} start={{}} style={styles.bottomTab}>
                
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#121212",
        flex: 1
    },
    bottomTab: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%"
    }
});