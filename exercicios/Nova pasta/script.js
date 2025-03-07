
let taxaDia, tempoTotal;
function daysInBudget(orcamento, taxaHora){

  taxaDia = taxaHora * 8;
  tempoTotal = orcamento / taxaDia;
  tempoTotal = Math.round(tempoTotal);
  return tempoTotal;

};

let resultado = daysInBudget(20000,89);

console.log(resultado);