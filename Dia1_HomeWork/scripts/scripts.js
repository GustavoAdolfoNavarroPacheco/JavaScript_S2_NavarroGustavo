
let programaEnFuncionamiento = true;
let gasto = []

while (programaEnFuncionamiento == true) {
    let seleccionUsuario = parseInt(prompt(`===========================================
    Simulador de Gasto Diario
===========================================
    Seleccione una opción:
    1. Registrar nuevo gasto
    2. Listar gastos
    3. Calcular total de gastos
    4. Generar reporte de gastos
    5. Actualizar gasto
    6. Eliminar Gasto
    7. Salir
===========================================
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

    else if (seleccionUsuario == 2) {
        let opcionUsuario = prompt(`===========================================
Listar Gastos
===========================================
Seleccione una opción para filtrar los gastos:

1. Ver todos los gastos
2. Filtrar por categoría
3. Filtrar por rango de fechas
4. Regresar al menú principal
===========================================
Ingrese una opcion: `)
        if (opcionUsuario == 1) {
            let listaGastos = "===========================================\n";
            listaGastos += "Gastos\n";
            listaGastos += "===========================================\n";

            for (let i = 0; i < gasto.length; i++) {
                listaGastos += `-${i + 1} || Monto: $${gasto[i].montoGasto} || Categoria: ${gasto[i].categoria} || Descripcion: ${gasto[i].descripcion}\n`;
            }

            if (gasto.length == 0) {
                listaGastos += "No hay gastos registrados.\n";
            }

            alert(listaGastos);
        }

        else if (opcionUsuario == 2) {
            let categoriaBuscar = prompt(`Ingrese la categoría a filtrar:`).toLowerCase(); // Convertimos a minúsculas

            let gastosFiltrados = "===========================================\n";
            gastosFiltrados += `Gastos filtrados por categoría: ${categoriaBuscar}\n`;
            gastosFiltrados += "===========================================\n";

            let encontrados = 0;

            for (let i = 0; i < gasto.length; i++) {
                if (gasto[i].categoria.toLowerCase() === categoriaBuscar) { // Comparamos en minúsculas
                    encontrados++;
                    gastosFiltrados += `#${i + 1} | Monto: $${gasto[i].montoGasto} | Categoría: ${gasto[i].categoria} | Descripción: ${gasto[i].descripcion}\n`;
                }
            }

            if (encontrados === 0) {
                gastosFiltrados += "No se encontraron gastos con esa categoría.\n";
            }

            alert(gastosFiltrados);
        }

        else if (seleccionUsuario == 7) {
            alert(" Saliendo... ")
            programaEnFuncionamiento = false
        }

        else {
            alert(" ¡Verifica la opcion ingresada!")
            continue
        }
    }
}
