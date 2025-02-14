import {Stack} from "expo-router";

export default function PlaceOrderLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{headerShown : false}}/>
            <Stack.Screen name='checkout' options={{headerShown: false}}/>
            <Stack.Screen name='selectItem' options={{headerShown: false}}/>
        </Stack>
    );
}