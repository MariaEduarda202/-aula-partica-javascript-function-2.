/*1)Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.
  a) Chamar a função e exibir o resultado no console.
 */
 const multiplicar = (par1,par2)=>{
     return par1*par2
 }
 console.log (multiplicar(7,9))
 /* 2)Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.
    a)Chamar a função e exibir o resultado no console.*/
     
    var maiorDeTodos = (n1,n2,n3) => {
        if (n1> n2 && n1>3) {
            return "O maior número é o " + n1
        } else if (n2 > n1 && n2 >3) {
            return "O maior número é o " + n2
            
        } else if (n3 > n1 && n3 > n2){
            return "O maior número é o " + n3
        }

    }
    console.log (maiorDeTodos (5,3,1))
    /* 3)Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.
       a) Chamar a função e exibir no console o resultado.
     */
    var valor = (parametro)=>{
        if (valor%2==0){
            return "Par"
        } else {
            return "Impar"
        }
    }
    console.log (valor (6))
    