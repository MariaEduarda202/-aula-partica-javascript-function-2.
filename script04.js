//1) Criar uma função anônima que recebe duas notas de um aluno do ensino médio:
 var media = function (nota1,nota2){
     let notas = nota1+nota2
     if(notas>=7){
         return "Aprovado"
     }else if(notas <=5 && media <7 ){
         return "Recuperação"
     } else if (media<5){
         return "Reprovado!"
     }

 }
 console.log (notas (4,5))
 /* 2) Criar uma função anônima que calcula a tabuada de 3.
  a) Chamar a função e exibir no console o resultado.*/
  const tabuada = function (valor){
     var resultado =[]
      for (let i =1; i<=10; i++){
        resultado.push (i*3)
          
      } return resultado
  }
  console.log(tabuada())
  /*3) Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.
  a) Chamar a função e exibir no console o resultado.
   */
  var maiorDeIdade = (anoAtual, anoDeNascimento) =>{
    let idade = anoAtual - anoDeNascimento
    if(idade >= 18){
        console.log("Você é" + idade + " de maior")
    } else{
        console.log("Você é " + idade + "de menor")
    }
}


console.log(maiorDeIdade(2021, 1999))