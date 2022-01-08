/* Aqui, vai ser criado o script do contador */

// ele ta pegando o id que é do campo do numero
var currentNumberWrapper = document.getElementById('currentNumber'); 

// inicio do contador
var currentNumber = 0;

// função para aumentar o numero onClick
function increment(){

    // desabilita o botao caso o numero seja maior que 10 
    if(currentNumber >= 10){
        document.getElementsByName('adicionar').disabled = true; 
    }else{
        currentNumber += 1;
        // de fato, muda o número no html
        currentNumberWrapper.innerHTML = currentNumber;
    }

} // fim da funçao

// função para decrementar o numero onClick
function decrement(){

    // desabilita o botao caso o numero seja menor que 0 
    if (currentNumber <= 0){
       document.getElementsByName('subtrair').disabled = true; 

    }else{
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
} // fim da funcao




/* Mesma intenção, agorando reescrevendo em addEventListener  */

/* 1. AddEventListener só funciona com o get element by id
   2. Há outra forma de chamar também, que seria chamando a funçao pelo nome que está em function só que não funcionou aqui.
   3. Acho que é questão de prática para entender melhor como funciona isso 
 */



// pega o id do segundo campo
var num_atualWrapper = document.getElementById('num_atual');

// inicia o contador
var num_atual = 0; 


// utilizando addEventListener para adicionar:
document.getElementById('adicionarID').addEventListener("click", function(){

    if (num_atual >= 10){
        documents.getElementsByName('adicionar2').disabled = true; 
    }else{
        num_atual += 1;
        num_atualWrapper.innerHTML = num_atual;

    }
    // o numero retorna a ser preto depois de ter ficado vermelho ao ser negativo
    if(num_atual >= 0){
        num_atualWrapper.style.color = "black"; 
    }

});

// utilizando addEventListener para subtrair:
document.getElementById('subtrairID').addEventListener("click", function(){

    num_atual -= 1; 
    num_atualWrapper.innerHTML = num_atual;

    if(num_atual < 0){
        num_atualWrapper.style.color = "red"; 
    }

});




