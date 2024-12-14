import { useCart } from "@/store/cartStore";
import { FlatList } from "react-native";
import { Text, VStack, HStack, Button, ButtonText } from "@/components"
import { Redirect } from "expo-router";

export default function Cart() {
    const cartItems = useCart(state => state.items)
    const emptyCart = useCart(state => state.emptyCart)
    const handleCheckout = async () => {
        // have to add api
        emptyCart()
    }

    if (cartItems.length === 0) {
        return (
            <Redirect href={"/"} />
        )
    }
    return (
        <FlatList
            contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto p-2"
            data={cartItems}
            renderItem={({ item }) => (
                <HStack className="bg-white p-3">
                    <VStack space="sm">
                        <Text bold>
                            {item.product.name}
                        </Text>
                        <Text>
                            {item.product.price}
                        </Text>
                    </VStack>
                    <Text className="ml-auto">{item.quantity}</Text>
                </HStack>
            )}
            ListFooterComponent={
                <Button onPress={handleCheckout}>
                    <ButtonText>
                        CheckOut
                    </ButtonText>
                </Button>
            }
        />
    )
}