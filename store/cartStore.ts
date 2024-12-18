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
    increaseQuantity: (product: any) => {
        set((state: any) => {
            const updatedItems = state.items.map((item: any) => {
                if (item.product.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
            return { items: updatedItems }
        })
    },
    decreaseQuantity: (product: any) => {
        set((state: any) => {
            const updatedItems = state.items.map((item: any) => {
                if (item.product.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item;
            }).filter((item: any) => item.quantity > 0)
            return { items: updatedItems }
        })
    },
    emptyCart: () => {
        set({ items: [] })
    }
}))