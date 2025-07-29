function buscarPersona() {
    const nombreUsar = prompt("Ingresar el nombre a buscar: ");
    const xhr = new XMLHttpRequest(); // La importacion  del XML
    const url = `https://swapi.py4e.com/api/people?name=${nombreUsar}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            
            alert("Cargando...")
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                const daticos = JSON.parse(xhr.responseText);
                alert("El personaje es: \n Nombre: " + daticos["results"][0]["name"] + "\n Altura: " + daticos["results"][0]["height"] + "\n Masa: " + daticos["results"][0]["mass"] + "\n Color de Cabello: " + daticos["results"][0]["hair_color"] + "\n Color de Skin: " + daticos["results"][0]["skin_color"]+ "\n Color de Ojo: " + daticos["results"][0]["eye_color"]  + "\n Año de Nacimiento: " + daticos["results"][0]["birth_year"] + "\n Genero: " + daticos["results"][0]["gender"]);
            }
            catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
}


buscarPersona();
