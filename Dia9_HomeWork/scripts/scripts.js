
function buscarPokemon() {
    const nombreIdBuscar = document.getElementById("mainInput").value;
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreIdBuscar}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            
        }
    };
    xhr.send();
}


buscarPokemon();
