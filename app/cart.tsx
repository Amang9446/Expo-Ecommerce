import { useCart } from "@/store/cartStore";
import { FlatList } from "react-native";
import { Text, VStack, HStack, Button, ButtonText, Image } from "@/components"
import { Redirect, useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/api/order";

export default function Cart() {
    const cartItems = useCart(state => state.items)
    const emptyCart = useCart(state => state.emptyCart)
    const router = useRouter();
    const createOrderMutation = useMutation({
        mutationFn: () => createOrder(cartItems.map((item: any) => ({
            productId: item.product.id,
            quantity: item.quantity,
            price: item.product.price
        }))),
        onSuccess: (data) => {
            console.log(data)
            emptyCart()
        },
        onError: (error) => {
            console.log(error)
            router.push('/login')
        }
    })
    const handleCheckout = async () => {
        createOrderMutation.mutate()
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
                <HStack className="bg-white p-3 flex-1 justify-between items-center">
                    <VStack className="flex-row items-center gap-4">
                        <Image
                            className="w-[45px]"
                            source={item.product.image}
                            alt="productImage"
                            resizeMode="contain"
                        />
                        <VStack space="sm" className="max-w-[200px] flex-shrink">
                            <Text bold size="lg">
                                {item.product.name}
                            </Text>
                            <Text>{item.product.price}</Text>
                        </VStack>
                    </VStack>
                    <VStack className="flex-row gap-2 items-center">
                        <Button size="sm">
                            <ButtonText>-</ButtonText>
                        </Button>
                        <Text size="xl" className="ml-auto text-center">{item.quantity}</Text>
                        <Button size="sm">
                            <ButtonText>+</ButtonText>
                        </Button>
                    </VStack>
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