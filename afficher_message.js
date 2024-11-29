//*Exercie 1: Afficher le message*//
//*document.getElementById("resultat").innerHTML = "Bonjour Cher Client";*//

let nombreEntier= '';
for (let i = 1; i <= 10; i++) {
if ( i % 2 === 0) {
    nombreEntier += i + '';
}
}
console.log(nombreEntier);

