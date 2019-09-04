
var naam =  document.querySelector("#partij");
var logo =  document.querySelector("#logo");
var partijleider = document.querySelector("#partijleider");
for (var i=0; i < 1; i++) {
    politiekePartij(partijen[i]);
}


function politiekePartij(partijen){
  console.log(partijen);
}


var willekeurigePartij = partijen[Math.floor(Math.random() * partijen.length)];
console.log(willekeurigePartij);
partij.innerHTML += willekeurigePartij.Afkorting
partijleider.innerHTML += willekeurigePartij.Partijleider
