import {Alert, Button, Text, View} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";

export default function Checkout() {

    const router = useRouter();
    const {customer, basket} = useLocalSearchParams();
    const parsedBasket = JSON.parse(basket);

    const handleCheckout = () => {
        Alert.alert("Order Placed", `Customer: ${customer}, Total Items: ${parsedBasket.length}`);
        router.replace("/dashboard");
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Checkout</Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Customer: {customer}</Text>

            <View style={{ marginBottom: 20 }}>
                {parsedBasket.map((item, index) => (
                    <Text key={index} style={{ fontSize: 16 }}>{item.name} - ${item.price}</Text>
                ))}
            </View>

            <Button title="Confirm Order" onPress={handleCheckout} />
        </View>
    );
}