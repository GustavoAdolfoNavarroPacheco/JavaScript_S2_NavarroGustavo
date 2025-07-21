
let programaEnFuncionamiento = true;
let gasto = []

while (programaEnFuncionamiento == true) {
    let seleccionUsuario = parseInt(prompt(`=============================================
    Simulador de Gasto Diario
    =============================================
    Seleccione una opción:
    1. Registrar nuevo gasto
    2. Listar gastos
    3. Calcular total de gastos
    4. Generar reporte de gastos
    5. Actualizar gasto
    6. Eliminar Gasto
    7. Salir
    =============================================
    Ingrese una opcion: `))

    if (seleccionUsuario === 1) {
        alert(`=============================================
    Registrar Nuevo Gasto
    =============================================
    Ingrese la información del gasto:
    `)

        let montoGasto = prompt(`=============================================
        Monto del gasto:
        =============================================`)
        let categoria = prompt(`=============================================
        Categoría (ej. comida, transporte, entretenimiento, otros):
        =============================================`)
        let descripcion = prompt(`=============================================
        Descripción (opcional):
        =============================================`)
        guardado = true
        while (guardado == true) {
            let seleccionUsuarioSC = prompt(`Ingrese 'S' para guardar o 'C' para cancelar.`)
            if (seleccionUsuarioSC == "s" || seleccionUsuarioSC == "S") {
                let gastoNuevo = {
                    "montoGasto": montoGasto,
                    "categoria": categoria,
                    "descripcion": descripcion
                }
                gasto.push(gastoNuevo)
                alert(`¡Gasto guardado exitosamente!`)
                guardado = false
            }

            else if (seleccionUsuarioSC == "C" || seleccionUsuarioSC == "c") {
                alert(`Cancelando...`)
                guardado = false
            }

            else {
                alert(`¡Verifica la opcion ingresada!`)
                continue
            }
        }
    }
}