import React, { useEffect, useState } from "react";
import {
    FlatList,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    fonts,
    iconSize,
    pageSize,
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
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";

const History = () => {
    const navigation = useAppNavigation();

    const dispatch = useAppDispatch();

    const authUser = useAppSelector(authSelector);

    const [user, setUser] = useState<Login>();
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        setUser(authUser);
        return () => {
            console.log("component unmounting...");
        };
    }, [authUser]);

    const login = () => {
        const loginInfo = {
            loading: false,
            userInfo: {},
            userToken: null,
            error: null,
            success: false,
            isAuthenticate: true,
        };
        dispatch(authenticate(loginInfo));
    };

    console.log("users", user);

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <BackButton handleOnPress={() => navigation.goBack()} />
                    <TouchableOpacity>
                        <Text
                            style={styles.semiBoldText}
                            onPress={() => login()}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <View style={styles.bodyTop}>
                        <Text style={styles.semiBoldText}>Balance</Text>
                        <Text style={styles.balanceText}>
                            RM {user?.isAuthenticate ? "345341.86" : "****"}
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
                                        color: color.tertiaryColor,
                                        marginHorizontal: "10%",
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bodyMiddle}>
                        <IconButton text={"Add"} name={"add"} />
                        <IconButton text={"Send"} name={"send"} />
                        <IconButton text={"More"} name={"more-horiz"} />
                    </View>
                    <View style={styles.bodyBottom}>
                        <View style={styles.transactionTitleHeader}>
                            <Text style={styles.transactiontext}>
                                Transactions
                            </Text>

                            <TouchableOpacity>
                                <MaterialIcons
                                    name="filter-alt"
                                    style={{
                                        fontSize: iconSize.fontSize,
                                        color: color.tertiaryColor,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            style={styles.flatListContainer}
                            data={transactionList}
                            refreshControl={
                                <RefreshControl
                                    tintColor={color.textColor} //for iOS only
                                    // colors={[]} for android only
                                    onRefresh={onRefresh}
                                    refreshing={isRefreshing}
                                />
                            }
                            renderItem={({ item }) => (
                                <Transaction
                                    amount={item.amount}
                                    date={item.date}
                                    description={item.description}
                                    type={item.type}
                                    transactionID={item.transactionID}
                                    recipient={item.recipient}
                                    onNavigate={() =>
                                        navigation.navigate("Home", {
                                            screen: "TransactionDetailScreen",
                                            params: {
                                                amount: item.amount,
                                                date: item.date,
                                                description: item.description,
                                                type: item.type,
                                                transactionID:
                                                    item.transactionID,
                                                recipient: item.recipient,
                                            },
                                        })
                                    }
                                />
                            )}
                        />
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
    bodyTop: {
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
    bodyMiddle: {
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: color.primaryColor,
        borderRadius: transactionComponent.borderRadius,
    },
    bodyBottom: {
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
