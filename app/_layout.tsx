import { Link, Stack } from "expo-router";
import "@/global.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ShoppingCart, User } from "lucide-react-native";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text, Icon, GluestackUIProvider } from "@/components";
const queryClient = new QueryClient;
export default function RootLayout() {
    const cartItems = useCart(state => state.items.length)
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider>
                <Stack screenOptions={{
                    headerRight: () => cartItems > 0 && (
                        <Link href={"/cart"} asChild>
                            <Pressable className="flex-row gap-2">
                                <Icon as={ShoppingCart} size="xl" />
                                <Text>{cartItems}</Text>
                            </Pressable>
                        </Link>
                    ),
                    headerLeft: () => (
                        <Link href={"/login"} asChild>
                            <Pressable className="flex-row gap-2">
                                <Icon as={User} size="xl" />
                            </Pressable>
                        </Link>
                    )
                }}>
                    <Stack.Screen name="index" options={{ title: 'Shop' }} />
                    <Stack.Screen name="product/[id]" options={{ title: "Product" }} />
                </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    )
}