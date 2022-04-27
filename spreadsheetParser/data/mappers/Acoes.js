//Importar funções de utilidades gerais
import {filterUnique, sumByProperty} from "../utils/util";

//Exportando a função que faz o mapeamento das tabelas de Ações Orçamentárias pra arquivo JSON
//Recebe as linhas da tabela como parâmetro
export default function AcoesMapper(rows) {
    //Formatando e transformando os valores numéricos
    rows.forEach(row => {
        row.Pago = parseFloat((row.Pago.replace(/[^0-9,]/gi, '').replace(',', '.')));
        row.RP_Pago = parseFloat((row.RP_Pago.replace(/[^0-9,]/gi, '').replace(',', '.')));
    });

    //Retornando o array com os dados na estrutura esperada
    return rows
        .map(row => row.Codigo)
        .filter(filterUnique)
        .map(Codigo => ({
            Codigo,
            Rows: rows.filter(row => row.Codigo === Codigo),
            TotalPago: rows.filter(row => row.Codigo === Codigo).reduce(sumByProperty('Pago'), 0),
            TotalRP_Pago: rows.filter(row => row.Codigo === Codigo).reduce(sumByProperty('RP_Pago'), 0)
        }));
}