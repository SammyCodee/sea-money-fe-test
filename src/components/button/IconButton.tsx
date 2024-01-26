import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { fonts, iconButton, iconSize } from "../../utils/dimensions";
import { color } from "../../color/color";

type IconButtonProps = {
    text: string;
    name: string;
};

const IconButton = ({ text, name }: IconButtonProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.roundShape}>
                <MaterialIcons
                    name={name}
                    style={{
                        fontSize: iconSize.fontSize,
                        color: color.textColor,
                    }}
                />
            </View>
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
        justifyContent: "center",
        alignItems: "center",
    },
    normalText: {
        fontSize: fonts.h3,
        color: color.textColor,
    },
});
export default IconButton;
