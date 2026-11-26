function validarNombre(){

    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");


    if(nombre.length<3){
        errorNombre.innertext="El nombre debe terner minimo 3 caracteres"
        return false;
    }
    else{
        errorNombre.innertext=""
        return true;
    }
}
document.getElementById("nombre").addEventListener("input", validarNombre)
function validarApellido(){

    const apellidos = document.getElementById("apellidos").value.trim();
    const errorApellidos = document.getElementById("errorApellidos")



    if(apellidos.length<3){
        errorApellidos.innertext="los apellidos debe terner minimo 3 caracteres"
        return false;
    }
    else{
        errorApellidos.innertext=""
        return true;
    }
}
document.getElementById("apellidos").addEventListener("input", validarApellido)

function validarDocumento(){

    const documento = document.getElementById("documento").value.trim();
    const errorDocumento = document.getElementById("errorDocumento")



    if (!/^\d{6,10}$/.test(documento)) {
        errorDocumento.innertext="Ingrese un documento entre 6 y 10 numeros";
        return false;
    }
    else{
        errorDocumento.innertext="";
        return true;
    }
}
document.getElementById("documento").addEventListener("input", validarDocumento);

function validarCorreo(){

    const correo = document.getElementById("documento").value.trim();
    const errorCorreo = document.getElementById("errorDocumento")



    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        errorCorreo.innertext="Ingrese un correo electronico valido";
        return false;
    }
    else{
        errorCorreo.innertext="";
        return true;
    }
}
document.getElementById("correo").addEventListener("input", validarCorreo);

function validarTelefono(){

    const telefono = document.getElementById("telefono").value.trim();
    const errorTelefono = document.getElementById("errorTelefono")



    if (!/^\d{10}$/.test(telefono)) {
        errorTelefono.innertext="El telefono debe tener exactamente 10 numeros";
        return false;
    }
    else{
        errorTelefono.innertext="";
        return true;
    }
}
document.getElementById("telefono").addEventListener("input", validarTelefono);

function validarEdad(){

    const edad = document.getElementById("edad").value.trim();
    const errorEdad = document.getElementById("errorEdad")



    if (isNaN(edad) || edad < 18 || edad >60) {
        errorEdad.innertext="La edad debe de estar etre 18 y 60 años.";
        return false;
    }
    else{
        errorEdad.innertext="";
        return true;
    }
}
document.getElementById("edad").addEventListener("input", validarEdad);

function validarContrasena(){
    const contrasena = document.getElementById("contrasena").value;
    const errorContrasena = document.getElementById("errorContrasena");

    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)){
        errorContrasena.textContent = "Minimo 8 caracteres, una mayuscula y una numero.";
        return false;
    } else {
        errorContrasena.textContent = "";
        return false;
    }
}
document.getElementById("contrasena").addEventListener("input", validarContrasena);

function validraConfirmar(){
    const contrasena = document.getElementById("contrasena").value;
    const confirmar = document.getElementById("confirmar").value;
    const errorContrasena = document.getElementById("errorConfirmar");

    if (confirmar=="" || confirmar !== contrasena){
        errorConfirmar.textContent = "Las contraseñas no coinciden.";
        return false;
    } else{
        errorConfirmar.textContent="";
        return false;
    }
}
document.getElementById("confirmar").addEventListener("input", validraConfirmar);
document.getElementById("contrasena").addEventListener("input", validraConfirmar);

function validarPrograma() {
    const programa = document.getElementById("programa").value;
    const errorPrograma = document.getElementById("errorPrograma");

    if (programa === "") {
        errorPrograma.textContent = "Seleccione un programa de formación.";
        return false;
    } else {
        errorPrograma.textContent = "";
        return true;
    }
}
document.getElementById("programa").addEventListener("change", validarPrograma);


function validarTerminos() {
    const terminos = document.getElementById("terminos").checked;
    const errorTerminos = document.getElementById("errorTerminos");

    if (!terminos) {
        errorTerminos.textContent = "Debe aceptar los términos y condiciones.";
        return false;
    } else {
        errorTerminos.textContent = "";
        return true;
    }
}
document.getElementById("terminos").addEventListener("change", validarTerminos);


const formulario = document.getElementById("formulario");
const btnRegistrar = document.getElementById("btnRegistrar");
const mensajeFinal = document.getElementById("mensajeFinal");

function validarFormulario() {
    let resultado = true;

    if (!validarNombre()) resultado = false;
    if (!validarApellidos()) resultado = false;
    if (!validarDocumento()) resultado = false;
    if (!validarCorreo()) resultado = false;
    if (!validarTelefono()) resultado = false;
    if (!validarEdad()) resultado = false;
    if (!validarContrasena()) resultado = false;
    if (!validarConfirmar()) resultado = false;
    if (!validarPrograma()) resultado = false;
    if (!validarTerminos()) resultado = false;

    btnRegistrar.disabled = !resultado;
    return resultado;
}

function enviarFormulario(event) {
    event.preventDefault();

    if (validarFormulario()) {
        mensajeFinal.textContent = "¡Estudiante registrado correctamente!";
        mensajeFinal.style.color = "green";
        formulario.reset();

        const campos = document.querySelectorAll("input, select");
        for (let i = 0; i < campos.length; i++) {
            campos[i].classList.remove("error", "exito");
        }

        const mensajes = document.querySelectorAll("small");
        for (let i = 0; i < mensajes.length; i++) {
            mensajes[i].textContent = "";
            mensajes[i].className = "";
        }

        btnRegistrar.disabled = true;
    }
}
formulario.addEventListener("submit", enviarFormulario);