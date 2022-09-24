import { createStackNavigator } from "@react-navigation/stack";
import DrawerRoute from '../drawer/index';

const Stack = createStackNavigator();

export default function StackRoute() {
    return (
        <Stack.Navigator initialRouteName="Drawer">
            <Stack.Screen name="Drawer" component={DrawerRoute} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}