import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import {Feather} from '@expo/vector-icons'

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
    return (
        <LinearGradient
        colors={["#D0D0D0", "#505050", "rgba(0, 0, 0, 0.0)"]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}>

            <View style={styles.container}>
                <View style={styles.content}>
                    
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
                            <Feather name="user" size={25} color='#fff' />
                        </TouchableOpacity>
                        <Text style={styles.username}>Bom dia, Eduardo!</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
                        <Feather name="settings" size={20} color='#fff' />
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#505050",
        paddingTop: statusBar + 20,
        flexDirection: "row",
        paddingStart: 20,
        paddingEnd: 20,
        paddingBottom: 44
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    username: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    buttonUser: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#000",

    }
});
