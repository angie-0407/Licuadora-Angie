console.log("Hola mundo desde JS");
var estadoLicuadora = false;
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == false) {
        estadoLicuadora = true;
        licuadora.classList.add("active");
        console.log("Licuadora encendida");
    }else {
        estadoLicuadora = false;
        licuadora.classList.remove("active");
        console.log("Licuadora apagada");
    }
  }

