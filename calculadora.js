const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;

const divisao= (dividendo, divisor) =>{
    if(divisor==0){
        throw new Error("Divisor inválido")
    }
    return dividendo / divisor
}


module.exports={
    soma,
    subtracao,
    divisao,
    multiplicacao
}

// //faça a multiplicação