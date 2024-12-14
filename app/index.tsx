import { FlatList, Text, useWindowDimensions, View } from "react-native";
import products from '../assets/products.json';
import ProductListItem from "../components/ProductListItem";
export default function HomeScreen() {
    const { width } = useWindowDimensions();
    const columnNumber = width > 700 ? 3 : 2
    return (
        <FlatList
            data={products}
            key={columnNumber}
            numColumns={columnNumber}
            contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
            columnWrapperClassName="gap-2"
            renderItem={({ item }) => (
                <ProductListItem product={item} />
            )}
        />
    )
}