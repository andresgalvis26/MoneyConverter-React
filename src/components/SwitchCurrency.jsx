import { Grid, Button } from '@mui/material' // Importamos componentes de Material-UI
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'; // Importamos el icono de Material-UI
import { useContext } from 'react' // Importamos el hook useContext de React
import { CurrencyContext } from '../context/CurrencyContext'; // Importamos el contexto CurrencyContext

// Componente funcional SwitchCurrency
const SwitchCurrency = () => {
    // Obtenemos los estados y funciones de cambio de moneda del contexto CurrencyContext
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
    } = useContext(CurrencyContext)

    // Función para intercambiar las monedas de origen y destino
    const handleSwitch = () => {
        // Cambiamos las monedas de origen y destino intercambiando sus valores
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

    return (
        <Grid item xs={12} md="auto"> {/* Grid item para el botón */}
            {/* Botón para cambiar la dirección de la conversión de moneda */}
            <Button onClick={handleSwitch} sx={{ // Estilos personalizados del botón
                borderRadius: 1, // Radio de borde del botón
                height: '100%', // Altura del botón al 100% del contenedor padre
            }}>
                <CompareArrowsIcon sx={{ fontSize: 30 }} /> {/* Icono de flechas de cambio de dirección */}
            </Button>
        </Grid>
    )
}

export default SwitchCurrency // Exportamos el componente SwitchCurrency
