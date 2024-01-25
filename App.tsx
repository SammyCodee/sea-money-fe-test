/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigation/navigation";

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});

export default App;
