var estadoLicuadora = false;

function controlarLicuadora() {
    if (estadoLicuadora == false) {
        estadoLicuadora = true;
        console.log("Licuadora encendida");
    }else {
        estadoLicuadora = false;
        console.log("Licuadora apagada");
    }
  }
