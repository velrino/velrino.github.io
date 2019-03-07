const parametros = {
    apresentacao: "Tenho IDADE anos e sou apaixonado pelo ecossistema tecnológico e inovação.",
    apresentacaoReplace: "IDADE",
    elementoApresentacaoHTML: "apresentacao",
    milessegundosPorDia: (1000 * 3600 * 24),
    nascimento: "10/06/1996",
    tempoAno: 365,
};

function calcularIdade(dataNascimento) {
    const dataInicial = new Date(dataNascimento);
    const dataFinal = new Date();

    return calcularDiferencaEmAnos(dataInicial, dataFinal);
}

function calcularDiferencaEmAnos(dataInicial, dataFinal) {
    const { milessegundosPorDia, tempoAno } = parametros;
    const diferencaTempo = Math.abs(dataInicial.getTime() - dataFinal.getTime());
    const diferencaDatas = Math.ceil(diferencaTempo / (milessegundosPorDia));

    return parseInt(diferencaDatas / tempoAno);
}

function renderizaApressentacao() {
    let { apresentacao } = parametros;
    const { apresentacaoReplace, elementoApresentacaoHTML, nascimento } = parametros;
    const idade = calcularIdade(nascimento);
    const elementoApresentacao = document.getElementById(elementoApresentacaoHTML);

    elementoApresentacao.innerHTML += apresentacao.replace(apresentacaoReplace, idade);
}

renderizaApressentacao();