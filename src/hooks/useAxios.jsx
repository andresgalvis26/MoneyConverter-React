import { useEffect, useState } from 'react'; // Importamos los hooks useEffect y useState
import axios from 'axios'; // Importamos Axios para realizar solicitudes HTTP

// Definimos un hook personalizado llamado useAxios que acepta una URL como parámetro
const useAxios = (url) => {

    // Definimos tres estados locales utilizando el hook useState
    const [data, setData] = useState([]); // Estado para almacenar los datos obtenidos de la solicitud
    const [error, setError] = useState(null); // Estado para almacenar errores, si ocurren durante la solicitud
    const [loaded, setLoaded] = useState(false); // Estado para indicar si la solicitud está en curso o ya ha finalizado

    // Utilizamos el hook useEffect para realizar la solicitud HTTP cuando el componente se monta o la URL cambia
    useEffect(() => {

        // Función asincrónica para realizar la solicitud HTTP
        const fetchData = async () => {
            try {
                setLoaded(true); // Establecemos loaded en true para indicar que la solicitud está en curso
                const response = await axios(url); // Realizamos la solicitud HTTP utilizando Axios
                setData(response.data); // Actualizamos el estado de data con los datos obtenidos de la respuesta
            } catch(error) {
                setError(error); // Capturamos cualquier error y lo almacenamos en el estado de error
            } finally {
                setLoaded(false); // Establecemos loaded en false, indicando que la solicitud ha finalizado
            }
        }

        // Llamamos a la función fetchData para iniciar la solicitud cuando el componente se monta o la URL cambia
        fetchData();

    }, [url]); // Especificamos que useEffect debe ejecutarse nuevamente si la URL cambia

    // Devolvemos un array con los estados data, error y loaded para que el componente que utiliza este hook pueda acceder a ellos
    return [data, error, loaded];
}

export default useAxios; // Exportamos el hook useAxios para que pueda ser utilizado en otros componentes
