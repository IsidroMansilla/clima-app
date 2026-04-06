const { default: axios } = require("axios");

class Busquedas{
    historial = ["Madrid", "Barcelona", "Granada"];

    constructor() {
        
    }

    async pais( lugar = ''){
        //peticion http
        const url = `https://restcountries.com/v3.1/name/${lugar}`;
        try{
            const resp = await axios.get(url);
            const respuesta = resp.data.map( lugar => ({
                capital: lugar.capital,
                region: lugar.region,
                latitud: lugar.latlng[0],
                longitud: lugar.latlng[1],
                poblacion: lugar.population,

            }));
            return respuesta[0];
        }catch(error){
            
            return [];
        }

    }
}

module.exports = Busquedas;