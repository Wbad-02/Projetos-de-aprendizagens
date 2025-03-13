function calcularPorcentagem(valor, percentual) {
    return (valor * percentual) / 100;
}

function calcular() {
    let bolsa = parseFloat(document.getElementById('pesoBolsa').value) || 0;
    let botas = parseFloat(document.getElementById('pesoBotas').value) || 0;
    let montaria = parseFloat(document.getElementById('pesoMontaria').value) || 0;
    let percentualTorta = parseFloat(document.getElementById('pesoTorta').value) || 0;

    let somaPeso = bolsa + botas + montaria;
    let pesoTortaKg = calcularPorcentagem(somaPeso, percentualTorta);
    let pesoTotal = somaPeso + pesoTortaKg;

    console.log(`O peso total é: ${pesoTotal.toFixed(2)} kg`);
    document.getElementById('resultadoTotal').innerText = `O peso total é: ${pesoTotal.toFixed(2)} kg`;
    
    return pesoTotal; 
}

function reiniciar() {
    document.getElementById('pesoBolsa').value = "";
    document.getElementById('pesoBotas').value = "";
    document.getElementById('pesoMontaria').value = "";
    document.getElementById('pesoTorta').value = "";
    document.getElementById('resultadoTotal').innerText = "";
}

function calcularRecurso() {
    let recurso1 = parseFloat(document.getElementById('pesoR1').value) || 0;
    let quantidade1 = parseFloat(document.getElementById('quantidadeR1').value) || 0;
    let resultado1 = recurso1 * quantidade1;

    document.getElementById('resultadoRecursos').innerText = `${resultado1.toFixed(2)} kg`;
    
    return resultado1; 
}

function reiniciarRecurso() {
    document.getElementById('pesoR1').value = "";
    document.getElementById('quantidadeR1').value = "";
    document.getElementById('resultadoRecursos').innerText = "";
    document.getElementById('cargaMontaria').innerText = "";
}

function diferenca() {
    let resultadoCalcular = calcular(); 
    let resultadoCalcularRecurso = calcularRecurso(); 
    let sobra = resultadoCalcular - resultadoCalcularRecurso;


    if (sobra > 0) {
        document.getElementById('cargaMontaria').innerText = `Você ainda tem: ${sobra.toFixed(2)} kg sobrando.`;
    } else {
        document.getElementById('cargaMontaria').innerText = `Você está: ${Math.abs(sobra).toFixed(2)} kg acima da carga máxima.`;
    }
}


document.getElementById('btn-calcular1').addEventListener('click', calcular);
document.getElementById('btn-reiniciar1').addEventListener('click', reiniciar);
document.getElementById('btn-calcular2').addEventListener('click', calcularRecurso);
document.getElementById('btn-reiniciar2').addEventListener('click', reiniciarRecurso);
document.getElementById('btn-diferenca').addEventListener('click', diferenca);