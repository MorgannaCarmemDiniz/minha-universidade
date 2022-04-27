//Importar funções de utilidades relacionadas ao código das despesas
import {getFormattedString, getThirdCode, getTopCode} from "../utils/expenseCodeUtils";
//Importar funções de utilidades gerais
import {filterUnique, sumByProperty} from "../utils/util";

//Exportando a função que faz o mapeamento das tabelas de Restos a Pagar pra arquivo JSON
//Recebe as linhas da tabela como parâmetro
export default function RestosMapper(rows) {
    //Formatando e transformando os valores numéricos
    rows.forEach(row => {
        row.Valor = parseFloat((row.Valor.replace(/[^0-9,]/gi, '').replace(',', '.')))
    });

    //Retornando o array com os dados na estrutura esperada
    return rows
        .map(row => row.Codigo)
        .filter(filterUnique)
        .map(Codigo => ({
            Codigo: getFormattedString(Codigo),
            CodigoSuperior: getThirdCode(Codigo),
            CodigoPrincipal: getTopCode(Codigo),
            Rows: rows.filter(row => row.Codigo === Codigo),
            Total: rows.filter(row => row.Codigo === Codigo).reduce(sumByProperty('Valor'), 0)
        }));
}