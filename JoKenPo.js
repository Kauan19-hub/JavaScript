//Define a rodada e aumenta a vitória do jogador conforme ele ganhe
let rodada = 1
let vitorias_do_jogador = 0

//Enquanto a rodada for menor do que 5, já que possui 5 rodadas
while (rodada <= 5) {
    let escolha_computador = 'Pedra'
    let escolha_jogador = prompt("Escolha entre Pedra, Papel ou tesoura: ")

    //Empate
    if (escolha_computador === escolha_jogador) {
        console.log(`Empate! Os dois escolheram ${escolha_computador}.`)

    //Vitória do jogador
    } else if (escolha_jogador === 'Papel') {
        console.log(`Parabéns, o jogador ganhou! Você escolheu ${escolha_computador}.`)

        //Aumenta as vitórias do jogador
        vitorias_do_jogador++
    
    //Vitoria do computador
    } else if (escolha_jogador === 'Tesoura') {
        console.log('Computador ganhou nessa rodada!')

    } else {
        console.log('Escolha não identificada')

        rodada--
    }
}

//Quantas vezes o jogador ganhou em 5 rodadas, quando perdeu e quando venceu
console.log(`Jogador ganhou ${vitorias_do_jogador} de 5 rodadas.`)

if (vitorias_do_jogador > 1) {
    console.log("Parabéns, você venceu o jogo!")

} else {
    console.log("Jogador perdeu o jogo, tente novamente.")
}