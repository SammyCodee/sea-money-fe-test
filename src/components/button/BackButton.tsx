import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { color } from "../../color/color";
import { iconButton, iconSize } from "../../utils/dimensions";

type BackButtonProps = {
    handleOnPress: () => void;
};
const BackButton = ({ handleOnPress }: BackButtonProps) => {
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={styles.container}>
                <MaterialIcons
                    name="arrow-back-ios"
                    style={{
                        fontSize: iconSize.fontSize,
                        color: color.textColor,
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        height: iconButton.height,
        width: iconButton.width,
    },
});
export default BackButton;
