import { createContext, ReactNode, useContext, useState } from "react"

type Product = {
    image: string
    name: string
    price: number
}

type CartContextType = {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
    removeAll: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product])
    }

    const removeFromCart = (productToRemove: Product) => {
        setCart((prevCart) => prevCart.filter(product => product !== productToRemove))
    }

    const removeAll = () => {
        setCart([])
    }
    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAll }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider")
    }
    return context
}