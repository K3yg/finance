import { StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Entypo name="grid" size={24} color="white" />
                    <Text style={{color:"#FFF",fontSize: 20 , fontWeight: "bold", paddingStart: 8, paddingEnd: 20}}>Detalhamento</Text>
                </View>
                <Ionicons name="filter" size={24} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        paddingStart : 20,
        paddingEnd : 20,
        paddingTop : 20,
        paddingBottom : 5
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});
