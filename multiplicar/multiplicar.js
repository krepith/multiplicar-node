const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}`.grey);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido "${base}"  no es un numero`.green);

        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} =  ${index*base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)


        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}