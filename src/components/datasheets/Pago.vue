<template>
    <div v-if="loaded">
        <h3>{{university.shortName}} - Valor Pago {{year}}</h3>
        <h4>Unidades Gestoras: UNIRIO e HUGG</h4>
        <p>A UNIRIO não disponibilizou a execução orçamentária do exercício de {{year}}.
            Entretanto, o Projeto <a href="http://repositorio.metodosquantitativos.com/tesouro/index.html" target="_blank">DATAUNIRIO</a> conseguiu extrair os dados da execução orçamentária da UNIRIO e do HUGG que existem no site <a href="https://www12.senado.leg.br/orcamento/sigabrasil" target="_blank">SIGA BRASIL</a>.
            Os dados então foram comparados com os dados do <a :href="'http://www.portaltransparencia.gov.br/orgaos/26269?ano='+year" target="_blank">Portal da Transparência</a> para verificar a exatidão da informação.
            Uma observação importante é que o Portal da Transparência apresenta, como UNIRIO, as informações conjuntas das unidades orçamentárias UNIRIO (UO 26269) e do HUGG (UO 26391).
        </p>
        <p>A tabela abaixo apresenta os pagamentos da unidade orçamentária UNIRIO (UO 26269) executados pelas
            unidades gestoras UNIRIO (UG 154034) e HUGG (UG 154035) e pagos no ano de {{year}}.</p>
        <table>
            <caption>
                Fonte dos dados:
                <a href="http://repositorio.metodosquantitativos.com/tesouro/index.html"
                   target="_blank">
                    DATAUNIRIO
                </a>
            </caption>
            <thead>
                <tr>
                    <th>
                        Despesa
                    </th>
                    <th>
                        Descrição
                    </th>
                    <th class="text-right">
                        Valor Pago
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="grupoDespesas in pagamentosUnirio">
                    <tr v-for="(despesa, index) in grupoDespesas.Rows" :key="despesa.Codigo">
                        <td class="font-weight-bold">
                            <span v-if="index == 0">{{despesa.CodigoSuperior}}</span>
                        </td>
                        <td>
                            {{despesa.Rows[0].Despesa}}
                        </td>
                        <td class="text-right">
                            {{formatCurrency(despesa.Total)}}
                        </td>
                    </tr>

                    <tr :key="grupoDespesas.Codigo">
                        <td>

                        </td>
                        <td class="totalTD font-weight-bold">
                            TOTAL
                        </td>
                        <td class="totalTD font-weight-bold text-right">
                            {{formatCurrency(grupoDespesas.Total)}}
                        </td>
                    </tr>
                </template>
                <tr>
                    <td>

                    </td>
                    <td class="totalTD font-weight-bold">
                        TOTAL PAGO
                    </td>
                    <td class="totalTD font-weight-bold text-right">
                        {{formatCurrency(totalUnirio)}}
                    </td>
                </tr>
            </tbody>
        </table>
        <p>Abaixo, o resumo dos pagamentos feitos pela UNIRIO de acordo com a categoria econômica e a natureza da despesa:</p>
        <table>
            <caption>
                Fonte dos dados:
                <a href="http://repositorio.metodosquantitativos.com/tesouro/index.html"
                   target="_blank">
                    DATAUNIRIO
                </a>
            </caption>
            <thead>
                <tr>
                    <th>
                        Despesa
                    </th>
                    <th>
                        Descrição
                    </th>
                    <th class="text-right">
                        Valor Pago
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="grupo in groupedCodigoPrincipal" :key="grupo.CodigoPrincipal">
                    <td class="font-weight-bold">
                        {{grupo.CodigoPrincipal}}
                    </td>
                    <td>
                        {{grupo.Despesa}}
                    </td>
                    <td class="text-right">
                        {{formatCurrency(grupo.Total)}}
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td class="totalTD font-weight-bold">
                        TOTAL
                    </td>
                    <td class="totalTD font-weight-bold text-right">
                        {{formatCurrency(totalUnirio)}}
                    </td>
                </tr>
            </tbody>
        </table>
        <h4>Outras Unidades Gestoras</h4>
        <p>Abaixo, as despesas da UNIRIO que tiveram unidades gestoras diferentes de UNIRIO (UG 154034) e de HUGG (UG 154035):</p>
        <table>
            <caption>
                Fonte dos dados:
                <a href="http://repositorio.metodosquantitativos.com/tesouro/index.html"
                   target="_blank">
                    DATAUNIRIO
                </a>
            </caption>
            <thead>
                <tr>
                    <th>
                        Despesa
                    </th>
                    <th>
                        Descrição
                    </th>
                    <th>
                        Órgão superior da Unidade Gestora
                    </th>
                    <th class="text-right">
                        Valor Pago
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="despesa in rowsOtherUgs">
                    <tr v-for="row in despesa.Rows" :key="row.Codigo+row.UG">
                        <td class="font-weight-bold">
                            {{despesa.Codigo}}
                        </td>
                        <td>
                            {{row.Despesa}}
                        </td>
                        <td>
                            {{row['orgao_ug_desp']}}
                        </td>
                        <td class="text-right">
                            {{formatCurrency(row.Valor)}}
                        </td>
                    </tr>
                </template>
                <tr>
                    <td>

                    </td>
                    <td class="totalTD font-weight-bold">
                        TOTAL
                    </td>
                    <td>

                    </td>
                    <td class="totalTD font-weight-bold text-right">
                        {{formatCurrency(totalOtherUgs)}}
                    </td>
                </tr>
            </tbody>
        </table>
        <p>Abaixo, o resumo dos pagamentos do exercício {{year}} da UNIRIO (UO 26269) feitos no ano de {{year}}.</p>
        <table>
            <caption>
                Fonte dos dados:
                <a href="http://repositorio.metodosquantitativos.com/tesouro/index.html"
                   target="_blank">
                    DATAUNIRIO
                </a>
            </caption>
            <thead>
                <tr>
                    <th>
                        Unidades Gestoras
                    </th>
                    <th class="text-right">
                        Valor Pago
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        UNIRIO e HUGG
                    </td>
                    <td class="text-right">
                        {{formatCurrency(totalUnirio)}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Outras UGs
                    </td>
                    <td class="text-right">
                        {{formatCurrency(totalOtherUgs)}}
                    </td>
                </tr>
                <tr>
                    <td class="totalTD font-weight-bold">
                        TOTAL
                    </td>
                    <td class="totalTD font-weight-bold text-right">
                        {{formatCurrency(totalUnirio+totalOtherUgs)}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {sumByProperty} from "../../../spreadsheetParser/data/utils/util";
    import {unirio} from "../../../spreadsheetParser/data/Universities";
    import {AgruparPago} from "../../../spreadsheetParser/data/mappers/Pago";
    import expenseCategories from "../../../spreadsheetParser/data/ExpenseCategories";

    const numberFormatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2
    });

    export default {
        name: "PagoDataSheetView",
        props: {
            dataSheetData: {
                type: Array,
                required: true
            },
            year: {
                type: String,
                required: true
            },
            university: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            loaded: false,
            pagamentosUnirio: null,
            totalUnirio: null,
            rowsOtherUgs: null,
            totalOtherUgs: null,
            groupedCodigoPrincipal: null
        }),
        mounted() {
            //1ª tabela
            let filterFromUnirio = (row) => (row.UO === unirio.UOs.UNIRIO) &&
                (row.UG === unirio.UGs.UNIRIO || row.UG === unirio.UGs.HUGG);

            let rowsUnirio = AgruparPago(this.dataSheetData.filter(filterFromUnirio).filter(row => row.Valor));
            this.totalUnirio = rowsUnirio.reduce(sumByProperty('Total'), 0);

            this.pagamentosUnirio = rowsUnirio
                .map(row => row.CodigoSuperior)
                .filter((codigo, index, arr) => index === arr.indexOf(codigo))  // de-dupe
                .map(CodigoAgrupado => ({
                    CodigoAgrupado,
                    Rows: rowsUnirio.filter(row => row.CodigoSuperior === CodigoAgrupado),
                    Total: rowsUnirio.filter(row => row.CodigoSuperior === CodigoAgrupado).reduce(sumByProperty('Total'), 0)
                }));

            //2ª tabela
            this.groupedCodigoPrincipal = rowsUnirio
                .map(row => row.CodigoPrincipal)
                .filter((codigo, index, arr) => index === arr.indexOf(codigo)) // de-dupe
                .map(CodigoPrincipal => ({
                    CodigoPrincipal,
                    Total: rowsUnirio.filter(row => row.CodigoPrincipal === CodigoPrincipal).reduce(sumByProperty('Total'), 0),
                    Despesa: expenseCategories.natureza[CodigoPrincipal[1]]
                }));

            //3ª tabela
            let filterOtherUgs = (row) => (row.UG !== unirio.UGs.UNIRIO) && (row.UG !== unirio.UGs.HUGG);

            this.rowsOtherUgs = AgruparPago(this.dataSheetData.filter(filterOtherUgs).filter(row => row.Valor));
            this.totalOtherUgs = this.rowsOtherUgs.reduce(sumByProperty('Total'), 0);

            this.loaded = true;
        },
        methods: {
            formatCurrency(v) {
                return `R$ ${numberFormatter.format(v)}`
            }
        }
    }
</script>

<style lang="scss" scoped>
    th, td {
        border: 1px solid black;
        padding: 0.35rem;
        color: #4A4A4A;
        font-size: 1rem;

        &.totalTD {
            color: #CF2E2E;
        }
    }

    h3 {
        margin: 30px 0px;
    }

    caption {
        caption-side: bottom;
        text-align: center;
    }
</style>