import { useContext, useEffect, useState } from 'react' // Importamos los hooks useContext, useEffect y useState de React
import axios from 'axios' // Importamos axios para realizar solicitudes HTTP
import { Container, Typography, Grid, Box } from '@mui/material' // Importamos componentes de Material-UI
import './App.css' // Importamos los estilos CSS para la aplicación
import InputAmount from './components/InputAmount' // Importamos el componente InputAmount desde su ruta relativa
import SelectCountry from './components/SelectCountry' // Importamos el componente SelectCountry desde su ruta relativa
import SwitchCurrency from './components/SwitchCurrency' // Importamos el componente SwitchCurrency desde su ruta relativa
import { CurrencyContext } from './context/CurrencyContext' // Importamos el contexto CurrencyContext

function App() {
    // const [fromCurrency, setFromCurrency] = useState('') // Estado para la moneda de origen
    // const [toCurrency, setToCurrency] = useState('') // Estado para la moneda de destino
    
    // Obtenemos los valores del contexto CurrencyContext
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
    } = useContext(CurrencyContext)

    // Estado local para almacenar el resultado de la conversión de moneda
    const [resultCurrency, setResultCurrency] = useState(0)

    // Extraemos los códigos de las monedas de origen y destino
    const codeFromCurrency = fromCurrency.split(" ")[1]
    const codeToCurrency = toCurrency.split(" ")[1]

    // Efecto secundario que se ejecuta cuando cambian la cantidad de dinero o las monedas de origen/destino
    useEffect(() => {
        // Verificamos si hay una cantidad de dinero ingresada
        if (firstAmount) {
            // Realizamos una solicitud HTTP para obtener el tipo de cambio
            axios("https://api.freecurrencyapi.com/v1/latest", {
                params: {
                    apikey: import.meta.env.VITE_API_KEY,
                    base_currency: codeFromCurrency,
                    currencies: codeToCurrency
                }
            })
                // Actualizamos el estado del resultado de la conversión con el valor obtenido de la solicitud
                .then(response => setResultCurrency(response.data.data[codeToCurrency]))
                .catch(error => console.log(error)) // Manejamos errores en la solicitud
        }
    }, [firstAmount, fromCurrency, toCurrency]) // Dependencias del efecto secundario

    // Estilos CSS para el contenedor principal
    const boxStyles = {
        background: "#fdfdfd", // Color de fondo del contenedor
        textAlign: "center", // Alineación del contenido al centro
        marginTop: "10%", // Margen superior
        color: "#222", // Color del texto
        minHeight: "20rem", // Altura mínima del contenedor
        borderRadius: 2, // Radio de borde del contenedor
        padding: "4rem 2rem", // Relleno interior del contenedor
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", // Sombra del contenedor
        position: "relative", // Posición del contenedor
    }

    return (
        <Container maxWidth="md" sx={boxStyles} > {/* Contenedor principal con estilos y ancho máximo */}
            <Typography variant='h5' sx={{ marginBottom: "2rem" }}>Stay Ahead with Accurate Conversions</Typography> {/* Título principal */}
            <Grid container spacing={2}> {/* Contenedor de cuadrícula con espaciado entre elementos */}
                <InputAmount /> {/* Componente para ingresar la cantidad de dinero */}
                <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" /> {/* Componente para seleccionar la moneda de origen */}
                <SwitchCurrency /> {/* Componente para cambiar la dirección de la conversión de moneda */}
                <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" /> {/* Componente para seleccionar la moneda de destino */}
            </Grid>

            {/* Mostramos el resultado de la conversión si hay una cantidad de dinero ingresada */}
            {firstAmount ? (
                <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
                    <Typography>{firstAmount} {fromCurrency} =</Typography>
                    <Typography variant="h5" sx={{ marginTop: "5px", fontWeight: "bold" }}>{resultCurrency * firstAmount} {toCurrency}</Typography>
                </Box>
            ) : ''}
        </Container>
    )
}

export default App // Exportamos el componente principal App
