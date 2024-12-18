import { useLocalSearchParams } from "expo-router";
import { Box, Button, ButtonText, Image, Card, VStack, Text, Heading, Spinner, HStack, Icon } from "@/components";
import { Stack } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/api/products";
import { useCart } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react-native";
import { View } from "react-native";
export default function details() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { data: product, isLoading, error } = useQuery({
        queryKey: ['products', id],
        queryFn: () => fetchProductById(Number(id))
    });

    const addProduct = useCart((state: any) => state.addProduct)
    const handleAddToCart = () => {
        addProduct(product)
    }

    if (isLoading) {
        return (
            <Spinner size="large" />
        )
    }

    if (error) {
        return (
            <Text>Error: Something Went Wrong.</Text>
        )
    }
    return (
        <Box className="flex-1">
            <Stack.Screen options={{
                title: product.name.length > 20
                    ? `${product.name.slice(0, 20)}...`
                    : product.name
            }} />
            <Card className="p-5 rounded-lg max-w-[960px] w-full">
                <Image
                    source={product.image}
                    className="mb-6 h-[320px] w-full rounded-md aspect-[4/3]"
                    alt="image"
                    resizeMode="contain"
                />
            </Card>
            <View className="m-4">
                <Heading size="xl" className="mt-2">
                    {product.name}
                </Heading>
                <VStack className="mb-6 mt-2">
                    <Text size="md">
                        {product.description}
                    </Text>
                </VStack>
            </View>
            <Box className="w-full absolute bottom-10 p-5">
                <HStack className="space-x-3 flex-1 justify-between">
                    <Box className="justify-center">
                        <Text className="text-center font-bold text-xl text-black">
                            ${product.price}
                        </Text>
                    </Box>
                    <Button
                        size="lg"
                        onPress={handleAddToCart}
                        className=" bg-slate-800 rounded-md"
                    >
                        <ButtonText size="lg" className="text-white text-center">
                            Add to cart
                        </ButtonText>
                        <Icon as={ShoppingCart} color="white" />

                    </Button>
                </HStack>
            </Box>
        </Box>
    )
}