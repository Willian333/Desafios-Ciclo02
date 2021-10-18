// id = #produtos
// id = #cestaDoCliente
// id = #mostraTotalCompra

window.onload = function(){

    let frutas = [
        {descricao:'Laranja', preco:1.80 },
        {descricao:'Melancia', preco:9.20 },
        {descricao:'Manga', preco:2.40 },
        {descricao:'Uva', preco:4.60 },
        {descricao:'Morango', preco:3.20 },
        {descricao:'Abacaxi', preco:6.60 },
    ]

    const produtos = document.querySelector("#produtos");
    const total = document.querySelector("#mostraTotalCompra");
    
    ( ()=>{                                     // função auto executavel
        let totalzinho=0;
        for( let fru of frutas ){               // vai ler o array
            const filhoLi = document.createElement('li');

            for( listaF in fru ){               // vai ler os objetos
                if( listaF == 'preco'){
                    produtos.appendChild(filhoLi).setAttribute('data-preco', fru[listaF] );   // o preço vai cair aqui
                    totalzinho += fru[listaF];
                } else {
                    produtos.appendChild(filhoLi).textContent = `${fru[listaF]}` ;
                }
                
            }
        }
        total.value = totalzinho.toFixed(2);
    } )(frutas)



}

