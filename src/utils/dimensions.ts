import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const sectionsSize = {
    padding: width <= 320 ? 15 : width <= 720 ? 20 : 25,
    header: 1,
    body: 8,
    footer: 2
}