alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    // Se o chute for igual ao número secreto, o usuário acertou
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if(tentativas > 1){
//     alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else{
//     alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }
