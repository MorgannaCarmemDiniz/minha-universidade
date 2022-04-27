//Arquivo principal do módulo spreadsheetParser que une todas as partes

//Importando bibliotecas e arquivos necessários
import csv from 'csvtojson';
import glob from'glob-promise';
import fs from 'fs';
import universities from "./data/Universities";
import dataSheetTypes from "./data/DataSheetTypes";

//Função que lê os arquivos da pasta input e gera os arquivos JSON
async function parseInputs() {
    //Pegar a lista de arquivos de input e output
    const inputs = await glob('./input/*.csv');
    const outputs = await glob('./output/*.json');

    //Loop que passa por todos os arquivos de input
    for (let input of inputs){
        const csvParser = csv();

        //Pegar e armazenar o código da universidade, código do tipo de relatório e o ano do arquivo atual
        let [universityCode, sheetCode, year] = input
            .replace('.csv', '')
            .split('/')
            .reverse()[0]
            .split("_");

        //Buscar a universidade entre as universidades registradas com base no código
        let university = universities.find(u => u.code === universityCode);
        //Buscar o tipo de relatório entre os relatórios definidos com base no código
        let dataSheetType = dataSheetTypes.find(ds => ds.code === sheetCode);

        //Definir o nome que será dado ao arquivo JSON referente ao arquivo csv atual
        let output = input.replace('/input/', '/output/').replace('.csv', '.json');

        //Checar se já existe um arquivo JSON com esse nome na pasta de outputs, e caso exista, ignorar esse arquivo .csv e
        //ir para o próximo
        //Esse passo existe para que o algoritmo não reescreva todos os arquivos já existentes toda vez que for rodado
        if (outputs.indexOf(output) !== -1) continue;

        //Transformar o arquivo .csv em JSON
        let data = await csvParser.fromFile(input);
        //Fazer as alterações necessárias com o mapeador específico deste tipo de relatório
        data = dataSheetType.mapper(data);
        //Criar o arquivo JSON na pasta de output
        fs.writeFileSync(output, JSON.stringify(data));
    }

}

//Executar a função anterior
parseInputs();