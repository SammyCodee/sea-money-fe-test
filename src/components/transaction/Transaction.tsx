import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts, transactionComponent } from "../../utils/dimensions";
import { color } from "../../color/color";

export type TransactionProps = {
    amount: number;
    date: string;
    description: string;
    type: "Credit" | "Debit";
    onNavigate?: () => void;
    transactionID: string;
};
const Transaction = ({
    amount,
    date,
    description,
    type,
    onNavigate,
}: TransactionProps) => {
    return (
        <TouchableOpacity onPress={onNavigate}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.normalText}>{description}</Text>
                    <Text style={styles.normalText}>{date}</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.amountText}>
                        RM{parseFloat(amount.toFixed(2))}
                    </Text>
                    <Text style={styles.normalText}>{type}</Text>
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
    left: { flex: 3, justifyContent: "center" },
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
    },
});
export default Transaction;
