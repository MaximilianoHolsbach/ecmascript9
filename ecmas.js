// -- ECMASCRIPT 6 Actualización dada en el 2015 --

/**
 * ###################### ECMASCRIPT ES7 ##########################
 *
 * Funcionalidades que se incorporan
 *
 * Operador exponencia: **
 * ej:
 *  let base = 5
 *  let indice = 2
 *  let potencia = base ** indice
 *
 * Metodo array.includes(searchElement, fromIndex)
 * ej:
 *  let palabra1 = "Lucia"
 *  let palabra2 = "optica"
 *  let array1 = ["cargador","celular","mate"]
 *  let incluyePalabra1 = palabra1.includes("Lu") // TRUE
 *  let incluyePalabra2 = palabra2.includes("Lu") // FALSE
 *  let incluyeArray1 = array1.includes("celular") // TRUE
 *
 * ##################### ECMASCRIPT ES8 ############################
 *
 * Se incorporan los metodos:
 *
 * Async , y await, para el manejo de la programación asíncrona.
 *
 * object.keys() = devuelve un array con las claves
 * object.values() = devuelve un array con los valores
 * object.entries() = por cada propiedad me devuelve un array
 *
 * ej:
 *  const datos = {
 *      nombre : "Maximiliano",
 *      apellido : "Holsbach",
 *      edad : 32
 *  }
 *  let valores = object.values(datos)
 *  let entriesDatos = object.entries(datos)
 *
 * ####################### ECMASCRIPT ES9 ###########################
 *
 * Se incorpotra el metodo:
 *
 * .finally() = para atender una promesa, se cumpla o no se cumpla
 *
 * Operadores:
 *
 * spread : sirve para desestructurar alguna propiedad de un objeto, o algún indice de un array.
 *
 * rest : sirve para obtener las propiedades restantes de la desestructuración
 *
 */

//EJEMPLOS DE spread

const datos = {
  nombre: "Maximiliano",
  apellido: "Holsbach",
  edad: 32,
};
const datosExtras = {
  ciudad: "Springfield",
  calle: "Av Siempre Viva",
  altura: 742,
};

const datosUnidos = { ...datos, ...datosExtras }; // Utilizo el spreed operator

console.log(datosUnidos);

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const arrayUnidos = [...array1, ...array2];

console.log(arrayUnidos);

//ASIGNACION DE LA PROPIEDAD DE UN OBJETO A UNA VARIABLE

const nombreAsignacion = datosUnidos.nombre;

console.log(nombreAsignacion);

//DESESTRUCTURACION : Sacar de un objeto o de un array las propiedades que necesitamos

const { nombre, apellido, edad } = datosUnidos; //DESESTRUCTURACION

console.log(nombre);
console.log(apellido);
console.log(edad);

//Estructuración : la posibilidad de crear un objeto a partir de variables

const nivelEstudios = "secundarios";
const especialidad = "técnica";

const datosAcademicos = { nivelEstudios, especialidad }; //Estructuración

console.log(datosAcademicos);

/*...REST : puede tener cualquier nombre,
 * pero lo que realiza en si es tomar todas las propiedades que no se tomaron de un objeto como propias*/

const datosSalud = {
  alergias: false,
  enfermedadesCronicas: false,
  lesiones: "Rodilla",
};

const { alergias, ...rest } = datosSalud; // dESESTRUCTURAR CON ..REST

console.log(alergias);
console.log(rest);

/**
 * ########################## ECMAS 10 ############################
 *
 * Incompora los siguientes metodos:
 *
 * string.trim() = quita los espacios blancos que existen al principio y al final
 *
 * array.flat(depth) = quita los array anidados
 *
 * ######################### ECAMAS 11 #############################
 *
 * Incorpora el operador nullish
 *
 * Operador ternario: es una estructura simil if-else (TRUE) ? (SI ES TRUE EJECUTA ESTO) : (SI ES FALSE EJECUTA ESTO)
 *
 *
 */

//Ejemplo de operador ternario

const miEdad = 3;

miEdad > 18 ? console.log("Mayor de edad") : console.log("Menor de edad");
//CONDICION ?               (TRUE)           :            (FALSE)

/**
 * OPERADOR &&
 * SE EJECUTA UNICAMENTE SI LA CONDICION ES VERDADERA : (condicion) && console.log("La condicion es verdadera")
 * */

//EJEMPLO DE OPERADOR &&

const fechaActual = new Date();

const year = fechaActual.getFullYear();

year == 2023 && console.log("Es actual"); //Se ejecuta solo si es verdad la condición
