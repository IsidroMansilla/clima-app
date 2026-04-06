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
                const lugar = await leerInput('Ciudad: ');
                console.log(lugar);
                //Buscar los lugares

                //Seleccionar el lugar

                //Clima

                console.log("\nInformación de la ciudad\n".green, );
                console.log("\nCiudad:, \n".white, );
                console.log("\nLat.\n".blue, );
                console.log("\nLng\n".blue, );
                console.log("\nTemperatura\n".blue, );
                console.log("\nMínima\n".blue, );
                console.log("\nMáxima\n".blue, );

            break;
        }

        if(opt !== 0) await pausa();
        
    }while(opt !== 0 )

}

main();