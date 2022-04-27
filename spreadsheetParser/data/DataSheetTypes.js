//Importar os mapeadores
import QddMapper from "./mappers/Qdd";
import PagoMapper from "./mappers/Pago";
import RestosMapper from "./mappers/Restos";
import AcoesMapper from "./mappers/Acoes";

//Definir os tipos ("classes") de relatórios e assimilar os mesmos aos seus devidos mapeadores
//A propriedade "code" é referente ao pedaço do nome do arquivo .csv que identifica o tipo de relatório
export const qdd = {
    code: 'qdd',
    name: 'QDD',
    mapper: QddMapper
};

export const pago = {
    code: 'pago',
    name: 'Valor Pago',
    mapper: PagoMapper
};

export const restos = {
    code: 'restos',
    name: 'Restos a Pagar',
    mapper: RestosMapper
};

export const acoes = {
    code: 'acoes',
    name: 'Ações Orçamentárias',
    mapper: AcoesMapper
};

const dataSheetTypes = [
    qdd,
    pago,
    restos,
    acoes
];

export default dataSheetTypes;