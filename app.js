function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];

    for (let i = 0; i < quantidade; i++){
        let resultado = document.getElementById("resultado");
        numero = randomNumber(de, ate);

        if(de > ate || ate - de < 0 || quantidade > ate - de + 1){
            return resultado.innerHTML = "<label class=\"texto__paragrafo\">Meuuuuuu joga direito</label>";
            break;
        }

        while(sorteados.includes(numero)){
            numero = randomNumber(de, ate);
        }

        sorteados.push(numero)
    }

    resultado.innerHTML = "<label class=\"texto__paragrafo\">Números sorteados: " + sorteados + "</label>";
    activeReiniciar();
}

function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function activeReiniciar(){
    let buttonReiniciar = document.getElementById("btn-reiniciar");
    if (buttonReiniciar.classList.contains("container__botao-desabilitado")){
        buttonReiniciar.classList.remove("container__botao-desabilitado");
        buttonReiniciar.classList.add("container__botao");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    let buttonReiniciar = document.getElementById("btn-reiniciar");
    buttonReiniciar.classList.remove("container__botao");
    buttonReiniciar.classList.add("container__botao-desabilitado");
}