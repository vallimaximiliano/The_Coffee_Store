import { createContext, useState } from "react"

export const CartContext = createContext(null)


export const ShopCartProvider = ({children}) => {

const [cart, setCart] = useState([])

const longitud = cart.length

const comision = "React"

    return(

        <CartContext.Provider value={{cart, setCart, comision}}>
            {children}        
        </CartContext.Provider>
    )
}

export default ShopCartProvider