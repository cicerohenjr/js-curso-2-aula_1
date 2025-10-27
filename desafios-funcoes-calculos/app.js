// Desafio 1: Função que calcula o IMC (Índice de Massa Corporal)
// IMC = peso / (altura * altura)
function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

// Exemplo de uso:
// calcularIMC(1.75, 70) -> resultado aproximado: 22.86

// Desafio 2: Função que calcula o fatorial de um número
// Fatorial de n: n! = n × (n-1) × (n-2) × ... × 1
// Exemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// Exemplo de uso:
// calcularFatorial(5) -> 120
// calcularFatorial(0) -> 1

// Desafio 3: Função que converte dólar para real
// Cotação: 1 USD = R$ 4,80
function converterDolarParaReal(valorDolar) {
    const cotacao = 4.80;
    return valorDolar * cotacao;
}

// Exemplo de uso:
// converterDolarParaReal(100) -> 480
// converterDolarParaReal(50) -> 240

// Desafio 4: Função que calcula e exibe a área e o perímetro de uma sala retangular
// Área = altura × largura
// Perímetro = 2 × (altura + largura)
function calcularAreaPerimetroSala(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log(`Área da sala: ${area} m²`);
    console.log(`Perímetro da sala: ${perimetro} m`);
}

// Exemplo de uso:
// calcularAreaPerimetroSala(5, 8)
// Exibe: Área da sala: 40 m²
//        Perímetro da sala: 26 m

// Desafio 5: Função que calcula e exibe a área e o perímetro de uma sala circular
// Área = π × raio²
// Perímetro (Circunferência) = 2 × π × raio
function calcularAreaPerimetroSalaCircular(raio) {
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    console.log(`Área da sala circular: ${area} m²`);
    console.log(`Perímetro da sala circular: ${perimetro} m`);
}

// Exemplo de uso:
// calcularAreaPerimetroSalaCircular(5)
// Exibe: Área da sala circular: 78.5 m²
//        Perímetro da sala circular: 31.4 m

// Desafio 6: Função que exibe a tabuada de um número
function mostrarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} × ${i} = ${resultado}`);
    }
}

// Exemplo de uso:
// mostrarTabuada(7)
// Exibe:
// Tabuada do 7:
// 7 × 1 = 7
// 7 × 2 = 14
// ... até 7 × 10 = 70
