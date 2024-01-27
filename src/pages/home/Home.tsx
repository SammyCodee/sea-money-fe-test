import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    authSelector,
    authenticate,
} from "../../redux/features/auth/authSlice";
import { useAppNavigation } from "../../utils/useAppNavigation";
import {
    fonts,
    iconSize,
    pageSize,
    sectionsSize,
    serviceComponent,
} from "../../utils/dimensions";
import { color } from "../../color/color";
import IconButton from "../../components/button/IconButton";
import { Alert } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Home = () => {
    const navigation = useAppNavigation();

    /**
     * redux
     */
    const dispatch = useAppDispatch();
    const authUser = useAppSelector(authSelector);

    const balance = authUser.userInfo.balance;

    const login = () => {
        // TouchID.isSupported().then((biometryType) => {
        //     if (biometryType === "FaceID") {
        //         TouchID.authenticate("", optionalConfigObject)
        //             .then((success: any) => {
        //                 /**
        //                  * once success login, perform the dispatch(authenticate) here
        //                  */
        //                 console.log("success");
        //             })
        //             .catch((error: any) => {
        //                 Alert.alert("Authentication Failed", error.message);
        //             });
        //     } else {
        //         TouchID.authenticate("", optionalConfigObject)
        //             .then((success: any) => {
        //                 console.log("success");
        //             })
        //             .catch((error: any) => {
        //                 Alert.alert("Authentication Failed", error.message);
        //             });
        //     }
        // });

        const loginInfo = {
            loading: false,
            userInfo: {
                balance: 345622.34,
            },
            userToken: null,
            isSuccess: true,
            isAuthenticate: true,
        };

        dispatch(authenticate(loginInfo));
    };

    useEffect(() => {
        if (authUser.isAuthenticate) {
        } else {
            Alert.alert(
                "Login",
                "To View The Balance",
                [
                    {
                        text: "CANCEL",
                        // onPress: () => Alert.alert("Cancel Pressed"),
                        style: "destructive",
                    },
                    {
                        text: "LOGIN",
                        onPress: () => login(),
                        style: "default",
                    },
                ],
                {
                    cancelable: true,
                    onDismiss: () =>
                        Alert.alert(
                            "This alert was dismissed by tapping outside of the alert dialog."
                        ),
                }
            );
        }
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.greyOutText}>
                            Available Balance
                        </Text>
                        <Text style={styles.balanceText}>
                            {authUser.isAuthenticate
                                ? `RM ${balance.toFixed(2)}`
                                : "****"}
                        </Text>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() => login()}>
                            <MaterialIcons
                                name="account-circle"
                                style={{
                                    fontSize: iconSize.l_fontSize,
                                    color: color.textColor,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity style={styles.serviceItemContainer}>
                            <IconButton
                                text={"Investment"}
                                name={"attach-money"}
                            />
                        </TouchableOpacity>
                        <View style={styles.serviceBlank} />
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Home", {
                                    screen: "HistoryScreen",
                                })
                            }
                            style={styles.serviceItemContainer}
                        >
                            <IconButton
                                text={"Transaction"}
                                name={"history"}
                                handleOnPress={() =>
                                    navigation.navigate("Home", {
                                        screen: "HistoryScreen",
                                    })
                                }
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        padding: pageSize.padding,
        backgroundColor: color.backgroundColor,
    },
    header: {
        width: "100%",
        flex: pageSize.header,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    headerLeft: {
        flex: 5,
    },
    headerRight: {
        flex: 1,
        alignItems: "flex-end",
    },
    body: {
        width: "100%",
        flex: pageSize.body,
    },

    serviceContainer: {
        flex: 1,
        flexDirection: "row",
    },
    serviceItemContainer: {
        flex: 1,
        height: serviceComponent.height,
        backgroundColor: color.primaryColor,
        borderRadius: sectionsSize.borderRadius,
        justifyContent: "center",
        alignItems: "center",
    },
    serviceBlank: {
        marginHorizontal: "2%",
    },
    balanceText: {
        fontSize: fonts.h1,
        fontWeight: "bold",
        color: color.textColor,
        marginVertical: "3%",
    },
    greyOutText: {
        fontSize: fonts.h3,
        color: color.greyOutText,
    },
});

export default Home;
