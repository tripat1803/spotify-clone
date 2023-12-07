import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, ScrollView, Text } from 'react-native';
import { Image, StyleSheet, View } from 'react-native'

export default function DisplayItems({ title, items }) {
    let navigator = useNavigation();
    return (
        <View style={styles.main}>
            <Text style={{
                fontSize: 22,
                fontWeight: "600"
            }}>{title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
                <Pressable onPress={() => {
                    navigator.push("Audio");
                }} style={{
                    width: 160
                }}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: "https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg" }} />
                        <Text style={styles.cardText}>Ed Sheeran, Katy Perry, Pitbull and more</Text>
                    </View>
                </Pressable>
                <Pressable style={{
                    width: 160
                }}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: "https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg" }} />
                        <Text style={styles.cardText}>Ed Sheeran, Katy Perry, Pitbull and more</Text>
                    </View>
                </Pressable>
                <Pressable style={{
                    width: 160
                }}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: "https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg" }} />
                        <Text style={styles.cardText}>Ed Sheeran, Katy Perry, Pitbull and more</Text>
                    </View>
                </Pressable>
                <Pressable style={{
                    width: 160
                }}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: "https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg" }} />
                        <Text style={styles.cardText}>Ed Sheeran, Katy Perry, Pitbull and more</Text>
                    </View>
                </Pressable>
                <Pressable style={{
                    width: 160
                }}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: "https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg" }} />
                        <Text style={styles.cardText}>Ed Sheeran, Katy Perry, Pitbull and more</Text>
                    </View>
                </Pressable>
                <Pressable style={{
                    width: 160
                }}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: "https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg" }} />
                        <Text style={styles.cardText}>Ed Sheeran, Katy Perry, Pitbull and more</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        gap: 16
    },
    image: {
        width: 160,
        height: 150,
        objectFit: "cover"
    },
    list: {
        flexDirection: "row",
        gap: 12,
    },
    card: {
        width: "100%",
        flexDirection: "column",
        gap: 8
    },
    cardText: {
        color: "#A8A8A8",
        fontSize: 12
    }
});