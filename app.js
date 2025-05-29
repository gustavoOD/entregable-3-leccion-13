function enviarFormulario() {
nombres = document.getElementById("nombres").value;
    correo = document.getElementById("email").value;
    comentario = document.getElementById("comentarios").value;

    if (nombres === "" || correo === "" || comentario === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    alert(`Gracias por tu mensaje, ${nombres}!`);
    
    document.getElementById("preguntasFormulario").reset();
}