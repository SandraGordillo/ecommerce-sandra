import { createContext, useState } from "react"

export const CarContext = createContext({})



const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])


    const addCart = (item, quanty) => {
        let cantItem = { item, quanty }
        setCart([cart, cantItem])

    }
    const removeItem = (itemId) => {
        let itemEliminado = cart.filter((elemento) => elemento.id !== itemId)
        setCart(itemEliminado)
    }

    return (
        <CarContext.Provider value={{  addCart, removeItem,}}>
            {children}
        </CarContext.Provider>
    )
}
export default CartContext  