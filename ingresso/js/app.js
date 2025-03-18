function comprar(){
    let tipoAssento = document.getElementById('tipo-ingresso').value;
    let quantidadeIngressos = parseInt(document.getElementById('qtd').value);
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(tipoAssento==="inferior"){
        if (quantidadeIngressos <= quantidadeInferior){
            quantidadeInferior -= quantidadeIngressos;
            alert(`Voce comprou: ${quantidadeIngressos} ingressos`);
            document.getElementById('qtd-inferior').textContent = quantidadeInferior;
            document.getElementById('qtd').value="";
        } else {
            alert('Ingressos não disponiveis');
            document.getElementById('qtd').value="";
        }
    }else if (tipoAssento==="pista"){
        if (quantidadeIngressos<= quantidadePista){
            quantidadePista -= quantidadeIngressos;
            alert(`Voce comprou: ${quantidadeIngressos} ingressos`)
            document.getElementById('qtd-pista').textContent = quantidadePista;
            document.getElementById('qtd').value="";
        }else {
            alert('Ingressos não disponiveis');
            document.getElementById('qtd').value="";
        }
    } else if (tipoAssento==="superior"){
        if (quantidadeIngressos<= quantidadeSuperior){
            quantidadeSuperior -= quantidadeIngressos;
            alert(`Voce comprou: ${quantidadeIngressos} ingressos`);
            document.getElementById('qtd-superior').textContent = quantidadeSuperior;
            document.getElementById('qtd').value="";
        } else {
            alert('Ingressos não disponiveis');
            document.getElementById('qtd').value="";
        }
    }

}


document.getElementById("comprar").addEventListener('click', comprar);