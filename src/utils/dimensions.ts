import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const sectionsSize = {
    padding: width <= 320 ? 15 : width <= 720 ? 20 : 25,
    header: 1,
    body: 8,
    footer: 2
}

export const pageSize = {
    padding: width <= 320 ? 15 : width <= 720 ? 20 : 25,
    header: 1,
    body: 9,
}

export const fonts = {
    h1: width > 320 ? 24 : 20,
    h2: width > 320 ? 18 : 16,
    h3: width > 320 ? 12 : 14
}

export const transactionComponent = {
    height: width <= 320 ? 50 : width <= 720 ? 70 : 90,
    borderRadius: width <= 320 ? 5 : width <= 720 ? 10 : 15,
    padding: width <= 320 ? 5 : width <= 720 ? 10 : 15,
}