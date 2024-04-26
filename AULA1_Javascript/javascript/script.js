//exercise 1.
const exercise1 = () => {
  let n1 = 10;
  let n2 = 100;

  resultSoma = n1 + n2;
  resultSubtracao = n1 - n2;
  resultMultiplicacao = n1 * n2;
  resultDivisao = n1 / n2;

  alert(`Exercício 1: \nResultado soma = ${resultSoma} \nResultado subtração = ${resultSubtracao}
          \nResultado Multiplicação = ${resultMultiplicacao}
          \nResultado Divisão = ${resultDivisao}
    `);
};

//exercise 2
const exercise2 = () => {
  for (let i = 10; i <= 100; i++) {
    console.log(i);
  }
  alert(`Para visualizar o resultado do exercício 2 abra o console`);
};

//exercise 3
const exercise3 = () => {
  const number = 5;

  for (let i = 0; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
    alert(`${number} x ${i} = ${result}`);
  }
};

//exercise 4
const exercise4 = () => {
  const number = parseInt(prompt("Informe um número para calcular a tabuada:"));
  for (let i = 0; i <= 10; i++) {
    const result = number * i;
    alert(`${number} x ${i} = ${result}`);
  }
};
//
//exercise 5 foi implementado diretamente no arquivo html exercise5.html

//exercise 6

const exercise6 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let number of numbers) {
    if (number % 2 === 0) {
      console.log(`Os números pares encontrados são: ${number}`);
    }
  }
};

const exercise7 = () => {
  /*
  custo final = custo de fábrica + (custo de fábrica * percentual do distribuidor) + 
  (custo de fábrica * percentual de impostos)*/

  const custoDeFabrica = parseFloat(
    document.getElementById("custoFabrica").value
  );
  const percentualDistribuidor = parseFloat(
    document.getElementById("percDistribuidor").value / 100
  );
  const percentualDeImpostos = parseFloat(
    document.getElementById("percImpostos").value / 100
  );
  const custoFinal =
    custoDeFabrica +
    custoDeFabrica * percentualDistribuidor +
    custoDeFabrica * percentualDeImpostos;
  return (document.getElementById("valorfinal").value = custoFinal);
};

//Execução das funções.
//exercise1();
//exercise2();
//exercise3();
//exercise4();
//exercise6();
exercise7();
