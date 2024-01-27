import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const sectionsSize = {
    padding: width <= 320 ? 15 : width <= 720 ? 20 : 25,
    header: 1,
    body: 8,
    footer: 2,
    borderRadius: width <= 320 ? 5 : width <= 720 ? 10 : 15,
}

export const serviceComponent = {
    height: width <= 320 ? 80 : width <= 720 ? 100 : 120,
}

export const pageSize = {
    padding: width <= 320 ? 15 : width <= 720 ? 20 : 25,
    header: 1,
    body: 9,
}

export const fonts = {
    h1: width > 320 ? 24 : 20,
    h2: width > 320 ? 18 : 16,
    h3: width > 320 ? 12 : 14,
}

export const transactionComponent = {
    height: width <= 320 ? 50 : width <= 720 ? 70 : 90,
    borderRadius: width <= 320 ? 5 : width <= 720 ? 10 : 15,
    padding: width <= 320 ? 5 : width <= 720 ? 10 : 15,
    headerHeight: width <= 320 ? 25 : width <= 720 ? 35 : 45,
}

export const iconButton = {
    height: width <= 320 ? 40 : width <= 720 ? 50 : 60,
    width: width <= 320 ? 40 : width <= 720 ? 50 : 60,
    borderRadius: width <= 320 ? 50 : width <= 720 ? 100 : 150,
}

export const iconSize = {
    s_fontSize: width <= 320 ? 12 : width <= 720 ? 20 : 28,
    fontSize: width <= 320 ? 16 : width <= 720 ? 24 : 32,
}