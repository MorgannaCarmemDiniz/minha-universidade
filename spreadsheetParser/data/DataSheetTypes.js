import QddMapper from "./mappers/Qdd";
import PagoMapper from "./mappers/Pago";
import RestosMapper from "./mappers/Restos";
import AcoesMapper from "./mappers/Acoes";

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