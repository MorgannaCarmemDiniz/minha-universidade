//Importar os tipos de relatórios
import {pago, qdd, restos, acoes} from "../../../spreadsheetParser/data/DataSheetTypes";

//Associar os tipos de relatórios com os componentes corretos para sua exibição
const dataSheetViews = [
    {
        type: pago,
        component: () => import('./Pago.vue')
    },
    {
        type: qdd,
        component: () => import('./Qdd.vue')
    },
    {
        type: restos,
        component: () => import('./Restos.vue')
    },
    {
        type: acoes,
        component: () => import('./Acoes.vue')
    }
];

//Função que retorna o componente certo de acordo com o tipo de relatório desejado
function getDataSheetComponent(dataSheetTypeCode) {
    return dataSheetViews.find(dsv => dsv.type.code === dataSheetTypeCode)?.component;
}

export default getDataSheetComponent;