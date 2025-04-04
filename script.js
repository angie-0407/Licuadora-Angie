console.log("Hola mundo desde JS");
var estadoLicuadora = false;
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == false) {
        estadoLicuadora = true;
        console.log("Licuadora encendida");
    }else {
        estadoLicuadora = false;
        console.log("Licuadora apagada");
    }
  }

