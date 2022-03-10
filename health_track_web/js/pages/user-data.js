
let dadoTabela = [
    {
        imcInicial: 18,
        imcFinal: 19,
        imcTexto: "menor que 18,5",
        classificacao: "Magreza",
        grauObesidade: 0,
        identificatorLinha: 1
    },
    {
        imcInicial: 18,
        imcFinal: 19,
        imcTexto: "menor que 18,5",
        classificacao: "Magreza",
        grauObesidade: 0,
        identificatorLinha: 2
    },
    {
        imcInicial: 18,
        imcFinal: 19,
        imcTexto: "menor que 18,5",
        classificacao: "Magreza",
        grauObesidade: 0,
        identificatorLinha: 3
    },
    {
        imcInicial: 18,
        imcFinal: 19,
        imcTexto: "menor que 18,5",
        classificacao: "Magreza",
        grauObesidade: 0,
        identificatorLinha: 4
    }
];

dadoTabela.push( );

let tableBody = document.getElementById("user-data-content");

Array.of(dadoTabela).forEach(i, v => {
    let row = `<th id="${v.identificatorLinha}"><td>${v.imc}</td><td>${v.classificacao}</td><td>${v.grauObesidade}</td></th>`
    tableBody.appendChild(row);
})

function selecionaLinha() {
    let altura = document.getElementById("txt-altura");
    let peso = document.getElementById("txt-peso");


    let linhaCalculada = 1; // todo - calcular IMC e encontrar linha


    for(i=0;i < dadoTabela.length;i++){
        document.getElementById(dadoTabela[i].identificatorLinha).classList.remove('linha-marcada');    
    }

    document.getElementById(linhaCalculada).classList.add('linha-marcada');


}

function limpar() {

}

