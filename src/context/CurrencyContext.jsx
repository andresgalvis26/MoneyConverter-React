import { createContext, useState } from "react"

// Creamos un contexto llamado CurrencyContext
export const CurrencyContext = createContext()

// Componente CurrencyProvider que actúa como proveedor de contexto
const CurrencyProvider = ({ children }) => {
    // Definimos estados para la moneda de origen, la moneda de destino y la cantidad de dinero inicial
    const [fromCurrency, setFromCurrency] = useState('🇺🇸 USD - United States')
    const [toCurrency, setToCurrency] = useState('🇪🇸 EUR - Spain')
    const [firstAmount, setFirstAmount] = useState("")

    // Creamos un objeto de valor que contiene los estados y sus funciones para actualizarlos
    const value = {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount
    }

    // Renderizamos el proveedor de contexto con el valor proporcionado a través del contexto
    return (
        <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
    )
}

export default CurrencyProvider // Exportamos el componente CurrencyProvider como el componente predeterminado
