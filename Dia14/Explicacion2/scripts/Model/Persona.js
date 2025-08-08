// #############################################
// P.O.O (Programacion Orientada a Obtejossssss)
// #############################################

// Que es la funcion P.O.O?
/*
Es un paradigma de programacion que se basa en el 
uso de "objetos" para representar entidades del mundo real dentro del software.
Cada objeto es una instancia de una clase, donde una clase es una plantilla
que define las propiedades (atributos) y comportamientos (metodos) que los objetos de este
tipo tendran.


En terminos generales, los pilares de la P.O.O son: 

Abstraccion : Representar entidades del mundo real con sus caracteristicas esenciales.

Encapsulamiento : Ocultar los detalles internos y exponer solo lo necesario.

Herencia : Reutilizar codigo mediante una relacion de tipo "es-un".

Polimorfismo : Permite que un mismo metodo se comporte de diferentes formas segun el
contexto.

*/

export default class Persona{
    // Atributos en JS se integran en
    // el constructor.
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}