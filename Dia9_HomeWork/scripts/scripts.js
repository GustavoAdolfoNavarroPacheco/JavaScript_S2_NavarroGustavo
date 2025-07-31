function buscarPokemon() {
    const nombreIdBuscar = document.getElementById("mainInput").value;
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreIdBuscar}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            mostrarPokemon(data);
            mostrarSiguientePokemon(data)
        }
    };
    xhr.send();
}

function mostrarPokemon(datos) {
    const pokemon = document.getElementById("mostrar");
    const nombrePokemon = (datos["name"].charAt(0).toUpperCase()) + (datos["name"].slice(1));
    pokemon.innerHTML = `${datos["id"]} - ${nombrePokemon}`;
    console.log(nombrePokemon)
}

const input = document.getElementById("mainInput");
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        buscarPokemon();
    }
});
