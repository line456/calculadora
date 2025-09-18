function soma (n1,n2){
    return n1+n2   
}
function sub(n1,n2){
      return  n1 - n2
}
function multi (n1,n2){
      return n1 * n2
}
function div(n1,n2){
      return n1 /n2
}
function numbers() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    return [n1, n2];
}
let active = true 
while (active){
     let response = prompt("Digite a operação:\n1 - Somar\n2 - Subtrair \n3 - Multiplicar \n4 - Dividir \n5 - Sair");
    response = Number(response);
    if (response == 1){
        let[n1,n2] = numbers ()
        soma (n1 , n2)
        alert("resultado da soma: " + soma (n1,n2))
    }
    else if (response == 2) {
        let [n1,n2] = numbers()
        alert("resultado da subtração: " + sub(n1,n2))
    }
    else if (response == 3) {
        let [n1,n2] = numbers()
        alert("resultado da multiplicação: " + multi(n1,n2))
    }
      else if (response == 4) {
        let [n1,n2] = numbers()
        alert("resultado da divisão: " + div(n1,n2))
    }

else if (response == 5){
    alert("ate logo")
    response= false
}
else {
    alert( "opção invalida , escolha uma das opcções do menu")
}
}