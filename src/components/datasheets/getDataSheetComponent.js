import {pago, qdd, restos, acoes} from "../../../spreadsheetParser/data/DataSheetTypes";

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

function getDataSheetComponent(dataSheetTypeCode) {
    return dataSheetViews.find(dsv => dsv.type.code === dataSheetTypeCode)?.component;
}

export default getDataSheetComponent;