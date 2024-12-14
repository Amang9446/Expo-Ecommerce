const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function fetchProducts() {
    try {
        const result = await fetch(`${API_URL}/products`)
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`)
        }
        const products = await result.json()
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch product');
    }

}

export async function fetchProductById(id: number) {
    try {
        const result = await fetch(`${API_URL}/products/${id}`);
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const product = await result.json();
        return product;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Failed to fetch product');
    }
}
