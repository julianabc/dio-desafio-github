function calculadora(){
    const op = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    // verificar erro fora do menu apresentado
    if (!op || op >= 7) {  // verifica se é um número ou se é >= a 7
        alert("Operação inválida!")
        calculadora()
        
    }else{

        // criação de variaveis e conversão para numeros
        let n1 = Number(prompt("Insira o primeiro número: "));
        let n2 = Number(prompt("Insira o segundo número: "));
        let resultado; 

        // verificar variaveis
        if (!n1 || !n2) {
            alert("Parametros inválidos! Digite números")
            calculadora()
            
        }else{


            // funções separadas
            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`) // sao crases (ctrl + acento)
                novaOp()
            }

            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOp()
            }

            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOp()
            }

            function divReal(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOp()
            }

            function divInt(){
                resultado = n1 % n2
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOp()
            }

            function potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} elevado a ${n2} é igual a  ${resultado}`);
                novaOp()
            }


            // dá um reset na pagina
            function novaOp(){
                let opc = prompt("Deseja fazer uma nova operação?\n 1- Sim\n 2 - Não")

                // verificação
                if(opc == 1){
                    calculadora()
                }else if(opc == 2){
                    alert("Tchau! Saindo...")
                }else{
                    alert("Digite uma opção válida!")
                    novaOp()
                }
            }

        } // fim da verificação de variáveis
        
        
        // escolha de operações
        switch (op) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divReal();
                break;
            case 5:
                divInt();
                break;

            case 6:
                potenciacao();
                break;
            
        }
    

        /* 
        if (op == 1){
            soma();
        }else if (op == 2){
            subtracao()
        }else if (op == 3){
            multiplicacao()
        }else if (op == 4){
            divReal()
        }else if (op == 5){
            divInt()
        }else if (op == 6){
            potenciacao()
        }
        */
        




        

        





    } // fim do else

} // fim da funcao

calculadora()