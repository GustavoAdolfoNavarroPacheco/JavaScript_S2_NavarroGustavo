// Consumo de API 
// mediante XMLHttpRequest

// Modularizar el consumo de la API
function buscarPersonaje() {
    //const nombreUsar = prompt("Ingresar el nombre del personaje a buscar: ");
    const nombreUsar = document.getElementById("nombreInput").value;
    const xhr = new XMLHttpRequest(); // La importacion  del XML
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`; // Acento Inverso ```
    console.log(url)
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            
            //alert("Cargando...")
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                const daticos = JSON.parse(xhr.responseText);
                //alert("El personaje es: \n Nombre: " + daticos["results"][0]["name"] + "\n Estatus: " + daticos["results"][0]["status"] + "\n Especie: " + daticos["results"][0]["species"]);
            }
            catch (err) {
                console.log(err.message); // Si algo malo pasa simplemente imprima el error
            }
        }
    };
    xhr.send();
}


buscarPersonaje();
