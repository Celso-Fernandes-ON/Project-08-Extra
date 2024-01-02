let numberOne = Number(prompt("Digite o primeiro número:"));
let numberTwo = Number(prompt("Digite o primeiro número:"));
alert(`A soma dos dois números é ${numberOne+numberTwo}`);
alert(`A subtração dos dois números é ${numberOne-numberTwo}`);
alert(`A multiplicação dos dois números é ${numberOne*numberTwo}`);
alert(`A divisão dos dois números é ${numberOne/numberTwo}`);
alert(`A resto da divisão dos dois números é ${numberOne%numberTwo}`);
if((numberOne+numberTwo) % 2 == 0){
    alert("A soma dos dois números é par");
}
else{
    alert("A soma dos dois números é ímpar");
};
if(numberOne == numberTwo){
    alert("Os dois números inseridos são iguais.");
}
else{
    alert("Os dois números inseridos são diferentes.");
};