var canticadeDeNumerosEnviados = 50;
switch (canticadeDeNumerosEnviados) {
    case 25: {
        console.log("Son veite y cinco");
        break;
    }
    case 20: {
        console.log("Son veinte");
        break;
    }
    case 15: {
        console.log("Son Quince");
        break;
    }
    default: {
        console.log("No se cumplio nunguna función");
    }
}
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albuns"] = 2] = "albuns";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
var menu = 1;
switch (menu) {
    case tipoMenu.canciones: {
        console.log("Accede a las canciones");
        break;
    }
    case tipoMenu.albuns: {
        console.log("Accede a los albuns");
        break;
    }
    case tipoMenu.perfil: {
        console.log("Accede al perfil");
        break;
    }
    default: {
        console.log("El menu no existe");
        break;
    }
}
