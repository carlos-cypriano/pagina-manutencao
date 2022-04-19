var altura = 0;
var largura = 0;

var vidas = 1;
var tempo = 15;

var pontos = 0;

var criaMosquitoTempo = 1500;

var parametroNivel = window.location.search;    //escreve caminho da página só com o sinal de interrogação e o que estiver a direita
parametroNivel = parametroNivel.replace('?', '');   //escreve o caminho da página apenas com o parâmetro passado

if(parametroNivel === 'normal'){
    criaMosquitoTempo = 1500;
}else if(parametroNivel === 'dificil'){
    criaMosquitoTempo = 1000;
}else if(parametroNivel === 'hardcore'){
    criaMosquitoTempo = 850;
}

//Guardando a função de criação das moscas dentro da variavel criaMosquito
var criaMosquito = setInterval(function(){
    posicaoRandomica();
},criaMosquitoTempo);    //intervalo de tempo de 1,5 segundos para instanciar mosca

//Guardando a função de decremento na variavel cronometro
var cronometro = setInterval(function(){
    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro); //interrompe o jogo quando cronômetro chega a zero 
        clearInterval(criaMosquito);    //interrompe a criação de mosquito quando cronômetro chega a zero
        window.location.href = 'tela_de_vitoria.html';  //chama a tela de vitória
        
    }else{
        document.getElementById('cronometro').innerHTML = tempo + 's';
    }
    
    
}, 1000);   //intervalo de 1 segundo para decrementar tempo




function tamanhoTelaAtualizado(){
    altura = window.innerHeight; 
    largura = window.innerWidth;   

}

tamanhoTelaAtualizado();

function posicaoRandomica(){


     /*Esse if testa se o elemento html com respectivo id existe,
      se existir esse elemento é removido  */
      if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas > 5){
            window.location.href = 'tela_de_derrota.html';
        }else{
            document.getElementById('v'+ vidas).src = 'image/coracao_vazio.png';
            vidas++;
        }
    }

    var positionY = Math.floor(Math.random() * altura) - 90; //se a posição ultrapassar o topo do lado direito, é subtraído 90px de coordenada para mostrar dentro janela de maneira que não apareça a barra de scroll
    var positionX = Math.floor(Math.random() * largura) - 90;//se a posição ultrapassar a largura do lado direito, é subtraído 90px de coordenada para mostrar dentro janela de maneira que não apareça a barra de scroll

    /*verifica se do lado esquerdo seja em largura ou altura
      a coordenada em px é menor que zero ou seja, não apareça na tela corretamente 
      para então retornar o valor 0 em positionX e positionY, exibindo o mosquito
      dentro dos limites da janela de jogo*/
    if(positionX < 0){
        positionX = 0;

    }else {
        positionX = positionX
    }

    if(positionY < 0){
        positionY = 0;
    }else {
        positionY = positionY;
    }
    

    //Criando elemento HTML via javascript
    var mosquito = document.createElement('img'); //associando a uma variavel e passando o nome da tag como parametro
    mosquito.src = 'image/mosca.png'; //passando caminho da imagem programaticamente

    //acessando nome da classe do elemento e pegando suas informações
    /*Concatena as funções tamanhoRandomico e ladoRandomico 
    como as duas retornam strings que representam as classes do estilo css,
    concatenamos um espaço vazio entre elas para que as respectivas strings 
    não fiquem coladas (juntas)*/
    mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico(); 
    mosquito.style.left = positionX + 'px'; //definindo coordenadas em pixel
    mosquito.style.top = positionY + 'px';  //definindo coordenadas em pixel
    mosquito.style.position = 'absolute';   //definindo posição do elemento como absoluta (revisar estudo de posicionamento)
    mosquito.id = 'mosquito';

    document.body.appendChild(mosquito);    //Adicionando elemento HTML do tipo imagem a tela 


    //associando a evento de click ao elemento html e removendo elemento ao clicar
    /*this nesse caso faz referência ao elemento html
      para não precisar usar o document.getElementById*/
      mosquito.onclick = function(){
        pontos += 100; 
        document.getElementById('pontos').innerHTML = pontos;
        this.remove();
    }

}

function tamanhoRandomico(){
    var tamanhos = Math.floor(Math.random() * 3);


    switch(tamanhos){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
            
    }
}

function ladoRandomico(){
    var lados = Math.floor(Math.random() * 2);

    switch(lados){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

   
