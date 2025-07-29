fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(data => {
        const personajes = data.results;

        let lista = "";
        for (let i = 0; i < personajes.length; i++) {
            lista += personajes[i].id + " - " + personajes[i].name + "\n";
        }

        alert("Personajes:\n" + lista);

        let id = prompt(" Ingrese el ID del personaje que desea ver: ");

        if (id) {
            fetch("https://rickandmortyapi.com/api/character/" + id)
                .then(res => res.json())
                .then(personaje => {
                    alert(
                        "Nombre: " + personaje.name + "\n" +
                        "Estado: " + personaje.status + "\n" +
                        "Especie: " + personaje.species + "\n" +
                        "Genero: " + personaje.gender + "\n" +
                        "Origen: " + personaje.origin.name + "\n" +
                        "Ubicacion: " + personaje.location.name
                    );
                })
                .catch(error => {
                    alert(" No se encontro personaje con el ID ingresado");
                });
        }
    });
