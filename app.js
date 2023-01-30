/*******************************************************
 *  Objetivo: Realizar a media escolar de 4 notas do aluno
 *  Data: 27/01/2023
 *  Autor: Murillo
 *  Versão: 1.0 
 * ****************************************************/

console.log("Sistema de calculo de Médias Escolares ")

//import da biblioteca para entrada de dados
var readline = require('readline')

// Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

/** CONCEITOS SOBRE CRIAÇÃO DE VARIAVEIS 
 * 
 * VAR - toda variavel criada como var tem por objetivo ser um escopo local,
 *       ou seja, ela poderá ser utilizada por diversos pontos de programação
 * 
 * LET - toda variavel criada como let, tem por objetivo ser um escopo global,
 *       ou seja, será utilizada somente naquele função 
 * 
 * CONST -  Tem por objetivo criar um espaço em memória para armazenar dados
 *          que não sofrem mudança
 * 
 **/

// Função de CallBack para retornar o nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function(nome) {
    // Variavel local para receber o nome do aluno, que vai ser retornado pela função
    let nomeAluno = nome

    //Função de CallBack para entrada da Nota1
    //Nota1
    entradaDados.question('Por favor digite a nota do 1° aluno: \n', function(nota1) {
        let primeiraNota = nota1

        //Nota2
        entradaDados.question('Por favor digite a nota do 2° aluno: \n', function(nota2) {
            let segundaNota = nota2

            //Nota3
            entradaDados.question('Por favor digite a nota do 3° aluno: \n', function(nota3) {
                let terceiraNota = nota3

                //Nota4
                entradaDados.question('Por favor digite a nota do 4° aluno: \n', function(nota4) {
                    let quartaNota = nota4
                    let media = 0


                    /**
                     * Coversão de dados String para numero
                     * Number.parseInt ou parseInt() - Converte para Inteiro
                     * Number.parsefloat ou parsefloat() - Converter para Real
                     * Number() - coverte para int ou float, conforme a entrada de dados
                     * 
                     * 
                     * 
                     * 
                *Operadores de comparação

                    * == (Verificar a igualdade de conteudo)
                    * != (Verificar a diferença de conteudo)
                    * < (Verificar o menor valor)
                    * > (Verificar o maior valor)
                    * <= (Verificar o menor ou igual valor)
                    * >= (Verificar o maior ou igual valor)
                    * === (Verificar a igualdade de conteudo a validar a tipagem de dados)
                    * Ex: 0 == 0         V
                    *     0 == '0'       V
                    *     0 === '0'      F  
                    *     0 ==! 0.0      F  
                    * 
                    * 
                *Operadores Lógicos
                *  OU           ||    (pipe)         OR
                *  E            &&                   AND
                * NEGAÇÃO       |                    NOT   
                    * 
                    * 
                *Ordem de execução dos operadores lógicos
                * 0°()
                * 1° Negação 
                * 2° E
                * 3° OU
                    

                    **/


                    //Validação para tratar entradas vazias
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                        console.log('ERRO: É necessário digitar algum valor nas entradas.')

                        // Validação para entrada de dados não numéricos
                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                        console.log('ERRO: É necessário que todos os dados digitados sejam números.')

                        // Validação de entrada de valores entre 0 e 10
                    } else if (primeiraNota < 0 || primeiraNota > 10 || segundaNota < 0 || segundaNota > 10 || terceiraNota < 0 || terceiraNota > 10 || quartaNota < 0 || quartaNota > 10) {
                        console.log('ERRO: O sistema aceita somente números entre 0 até 10.')

                    } else {
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4


                        if (media >= 7) {
                            console.log('Status do aluno: Aprovado! ')
                        } else {
                            console.log('Status do aluno: Reprovado!')
                        }
                        console.log('Média final: ' + media.toFixed(1))
                    }









                    // console.log(nomeAluno, primeiraNota, segundaNota, terceiraNota, quartaNota) // apenas para testar código

                })
            })
        })
    })
})