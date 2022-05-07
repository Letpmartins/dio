var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");
var vencedorSelecionado = document.getElementById("vencedor-selecionado");
var quadrados = document.getElementsByClassName("quadrado");

mudarJogador("X");

function escolherQuadrado(id){
    let quadrado = document.getElementById(id);

    if(vencedor!== null){
        return;
    }

    if(quadrado.innerHTML !== "-"){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === "X"){
        jogador = "O";
    } else {
        jogador = "X";
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    let quadrado1 = document.getElementById("1");
    let quadrado2 = document.getElementById("2");
    let quadrado3 = document.getElementById("3");
    let quadrado4 = document.getElementById("4");
    let quadrado5 = document.getElementById("5");
    let quadrado6 = document.getElementById("6");
    let quadrado7 = document.getElementById("7");
    let quadrado8 = document.getElementById("8");
    let quadrado9 = document.getElementById("9");

    //horizontais
    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCor(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1)
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCor(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4)
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCor(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7)
        return;
    }

    //verticais
    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCor(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1)
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCor(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2)
        return;
    }
    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCor(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3)
        return;
    }

    //diagonais
    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCor(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1)
        return;
    }
    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudarCor(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3)
        return;
    }

}

function checaSequencia(quad1, quad2, quad3){
    let sequencia = false;

    if(quad1.innerHTML !== "-" && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
        sequencia = true;
    }

    return sequencia;
}

function mudarCor(quad1, quad2, quad3){
    quad1.style.background = '#0f0';
    quad2.style.background = '#0f0';
    quad3.style.background = '#0f0';
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(let i = 1; i <=9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = "-";

    }

    mudarJogador("X");
}
