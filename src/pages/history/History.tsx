import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    animationSize,
    fonts,
    iconSize,
    pageSize,
    shadow,
    transactionComponent,
} from "../../utils/dimensions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    Login,
    authenticate,
    authSelector,
} from "../../redux/features/auth/authSlice";
import { useAppNavigation } from "../../utils/useAppNavigation";
import { color } from "../../color/color";
import { transactionList } from "../../constants";
import Transaction from "../../components/transaction/Transaction";
import IconButton from "../../components/button/IconButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BackButton from "../../components/button/BackButton";
import TouchID from "react-native-touch-id";
import Error from "../../components/error/Error";

const SPACING = 20;
const INDEX_SIZE = animationSize.indexSize + SPACING * 3;
const History = () => {
    const navigation = useAppNavigation();

    /**
     * redux
     */
    const dispatch = useAppDispatch();
    const authUser = useAppSelector(authSelector);

    const balance = authUser.userInfo.balance;

    const [user, setUser] = useState<Login>();
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        setUser(authUser);
        return () => {
            console.log("component unmounting...");
        };
    }, [authUser]);

    // const optionalConfigObject = {
    //     title: "Please Authenticate", // Android
    //     imageColor: "#000", // Android
    //     imageErrorColor: "#ff0000", // Android
    //     sensorDescription: "Slightly Touch sensor", // Android
    //     sensorErrorDescription: "Failed", // Android
    //     cancelText: "Cancel", // Android
    //     fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
    //     unifiedErrors: false, // use unified error messages (default false)
    //     passcodeFallback: false, // iOS
    // };

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

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    };

    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <BackButton handleOnPress={() => navigation.goBack()} />
                    <TouchableOpacity onPress={() => login()}>
                        <MaterialIcons
                            name="account-circle"
                            style={{
                                fontSize: iconSize.l_fontSize,
                                color: color.textColor,
                                alignSelf: "flex-end",
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.semiBoldText}>Balance</Text>
                        <Text style={styles.balanceText}>
                            RM {user?.isAuthenticate ? balance : "****"}
                        </Text>
                        <View style={styles.accountNoContainer}>
                            <Text style={styles.normalText}>
                                8812530-76-
                                {user?.isAuthenticate ? "7688" : "****"}
                            </Text>

                            <TouchableOpacity>
                                <MaterialIcons
                                    name="content-copy"
                                    style={{
                                        fontSize: iconSize.s_fontSize,
                                        color: color.textColor,
                                        marginHorizontal: "10%",
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.serviceContainer}>
                        <IconButton text={"Add"} name={"add"} />
                        <IconButton
                            text={"Send"}
                            name={"send"}
                            customIconStyle={{
                                fontSize: iconSize.fontSize,
                                color: color.textColor,
                                transform: [{ rotate: "-30deg" }],
                            }}
                        />
                        <IconButton text={"More"} name={"more-horiz"} />
                    </View>
                    <View style={styles.transactionContainer}>
                        <View style={styles.transactionTitleHeader}>
                            <Text style={styles.transactiontext}>
                                Transactions
                            </Text>
                            <TouchableOpacity>
                                <MaterialIcons
                                    name="filter-alt"
                                    style={{
                                        fontSize: iconSize.fontSize,
                                        color: color.textColor,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        {user?.isSuccess ? (
                            <Animated.FlatList
                                style={styles.flatListContainer}
                                onScroll={Animated.event(
                                    [
                                        {
                                            nativeEvent: {
                                                contentOffset: {
                                                    y: scrollY,
                                                },
                                            },
                                        },
                                    ],
                                    { useNativeDriver: true }
                                )}
                                data={transactionList}
                                refreshControl={
                                    <RefreshControl
                                        tintColor={color.textColor} //for iOS only
                                        // colors={[]} for android only
                                        onRefresh={onRefresh}
                                        refreshing={isRefreshing}
                                    />
                                }
                                renderItem={({ item, index }) => {
                                    const inputRange = [
                                        -1,
                                        0,
                                        INDEX_SIZE * index, //animation starts
                                        INDEX_SIZE * (index + 2), //animation ends
                                    ];

                                    const opacityInputRange = [
                                        -1,
                                        0,
                                        INDEX_SIZE * index, //animation starts
                                        INDEX_SIZE * (index + 1), //animation ends
                                    ];

                                    const scale = scrollY.interpolate({
                                        inputRange,
                                        outputRange: [1, 1, 1, 0],
                                    });

                                    const opacity = scrollY.interpolate({
                                        inputRange: opacityInputRange,
                                        outputRange: [1, 1, 1, 0],
                                    });

                                    return (
                                        <Transaction
                                            amount={item.amount}
                                            date={item.date}
                                            description={item.description}
                                            type={
                                                item.type as "Debit" | "Credit"
                                            }
                                            transactionID={item.transactionID}
                                            recipient={item.recipient}
                                            onNavigate={() =>
                                                navigation.navigate("Home", {
                                                    screen: "TransactionDetailScreen",
                                                    params: {
                                                        amount: item.amount,
                                                        date: item.date,
                                                        description:
                                                            item.description,
                                                        type: item.type as
                                                            | "Debit"
                                                            | "Credit",
                                                        transactionID:
                                                            item.transactionID,
                                                        recipient:
                                                            item.recipient,
                                                    },
                                                })
                                            }
                                            customStyle={{
                                                transform: [{ scale }],
                                                opacity,
                                            }}
                                        />
                                    );
                                }}
                            />
                        ) : (
                            <Error text="Network Error" />
                        )}
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
    body: {
        width: "100%",
        flex: pageSize.body,
    },
    infoContainer: {
        flex: 1,
        justifyContent: "center",
    },
    balanceText: {
        fontSize: fonts.h1,
        fontWeight: "bold",
        color: color.textColor,
        marginVertical: "3%",
    },
    accountNoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    transactiontext: {
        fontSize: fonts.h2,
        color: color.textColor,
        fontWeight: "bold",
    },
    semiBoldText: {
        fontSize: fonts.h2,
        color: color.textColor,
        fontWeight: "bold",
    },
    normalText: {
        fontSize: fonts.h3,
        color: color.textColor,
    },
    serviceContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: color.primaryColor,
        borderRadius: transactionComponent.borderRadius,
    },
    transactionContainer: {
        flex: 3,
    },
    transactionTitleHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: transactionComponent.headerHeight,
        marginTop: "5%",
    },
    flatListContainer: {
        marginTop: "5%",
    },
});

export default History;
