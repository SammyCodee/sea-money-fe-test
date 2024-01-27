import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const small = 320;
const medium = 720

export const sectionsSize = {
    padding: width <= small ? 15 : width <= medium ? 20 : 25,
    header: 1,
    body: 8,
    footer: 2,
    borderRadius: width <= small ? 5 : width <= medium ? 10 : 15,
    marginBottom: width <= small ? 5 : width <= medium ? 10 : 15,
}

export const serviceComponent = {
    height: width <= small ? 80 : width <= medium ? 100 : 120,
}

export const pageSize = {
    padding: width <= small ? 15 : width <= medium ? 20 : 25,
    header: 1,
    body: 9,
}

export const fonts = {
    h1: width > small ? 24 : 20,
    h2: width > small ? 18 : 16,
    h3: width > small ? 12 : 14,
}

export const transactionComponent = {
    height: width <= small ? 50 : width <= medium ? 70 : 90,
    borderRadius: width <= small ? 5 : width <= medium ? 10 : 15,
    padding: width <= small ? 5 : width <= medium ? 10 : 15,
    headerHeight: width <= small ? 25 : width <= medium ? 35 : 45,
}

export const iconButton = {
    height: width <= small ? 40 : width <= medium ? 50 : 60,
    width: width <= small ? 40 : width <= medium ? 50 : 60,
    borderRadius: width <= small ? 50 : width <= medium ? 100 : 150,
}

export const iconSize = {
    s_fontSize: width <= small ? 12 : width <= medium ? 20 : 28,
    fontSize: width <= small ? 16 : width <= medium ? 24 : 32,
    m_fontSize: width <= small ? 20 : width <= medium ? 28 : 36,
    l_fontSize: width <= small ? 24 : width <= medium ? 32 : 40,
    xl_fontSize: width <= small ? 28 : width <= medium ? 36 : 44,
}

export const shadow = {
    borderRadius: width <= small ? 2 : width <= medium ? 4 : 6,
    opacity: 0.5,
    height: width <= small ? 4 : width <= medium ? 6 : 8,
}

export const animationSize = {
    indexSize: width <= small ? 14 : width <= medium ? 22 : 30,
}