var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

function validacion(user, bot) {
    switch (true){
        case (user == piedra && bot == tijeras):
            console.log("ganaste");
            break;
        case (user == papel && bot == piedra):
            console.log("ganaste"); 
            break;
        case (user == tijeras && bot == papel):
            console.log("ganaste");
            break;
        default:
            console.log("perdiste");
            break;
    }   
}
validacion(piedra, papel);