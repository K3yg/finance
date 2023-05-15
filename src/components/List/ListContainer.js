import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function ListContainer({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        paddingStart : 20,
        paddingEnd : 20,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});
