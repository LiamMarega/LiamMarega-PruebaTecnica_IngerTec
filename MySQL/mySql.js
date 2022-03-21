/* CREO LA CONEXION */
const mysql = require("mysql");

/* ME CONECTO A LA DB */
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "101002",
    database: "miprimernombre"
})

connection.connect((error) => {
    if (error) {
        throw error
    }
    console.log("La conexion funciona");
})

/* CONSTANTE PARA AÑADIR A LAS TABLAS */
const insertar = "INSERT INTO `miprimernombre`.`tresource` (`created`, `descrip`, `idResourceType`) VALUES ('2022-03-16', 'Video Marketin Zoologico', '1' )"


 /* Inserto a las tablas */
/* connection.query(insertar, (error, row) => {

 
    if (error) {
        throw error
    }

    console.log(row);
})
 */


/* Consulto las tablas */
connection.query("SELECT * FROM tresource", (error, row) => {
    if (error) {
        throw error
    }
    console.log(row);
})

/* connection.query("SELECT * FROM tresource_type", (error, row) => {
    if (error) {
        throw error
    }
    console.log(row);
})
*/


/* Consulto cuantos tipos de Archivos iguales hay */
connection.query("SELECT count(idResourceType) FROM tresource WHERE idResourceType='1'", (error, row) => {
    if (error) {
        throw error
    }
    console.log("Cantidad de videos: ",row[0]);
})

connection.query("SELECT count(idResourceType) FROM tresource WHERE idResourceType='1'", (error, row) => {
    if (error) {
        throw error
    }
    console.log("Cantidad de PDF Documentación: ",row[0]);
})

connection.query("SELECT count(idResourceType) FROM tresource WHERE idResourceType='2'", (error, row) => {
    if (error) {
        throw error
    }
    console.log("Cantidad de PDF Enunciado: ",row[0]);
})

connection.query("SELECT count(idResourceType) FROM tresource WHERE idResourceType='2'", (error, row) => {
    if (error) {
        throw error
    }
    console.log("Cantidad de PDF Solución: ",row[0]);
})

connection.end()