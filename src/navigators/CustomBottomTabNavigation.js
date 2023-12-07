import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../screens/Home';
import Search from '../screens/Search';
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function CustomBottomTabNavigation() {
    const [screen, setScreen] = useState(<Home/>)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.component}>
                {screen}
            </View>
            <View style={styles.ausioPlayer}>
                
            </View>
            <LinearGradient colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"]} locations={[0, 0.1, 0.4, 0.9]} start={{ x: 0.5, y: 0.1 }} style={styles.bottomTab}>
                <View style={styles.tabContainer}>
                    <IonIcon style={styles.activeBar} name='home-outline' size={30} />
                    <Text style={{...styles.activeBar, ...styles.tabText}}>Home</Text>
                </View>
                <View style={styles.tabContainer}>
                    <IonIcon style={styles.inactiveBar} name='search-outline' size={30} />
                    <Text style={{...styles.inactiveBar, ...styles.tabText}}>Search</Text>
                </View>
                <View style={styles.tabContainer}>
                    <IonIcon style={styles.inactiveBar} name='musical-notes-outline' size={30} />
                    <Text style={{...styles.inactiveBar, ...styles.tabText}}>Your library</Text>
                </View>
                <View style={styles.tabContainer}>
                    <FontAwesomeIcon style={styles.inactiveBar} name='spotify' size={32} />
                    <Text style={{...styles.inactiveBar, ...styles.tabText}}>Premium</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#121212",
        flex: 1
    },
    component: {
        flex: 1
    },
    ausioPlayer: {
        position: "absolute",
        bottom: 75,
        left: 0,
        width: "100%",
        height: 75,
        flexDirection: "row",
        alignItems: 'center',
    },
    bottomTab: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 75,
        flexDirection: "row",
        alignItems: 'center',
    },
    tabContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        gap: 2
    },
    tabText: {
        fontSize: 11,
        letterSpacing: 0.5
    },
    inactiveBar: {
        color: "#B1B7B2"
    },
    activeBar: {
        color: "#FFFFFF"
    }
});