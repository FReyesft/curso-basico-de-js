var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";


function validacion(user, bot) {
    if (user != bot) {

        if (user == piedra && bot == tijeras){
            console.log("ganaste");
        }
            else if (user == papel && bot == piedra){
                console.log("ganaste");
            }
            else if (user == tijeras && bot == papel){
                console.log("ganaste");
            }
            else{
                console.log("perdiste");
        }
    }
}

validacion(piedra, papel)