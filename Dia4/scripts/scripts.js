let programaEnFuncionamiento = true;

let JSONIngredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
];

let JSONCategorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]

let JSONHamburguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

let JSONChefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]



while (programaEnFuncionamiento === true) {
    let contador = 0;
    let opcion = true;
    let subOpcion = true;
    let seleccionUsuario = prompt(` =============================================
Bienvenido a Hamburguesería Web
=============================================
A continuacion ingrese una opcion: 

1. Añadir
2. Listar
3. Eliminar
4. Actualizar
5. Consultar
6. Salir
=============================================`)

    /* OPCION 1 */
    if (seleccionUsuario == 1) {
        while (opcion == true) {

            let = opcionAñadir = prompt(`=============================================
        Añadir
    =============================================
        A continuacion ingrese una opcion: 
        
        1. Ingrediente
        2. Categoria
        3. Hamburguesa
        4. Chef
        5. Regresar
        =============================================`)
            /* SUBOPCION 1 */
            if (opcionAñadir == 1) {
                alert(`=============================================
            Seleccionaste Añadir Ingredientes
    =============================================`)
                let añadirNombre_I = prompt(`=============================================
            Añadir Ingredientes
    =============================================
            Ingrese el nombre del Ingrediente: `)
                let añadirDescripcion_I = prompt(`=============================================
            Añadir Ingredientes
    =============================================
            Ingrese la descripcion del Ingrediente: `)
                let añadirPrecio_I = prompt(`=============================================
            Añadir Ingredientes
    =============================================
            Ingrese el precio del Ingrediente: `)
                let añadirStock_I = prompt(`=============================================
            Añadir Ingredientes
    =============================================
            Ingrese el stock del Ingrediente: `)
                let añadirMomentaneo_I = {
                    "nombre": añadirNombre_I,
                    "descripcion": añadirDescripcion_I,
                    "precio": añadirPrecio_I,
                    "stock": añadirStock_I
                }
                JSONIngredientes.push(añadirMomentaneo_I)
            }
            /* SUBOPCION 2 */
            else if (opcionAñadir == 2) {
                alert(`=============================================
            Seleccionaste Añadir Categoria
    =============================================`)
                let añadirNombre_C = prompt(`=============================================
            Añadir Categoria
    =============================================
            Ingrese el nombre de la Categoria: `)
                let añadirDescripcion_C = prompt(`=============================================
            Añadir Categoria
    =============================================
            Ingrese la descripcion de la Categoria: `)
                let añadirMomentaneo_C = {
                    "nombre": añadirNombre_C,
                    "descripcion": añadirDescripcion_C,
                }
                JSONCategorias.push(añadirMomentaneo_C)
            }
            /* SUBOPCION 3 */
            else if (opcionAñadir == 3) {
                alert(`=============================================
            Seleccionaste Añadir Hamburguesa
    =============================================`)
                let añadirNombre_H = prompt(`=============================================
            Añadir Categoria
    =============================================
            Ingrese el nombre de la Hamburguesa: `)
                let añadirCategoria_H = prompt(`=============================================
            Añadir Categoria
    =============================================
            Ingrese la categoria de la Hamburguesa: `)
                let añadirIngredientes_H = prompt(`=============================================
            Añadir Categoria
    =============================================
            Ingrese los ingredientes de la Hamburguesa: `)
                let añadirPrecio_H = prompt(`=============================================
            Añadir Categoria
    =============================================
            Ingrese la precio de la Hamburguesa: `)
                let añadirChef_H = prompt(`=============================================
            Añadir Categoria
    =============================================
            Ingrese el chef de la Hamburguesa: `)
                let añadirMomentaneo_H = {
                    "nombre": añadirNombre_H,
                    "categoria": añadirCategoria_H,
                    "ingredientes": añadirIngredientes_H,
                    "precio": añadirPrecio_H,
                    "chef": añadirChef_H
                }
                JSONHamburguesas.push(añadirMomentaneo_H)
            }
            /* SUBOPCION 4 */
            else if (opcionAñadir == 4) {
                alert(`=============================================
            Seleccionaste Añadir Chef
    =============================================`)
                let añadirNombre_Ch = prompt(`=============================================
            Añadir Chef
    =============================================
            Ingrese el nombre del Chef `)
                let añadirEspecialidad_Ch = prompt(`=============================================
            Añadir Chef
    =============================================
            Ingrese la especialidad del Chef: `)
                let añadirMomentaneo_Ch = {
                    "nombre": añadirNombre_Ch,
                    "especialidad": añadirEspecialidad_Ch,
                }
                JSONChefs.push(añadirMomentaneo_Ch)
            }
            /* SUBOPCION 5 */
            else if (opcionAñadir == 5) {
                alert(`Regresando...`)
                opcion = false
            }
            /* SUBOPCION  */
            else {
                alert(`Verifique la opcion ingresada...`)
                continue
            }
        }
    }

    /* OPCION 2 */
    else if (seleccionUsuario == 2) {
        while (opcion == true) {
            let = opcionListar = prompt(`=============================================
    Listar
=============================================
    A continuacion ingrese una opcion: 
    
    1. Ingrediente
    2. Categoria
    3. Hamburguesa
    4. Chef
    5. Regresar
=============================================`)
            /* SUBOPCION 1 */
            if (opcionListar == 1) {
                let listaIngredientes = `=============================================\n`;
                listaIngredientes += `Lista de Ingredientes:\n`;
                listaIngredientes += `=============================================\n`;

                for (let i = 0; i < JSONIngredientes.length; i++) {
                    listaIngredientes += `- ${i + 1} \n Nombre: ${JSONIngredientes[i].nombre} \n Descripcion: ${JSONIngredientes[i].descripcion} \n Precio: ${JSONIngredientes[i].precio} \n Stock: ${JSONIngredientes[i].stock} \n _____________________________________________ \n `;
                };

                alert(listaIngredientes)
            }
            /* SUBOPCION 2 */
            else if (opcionListar == 2) {
                let listaCategorias = `=============================================\n`;
                listaCategorias += `Lista de Categorias:\n`;
                listaCategorias += `=============================================\n`;

                for (let i = 0; i < JSONCategorias.length; i++) {
                    listaCategorias += `- ${i + 1} \n Nombre: ${JSONCategorias[i].nombre} \n Descripcion: ${JSONCategorias[i].descripcion}\n _____________________________________________ \n `;
                };

                alert(listaCategorias)
            }
            /* SUBOPCION 3 */
            else if (opcionListar == 3) {
                let listaHamburguesas = `=============================================\n`;
                listaHamburguesas += `Lista de Hamburguesas:\n`;
                listaHamburguesas += `=============================================\n`;

                for (let i = 0; i < JSONHamburguesas.length; i++) {
                    listaHamburguesas += `- ${i + 1} \n Nombre: ${JSONHamburguesas[i].nombre} \n Categoria: ${JSONHamburguesas[i].categoria}\n Ingredientes: ${JSONHamburguesas[i].ingredientes}\n Precio: ${JSONHamburguesas[i].precio}\n Chef: ${JSONHamburguesas[i].chef}\n _____________________________________________ \n `;
                };

                alert(listaHamburguesas)
            }
            /* SUBOPCION 4 */
            else if (opcionListar == 4) {
                let listaChefs = `=============================================\n`;
                listaChefs += `Lista de Chefs:\n`;
                listaChefs += `=============================================\n`;

                for (let i = 0; i < JSONChefs.length; i++) {
                    listaChefs += `- ${i + 1} \n Nombre: ${JSONChefs[i].nombre} \n Especialidad: ${JSONChefs[i].especialidad}\n  _____________________________________________ \n `;
                };

                alert(listaChefs)
            }
            /* SUBOPCION 5 */
            else if (opcionListar == 5) {
                alert(`Regresando...`)
                opcion = false
            }
            /* SUBOPCION  */
            else {
                alert(`Verifique la opcion ingresada...`)
                continue
            }
        }
    }
    /* OPCION 3 */
    else if (seleccionUsuario == 3) {
        while (opcion == true) {
            let = opcionEliminar = prompt(`=============================================
    Eliminar
=============================================
    A continuacion ingrese una opcion: 
    
    1. Ingrediente
    2. Categoria
    3. Hamburguesa
    4. Chef
    5. Regresar
=============================================`)
            /* SUBOPCION 1 */
            if (opcionEliminar == 1) {
                let eliminarIngredientes = `=============================================\n`;
                eliminarIngredientes += `Eliminar Ingredientes:\n`;
                eliminarIngredientes += `=============================================\n`;
                eliminarIngredientes += `A continuacion vera la lista de ingredientes: \n`;
                for (let i = 0; i < JSONIngredientes.length; i++) {
                    eliminarIngredientes += `- ${i + 1} \n Nombre: ${JSONIngredientes[i].nombre} \n Descripcion: ${JSONIngredientes[i].descripcion} \n Precio: ${JSONIngredientes[i].precio} \n Stock: ${JSONIngredientes[i].stock} \n _____________________________________________ \n `;
                };
                alert(eliminarIngredientes)
                let ingredienteEliminar = prompt(`Ingrese el nombre del ingrediente a eliminar: `)
                for (let i = 0; i < JSONIngredientes.length; i++) {
                    if (ingredienteEliminar === JSONIngredientes[i].nombre) {
                        JSONIngredientes.splice(i, 1);
                        alert("Ingrediente eliminado correctamente.");
                        encontrado = true
                    }
                }
                if (encontrado === false) {
                    alert("Ingrediente no encontrado.");
                };
            }
            /* SUBOPCION 2 */
            else if (opcionEliminar == 2) {
                let eliminarCategoria = `=============================================\n`;
                eliminarCategoria += `Eliminar Categoria:\n`;
                eliminarCategoria += `=============================================\n`;
                eliminarCategoria += `A continuacion vera la lista de categorias: \n`;
                for (let i = 0; i < JSONCategorias.length; i++) {
                    eliminarCategoria += `- ${i + 1} \n Nombre: ${JSONCategorias[i].nombre} \n Descripcion: ${JSONCategorias[i].descripcion}\n _____________________________________________ \n `;
                };
                alert(eliminarCategoria)
                let categoriaEliminar = prompt(`Ingrese el nombre del ingrediente a eliminar: `)
                for (let i = 0; i < JSONCategorias.length; i++) {
                    if (categoriaEliminar === JSONCategorias[i].nombre) {
                        JSONCategorias.splice(i, 1);
                        alert("Categoria eliminado correctamente");
                        encontrado = true
                    }
                }
                if (encontrado === false) {
                    alert("Categoria no encontrada");
                };
            }
            /* SUBOPCION 3 */
            else if (opcionEliminar == 3) {
                let eliminarHamburguesas = `=============================================\n`;
                eliminarHamburguesas += `Eliminar Hamburguesa:\n`;
                eliminarHamburguesas += `=============================================\n`;
                eliminarHamburguesas += `A continuacion vera la lista de categorias: \n`;
                for (let i = 0; i < JSONHamburguesas.length; i++) {
                    eliminarHamburguesas += `- ${i + 1} \n Nombre: ${JSONHamburguesas[i].nombre} \n Categoria: ${JSONHamburguesas[i].categoria}\n Ingredientes: ${JSONHamburguesas[i].ingredientes}\n Precio: ${JSONHamburguesas[i].precio}\n Chef: ${JSONHamburguesas[i].chef}\n _____________________________________________ \n `;
                };
                alert(eliminarHamburguesas)
                let HamburguesaEliminar = prompt(`Ingrese el nombre del ingrediente a eliminar: `)
                for (let i = 0; i < JSONHamburguesas.length; i++) {
                    if (HamburguesaEliminar === JSONHamburguesas[i].nombre) {
                        JSONHamburguesas.splice(i, 1);
                        alert("Hamburguesa eliminada correctamente");
                        encontrado = true
                    }
                }
                if (encontrado === false) {
                    alert("Hamburguesa no encontrada");
                };
            }
            /* SUBOPCION 4 */
            else if (opcionEliminar == 4) {
                let eliminarChefs = `=============================================\n`;
                eliminarChefs += `Eliminar Chef:\n`;
                eliminarChefs += `=============================================\n`;
                eliminarChefs += `A continuacion vera la lista de categorias: \n`;
                for (let i = 0; i < JSONChefs.length; i++) {
                    eliminarChefs += `- ${i + 1} \n Nombre: ${JSONChefs[i].nombre} \n Especialidad: ${JSONChefs[i].especialidad}\n  _____________________________________________ \n `;
                };
                alert(eliminarChefs)
                let chefEliminar = prompt(`Ingrese el nombre del ingrediente a eliminar: `)
                for (let i = 0; i < JSONChefs.length; i++) {
                    if (chefEliminar === JSONChefs[i].nombre) {
                        JSONChefs.splice(i, 1);
                        alert("Chef eliminado correctamente.");
                        encontrado = true
                    }
                }
                if (encontrado === false) {
                    alert("Chef no encontrado");
                };
            }
            /* SUBOPCION 5 */
            else if (opcionEliminar == 5) {
                alert(`Regresando...`)
                opcion = false
            }
            /* SUBOPCION  */
            else {
                alert(`Verifique la opcion ingresada...`)
                continue
            }
        }
    }
    /* OPCION 4 */
    else if (seleccionUsuario == 4) {
        while (opcion == true) {
            let = opcionActualizar = prompt(`=============================================
    Actualizar
=============================================
    A continuacion ingrese una opcion: 
    
    1. Ingrediente
    2. Categoria
    3. Hamburguesa
    4. Chef
    5. Regresar
=============================================`)
            /* SUBOPCION 1 */
            if (opcionActualizar == 1) {
                let actualizarIngredientes = `=============================================\n`;
                actualizarIngredientes += `Actualizar Ingredientes:\n`;
                actualizarIngredientes += `=============================================\n`;
                actualizarIngredientes += `A continuacion vera la lista de ingredientes: \n`;
                for (let i = 0; i < JSONIngredientes.length; i++) {
                    actualizarIngredientes += `- ${i + 1} \n Nombre: ${JSONIngredientes[i].nombre} \n Descripcion: ${JSONIngredientes[i].descripcion} \n Precio: ${JSONIngredientes[i].precio} \n Stock: ${JSONIngredientes[i].stock} \n _____________________________________________ \n `;
                };
                alert(actualizarIngredientes)
                let ingredienteActualizar = prompt(`Ingrese el nombre del ingrediente a actualizar: `)
                let nuevoNombre_I = prompt(` Ingrese el nuevo nombre del ingrediente `)
                let nuevaDescripcion_I = prompt(` Ingrese la nueva descripcion del ingrediente `)
                let nuevoPrecio_I = prompt(` Ingrese el nuevo precio del ingrediente `)
                let nuevaStock_I = prompt(` Ingrese el nuevo stock del ingrediente `)
                for (let i = 0; i < JSONIngredientes.length; i++) {
                    if (ingredienteActualizar === JSONIngredientes[i].nombre) {
                        JSONIngredientes[i].nombre = nuevoNombre_I;
                        JSONIngredientes[i].descripcion = nuevaDescripcion_I;
                        JSONIngredientes[i].precio = nuevoPrecio_I;
                        JSONIngredientes[i].stock = nuevaStock_I;
                        alert("Ingrediente actualizado correctamente.");
                        contador = contador + 1;
                    }
                }
                if (contador == 0) {
                    alert("Ingrediente no encontrado.");
                };
            }
            /* SUBOPCION 2 */
            if (opcionActualizar == 2) {
                let actualizarCategoria = `=============================================\n`;
                actualizarCategoria += `Actualizar Categoria:\n`;
                actualizarCategoria += `=============================================\n`;
                actualizarCategoria += `A continuacion vera la lista de categorias: \n`;
                for (let i = 0; i < JSONCategorias.length; i++) {
                    actualizarCategoria += `- ${i + 1} \n Nombre: ${JSONCategorias[i].nombre} \n Descripcion: ${JSONCategorias[i].descripcion}\n _____________________________________________ \n `;
                };
                alert(actualizarCategoria)
                let categoriaActualizar = prompt(`Ingrese el nombre de la categoria a Actualizar `)
                let nuevoNombre_C = prompt(` Ingrese el nuevo nombre de la Categoria `)
                let nuevaDescripcion_C = prompt(` Ingrese la nueva descripcion de la Categoria `)
                for (let i = 0; i < JSONCategorias.length; i++) {
                    if (categoriaActualizar === JSONCategorias[i].nombre) {
                        JSONCategorias[i].nombre = nuevoNombre_C;
                        JSONCategorias[i].descripcion = nuevaDescripcion_C;
                        alert("Categoria actualizada correctamente");
                        contador = contador + 1;
                    }
                }
                if (contador == 0) {
                    alert("Categoria no encontrada");
                };
            }
            /* SUBOPCION 3 */
            if (opcionActualizar == 3) {
                let actualizarHamburguesas = `=============================================\n`;
                actualizarHamburguesas += `Actualizar Hamburguesa:\n`;
                actualizarHamburguesas += `=============================================\n`;
                actualizarHamburguesas += `A continuacion vera la lista de hamburguesas: \n`;
                for (let i = 0; i < JSONHamburguesas.length; i++) {
                    actualizarHamburguesas += `- ${i + 1} \n Nombre: ${JSONHamburguesas[i].nombre} \n Categoria: ${JSONHamburguesas[i].categoria}\n Ingredientes: ${JSONHamburguesas[i].ingredientes}\n Precio: ${JSONHamburguesas[i].precio}\n Chef: ${JSONHamburguesas[i].chef}\n _____________________________________________ \n `;
                };
                alert(actualizarHamburguesas)
                let hamburguesaActualizar = prompt(`Ingrese el nombre de la hamburguesa a actualizar `)
                let nuevoNombre_H = prompt(` Ingrese el nuevo nombre de la Hamburguesa`)
                let nuevaCategoria_H = prompt(` Ingrese la nueva categoria de la Hamburguesa `)
                let nuevosIngredientes_H = prompt(` Ingrese los nuevos ingredientes de la Hamburguesa `)
                let nuevoPrecio_H = prompt(` Ingrese el nuevo precio de la Hamburguesa `)
                let nuevoChef_H = prompt(` Ingrese el nuevo chef de la Hamburguesa `)
                for (let i = 0; i < JSONHamburguesas.length; i++) {
                    if (hamburguesaActualizar === JSONHamburguesas[i].nombre) {
                        JSONHamburguesas[i].nombre = nuevoNombre_H;
                        JSONHamburguesas[i].categoria = nuevaCategoria_H;
                        JSONHamburguesas[i].ingredientes = nuevosIngredientes_H;
                        JSONHamburguesas[i].precio = nuevoPrecio_H;
                        JSONHamburguesas[i].chef = nuevoChef_H;
                        alert("Hamburguesa actualizada correctamente");
                        contador = contador + 1;
                    }
                }
                if (contador == 0) {
                    alert("Hamburguesa no encontrada");
                };
            }
            /* SUBOPCION 4 */
            if (opcionActualizar == 4) {
                let actualizarChefs = `=============================================\n`;
                actualizarChefs += `Eliminar Chef:\n`;
                actualizarChefs += `=============================================\n`;
                actualizarChefs += `A continuacion vera la lista de categorias: \n`;
                for (let i = 0; i < JSONChefs.length; i++) {
                    actualizarChefs += `- ${i + 1} \n Nombre: ${JSONChefs[i].nombre} \n Especialidad: ${JSONChefs[i].especialidad}\n  _____________________________________________ \n `;
                };
                alert(actualizarChefs)
                let chefEliminar = prompt(`Ingrese el nombre del chef a Actualizar `)
                let nuevoNombre_Ch = prompt(`Ingrese el nuevo nombre del Chef `)
                let nuevaEspecialidad_Ch = prompt(`Ingrese la nueva especialidad del chef `)
                for (let i = 0; i < JSONChefs.length; i++) {
                    if (chefEliminar === JSONChefs[i].nombre) {
                        JSONChefs[i].nombre = nuevoNombre_Ch;
                        JSONChefs[i].especialidad = nuevaEspecialidad_Ch;
                        alert("Chef eliminado correctamente.");
                        contador = contador + 1;
                    }
                }
                if (contador == 0) {
                    alert("Chef no encontrado");
                };
            }
            /* SUBOPCION 5 */
            else if (opcionActualizar == 5) {
                alert(`Regresando...`)
                opcion = false
            }
            /* SUBOPCION  */
            else {
                alert(`Verifique la opcion ingresada...`)
                continue
            }
        }
    }
    /* OPCION 5 */
    else if (seleccionUsuario == 5) {
        while (opcion == true) {

            let = opcionConsultar = prompt(`=============================================
    Consultar
    =============================================
    A continuacion ingrese una opcion: 
        
    1. Encontrar
    2. Listar
    3. Eliminar
    4. Agregar
    5. Aumentar
    6. Actualizar
    7. Regresar
    =============================================`)
            if (opcionConsultar == 1) {
                while (subOpcion == true) {
                    let = opcionConsultarEncontrar = prompt(`=============================================
    Consultar / Encontrar
    =============================================
    A continuacion ingrese una opcion: 
        
    1. Encontrar todos los ingredientes con stock menor a 400.
    2. Encontrar todas las hamburguesas de la categoría “Vegetariana”.
    3. Encontrar todos los chefs que se especializan en “Carnes”
    4. Encontrar todas las hamburguesas preparadas por “ChefB”.
    5. Encontrar el nombre y la descripción de todas las categorías.
    6. Encontrar todas las hamburguesas que contienen “Pan integral” como ingrediente.
    7. Encontrar el ingrediente más caro.
    8. Encontrar las hamburguesas que no contienen “Queso cheddar” como ingrediente.
    9. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra “clásico”.
    10. Encontrar todas las categorías que contienen la palabra “gourmet” en su descripción.
    11. Encontrar todos los ingredientes cuyo precio sea entre $2 y $5.
    12. Encontrar todas las hamburguesas que contienen “Tomate” o “Lechuga” como ingredientes.
    13. Encontrar la hamburguesa más cara.
    14. Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes.
    15. Encontrar la hamburguesa más cara que fue preparada por un chef especializado en “Gourmet”.
    16. Encuentra la categoría con la mayor cantidad de hamburguesas.
    17. Encontrar todos los ingredientes que no están en ninguna hamburguesa.
    18. Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total.
    19. Encontrar el precio promedio de las hamburguesas en cada categoría.
    20. Regresar
    =============================================`)
                    if (opcionConsultarEncontrar == 20) {
                        alert(`Regresando... `)
                        subOpcion = false
                    }
                    else {
                        alert(` Opcion ingresada en mantenimiento o no disponible!`)
                        continue
                    }
                }
            }

            else if (opcionConsultar == 2) {
                while (subOpcion == true) {
                    let = opcionConsultarListar = prompt(`=============================================
    Consultar / Listar
    =============================================
    A continuacion ingrese una opcion: 
        
    1. Listar las hamburguesas cuyo precio es menor o igual a $9.
    2. Contar cuántos chefs hay en la base de datos.
    3. Listar las hamburguesas en orden ascendente según su precio.
    4. Listar todos los chefs excepto “ChefA”.
    5. Listar todos los ingredientes en orden alfabético.
    6. Listar todos los ingredientes junto con el número de hamburguesas que los contienen.
    7. Listar los chefs junto con el número de hamburguesas que han preparado.
    8. Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado.
    10. Listar todas las hamburguesas con su descripción de categoría.
    11. Listar los chefs y la hamburguesa más cara que han preparado. 
    12. Regresar
    =============================================`)
                    if (opcionConsultarListar == 12) {
                        alert(`Regresando... `)
                        subOpcion = false
                    }
                    else {
                        alert(` Opcion ingresada en mantenimiento o no disponible!`)
                        continue
                    }
                }
            }

            else if (opcionConsultar == 3) {
                while (subOpcion == true) {
                    let = opcionConsultarEliminar = prompt(`=============================================
    Consultar / Eliminar
    =============================================
    A continuacion ingrese una opcion: 
        
    1. Eliminar todos los ingredientes que tengan un stock de 0.
    2. Eliminar las hamburguesas que contienen menos de 5 ingredientes.
    3. Eliminar todos los chefs que tienen una especialidad en “Cocina Vegetariana”.
    4. Regresar
    =============================================`)
                    if (opcionConsultarEliminar == 4) {
                        alert(`Regresando... `)
                        subOpcion = false
                    }
                    else {
                        alert(` Opcion ingresada en mantenimiento o no disponible!`)
                        continue
                    }
                }
            }

            else if (opcionConsultar == 4) {
                while (subOpcion == true) {
                    let = opcionConsultarAgregar = prompt(`=============================================
    Consultar / Agregar
    =============================================
    A continuacion ingrese una opcion: 
        
    1. Agregar un nuevo ingrediente a la hamburguesa “Clásica”.
    2. Agregar un nuevo chef a la colección con una especialidad en “Cocina Asiática”.
    3. Agregar “Pepinillos” a todas las hamburguesas de la categoría “Clásica”.
    4. Regresar
    =============================================`)
                    if (opcionConsultarAgregar == 4) {
                        alert(`Regresando... `)
                        subOpcion = false
                    }
                    else {
                        alert(` Opcion ingresada en mantenimiento o no disponible!`)
                        continue
                    }
                }
            }

            else if (opcionConsultar == 5) {
                while (subOpcion == true) {
                    let = opcionConsultarAumentar = prompt(`=============================================
    Consultar / Aumentar
    =============================================
    A continuacion ingrese una opcion: 
        
    1. Aumentar en 1.5 el precio de todos los ingredientes.
    2. Incrementar el stock de “Pan” en 100 unidades.
    3. Incrementar en $2 el precio de todas las hamburguesas de la categoría “Gourmet”.
    4. Regresar
    =============================================`)
                    if (opcionConsultarAumentar == 4) {
                        alert(`Regresando... `)
                        subOpcion = false
                    }
                    else {
                        alert(` Opcion ingresada en mantenimiento o no disponible!`)
                        continue
                    }
                }
            }

            else if (opcionConsultar == 5) {
                while (subOpcion == true) {
                    let = opcionConsultarAumentar = prompt(`=============================================
    Consultar / Actualizar
    =============================================
    A continuacion ingrese una opcion: 
        
    1. Cambiar la especialidad del “ChefC” a “Cocina Internacional”.
    2. Actualizar la descripción del “Pan” a “Pan fresco y crujiente”.
    3. Regresar
    =============================================`)
                    if (opcionConsultar == 3) {
                        alert(`Regresando... `)
                        subOpcion = false
                    }
                    else {
                        alert(` Opcion ingresada en mantenimiento o no disponible!`)
                        continue
                    }
                }
            }
            else if (opcionConsultar == 7) {
                alert(`Regresando... `)
                opcion = false
            }
            else {
                alert(` Opcion ingresada en mantenimiento o no disponible!`)
                continue
            }
        }
    }

    /* OPCION 6 */
    else if (seleccionUsuario == 6) {
        alert(`Saliendo...`);
        programaEnFuncionamiento = false
    }

    else {
        alert(`¡¡¡Verifica que la opcion ingresada sea CORRECTA!!!`)
    }

}
