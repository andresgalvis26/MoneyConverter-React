import { Grid, TextField, InputAdornment } from '@mui/material' // Importamos componentes de Material-UI
import { useContext } from 'react' // Importamos el hook useContext de React
import { CurrencyContext } from '../context/CurrencyContext' // Importamos el contexto CurrencyContext

// Componente funcional InputAmount
const InputAmount = () => {
    // Obtenemos el estado y la función para establecer la cantidad de dinero del contexto CurrencyContext
    const { firstAmount, setFirstAmount } = useContext(CurrencyContext)

    return (
        <Grid item xs={12} md> {/* Grid item para el TextField */}
            {/* TextField para ingresar la cantidad de dinero */}
            <TextField
                value={firstAmount} // Valor del TextField establecido como la cantidad de dinero
                onChange={(e) => setFirstAmount(e.target.value)} // Manejador de cambio para actualizar la cantidad de dinero
                label="Amount" // Etiqueta del TextField
                fullWidth // El TextField ocupa el ancho completo del contenedor
                InputProps={{ // Propiedades adicionales para el componente de entrada
                    type: "number", // Tipo de entrada como número
                    startAdornment: <InputAdornment position="start">$</InputAdornment> // Adorno de inicio con el símbolo de dólar
                }}
            />
        </Grid>
    )
}

export default InputAmount // Exportamos el componente InputAmount
