import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { sectionsSize } from "../../utils/dimensions";
import BackButton from "../../components/button/BackButton";
import { useAppNavigation } from "../../utils/useAppNavigation";
import { color } from "../../color/color";

const History = () => {
    const navigation = useAppNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <BackButton handleOnPress={() => navigation.goBack()} />
                </View>
                <View style={styles.body}>
                    <Text>History</Text>
                </View>
                <View style={styles.footer}></View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: sectionsSize.padding,
    },
    wrapper: {
        flex: 1,
        padding: sectionsSize.padding,
        backgroundColor: color.backgroundColor,
    },
    header: {
        width: "100%",
        flex: sectionsSize.header,
        backgroundColor: "red",
        justifyContent: "center",
    },
    body: {
        width: "100%",
        flex: sectionsSize.body,
    },
    footer: {
        width: "100%",
        flex: sectionsSize.footer,
        backgroundColor: "yellow",
    },
});

export default History;
