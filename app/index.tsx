import { FlatList } from "react-native";
import products from '../assets/products.json';
import ProductListItem from "../components/ProductListItem";
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';
export default function HomeScreen() {
    const columnNumber = useBreakpointValue({
        default: 2,
        sm: 3,
        xl: 4
    })
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