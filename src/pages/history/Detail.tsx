import React from "react";
import {
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
import { color } from "../../color/color";
import { useAppNavigation } from "../../utils/useAppNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeScreenStackingList } from "../../navigation/navigation";
import { useAppSelector } from "../../redux/hooks";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BackButton from "../../components/button/BackButton";

type DetailProps = NativeStackScreenProps<
    HomeScreenStackingList,
    "TransactionDetailScreen"
>;

const Detail = ({ route }: DetailProps) => {
    const navigation = useAppNavigation();
    const { params } = route;

    const { isAuthenticate } = useAppSelector((state) => state.authSlice);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <BackButton handleOnPress={() => navigation.goBack()} />
                </View>

                <View style={styles.body}>
                    <View style={styles.bodyTop}>
                        <Text style={styles.amountText}>
                            -RM
                            {isAuthenticate
                                ? `${params.amount.toFixed(2)}`
                                : "****"}
                        </Text>
                    </View>

                    <View style={styles.bodyInfo}>
                        <Text style={styles.semiBoldText}>
                            Payment to{" "}
                            <Text style={styles.recipientText}>
                                {isAuthenticate ? params.recipient : "****"}
                            </Text>{" "}
                            is{" "}
                            <Text style={styles.successText}>successful</Text>
                        </Text>
                        <View style={styles.dateContainer}>
                            <Text style={styles.normalText}>{params.date}</Text>
                        </View>
                    </View>

                    <View style={styles.blockContainer}>
                        <Text style={styles.normalText}>Payment Type</Text>
                        <View style={styles.blankSpace} />
                        <Text style={styles.semiBoldText}>{params.type}</Text>
                    </View>

                    <View style={styles.blockContainer}>
                        <Text style={styles.normalText}>Transaction ID</Text>
                        <View style={styles.blankSpace} />
                        <Text style={styles.semiBoldText}>
                            {isAuthenticate ? params.transactionID : "****"}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.reportIssueContainer}>
                        <View style={styles.reportIssueTextContainer}>
                            <Text style={styles.semiBoldText}>
                                Report an issue
                            </Text>
                        </View>
                        <View style={styles.iconButtonContainer}>
                            <MaterialIcons
                                name="arrow-forward-ios"
                                style={{
                                    fontSize: iconSize.fontSize,
                                    color: color.textColor,
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
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
        marginVertical: "5%",
    },
    bodyTop: {
        marginVertical: "2%",
    },
    amountText: {
        fontSize: fonts.h1,
        fontWeight: "bold",
        color: color.textColor,
    },
    bodyInfo: {
        marginVertical: "2%",

        justifyContent: "center",
    },
    semiBoldText: {
        fontSize: fonts.h2,
        color: color.textColor,
    },
    recipientText: {
        fontSize: fonts.h2,
        color: color.textColor,
        fontWeight: "bold",
    },
    dateContainer: {
        marginVertical: "5%",
    },
    normalText: {
        fontSize: fonts.h3,
        color: color.textColor,
    },
    successText: {
        fontSize: fonts.h2,
        color: color.successColor,
    },
    blockContainer: {
        backgroundColor: color.primaryColor,
        height: transactionComponent.height,
        width: "100%",
        borderRadius: transactionComponent.borderRadius,
        marginBottom: "5%",
        padding: transactionComponent.padding,
        justifyContent: "center",
    },
    blankSpace: {
        marginVertical: "1%",
    },

    reportIssueContainer: {
        backgroundColor: color.primaryColor,
        height: transactionComponent.height,
        width: "100%",
        borderRadius: transactionComponent.borderRadius,
        marginBottom: "5%",
        padding: transactionComponent.padding,
        flexDirection: "row",
    },
    reportIssueTextContainer: {
        flex: 4,
        justifyContent: "center",
    },
    iconButtonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default Detail;
