
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
    let seleccionUsuario = prompt(` =============================================
Bienvenido a Hamburguesería Web
=============================================
A continuacion ingrese una opcion: 

1. Encontrar
2. Agregar
3. Eliminar
4. Actualizar
=============================================`)
    if (seleccionUsuario === 1) {
        let = opcionUsuario = prompt(`=============================================
    Encontrar
    =============================================
    A continuacion ingrese una opcion: 
    
    1. 
    =============================================`)
    }

};

























/*

ENCONTRAR

1. Encontrar todos los ingredientes con stock menor a 400.
2. Encontrar todas las hamburguesas de la categoría “Vegetariana”.
3. Encontrar todos los chefs que se especializan en “Carnes”
5. Encontrar todas las hamburguesas preparadas por “ChefB”.
6. Encontrar el nombre y la descripción de todas las categorías.
9. Encontrar todas las hamburguesas que contienen “Pan integral” como ingrediente.
11. Encontrar el ingrediente más caro.
12. Encontrar las hamburguesas que no contienen “Queso cheddar” como ingrediente.
14. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra “clásico”.
17. Encontrar todas las categorías que contienen la palabra “gourmet” en su descripción.
21. Encontrar todos los ingredientes cuyo precio sea entre $2 y $5.
23. Encontrar todas las hamburguesas que contienen “Tomate” o “Lechuga” como ingredientes.
27. Encontrar la hamburguesa más cara.
30. Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes.
31. Encontrar la hamburguesa más cara que fue preparada por un chef especializado en “Gourmet”.
34. Encuentra la categoría con la mayor cantidad de hamburguesas.
36. Encontrar todos los ingredientes que no están en ninguna hamburguesa.
38. Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total.
39. Encontrar el precio promedio de las hamburguesas en cada categoría.

LISTAR 

15. Listar las hamburguesas cuyo precio es menor o igual a $9.
16. Contar cuántos chefs hay en la base de datos.
20. Listar las hamburguesas en orden ascendente según su precio.
24. Listar todos los chefs excepto “ChefA”.
26. Listar todos los ingredientes en orden alfabético.
32. Listar todos los ingredientes junto con el número de hamburguesas que los contienen.
33. Listar los chefs junto con el número de hamburguesas que han preparado.
35. Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado.
37. Listar todas las hamburguesas con su descripción de categoría.
40. Listar los chefs y la hamburguesa más cara que han preparado. 


ELIMINAR

7. Eliminar todos los ingredientes que tengan un stock de 0.
18. Eliminar las hamburguesas que contienen menos de 5 ingredientes.
29. Eliminar todos los chefs que tienen una especialidad en “Cocina Vegetariana”.

AGREGAR

8. Agregar un nuevo ingrediente a la hamburguesa “Clásica”.
19. Agregar un nuevo chef a la colección con una especialidad en “Cocina Asiática”.
28. Agregar “Pepinillos” a todas las hamburguesas de la categoría “Clásica”.

AUMENTAR

4. Aumentar en 1.5 el precio de todos los ingredientes.
13. Incrementar el stock de “Pan” en 100 unidades.
25. Incrementar en $2 el precio de todas las hamburguesas de la categoría “Gourmet”.


ACTUALIZAR 

10. Cambiar la especialidad del “ChefC” a “Cocina Internacional”.
22. Actualizar la descripción del “Pan” a “Pan fresco y crujiente”.

*/