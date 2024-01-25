import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { fonts, iconButton } from "../../utils/dimensions";
import { color } from "../../color/color";

type IconButtonProps = {
    text: string;
};

const IconButton = ({ text }: IconButtonProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.roundShape}></View>
            {text && <Text style={styles.normalText}>{text}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    roundShape: {
        height: iconButton.height,
        width: iconButton.width,
        borderRadius: iconButton.borderRadius,
        backgroundColor: color.tertiaryColor,
        marginBottom: "5%",
    },
    normalText: {
        fontSize: fonts.h3,
        color: color.textColor,
    },
});
export default IconButton;
