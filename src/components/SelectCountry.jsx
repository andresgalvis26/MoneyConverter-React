import { Grid, Autocomplete, TextField, Skeleton } from '@mui/material' // Importamos componentes de Material-UI
import useAxios from '../hooks/useAxios' // Importamos nuestro hook personalizado useAxios

// Componente funcional SelectCountry
const SelectCountry = (props) => {
    const { value, setValue, label } = props // Extraemos las propiedades value, setValue y label de props

    // Utilizamos el hook personalizado useAxios para obtener los datos de los países desde la API
    const [data, loaded, error] = useAxios('https://restcountries.com/v3.1/all')

    // Si la carga está en progreso, mostramos un indicador de carga con Skeleton
    if (loaded) {
        return (
            <Grid item xs={12} md={3}>
                <Skeleton variant="rounded" height={60} /> {/* Indicador de carga con Skeleton */}
            </Grid>
        )
    }

    // Si hay un error en la carga de los datos, mostramos un mensaje de error
    if (error) {
        return (
            "Something went wrong!" // Mensaje de error
        )
    }

    // Filtramos los datos para obtener solo los países que tienen información sobre monedas
    const dataFilter = data.filter(item => "currencies" in item);

    // Transformamos los datos filtrados en un array de strings que serán opciones en el componente Autocomplete
    const dataCountries = dataFilter.map(item => {
        return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
    })

    // Renderizamos el componente Autocomplete de Material-UI
    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                disableClearable // Desactivamos la opción de borrar la selección
                options={dataCountries} // Pasamos las opciones para el Autocomplete
                value={value} // Valor seleccionado
                onChange={(e, newValue) => {
                    setValue(newValue) // Actualizamos el valor seleccionado al cambiar la selección
                }}
                renderInput={(params) => (
                    <TextField {...params} label={label} variant="standard" /> // Renderizamos el TextField con la etiqueta proporcionada
                )}
            />
        </Grid>
    )
}

export default SelectCountry // Exportamos el componente SelectCountry
