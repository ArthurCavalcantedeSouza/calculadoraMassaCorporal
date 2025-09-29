
class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = parseFloat(peso);
        this.altura = parseFloat(altura);
    }

    
    calcularIMC() {
        if (this.peso <= 0 || this.altura <= 0) return 0;
        return this.peso / (this.altura * this.altura);
    }

    
    calcularIMCFormatado() {
        return this.calcularIMC().toFixed(2);
    }

    
    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc === 0) return "Dados Inválidos";

        if (imc < 18) return "Abaixo do peso";
        if (imc < 24) return "Peso normal";
        if (imc < 29) return "Sobrepeso";
        if (imc < 34) return "Obesidade grau 1";
        if (imc < 39) return "Obesidade grau 2";
        return "Obesidade grau 3";
    }
}

const pessoas = [];

const nomeInput = document.getElementById("nome");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const btnNovaPessoa = document.getElementById("novaPessoa");
const tabelaBody = document.getElementById("tabela-body");


function atualizarTabela() {
    tabelaBody.innerHTML = "";
    pessoas.forEach((pessoa, index) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${index + 1}</td>
            <td>${pessoa.nome}</td>
            <td>${pessoa.peso} kg</td>
            <td>${pessoa.altura} m</td>
            <td>${pessoa.calcularIMCFormatado()}</td>
            <td>${pessoa.classificarIMC()}</td>
        `;
        tabelaBody.appendChild(linha);
    });
}

// Evento do botão "Nova Pessoa"
btnNovaPessoa.addEventListener("click", () => {
    const nome = nomeInput.value.trim();
    const peso = pesoInput.value.trim();
    const altura = alturaInput.value.trim();

    if (!nome || !peso || !altura) {
        alert("Preencha todos os campos!");
        return;
    }

    const novaPessoa = new Pessoa(nome, peso, altura);
    pessoas.push(novaPessoa);

    atualizarTabela();

    nomeInput.value = "";
    pesoInput.value = "";
    alturaInput.value = "";
});
