import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useAppNavigation } from "../../utils/useAppNavigation";

type BackButtonProps = {
    handleOnPress: () => void;
};
const BackButton = ({ handleOnPress }: BackButtonProps) => {
    const navigation = useAppNavigation();
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <Text>BackButton</Text>
        </TouchableOpacity>
    );
};

export default BackButton;
