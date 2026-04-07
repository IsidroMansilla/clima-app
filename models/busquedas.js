const { default: axios } = require("axios");
const fs = require('fs');

class Busquedas{
    historial = [];
    dbPath = './db/database.json';
    constructor() {
        this.leerBD();
    }

    historialCapitalizado(){
        if(Array.isArray(this.historial) && this.historial.length > 0){
            this.historial.forEach((pais) => {
                console.log(this.capitalizarPalabras(pais));
            });
            return this.historial;
        }
        console.log('No entra en el bucle');
        return;
    }


    async pais( lugar = ''){
        //peticion http
        const url = `https://restcountries.com/v3.1/name/${lugar}`;
        try{
            const resp = await axios.get(url);
            //const respuesta = resp.data.map( lugar => ({
            //    capital: lugar.capital,
            //    region: lugar.region,
            //    latitud: lugar.latlng[0],
            //    longitud: lugar.latlng[1],
            //    poblacion: lugar.population,
            //}));
            return{
                capital: resp.data[0].capital,
                region: resp.data[0].region,
                latitud: resp.data[0].latlng[0],
                longitud: resp.data[0].latlng[1],
                poblacion: resp.data[0].population,
            }
        }catch(error){
            
            return [];
        }

    }

    async clima( latitud, longitud ){
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true`;
        try{
            const resp = await axios.get(url);
            return{
                temperatura: resp.data?.current_weather?.temperature ?? "--",
                viento: resp.data?.current_weather?.windspeed ?? "--"
            }
        } 
        catch (error) {
            return {
                temperatura: "--",
                viento: "--"
            };
        }
    }
    async agregarHistorial(lugar){
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }
        this.historial.unshift(lugar.toLocaleLowerCase());

        this.guardarBD();
    }

    guardarBD(){
        const payload = {
            historial: this.historial
        };
        
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }
    leerBD() {
        if (!fs.existsSync(this.dbPath)) return;
        
        const json = fs.readFileSync(this.dbPath, 'utf-8');
        if (json.trim().length > 0) {
            const data = JSON.parse(json);
            this.historial = data.historial;
        }
        
    }
    capitalizarPalabras(str) {
        return str.split(' ').map(palabra => {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        }).join(' ');
    }
}
module.exports = Busquedas;