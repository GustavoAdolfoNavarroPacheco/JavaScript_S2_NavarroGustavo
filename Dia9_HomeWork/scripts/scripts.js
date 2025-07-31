
function buscarPokemon() {
    const nombreIdBuscar = document.getElementById("mainInput").value;
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreIdBuscar}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayPoke(data)
            }
    };
    xhr.send();
}

function mostrarPokemon(datos) {
    const pokemon = document.getElementById("Mostrar");
    const nombrePokemon = (datos["name"].chatAt(0).toUpperCase()) + (datos["name"].slice(1))
    pokemon.innerHTML = `${datos["id"]} - ${nombrePokemon}`
}

