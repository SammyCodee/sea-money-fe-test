import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts, transactionComponent } from "../../utils/dimensions";
import { color } from "../../color/color";
import { useAppSelector } from "../../redux/hooks";

export type TransactionProps = {
    amount: number;
    date: string;
    description: string;
    type: "Credit" | "Debit";
    onNavigate?: () => void;
    transactionID: string;
    recipient: string;
};
const Transaction = ({
    amount,
    date,
    description,
    type,
    onNavigate,
}: TransactionProps) => {
    const { isAuthenticate } = useAppSelector((state) => state.authSlice);
    return (
        <TouchableOpacity onPress={onNavigate}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.normalText} numberOfLines={1}>
                        {description}
                    </Text>
                    <Text style={styles.normalText}>{date}</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.amountText} numberOfLines={1}>
                        {isAuthenticate ? `RM${amount.toFixed(2)}` : "RM ****"}
                    </Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: transactionComponent.height,
        backgroundColor: color.primaryColor,
        borderRadius: transactionComponent.borderRadius,
        marginBottom: "5%",
        flex: 1,
        flexDirection: "row",
        padding: transactionComponent.padding,
    },
    left: { flex: 1, justifyContent: "center" },
    right: { flex: 1, justifyContent: "center" },
    normalText: {
        fontSize: fonts.h3,
        color: color.textColor,
    },
    amountText: {
        fontSize: fonts.h2,
        fontWeight: "bold",
        color: color.textColor,
        marginVertical: "3%",
        textAlign: "right",
    },
    typeText: {
        fontSize: fonts.h3,
        color: color.textColor,
        textAlign: "right",
    },
});
export default Transaction;
