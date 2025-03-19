alert('Chegue ao número 60 somando 5 vezes!');
let resultado = 60;
let soma = 0;
for (let i = 0; i < 5; i++){
    soma += parseInt(prompt("Digite o próximo número: "));
    console.log(soma);
}

alert(`A soma dos números é: ${soma}`);

while (soma != resultado){
   soma = 0;
    alert("A soma dos números é diferente de 60");
    for (let i = 0; i < 5; i++){
    soma += parseInt(prompt("Digite o próximo número: "));
    console.log(soma);
    }	
    alert(`A soma dos números é: ${soma}`);
} 