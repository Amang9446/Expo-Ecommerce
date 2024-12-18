import { create } from 'zustand'

export const useCart = create((set) => ({
    items: [],
    addProduct: (product: any) => {
        set((state: any) => {
            const isExistingProduct = state.items.find((item: any) => (
                item.product.id === product.id
            ))
            if (isExistingProduct) {
                return {
                    items: state.items
                };
            } else {
                return {
                    items: [...state.items, { product, quantity: 1 }]
                }
            }
        })
    },
    emptyCart: () => {
        set({ items: [] })
    }
}))