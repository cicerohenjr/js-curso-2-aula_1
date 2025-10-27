let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemConsole() {
	console.log('O botão foi clicado');
}

function exibirAlerta() {
	alert('Eu amo JS');
}

function perguntarCidade() {
	const cidade = prompt('Digite o nome de uma cidade do Brasil:');
	if (cidade && cidade.trim()) {
		alert(`Estive em ${cidade.trim()} e lembrei de você`);
	}
}

function somarNumeros() {
	const n1Str = prompt('Digite o primeiro número inteiro:');
	const n2Str = prompt('Digite o segundo número inteiro:');
	const n1 = parseInt(n1Str, 10);
	const n2 = parseInt(n2Str, 10);

	if (Number.isNaN(n1) || Number.isNaN(n2)) {
		alert('Por favor, digite números inteiros válidos.');
		return;
	}

	alert(`A soma é ${n1 + n2}`);
}

