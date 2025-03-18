let valortTotal;

function adicionar(){
    let quantidade =  document.getElementById('quantidade').value;
    if (quantidade<= 0){
        alert(`porfavor insira uma quantidade válido`)
        return;
    } else {
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = parseFloat(produto.split('R$')[1]);
        
        let valor = quantidade * valorUnitario;
        valortTotal += valor;
    
        let listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML += `<li> ${quantidade} x ${nomeProduto} - R$ ${valor.toFixed(2)}</li>`;
    
        document.getElementById('valor-total').innerText = `Valor total: ${valortTotal.toFixed(2)}`;
        document.getElementById('quantidade').value = "";
    }

}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = "";
    valortTotal = 0;
    document.getElementById('valor-total').innerText = ` R$00.00`;
}

document.getElementById(btn-adicionar).addEventListener('click', adicionar);
document.getElementById(btn-limpar).addEventListener('click', limpar);