document.getElementById('btnColor').addEventListener('click',()=>{
    console.log("Wenassssssss");
    const cuadro = document.getElementById('cuadro');
    cuadro.classList.toggle('cambio');
    // document.getElementById('cuadro').innerHTML+=`<h1>Wenas</h1>`
})

// Elementos generales
cuadro.addEventListener('click',()=>{
    alert('Le diste click al cuadro!');
})

// mouseover y mouseout
// hover (cuando esta encima de // cuando sale de...)
cuadro.addEventListener('mouseover',()=>{
    cuadro.style.border='1px solid black';
})
cuadro.addEventListener('mouseout',()=>{
    cuadro.style.border='1px solid black';
})

// Jugando con teclas
document.addEventListener('keydown',function (e){
    //document.getElementById('textoXD').innerHTML+=`<p>Presionaste: ${e.key}</p>`;
    console.log(`Presionaste: ${e.key}`)
})

// Eventos en los formularios
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',(e)=>{
    e.preventDefault(); //Evitar que haya una recarga de pagina
    const nombre = document.getElementById('nombre').value;
    //alert(`Hola ${nombre}!!!`)
    resultado.textContent = nombre;

})

// Input y Eventos de Entradas
const inputGeneral = document.getElementById('inputTexto');
const resultado = document.getElementById('resultado');


inputGeneral.addEventListener('input',function(){
    resultado.textContent = inputGeneral.value;
});