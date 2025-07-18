
let programaEnFuncionamiento = true;
let rangoFechas = true;

while (programaEnFuncionamiento == true) {
    console.log("=============================================")
    console.log("         Simulador de Gasto Diario           ")
    console.log("=============================================")
    console.log("Seleccione una opción:                       ")
    console.log("                                             ")
    console.log("1. Registrar nuevo gasto                     ")
    console.log("2. Listar gastos                             ")
    console.log("3. Calcular total de gastos                  ")
    console.log("4. Generar reporte de gastos                 ")
    console.log("5. Actualizar gasto                          ")
    console.log("6. Eliminar Gasto                            ")
    console.log("7. Salir                                     ")
    console.log("=============================================")
    
    seleccionUsuario = prompt(" ")
    if (seleccionUsuario == 1) {
        console.log("=============================================")
        console.log("            Registrar Nuevo Gasto            ")
        console.log("=============================================")
        console.log("Ingrese la información del gasto:            ")
        console.log("                                             ")
        console.log("- Monto del gasto:                           ")
        montoGasto = prompt(" ")
        console.log("- Categoría (ej. comida, transporte, entretenimiento, otros):")
        categoriaGasto = prompt(" ")
        console.log("- Descripción (opcional):                    ")
        descripcionGasto = prompt(" ")
        console.log("                                             ")
        nuevoGasto = True
    }
    programaEnFuncionamiento = false
}


/*
seleccionUsuario = int(prompt(" "))
if seleccionUsuario == 1:
    console.log("=============================================")
console.log("            Registrar Nuevo Gasto            ")
console.log("=============================================")
console.log("Ingrese la información del gasto:            ")
console.log("                                             ")
console.log("- Monto del gasto:                           ")
montoGasto = float(prompt(" "))
console.log("- Categoría (ej. comida, transporte, entretenimiento, otros):")
categoriaGasto = str(prompt(" "))
console.log("- Descripción (opcional):                    ")
descripcionGasto = str(prompt(" "))
console.log("                                             ")
fechaGasto = datetime.now().strftime("%d/%m/%Y")
nuevoGasto = True
while (nuevoGasto):
    console.log("Ingrese S para guardar o C para cancelar.")
console.log("=============================================")
opcionUsuarioSC = prompt(" ").upper()
if opcionUsuarioSC == "S":
    console.log(" ¡Gasto guardado Exitosamente!           ")
id = contadorId(dataSave)
registroNuevoGasto = {
    "id": id,
    "monto": montoGasto,
    "categoria": categoriaGasto,
    "descripcion": descripcionGasto,
    "fecha": fechaGasto,
}
dataSave.append(registroNuevoGasto)
guardarJSON(dataSave)
nuevoGasto = False
            elif opcionUsuarioSC == "C":
console.log(" Registro de Nuevo Gasto Cancelado       ")
nuevoGasto = False
            else:
console.log(" Verfica que la opcion sea S/C           ")       
    elif seleccionUsuario == 2:
console.log("=============================================")
console.log("                Listar Gastos                ")
console.log("=============================================")
console.log("                                             ")
console.log("1. Ver todos los gastos                      ")
console.log("2. Filtrar por categoría                     ")
console.log("3. Filtrar por rango de fechas               ")
console.log("4. Regresar al menú principal                ")
console.log("=============================================")
opcionUsuario = int(prompt(" "))
if opcionUsuario == 1:
    console.log("=============================================")
console.log(tabulate(dataSave, headers = "keys", tablefmt = "simple"))
        elif opcionUsuario == 2:
console.log("=============================================")
console.log("    Ingrese la categoria que dese filtrar    ")
console.log("=============================================")
filtroCategoria = prompt(" ").strip().lower()
console.log("=============================================")
gastosFiltro = []
for gasto in dataSave:
    if gasto["categoria"].strip().lower() == filtroCategoria:
        gastosFiltro.append(gasto)

if len(gastosFiltro) > 0:
    console.log(tabulate(gastosFiltro, headers = "keys", tablefmt = "simple"))
else:
console.log("ERROR")
console.log("No se encontró ninguna categoría igual a la que ingresaste")
        elif opcionUsuario == 3:
console.log("=============================================")
console.log("          Ingrese el rango de Fechas         ")
console.log("=============================================")
while (rangoFechas):
    console.log("Fecha Inicial: DD/MM/YYYY")
fechaInicial = prompt(" ")
console.log(" ")
console.log("Fecha Final: DD/MM/YYYY")
fechaFinal = prompt(" ")
if len(fechaInicial) == 10 and fechaInicial[2] == "/" and fechaInicial[5] == "/" and len(fechaFinal) == 10 and fechaFinal[2] == "/" and fechaFinal[5] == "/":
fechaInicio = datetime.strptime(fechaInicial, "%d/%m/%Y")
fechaFin = datetime.strptime(fechaFinal, "%d/%m/%Y")
gastosPorFecha = []
for gasto in dataSave:
    fechaGasto = datetime.strptime(gasto["fecha"], "%d/%m/%Y")
if fechaInicio <= fechaGasto <= fechaFin:
    gastosPorFecha.append(gasto)
if len(gastosPorFecha) > 0:
    console.log("=============================================")
console.log("        Gastos en el rango de fechas:        ")
console.log("=============================================")
console.log(tabulate(gastosPorFecha, headers = "keys", tablefmt = "simple"))
rangoFechas = False
                    else:
console.log("No se encontraron gastos en ese rango de fechas.")
                else:
console.log(" ERROR ")
console.log("Verifica que las fechas esten en el formato DD/MM/YYYY.")
        elif opcionUsuario == 4:
console.log(" Regresando... ")
        else:
console.log("Verifica que la opcion ingresada sea correcta")
    elif seleccionUsuario == 3:
console.log("=============================================")
console.log("          Calcular Total de Gastos           ")
console.log("=============================================")
console.log("Seleccione el periodo de cálculo:            ")
console.log("                                             ")
console.log("1. Calcular total diario                     ")
console.log("2. Calcular total semanal                    ")
console.log("3. Calcular total mensual                    ")
console.log("4. Regresar al menú principal                ")
console.log("=============================================")
opcionUsuario = int(prompt(" "))
if opcionUsuario == 1:
    totalHoy = 0
hoy = datetime.now().strftime("%d/%m/%Y")
for gasto in dataSave:
    if gasto["fecha"] == hoy:
        totalHoy += gasto["monto"]
console.log("=============================================")
console.log("            TOTAL GASTOS HOY:                ")
console.log(" $", totalHoy)
console.log("=============================================")
        elif opcionUsuario == 2:
totalSemana = 0
hoy = datetime.now().date()
diaSemana = hoy.weekday()
if diaSemana == 0:
    fechaInicio = hoy
else:
fechaInicio = hoy - timedelta(days = diaSemana)
for gasto in dataSave:
    fechaGasto = datetime.strptime(gasto["fecha"], "%d/%m/%Y").date()
if fechaInicio <= fechaGasto <= hoy:
    totalSemana += gasto["monto"]
console.log("=============================================")
console.log("        TOTAL GASTOS ESTA SEMANA:           ")
console.log(" $", totalSemana)
console.log("=============================================")
        elif opcionUsuario == 3:
totalMes = 0
hoy = datetime.now().date()
fechaInicio = hoy.replace(day = 1)

for gasto in dataSave:
    fechaGasto = datetime.strptime(gasto["fecha"], "%d/%m/%Y").date()
if fechaInicio <= fechaGasto <= hoy:
    totalMes += gasto["monto"]
console.log("=============================================")
console.log("            TOTAL GASTOS ESTE MES:           ")
console.log(" $", totalMes)
console.log("=============================================")
        elif opcionUsuario == 4:
console.log("Saliendo...")
        else:
console.log("Verifique que la opcion ingresada sea correcta")
    elif seleccionUsuario == 4:
console.log("=============================================")
console.log("           Generar Reporte de Gastos         ")
console.log("=============================================")
console.log("Seleccione el tipo de reporte:               ")
console.log("                                             ")
console.log("1. Reporte diario                            ")
console.log("2. Reporte semanal                           ")
console.log("3. Reporte mensual                           ")
console.log("4. Regresar al menú principal                ")
console.log("=============================================")
opcionUsuario = int(prompt(" "))
if opcionUsuario == 1:
    reporte = []
totalHoy = 0
hoy = datetime.now().strftime("%d/%m/%Y")
for gasto in dataSave:
    if gasto["fecha"] == hoy:
        reporte.append(gasto)
console.log("=============================================")
console.log("            REPORTE GASTOS HOY:                ")
console.log(tabulate(reporte, headers = "keys", tablefmt = "simple"))
console.log("=============================================")
        elif opcionUsuario == 2:
reporteSemana = []
totalSemana = 0
hoy = datetime.now().date()
diaSemana = hoy.weekday()
if diaSemana == 0:
    fechaInicio = hoy
else:
fechaInicio = hoy - timedelta(days = diaSemana)
for gasto in dataSave:
    fechaGasto = datetime.strptime(gasto["fecha"], "%d/%m/%Y").date()
if fechaInicio <= fechaGasto <= hoy:
    reporteSemana.append(gasto)
console.log("=============================================")
console.log("        REPORTE GASTOS ESTA SEMANA:           ")
console.log(tabulate(reporteSemana, headers = "keys", tablefmt = "simple"))
console.log("=============================================")
        elif opcionUsuario == 3:
reporteMes = []
totalMes = 0
hoy = datetime.now().date()
fechaInicio = hoy.replace(day = 1)
for gasto in dataSave:
    fechaGasto = datetime.strptime(gasto["fecha"], "%d/%m/%Y").date()
if fechaInicio <= fechaGasto <= hoy:
    reporteMes.append(gasto)
console.log("=============================================")
console.log("          REPORTE GASTOS ESTE MES:           ")
console.log(tabulate(reporteMes, headers = "keys", tablefmt = "simple"))
console.log("=============================================")
        elif opcionUsuario == 4:
console.log("Regresando...")
        else:
console.log("Error")
console.log("Verifica que la opcion ingresada es correcta")
    elif seleccionUsuario == 5:
console.log(tabulate(dataSave, headers = "keys", tablefmt = "simple"))
console.log("=============================================")
console.log(" Ingrese el id del gasto que desea actualizar ")
console.log("=============================================")
actualizar = int(prompt(" "))
for gasto in dataSave:
    if gasto["id"] == actualizar:
        console.log("=============================================")
console.log("Id:", gasto["id"], "                           ")
console.log("Monto:", gasto["monto"], "                     ")
console.log("Categoria:", gasto["categoria"], "             ")
console.log("Descripcion:", gasto["descripcion"], "         ")
console.log("Fecha:", gasto["fecha"], "                     ")
console.log("=============================================")
console.log("Ingresa el nuevo monto del gasto:")
gasto["monto"] = float(prompt(" "))
console.log("Ingresa la nueva categoria del gasto:")
gasto["categoria"] = str(prompt(" "))
console.log("Ingresa la nueva descripcion del gasto:")
gasto["descripcion"] = str(prompt(" "))
console.log("Ingresa la nueva fecha del gasto en formato DD/MM/YYYY:")
fecha = True
while (fecha):
    gastoFecha = prompt(" ")
if len(gastoFecha) == 10 and gastoFecha[2] == "/" and gastoFecha[5] == "/" and len(gastoFecha) == 10 and gastoFecha[2] == "/" and gastoFecha[5] == "/":
gasto["fecha"] = gastoFecha
console.log(" Cambios guardados exitosamente ")
fecha = False
                    else:
console.log("ERROR")
console.log("Recuerda ingresar la fecha de manera correcta")
    elif seleccionUsuario == 6:
console.log(tabulate(dataSave, headers = "keys", tablefmt = "simple"))
console.log("=============================================")
console.log(" Ingrese el id del gasto que desea ELIMINAR ")
console.log("=============================================")
eliminar = int(prompt(" "))
for gasto in dataSave:
    if gasto["id"] == eliminar:
        console.log("Estas seguro de eliminar este gasto? (S/N)")
confirmarEliminar = str(prompt(" "))
if confirmarEliminar == "S":
    logs = dataSave.pop(eliminar - 1)
logsJSON(logs)
guardarJSON(dataSave)
console.log(" Usuario eliminado ")
                elif confirmarEliminar == "N":
console.log(" Regresando... ")
    elif seleccionUsuario == 7:
console.log("¿Desea salir del programa? (S/N):            ")
seleccionUsuarioSN = prompt(" ").upper()
if seleccionUsuarioSN == "S":
    programaEnFuncionamiento = False
        elif seleccionUsuarioSN == "N":
programaEnFuncionamiento = True
        else:
console.log("Verifique que la opcion ingresada sea correcta")
console.log("Recuerde el Uso de Mayusculas")
    else:
console.log(" Numero NO VALIDO! ")
console.log(" por favor verifique que la opcion ingresada sea correcta ")

*/