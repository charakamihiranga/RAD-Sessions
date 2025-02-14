import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useState} from "react";

export default function SelectItem() {
    const router = useRouter();
    const {customer} = useLocalSearchParams();
    const [basket, setBasket] = useState([]);

    const addToBasket = (item) => {
        setBasket((prevBasket) => [...prevBasket, item]);
    };

    const items = [
        { id: "1", name: "Ipad", price : 10 },
        { id: "2", name: "PC" , price: 30},
        { id: "3", name: "Mobile", price: 40 },
    ];

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Select Items</Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Customer: {customer}</Text>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => addToBasket(item)}
                    >
                        <Text style={{ fontSize: 18 }}>{item.name} - ${item.price}</Text>
                    </TouchableOpacity>
                )}
            />

            {basket.length > 0 && (
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Basket:</Text>
                    {basket.map((item, index) => (
                        <Text key={index} style={{ fontSize: 16 }}>{item.name} - ${item.price}</Text>
                    ))}
                    <Button
                        title="Proceed to Checkout"
                        onPress={() => router.push({ pathname: "/dashboard/placeOrder/checkout", params: { customer, basket: JSON.stringify(basket) } })}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    item : {
        padding : 15,
        backgroundColor : "#ddd",
        marginBottom : 10,
        borderRadius : 5
    }
})