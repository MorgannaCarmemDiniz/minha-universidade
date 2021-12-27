//Importar funções de utilidades relacionadas ao código das despesas
import {getFormattedString, getThirdCode, getTopCode } from "../utils/expenseCodeUtils";
//Importar funções de utilidades gerais
import {filterUnique, sumByProperty} from "../utils/util";

//Exportando a função que faz o mapeamento das tabelas de Valor Pago pra arquivo JSON
//Recebe as linhas da tabela como parâmetro
export default function PagoMapper(rows) {
    //Formatando e transformando os valores numéricos
    rows.forEach(row => {
        row.Valor = parseFloat((row.Valor.replace(/[^0-9,]/gi, '').replace(',', '.')))
    });

    return rows;
}

//O mapeamento das tabelas de Valor Pago é um pouco mais complicado pela questão das diferentes Unidades Gestoras
//Por isso, temos outro método que faz as transformações e que é chamado múltiplas vezes pelo arquivo Pago.vue,
//dependendo se queremos agrupar as linhas referentes a UG da UNIRIO ou a outra.
export function AgruparPago(rows) {

    //Retornando o array com os dados na estrutura esperada
    return rows
        .map(row => row.Codigo)
        .filter(filterUnique)
        .map(codigo => ({
            Codigo: getFormattedString(codigo),
            CodigoSuperior: getThirdCode(codigo),
            CodigoPrincipal: getTopCode(codigo),
            UO: rows.find(row => row.Codigo === codigo).UO,
            UG: rows.find(row => row.Codigo === codigo).UG,
            Rows: rows.filter(row => row.Codigo === codigo),
            Total: rows.filter(row => row.Codigo === codigo).reduce(sumByProperty('Valor'), 0)
        }));
}