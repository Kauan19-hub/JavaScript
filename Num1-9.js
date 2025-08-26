//Solicita números de 1 a 9
let numero = Number(prompt("Digite um número de 1 a 9: "))

//Processo
if (numero >= 1 && numero <=  9) {
    console.log("Tabuada do número " + numero + ":")


    //Numero * i = numero * 1
    for (let i = 1; i <= 10; i++) {
        console.log(numero + "x" + i + "=" + numero * 1)
    }

} else {
    console.log("Número inválido!")
}