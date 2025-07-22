
let programaEnFuncionamiento = true;
let gasto = [];

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
                let now = new Date();
                let year = now.getFullYear();
                let month = now.getMonth() + 1;
                let day = now.getDate();
                let fecha = (`${day}/${month}/${year}`);
                let gastoNuevo = {
                    "montoGasto": montoGasto,
                    "categoria": categoria,
                    "descripcion": descripcion,
                    "fecha": fecha
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
                listaGastos += `-${i + 1} || Monto: $${gasto[i].montoGasto} || Categoria: ${gasto[i].categoria} || Descripcion: ${gasto[i].descripcion} || Fecha: ${gasto[i].fecha} \n`;
            }

            if (gasto.length == 0) {
                listaGastos += "No hay gastos registrados.\n";
            }

            alert(listaGastos);
        }

        else if (opcionUsuario == 2) {
            let categoriaBuscar = prompt(`Ingrese la categoría a filtrar:`).toLowerCase();

            let categoriaFiltrada = "===========================================\n";
            categoriaFiltrada += `Gastos filtrados por categoría: ${categoriaBuscar}\n`;
            categoriaFiltrada += "===========================================\n";

            let encontrados = 0;

            for (let i = 0; i < gasto.length; i++) {
                if (gasto[i].categoria.toLowerCase() === categoriaBuscar) {
                    encontrados++;
                    categoriaFiltrada += `#${i + 1} || Monto: $${gasto[i].montoGasto} || Categoria: ${gasto[i].categoria} || Descripcion: ${gasto[i].descripcion} || Fecha: ${gasto[i].fecha} \n`;
                }
            }

            if (encontrados === 0) {
                categoriaFiltrada += "No se encontraron gastos con esa categoría.\n";
            }

            alert(categoriaFiltrada);
        }

        else if (opcionUsuario == 3) {
            let fechaInicio = prompt(`Ingrese la fecha inicial a filtrar en formato DD/MM/YYYY`)
            let fechaFinal = prompt(`Ingrese la fecha final a filtrar en formato DD/MM/YYYY`)

            let categoriaFiltrada = "===========================================\n";
            categoriaFiltrada += `Gastos filtrados por rango de fecha: ${fechaInicio} - ${fechaFinal}\n`;
            categoriaFiltrada += "===========================================\n";

            let encontrados = 0;

            for (let i = 0; i < gasto.length; i++) {
                if (gasto[i].fecha >= fechaInicio || gasto[i].fecha <= fechaFinal) {
                    encontrados++;
                    categoriaFiltrada += `#${i + 1} || Monto: $${gasto[i].montoGasto} || Categoria: ${gasto[i].categoria} || Descripcion: ${gasto[i].descripcion} || Fecha: ${gasto[i].fecha} \n`;
                }
            }
        }

    }

    else if (seleccionUsuario == 3) {
        let calculoGasto = prompt(`===========================================
        Calcular Total de Gastos
===========================================
Seleccione el periodo de cálculo:

1. Calcular total diario
2. Calcular total semanal
3. Calcular total mensual
4. Regresar al menú principal
===========================================`)
        if (calculoGasto == 1) {
            let listaGastos = "===========================================\n";
            listaGastos += "Gastos totales de hoy: \n";
            listaGastos += "===========================================\n";

            for (let i = 0; i < gasto.length; i++) {
                listaGastos += `-${i + 1} || Monto: $${gasto[i].montoGasto} || Categoria: ${gasto[i].categoria} || Descripcion: ${gasto[i].descripcion} || Fecha: ${gasto[i].fecha} \n`;
                let totalGastos = totalGastos + gasto[i].montoGasto;
            }
            
            if (gasto.length == 0) {
                listaGastos += "No hay gastos registrados.\n";
            }
            
        let mostrar = `${listaGastos}\n`;
        mostrar += `El total de gastos es de: ${totalGastos}`
        alert(mostrar)
        

        }
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
