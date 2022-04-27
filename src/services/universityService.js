import universities from "../../spreadsheetParser/data/Universities";
import dataSheetTypes from "../../spreadsheetParser/data/DataSheetTypes";

//Função que preenche a lista de relatórios de cada universidade
function fillUniversities() {
    //Pegar os nomes de todos os arquivos .json na pasta de output
    let context = require.context('../../spreadsheetParser/output', false, /\.json$/, 'lazy');
    let keys = context.keys();

    //Para cada arquivo:
    for (let key of keys) {
        //Obter um vetor com código da universidade, código do tipo do relatório e ano, com base no nome do arquivo
        let [universityCode, sheetType, year] = key.replace(/^\.\//, '').replace(/\.json$/, '').split('_');

        //Obter a universidade correspondente ao código
        let university = universities.find(u => u.code === universityCode);
        if (!university) {
            console.error(`University not found: ${universityCode}`);
            continue;
        }

        //Obter o tipo de relatório correspondente ao código
        let type = dataSheetTypes.find(ds => ds.code === sheetType);
        if (!type) {
            console.error(`DataSheet type not found: ${sheetType}`);
            continue;
        }

        //Inserir a configuração referente ao arquivo atual (ano + tipo de relatório) na lista de relatórios da universidade
        university.datasheets.push({
            year,
            type,
            key,
            load: async function () {
                return context(this.key)
            }
        })
    }
}

//Chamar a função anterior
fillUniversities();

//Funções que são exportadas para serem utilizadas em outros arquivos
const universityService = {
    //Retornar lista de universidades
    async getList() {
        return universities;
    },
    //Buscar uma universidade pelo seu código
    async getByCode(code) {
        return universities.find(u => u.code === code);
    },
};

export default universityService;