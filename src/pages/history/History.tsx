import React from "react";
import {
    FlatList,
    SafeAreaView,
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
import BackButton from "../../components/button/BackButton";
import { useAppNavigation } from "../../utils/useAppNavigation";
import { color } from "../../color/color";
import { transactionList } from "../../constants";
import Transaction from "../../components/transaction/Transaction";
import IconButton from "../../components/button/IconButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const History = () => {
    const navigation = useAppNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <BackButton handleOnPress={() => navigation.goBack()} />
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyTop}>
                        <Text style={styles.semiBoldText}>Balance</Text>
                        <Text style={styles.balanceText}>RM345341.86</Text>
                        <View style={styles.accountNoContainer}>
                            <Text style={styles.normalText}>
                                8812530-76-768
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
                            renderItem={({ item }) => (
                                <Transaction
                                    amount={item.amount}
                                    date={item.date}
                                    description={item.description}
                                    type={item.type}
                                    transactionID={item.transactionID}
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
        justifyContent: "center",
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
