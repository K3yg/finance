import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function Overview() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#7a7a7a", "#3D3C3C", "#1F1F1F"]}
                style={{width: "100%", borderRadius: 14}}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
            <View style={styles.card}>
                <Text style={styles.title}>Overview</Text>
                <View style={styles.totalContainer}>
                    <MaterialIcons name="attach-money" size={24} color="white" />
                    <Text style={styles.totalText}>Total:</Text>
                    <Text style={styles.totalAmount}>R$ 1.000,00</Text>
                </View>
                <View style={styles.creditDebitContainer}>
                    <View style={styles.creditContainer}>
                        <View style={styles.creditIcon}>
                            <MaterialIcons name="credit-card" size={20} color="white" />
                            <Text style={styles.creditText}>Crédito</Text>
                        </View>
                        <Text style={styles.creditAmount}>R$ 500,00</Text>
                    </View>
                    <View style={styles.debitContainer}>
                        <View style={styles.debitIcon}>
                            <MaterialIcons name="credit-card" size={20} color="white" />
                            <Text style={styles.debitText}>Débito</Text>
                        </View>
                        <Text style={styles.debitAmount}>R$ 500,00</Text>
                    </View>
                </View>
            </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    card: {
        // backgroundColor: "#505050",
        width: "100%",
        borderRadius: 14,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
    totalContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#323232",
        borderRadius: 14,
        padding: 18,
    },
    totalText: {
        color: "white",
        marginLeft: 10,
        marginRight: 5,
    },
    totalAmount: {
        color: "white",
        fontWeight: "bold",
    },
    creditDebitContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    creditContainer: {
        backgroundColor: "#323232",
        padding: 20,
        borderRadius: 14,
        marginRight: 10,
        width: "48%",
        alignItems: "center",
    },
    debitContainer: {
        backgroundColor: "#323232",
        padding: 20,
        borderRadius: 14,
        width: "48%",
        alignItems: "center",
    },
    creditIcon: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    debitIcon: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    creditText: {
        color: "white",
        marginLeft: 5,
    },
    debitText: {
        color: "white",
        marginLeft: 5,
    },
    creditAmount: {
        color: "white",
        fontWeight: "bold",
    },
    debitAmount: {
        color: "white",
        fontWeight: "bold",
    },
});
