function validarForm(){


    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/; 
  

       var nombre = document.getElementById("nombre");
       var correo = document.getElementById("correo");
       var mensaje = document.getElementById("mensaje");
       
  
       if(!nombre.value)
       {
        alert("Completar el nombre");
        nombre.focus();
        return false;
       }
       if (!expRegNombre.exec(nombre.value))
        {
        alert("El campo nombre admite letras y espacios.");
        nombre.focus();
        return false;
        }
        if(!correo.value){
            alert("Completar el correo");
            correo.focus();
            return false;
        }
        if(!expRegCorreo.exec(correo.value)){
            alert("El correo no tiene el formato correcto");
            correo.focus();
            return false;
        }
        if(!mensaje.value){
            alert("Escriba su mensaje");
            return false;
        }
     


     
    // asociacion del boton enviar con el formulario en html//
    window.onload = function()
    { 
      var formulario = document.getElementById("contacto-frm");
      formulario.onsubmit = validarForm;
    }
}