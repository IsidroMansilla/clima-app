const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async() => {
    const busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();
        console.log(opt);

        switch( opt ){
            case '1':
                //Mostrar mensaje
                const lugar = await leerInput('Pais: ');
                const pais = await busquedas.pais(lugar);

                console.log("\nInformación del país".green);
                console.log("Capital: ".blue, pais.capital[0]);
                console.log("Lat: ".blue, pais.latitud);
                console.log("Lng: ".blue, pais.longitud);
                console.log("Región: ".blue, pais.region);
                console.log("Población: ".blue, pais.poblacion);

            break;
        }

        if(opt !== 0) await pausa();
        
    }while(opt !== 0 )

}

main();