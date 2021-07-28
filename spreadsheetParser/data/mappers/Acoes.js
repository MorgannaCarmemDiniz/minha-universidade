import {filterUnique, sumByProperty} from "../utils/util";

export default function AcoesMapper(rows) {
    rows.forEach(row => {
        row.Pago = parseFloat((row.Pago.replace(/[^0-9,]/gi, '').replace(',', '.')));
        row.RP_Pago = parseFloat((row.RP_Pago.replace(/[^0-9,]/gi, '').replace(',', '.')));
    });

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