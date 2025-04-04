console.log("Hola mundo desde JS");
var estadoLicuadora = false;
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

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

function reproducirSonido() {
    if (estadoLicuadora == true) {
        sonidoLicuadora.play();
        botonLicuadora.play();
    }else {
        sonidoLicuadora.pause();
        botonLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
  }
