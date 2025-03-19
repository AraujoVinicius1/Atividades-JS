let numero = prompt('Digite um número:'); // Solicita um número ao usuário
numero = Number(numero); //Converte a entrada para número

if (numero %2 === 0) { //Verifica se o resto da divisão por 2 é 0
    alert(`O número ${numero} é PAR!`);
} else {
    alert(`O número ${numero} é IMPAR!`);
}