import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function RecentsCard({ name, imageUrl }) {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={{
                uri: imageUrl
            }} />
            <View>
                <Text style={styles.cardText}>{name}</Text>
            </View>
        </View>
    )
}

export default function Recents() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <RecentsCard imageUrl={"https://th.bing.com/th/id/OIP.bCOdHGcixJ3c9tC68kUoGQHaHQ?w=198&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7"} name={"Daily Mix 2"} />
                <RecentsCard imageUrl={"https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?pid=ImgDet&rs=1"} name={"Daily Mix 1"} />
                <RecentsCard imageUrl={"https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?pid=ImgDet&rs=1"} name={"Ansh + Tripat"} />
                <RecentsCard imageUrl={"https://th.bing.com/th/id/OIP.NYcrN0NQDDnYb8yIRFfLigHaFQ?pid=ImgDet&rs=1"} name={"Happy Vibes"} />
            </View>
            <View style={styles.row}>
                <RecentsCard imageUrl={"https://freedesignfile.com/upload/2017/07/Red-circles-with-white-background-vector-02.jpg"} name={"yashu + Tripat"} />
                <RecentsCard imageUrl={"https://www.iwmbuzz.com/wp-content/uploads/2020/12/darshan-raval-top-5-hits-you-must-listen-before-the-end-of-2020.jpg"} name={"Feel"} />
                <RecentsCard imageUrl={"https://www.iwmbuzz.com/wp-content/uploads/2020/12/darshan-raval-top-5-hits-you-must-listen-before-the-end-of-2020.jpg"} name={"AG"} />
                <RecentsCard imageUrl={"https://www.iwmbuzz.com/wp-content/uploads/2020/12/darshan-raval-top-5-hits-you-must-listen-before-the-end-of-2020.jpg"} name={"Beast mode"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8
    },
    cardContainer: {
        flexDirection: "row",
        borderRadius: 4,
        overflow: "hidden",
        alignItems: 'center',
        height: 50,
        gap: 10,
        backgroundColor: "rgba(39,41,42,1)",
    },
    cardText: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
        letterSpacing: 0.2
    },
    image: {
        width: 50,
        height: "100%",
        objectFit: "cover"
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        gap: 8
    }
})