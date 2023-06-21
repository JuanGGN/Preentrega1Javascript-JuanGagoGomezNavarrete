//----------Declaraciones-------//

function Iniciar(){
 alert ("Te has encontrado un destino terrible verdad?, escoje una puerta"); 
 console.log("Que comience la aventura");
}


let PuertaRoja = "PuertaRoja"
let PuertaVerde = "PuertaVerde"
let EntrarAlBosque = "EntrarAlBosque"
let TomarTaxi = "TomarTaxi"
let SacarNavaja = "SacarNavaja"
let Esconderse = "Esconderse"
let SaltarParedon = "SaltarPardeon"
let Bicicleta = "Bicicleta"

//____________JUEGO____________//

Iniciar();

console.log ("------------");

let abrirpuerta  = prompt("Escoje PuertaVerde o PuertaRoja");

if (abrirpuerta === "PuertaRoja"){
    console.log("Has elegido PuertaRoja");
    alert ("Has logrado salir de la casa!")
}

else{ (abrirpuerta === "PuertaVerde")
    console.log("Has elegido PuertaVerde");
    alert ("Te conduce al sotano donde estaban tus raptores, corre!");
}

console.log ("------------");

alert ("Sales corriendo de la casa, pero te han oido! como escaparas?")
let Avanzar  = prompt("Escoje entre TomarTaxi o EntrarAlBosque");



if (Avanzar === "EntrarAlBosque"){
    alert ("Aunque tienes miedo, logras atravesarlo, pero escuchas sus pasos muy cerca...")
    console.log("Has Elegido EntrarAlBosque");
    
}

else{ 
    alert ("Se detiene un auto, pero son tus raptores! Te han atrapado y esta vez no escaparas...");
    console.log("Has elegido TomarTaxi"); 
    
}

console.log ("------------");

alert("Los ruidos detras de ti no te permiten seguir! Que haras?")
let Bosque = prompt("Escoje entre Esconderse o SacarNavaja")

if (Bosque === "Esconderse"){
    alert ("Te escondes y los ves pasar, van armados, tu navaja no hubiera servido de nada. Esperas hasta que se alejen");
    console.log("Has elegido Esconderse");
}

else{
    alert ("Tomas tu navaja y los enfrentas, pero estan armados, que creiste que lograrias?");
    console.log("Has elegido SacarNavaja");
    
}

console.log ("------------");

alert("Llegas a un paredon donde hay una bicicleta, no sabes que hay al otro lado y solo quieres huir")
let Paredon = prompt("Escoje entre Bicicleta o SaltarParedon")

if (Paredon != "SaltarParedon"){
    alert ("Te subes a la bicicleta y huyes, logras llegar a tu casa, pero tarde o temprano vendran por ti");
    console.log("Has elegido Bicicleta");
}

else{
    alert ("Saltas con miedo, pero del otro lado hay un avion! Te subes a el, Has huido de latinoamerica!");
    console.log("Has elegido SaltarParedon");
    console.log ("Felicitaciones! Has ganado");
}

alert ("Felicitaciones! Has ganado");