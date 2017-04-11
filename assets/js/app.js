var botonCanchaFut = document.getElementById("clickCanchaFut");
var canchaFut = document.getElementById("canchaFut");

var botonCanchaBasket = document.getElementById("clickCanchaBasket");
var canchaBasket = document.getElementById("canchaBasket");

var botonCanchaTennis = document.getElementById("clickCanchaTennis");
var canchaTennis = document.getElementById("canchaTennis");

botonCanchaFut.addEventListener("click", detectarClick);
botonCanchaBasket.addEventListener("click", detectarClick);
botonCanchaTennis.addEventListener("click", detectarClick);

function detectarClick(event) {
  switch (event.toElement) {
    case botonCanchaFut:
      if(event.detail == 1){
        mostrarCancha(canchaFut);
      }else if (event.detail == 2) {
        ocultarCancha(canchaFut);
      }
      break;

      case botonCanchaBasket:
        if(event.detail == 1){
          mostrarCancha(canchaBasket);
        }else if (event.detail == 2) {
          ocultarCancha(canchaBasket);
        }
        break;


    default:

  }
}




function mostrarCancha(cancha){
  cancha.style.display = "block";
}

function ocultarCancha(cancha){
  cancha.style.display = "none";
}
