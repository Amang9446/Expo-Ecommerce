import { useLocalSearchParams } from "expo-router";
import { Box, Button, ButtonText, Image, Card, VStack, Text, Heading } from "@/components";
import { Stack } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/api/products";
import { ActivityIndicator } from "react-native";
import { useCart } from "@/store/cartStore";
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
            <ActivityIndicator />
        )
    }

    if (error) {
        return (
            <Text>Error: Something Went Wrong.</Text>
        )
    }
    return (
        <Box className="flex-1 items-center p-3">
            <Stack.Screen options={{ title: `${product.name}` }} />
            <Card className="p-5 rounded-lg max-w-[960px] w-full flex-1">
                <Image
                    source={product.image}
                    className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                    alt="image"
                    resizeMode="contain"
                />
                <Text className="text-sm font-normal mb-2 text-typography-700">
                    {product.name}
                </Text>
                <VStack className="mb-6">
                    <Heading size="md" className="mb-4">
                        ${product.price}
                    </Heading>
                    <Text size="sm">
                        {product.description}
                    </Text>
                </VStack>
                <Box className="flex-col sm:flex-row">
                    <Button onPress={handleAddToCart} className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1 bg-slate-800">
                        <ButtonText size="sm">Add to cart</ButtonText>
                    </Button>
                    <Button
                        variant="outline"
                        className="px-4 py-2 border-outline-300 sm:flex-1"
                    >
                        <ButtonText size="sm" className="text-typography-600">
                            Wishlist
                        </ButtonText>
                    </Button>
                </Box>
            </Card>
        </Box>
    )
}