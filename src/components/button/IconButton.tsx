import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import {
    fonts,
    iconButton,
    iconSize,
    sectionsSize,
} from "../../utils/dimensions";
import { color } from "../../color/color";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type IconButtonProps = {
    text: string;
    name: string;
    handleOnPress?: () => void;
    customIconStyle?: {};
};

const IconButton = ({
    text,
    name,
    handleOnPress,
    customIconStyle,
}: IconButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleOnPress}>
            <View style={styles.roundShape}>
                <MaterialIcons
                    name={name}
                    style={[styles.icon, customIconStyle]}
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
        marginBottom: sectionsSize.marginBottom,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: iconSize.fontSize,
        color: color.textColor,
    },
    normalText: {
        fontSize: fonts.h3,
        color: color.textColor,
        fontWeight: "400",
    },
});
export default IconButton;
