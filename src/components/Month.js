import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Month() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <AntDesign name="left" size={24} color="white" />
                    <Text style={{color:"#FFF",fontSize: 20 , fontWeight: "bold", paddingStart: 20, paddingEnd: 20}}>Fevereiro</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="calendar-month" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        paddingStart : 20,
        paddingEnd : 20,
        paddingTop : 30,
        paddingBottom : 5
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});
