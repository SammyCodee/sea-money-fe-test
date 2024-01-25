import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppNavigation } from "../../utils/useAppNavigation";

const Home = () => {
    const navigation = useAppNavigation();
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Home", { screen: "HistoryScreen" })
                }
            >
                <Text>Go to history</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Home;
