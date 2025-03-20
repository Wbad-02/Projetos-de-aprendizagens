const botaoComecar = document.getElementsByClassName('button primary');
const botaoSortear = document.getElementsByClassName('button secondary');
const botaoReiniciar = document.getElementsByClassName('form__link');
let arrayComNomes = [];

function adicionar() {
    let nomeDosAmigos = document.getElementById('nome-amigo');
    if (nomeDosAmigos.value === '') {
        alert('Insira um nome válido');
    } else if (arrayComNomes.includes(nomeDosAmigos.value)) {
        alert('Esse nome já foi adicionado!');
    } else {
        let listaNomes = document.getElementById('lista-amigos');
        listaNomes.innerHTML += `<li>${nomeDosAmigos.value}</li>`;
        arrayComNomes.push(nomeDosAmigos.value);
        nomeDosAmigos.value = "";
        console.log(arrayComNomes);
    }
}


function sortear(){
    let inciceEscolhida = Math.floor(Math.random() * arrayComNomes.length);
    let nomeSorteado = arrayComNomes[inciceEscolhida];
    console.log(nomeSorteado);
    document.getElementById('lista-sorteio').textContent = nomeSorteado;
}

function reiniciar(){
    let listaNomes = document.getElementById('lista-amigos');
    listaNomes.innerHTML = "";
    arrayComNomes = [];
    let nomeDosAmigos = document.getElementById('nome-amigo');
    nomeDosAmigos.value = "";
    document.getElementById('lista-sorteio').textContent = "";

}