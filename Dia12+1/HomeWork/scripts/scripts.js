const cors = require('cors');

function buscarSuperHeroe() {
    document.getElementById("resultados").innerHTML = ``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/d821e978ff025823536a8c91f11b3766/search/${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            
            console.log ("cargando...")
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    for (let i =0; i < daticos.results.length; i++) {
                        let resultado = document.getElementById("resultados");
                        resultado.innerHTML += `
                        <div class="card">
                        <img src="${daticos["results"][i]["image"]["url"]}">
                        <h3>${daticos["results"][i]["name"]}</h3>
                        </div>`
                    }
                }
            }
            catch (err) {
                console.log (err.message);
            }
        }
    }
    xhr.send();
}

const input = document.getElementById("nombreInput");
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        buscarSuperHeroe();
    }
});