
window.onload = function(){
    // `https://viacep.com.br/ws/${cep}/json/`;

    function resultadoCep(dadosCep){                             // Essa função vai receber informaçoes (Rua, cidade...)

        for( let campo in dadosCep ) {                           // Vai trazer o Json e ver se bate o id certo (ruaUsu)

            if(document.querySelector(`#${campo}`)){             // Verificar se o nome vai se igual ao id (ruaUsu)
                document.querySelector(`#${campo}`).value = dadosCep[campo];
            }  
        }                             
    }



    let dadosCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        try {                                                     // try = tentar executar as let abaixo
        let dadosFetch = await fetch(url);
        let dadosJson = await dadosFetch.json();
        resultadoCep(dadosJson);
        } catch(error){                                           // se der errado cai no catch

            alert(error);
        }
        
    }

    //dadosCep('87030283');
    const btnBuscar = document.querySelector("#buscarCep");        // mapeando o botão
    const CEP_ = document.querySelector("#cep");                // mapeando o cep que recebemos

    btnBuscar.addEventListener('click', function(){                // adicionando o evento para executar o click no botão
        
        dadosCep(CEP_.value);

    })  


}