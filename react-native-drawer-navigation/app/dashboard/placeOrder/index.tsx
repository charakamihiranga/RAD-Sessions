import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";

export default function SelectCustomer() {

    const router = useRouter();

    const customers = [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
        { id: "3", name: "Michael Brown" },
    ];


    return (
        <View>
            <Text>Select Customer</Text>
            <FlatList data={customers} renderItem={({item})=>(
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => router.push({ pathname: "/dashboard/placeOrder/selectItem", params: { customer: item.name } },{ relativeToDirectory: true })}
                >
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                </TouchableOpacity>
            )} />
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