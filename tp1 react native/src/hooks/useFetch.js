import { useState, useEffect } from "react";

export const useFetchData = ({ hero_key }) => {
    const [data, setData] = useState({}); 

    const findRandomCharacter = async () => {
        try {
            const response = await fetch(`https://overfast-api.tekrop.fr/heroes/${hero_key}`);
            if (!response.ok) {
                throw new Error('Error al obtener datos del personaje');
            }
            const fullData = await response.json();
            setData(fullData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        findRandomCharacter();
    }, [hero_key]); 

    return { data, findRandomCharacter }; 
}
