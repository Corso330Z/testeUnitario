const {test, it, expect, describe } = require('@jest/globals');
const { soma, subtracao, divisao, multiplicacao  } = require('./calculadora');

describe("Teste da calculadora com valor natural", () => {
    test("Deve retornar a soma de dois valores ", () => {
        const esperado = 30;
        const retornado = soma(10,20);
        expect(retornado).toBe(esperado);
    });
    it("Deve retornar a subtração de dois valores ", () => {
        const esperado = -10;
        const retornado = subtracao(10,20);
        expect(retornado).toBe(esperado);
    });
    it("Deve retornar a multiplicação de dois valores ", () => {
        const esperado = 15;
        const retornado = multiplicacao(3,5);
        expect(retornado).toBe(esperado);
    });
    it("Deve retornar a divisão de dois valores ", () => {
        const esperado = 5;
        const retornado = divisao(10,2);
        expect(retornado).toBe(esperado);
    });
    it("Deve retornar erro ao realizar divisão por 0 ", () => {
        expect(() => divisao(10,0)).toThrow('Divisor inválido');
    });
});

describe("Teste da calculadora com valor negativo", () => {
    it("Deve retornar a soma de dois valores ", () => {
        const esperado = 10;
        const retornado = soma(-10,20);0
        expect(retornado).toBe(esperado);
    });
    it("Deve retornar a subtração de dois valores ", () => {
        const esperado = 30;
        const retornado = subtracao(10,-20);
        expect(retornado).toBe(esperado);
    });
    it("Deve retornar a multiplicação de dois valores ", () => {
        const esperado = -15;
        const retornado = multiplicacao(-3,5);
        expect(retornado).toBe(esperado);
    });
    it("Deve retornar a divisão de dois valores ", () => {
        const esperado = -5;
        const retornado = divisao(10,-2);
        expect(retornado).toBe(esperado);
    });
});
