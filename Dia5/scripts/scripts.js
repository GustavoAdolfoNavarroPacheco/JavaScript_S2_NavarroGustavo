function crear() {
    const nombre = prompt("Ingresa el nombre: ")
    const apellido = prompt("Ingresa el apellido: ")
    const persona = {
        "nombre": nombre,
        "apellido": apellido
    }
    return persona;//objeto
}

function guardar(persona, listica) {
    listica.push(persona)
    return listica
}

function {
    let stringFinal = "";
    for (i = 0, i < listica.length; i++) {
        stringFinal = stringFinal + ("\nPersona #" + (i + 1) + " :" + listica[i][nombre] + " " + listica[i][apellido])
    }
}


let listica = []
console.log(typeof listica); //No es un dato primitivo, sino un objeto
//añadir un elemento a la lista
/*
listica.push("Pepito");
listica.push("Andres");
*/
console.log(listica);
listica.push({ "nombre": "Pedro", "apellido": "Gomez" });
listica.push({ "nombre": "Alejandra", "apellido": "Gomez" });
listica.push({ "nombre": "Rene", "apellido": "Villazon" });
// alert(listica);
// Buscar item en posicion 3



let stringFinal = "";
let personaNueva = crear();
listica = guardar(personaNueva, listica);
mostrarCompleto(listica);


// alert(stringFinal)
