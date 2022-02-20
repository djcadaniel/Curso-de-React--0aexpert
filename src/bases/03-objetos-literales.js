const persona = {
    nombre : 'djcadaniel',
    lastname : 'castro',
    edad: 28,
    direction: {
        city: 'New York',
        zip:54564,
        lat:14.56485,
        long: 15.14545
    }
}

//para clonar, usamo el spread como objeto, para q cree uno uevo
const persona2 = {...persona}; //es una asignacion de refencia al espacio en memoria de mi primer variable
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);