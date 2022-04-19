var conexao = true

function decrementar(){
    t_segundos = document.getElementById('segundos')
    t_segundos.innerHTML = '10'
    var s = 10

    setInterval(function(){
        s--
        if(s < 0){
            clearInterval(s) //limpando contagem da memória
        }else{
            t_segundos.innerHTML = '' + s //concatenando string com inteiro
        }
    }, 1000);

}

try{
    /*Aqui você coloca uma situação que você queira executar
      Se der algum erro inesperado, você pode tratá-lo com o bloco catch*/

      console.log(cnx) //imprimeindo variavel que nao existe pra forçar um erro
}

//no bloco catch tem que haver um parâmetro de erro para poder tratá-lo
catch(e){

    decrementar()
    
}