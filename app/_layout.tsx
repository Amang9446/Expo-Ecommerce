import { Link, Stack } from "expo-router";
import "@/global.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ShoppingCart, User } from "lucide-react-native";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text, Icon, GluestackUIProvider } from "@/components";
import { useAuth } from "@/store/authStore";
const queryClient = new QueryClient();
export default function RootLayout() {
    const cartItems = useCart((state: any) => state.items.length)
    const isLoggedIn = useAuth((state: any) => !!state.token)
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider>
                <Stack screenOptions={{
                    headerTitleAlign: 'center',
                    headerRight: () => cartItems > 0 && (
                        <Link href={"/cart"} asChild>
                            <Pressable className="flex-row gap-2">
                                <Icon as={ShoppingCart} size="xl" />
                                <Text>{cartItems}</Text>
                            </Pressable>
                        </Link>
                    ),
                }}>
                    <Stack.Screen name="index" options={{
                        title: 'Shop',
                        headerTitleAlign: 'center',
                        headerLeft: () => !isLoggedIn && (
                            <Link href={"/login"} asChild>
                                <Pressable className="flex-row gap-2">
                                    <Icon as={User} size="xl" />
                                </Pressable>
                            </Link>
                        )
                    }} />
                    <Stack.Screen name="product/[id]" options={{ title: "Product" }} />
                </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    )
}