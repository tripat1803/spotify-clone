import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import IonIcon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

export default function AudioPlayer() {
    let navigator = useNavigation();
    const [play, setPlay] = useState(false);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.appBar}>
                <Pressable onPress={() => {
                    navigator.goBack();
                }}>
                    <IonIcon name='chevron-down-outline' size={24} />
                </Pressable>
                <View style={{
                    alignItems: "center"
                }}>
                    <Text style={{
                        letterSpacing: 0.2,
                        fontSize: 12
                    }}>PLAYING FROM PLAYLIST</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "600",
                        letterSpacing: 0.2
                    }}>Daily Mix 2</Text>
                </View>
                <IonIcon name='ellipsis-vertical' size={22} />
            </View>
            <View style={styles.bodyContainer}>
                <Image style={styles.image} source={{ uri: "https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg" }} />
                <View style={styles.musicContainer}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "600"
                        }}>Alag Aasmaan</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "rgba(255,255,255,0.5)"
                        }}>Anuv Jain</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        gap: 4
                    }}>
                        <Slider thumbTintColor='#fff' maximumTrackTintColor='#fff' minimumTrackTintColor='#fff' style={styles.slider} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            gap: 8
                        }}>
                            <Text>3:33</Text>
                            <Text>3:55</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: -16
                    }}>
                        <AntDesign style={styles.musicIcons} name='pluscircleo' size={24} />
                        <Fontisto style={styles.musicIcons} name='step-backwrad' size={26} />
                        {
                            play ? <Pressable onPress={() => {
                                setPlay(false);
                            }}>
                                <MaterialIcons style={styles.musicIcons} name='play-circle' size={80} /> 
                            </Pressable> : <Pressable onPress={() => {
                                setPlay(true);
                            }}>
                                <MaterialIcons style={styles.musicIcons} name='pause-circle' size={80} />
                            </Pressable>
                        }
                        <Fontisto style={styles.musicIcons} name='step-forward' size={26} />
                        <AntDesign style={styles.musicIcons} name='minuscircleo' size={24} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#121212",
        paddingHorizontal: 16
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12
    },
    bodyContainer: {
        flex: 1,
        paddingHorizontal: 12,
        flexDirection: "column",
        gap: 42
    },
    image: {
        width: "100%",
        height: 340,
        objectFit: "cover",
        borderRadius: 8
    },
    musicContainer: {
        flexDirection: "column",
        gap: 24
    },
    slider: {
        width: "100%",
    },
    musicIcons: {
        color: "white"
    }
});