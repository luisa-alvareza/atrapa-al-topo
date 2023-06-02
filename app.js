const cuadro= documents.queryselectorall(".cuadrado");
const tiempofaltante= document.queryselector("#tiempo");
let puntaje = document.getelementarybyid("puntaje"),

let resultado = 0;
let tiempoactual = tiempofaltante.textcontent;

function cuadroalzar(){
  cuadro.foreach ((nombredeclase)=>{
    nombredeclase.classlist.remove("topo");
  
  });
  let posicionalazar = cuadro[Math.floor(math.random() * 9)];
  posicionalazar.classlist.add("topo");

  posiciontopo= posicionalazar.id;

}
cuadro.foreach((identificador) =>{
  identificador.addeventlistener("click",()=>{
    if (identificador.id === posiciontopo){
      resultado=resultado+1;
      puntaje.textcontent=resultado;
      posicionalazar=null;
    }
  })
})