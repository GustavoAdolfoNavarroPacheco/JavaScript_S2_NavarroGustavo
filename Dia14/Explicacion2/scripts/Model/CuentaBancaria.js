export default class CuentaBancaria {
    #saldo // Atributo privado

    constructor(titular,saldoInicial){
        this.titular = titular; // Atributo Publico
        this.#saldo = saldoInicial; // Atributo Privado
    }
    
    depositar(monto){
        if(monto>0){
            this.#saldo += monto;
        }

    }
    verSaldo(){
        return `El saldo es positivo!! ${this.#saldo*50000}`
        //return this.#saldo;
    }
}
/* Con el uso de campos privados (#), protegemos el estado
interno del objeto, reforzando la seguridad y confiabilidad del
sistema.
Hay que recordar que el encapsulamiento buscar ocultar los detalles internos
y exponer solo lo necesario
*/