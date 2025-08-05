const cors = require('cors');
function buscarSuperHeroe() {
    document.getElementById("resultados").innerHTML = ``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api/d821e978ff025823536a8c91f11b3766/search/${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const datos = JSON.parse(xhr.responseText);
                if (datos.results && datos.results.length > 0) {
                    for (let i = 0; i < datos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
            <img src="${datos["results"][i]["image"]}" alt="">
            <h3>${datos["results"][i]["name"]}</h3>
            <p><strong>Status:</strong>${datos["results"][i]["status"]}</p>
            <p><strong>Specie:</strong>${datos["results"][i]["species"]}</p>
        </div>
                        `
                        console.log(datos["results"][i]["name"]);
                    }
                }

            }
            catch (err) {
                console.log(err.message);
            }
        }
    };
}