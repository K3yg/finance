import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 



export default function ListItem() {
    return (
        <View style={styles.container}>
            <View style={{padding: 20, backgroundColor: "#505050", borderRadius: 14, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <FontAwesome5 name="pizza-slice" size={24} color="white" />
                    <View style={{marginLeft: 20}}>
                        <Text style={{color: "#FFF", fontSize: 20, fontWeight: "bold"}}>Pizza</Text>
                        <Text style={{color: "#FFF", fontSize: 15 }}>R$ 1.000,00</Text>
                    </View>
                </View>
                <View style={{}}> 
                    <Text style={{color: "#FFF", fontSize: 12, fontWeight: "bold", marginLeft: 15}}>10/02</Text>
                    <Text style={{color: "#FFF", fontSize: 10, fontWeight: "bold", marginLeft: 15}}>Crédito</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        paddingTop: 12,
        paddingBottom: 12
    },
});
