function consultaCep(){
    $(".barra_progresso").show();
var cep = document.getElementById("cep").value; //PEGA O VALOR DO INPUT
var url = "https://viacep.com.br/ws/"+cep+"/json/";//PEGA O LINK DO VIACEP E ADICIONA O CEP JUNTO AO LINK
    $.ajax({
        url:url,//PEGA O LINK DA URL
        type:"GET",//METODO PARA PEGAR OS VALORES DA URL
        success: function(response){
            console.log(response);//MOSTRA O RESULTADO NO CONSOLE DO NAVEGADOR
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra_progresso").hide();

        }
    })
  
}



$(function(){
    $(".cep").hide();
    $(".barra_progresso").hide();
})
