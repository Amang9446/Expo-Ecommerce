import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';
import { fetchProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import { Text } from "@/components/ui/text";
export default function HomeScreen() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    const columnNumber = useBreakpointValue({
        default: 2,
        sm: 3,
        xl: 4
    });

    if (isLoading) {
        return (
            <ActivityIndicator />
        )
    }

    if (error) {
        return (
            <Text>Error: Something went wrong</Text>
        )
    }

    return (
        <FlatList
            data={data}
            key={columnNumber}
            numColumns={columnNumber}
            contentContainerClassName="gap-2 p-2 max-w-[960px] mx-auto w-full"
            columnWrapperClassName="gap-2"
            renderItem={({ item }) => (
                <ProductListItem product={item} />
            )}
        />
    )
}