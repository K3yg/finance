import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "../../components/Header";
import Month from "../../components/Month";
import Overview from "../../components/Overview";
import Detail from "../../components/Detail";
import ListContainer from "../../components/List/ListContainer";
import ListItem from "../../components/List/ListItem";

export default function Home() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header/>
                <Month/>
                <Overview/>
                <Detail/>
                <ListContainer>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </ListContainer>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    }
});
