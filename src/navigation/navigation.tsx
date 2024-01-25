import { Home } from "../pages/home";
import { History } from "../pages/history";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../pages/history/Detail";
import { TransactionProps } from "../components/transaction/Transaction";

export type RootStackParamList = {
    Home: NavigatorScreenParams<HomeScreenStackingList>;
};

export type HomeScreenStackingList = {
    HomeScreen: undefined;
    HistoryScreen: undefined;
    TransactionDetailScreen: TransactionProps;
};
1;
const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<HomeScreenStackingList>();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen name="HomeScreen" component={Home} />
            <HomeStack.Screen name="HistoryScreen" component={History} />
            <HomeStack.Screen
                name="TransactionDetailScreen"
                component={Detail}
            />
        </HomeStack.Navigator>
    );
};

export const RootNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Screen name="Home" component={HomeNavigator} />
        </RootStack.Navigator>
    );
};
