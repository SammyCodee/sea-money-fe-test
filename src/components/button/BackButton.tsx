import React from "react";
import { TouchableOpacity, Text } from "react-native";

type BackButtonProps = {
    handleOnPress: () => void;
};
const BackButton = ({ handleOnPress }: BackButtonProps) => {
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <Text>BackButton</Text>
        </TouchableOpacity>
    );
};

export default BackButton;
