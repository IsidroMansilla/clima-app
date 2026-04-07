const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async() => {
    const busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();
        switch( opt ){
            case '1':
                const lugar = await leerInput('Pais: ');
                const lugarSel = await busquedas.agregarHistorial(lugar);
                const pais = await busquedas.pais(lugar);
                const clima = await busquedas.clima(pais.latitud, pais.longitud);

                
                console.log("\nInformación del país".green);
                console.log("Capital: ".blue, pais.capital[0]);
                console.log("Lat: ".blue, pais.latitud);
                console.log("Lng: ".blue, pais.longitud);
                console.log("Región: ".blue, pais.region);
                console.log("Población: ".blue, pais.poblacion);
                console.log("\nCondiciones climatológicas".green);
                console.log("Temperatura: ".blue, clima.temperatura);
                console.log("Viento: ".blue, clima.viento);
            break;
            
            case '2':
                busquedas.historialCapitalizado();
            break;
        }

        if(opt !== 0) await pausa();
        
    }while(opt !== 0 )

}

main();