/* SPRINT 1 · TAREA 3: VALIDACION DEL FORMULARIO */

/* Seleccionamos el formulario y cada campo por su id */
const formTarea = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const descripcionTarea = document.querySelector("#descripcionTarea");
const fechaEntrega = document.querySelector("#fechaEntrega");
const estadoTarea = document.querySelector("#estadoTarea");

/* Seleccionamos la alerta de error (en el html empieza oculta con d-none) */
const alertaError = document.querySelector("#alertaError");

/* Funcion que revisa los datos del formulario
   Devuelve una lista con los campos que fallaron, si la lista esta vacia todo es valido */
function validFormFieldInput(data) {

    /* Aqui guardamos el nombre de cada campo con error */
    const errores = [];

    /* Nombre: no puede estar vacio (trim quita los espacios de los lados) */
    if (data.nombre.trim() === "") {
        errores.push("Nombre");
    }

    /* Descripcion: no puede estar vacia */
    if (data.descripcion.trim() === "") {
        errores.push("Descripción");
    }

    /* Fecha de entrega: tiene que traer una fecha */
    if (data.fecha === "") {
        errores.push("Fecha de entrega");
    }

    /* Estado: tiene que haber una opcion seleccionada */
    if (data.estado === "") {
        errores.push("Estado");
    }

    return errores;
}

/* Funcion para mostrar la alerta con el mensaje segun los errores */
function mostrarAlerta(errores) {

    /* Si fallaron los 4 campos el formulario esta vacio */
    if (errores.length === 4) {
        alertaError.textContent = "Completa todos los campos para agregar la tarea.";
    } else {
        alertaError.textContent = "Falta completar: " + errores.join(", ") + ".";
    }

    /* Mostramos la alerta */
    alertaError.classList.remove("d-none");
}

/* Funcion para ocultar la alerta */
function ocultarAlerta() {
    alertaError.classList.add("d-none");
}

/* Detectamos cuando se envia el formulario */
formTarea.addEventListener("submit", function (event) {

    /* Evitamos que la pagina se recargue */
    event.preventDefault();

    /* Recuperamos lo que escribio el usuario */
    const data = {
        nombre: nombreTarea.value,
        descripcion: descripcionTarea.value,
        fecha: fechaEntrega.value,
        estado: estadoTarea.value
    };

    /* Comprobamos en consola que los datos llegan bien */
    console.log("nombre: " + data.nombre);
    console.log("descripcion: " + data.descripcion);
    console.log("fecha: " + data.fecha);
    console.log("estado: " + data.estado);

    /* Validamos los datos */
    const errores = validFormFieldInput(data);

    if (errores.length > 0) {

        /* Hay errores, mostramos la alerta */
        mostrarAlerta(errores);

    } else {

        /* Todo bien, ocultamos la alerta */
        ocultarAlerta();
        console.log("Formulario valido");
    }
});

/* Si el usuario limpia el formulario tambien ocultamos la alerta */
formTarea.addEventListener("reset", ocultarAlerta);
