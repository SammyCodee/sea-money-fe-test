/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigation/navigation";
import { store } from "./src/redux/store";

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </Provider>
    );
}

export default App;
