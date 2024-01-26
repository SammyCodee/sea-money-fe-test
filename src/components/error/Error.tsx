import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fonts, iconSize } from "../../utils/dimensions";
import { color } from "../../color/color";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

type ErrorProps = {
    text: string;
};

const Error = ({ text }: ErrorProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>

            <TouchableOpacity>
                <MaterialIcons
                    name="refresh"
                    style={{
                        fontSize: iconSize.fontSize,
                        color: color.textColor,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        fontSize: fonts.h3,
        color: color.textColor,
        marginBottom: "5%",
    },
});
export default Error;
