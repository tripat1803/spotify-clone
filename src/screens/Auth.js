import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { View } from 'react-native';
import Button from '../components/Button';
import { publicApi } from '../utils/client.utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthState';

export function Signup() {
    let navigator = useNavigation();
    return (
        <KeyboardAvoidingView behavior='height' style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.subContainer1}>
                    <Image style={styles.white_logo} source={require("../assets/logo_white.png")} />
                    <Text style={styles.text}>Millions of songs</Text>
                    <Text style={styles.text}>Free on Spotify.</Text>
                </View>
                <View style={styles.subContainer2}>
                    <TextInput style={styles.input} placeholder='Fullname' />
                    <TextInput style={styles.input} placeholder='Email' />
                    <TextInput secureTextEntry style={styles.input} placeholder='Password' />
                    <Button onPress={() => {
                        navigator.push("Main");
                    }} title={"Signup"} color={"#4CAF50"} />
                </View>
                <View style={styles.callback}>
                    <Text>Already have an account?</Text>
                    <Pressable onPress={() => {
                        navigator.replace("Signin");
                    }}>
                        <Text>Signin</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export function Signin() {

    let auth = useContext(AuthContext);
    const [data, setData] = useState({
        providerId: "",
        password: ""
    });
    const [loader, setLoader] = useState(false);

    const handleSubmit = async () => {
        if(!loader){
            setLoader(true);
            publicApi.post("/api/user", data).then((res) => {
                let token = res.headers["set-cookie"][0].split(";")[0].substring(13);
                AsyncStorage.setItem("x-auth-token", token);
                auth.login();
                setLoader(false);
            }).catch((err) => {
                console.log(err);
                setLoader(false);
            })
        }
    }

    return (
        <KeyboardAvoidingView behavior='height' style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.subContainer1}>
                    <Image style={styles.white_logo} source={require("../assets/logo_white.png")} />
                    <Text style={styles.text}>Millions of songs</Text>
                    <Text style={styles.text}>Free on Spotify.</Text>
                </View>
                <View style={styles.subContainer2}>
                    <TextInput onChangeText={(text) => setData((prev) => ({...prev, providerId: text}))} style={styles.input} placeholder='Email' />
                    <TextInput onChangeText={(text) => setData((prev) => ({...prev, password: text}))} secureTextEntry style={styles.input} placeholder='Password' />
                    <Button onPress={handleSubmit} title={"Signin"} color={"#4CAF50"} />
                </View>
                <View style={styles.callback}>
                    <Text>Doesn't have an account?</Text>
                    <Pressable onPress={() => {
                        navigator.replace("Signup");
                    }}>
                        <Text>Create one</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        alignItems: "center",
        width: "75%",
        flexDirection: "column",
        gap: 32
    },
    subContainer1: {
        alignItems: "center"
    },
    subContainer2: {
        width: "100%",
        flexDirection: "column",
        gap: 12
    },
    white_logo: {
        width: 100,
        height: 100
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "700",
        fontFamily: "Gotham"
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 100,
        fontSize: 18
    },
    callback: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center"
    }
});