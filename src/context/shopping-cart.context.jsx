import { createContext, useState } from "react";


export const ShoppingCartContext = createContext({
    isShoppingCartOpen: false,
    setIsShoppingCartOpen: () => {}
})

export const ShoppingCartProvider = ({children}) => {
    const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
    const value = { isShoppingCartOpen,  setIsShoppingCartOpen}
    return(
        <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
    )
}