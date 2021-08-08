<template>
    <div v-if="loaded">
        <h3>{{university.shortName}} - Restos a Pagar {{year}}</h3>
        <p>A tabela mostra os valores que foram pagos em {{year}}, mas que pertencem aos orçamentos dos anos anteriores.</p>
        <table class="styledTable">
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
                        RP Pago
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="grupoDespesas in groupedThirdCode">
                    <template v-for="(despesa, index2) in grupoDespesas.Rows">
                        <tr>
                            <td class="font-weight-bold">
                                <span v-if="index2 == 0">
                                    {{despesa.CodigoSuperior}}
                                </span>
                            </td>
                            <td>
                                {{despesa.Rows[0].Despesa}}
                            </td>
                            <td class="text-right">
                                {{formatCurrency(despesa.Total)}}
                            </td>
                        </tr>
                    </template>
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
                        TOTAL RP
                    </td>
                    <td class="totalTD font-weight-bold text-right">
                        {{formatCurrency(totalRestos)}}
                    </td>
                </tr>
            </tbody>
        </table>
        <p>Abaixo, o resumo dos <b>Restos a Pagar</b> pago de acordo com a categoria econômica e a natureza da despesa:</p>
        <table class="styledTable">
            <caption>
                Fonte dos dados:
                <a href="http://repositorio.metodosquantitativos.com/tesouro/index.html"
                   target="_blank">
                    DATAUNIRIO
                </a>
            </caption>
            <thead>
                <tr>
                    <th>Despesa</th>
                    <th>Descrição</th>
                    <th>RP Pago</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="grupoDespesa in groupedCodigoPrincipal" :key="grupoDespesa.CodigoPrincipal">
                    <td>{{grupoDespesa.CodigoPrincipal}}</td>
                    <td>{{grupoDespesa.Despesa}}</td>
                    <td class="text-right">{{formatCurrency(grupoDespesa.Total)}}</td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td class="totalTD font-weight-bold">
                        TOTAL
                    </td>
                    <td class="totalTD font-weight-bold text-right">
                        {{formatCurrency(totalRestos)}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {sumByProperty} from "../../../spreadsheetParser/data/utils/util";
    import expenseCategories from "../../../spreadsheetParser/data/ExpenseCategories";

    const numberFormatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2
    });

    export default {
        name: "RestosDataSheetView",
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
            groupedThirdCode: null,
            groupedCodigoPrincipal: null,
            totalRestos: null
        }),
        methods: {
            formatCurrency(v) {
                return `R$ ${numberFormatter.format(v)}`
            }
        },
        mounted() {
            //1ª tabela
            this.groupedThirdCode = this.dataSheetData
                .map(row => row.CodigoSuperior)
                .filter((codigo, index, arr) => index === arr.indexOf(codigo))  // de-dupe
                .map(CodigoAgrupado => ({
                    CodigoAgrupado,
                    Rows: this.dataSheetData.filter(row => row.CodigoSuperior === CodigoAgrupado).filter(row => row.Total),
                    Total: this.dataSheetData.filter(row => row.CodigoSuperior === CodigoAgrupado).reduce(sumByProperty('Total'), 0)
                }))
                .filter(row => row.Total);

            //2ª tabela
            this.groupedCodigoPrincipal = this.dataSheetData
                .map(row => row.CodigoPrincipal)
                .filter((codigo, index, arr) => index === arr.indexOf(codigo)) // de-dupe
                .map(CodigoPrincipal => ({
                    CodigoPrincipal,
                    Total: this.dataSheetData.filter(row => row.CodigoPrincipal === CodigoPrincipal).reduce(sumByProperty('Total'), 0),
                    Despesa: expenseCategories.natureza[CodigoPrincipal[1]]
                }))


            this.totalRestos = this.groupedThirdCode.reduce(sumByProperty('Total'), 0);
            this.loaded = true;
        }
    }
</script>

<style lang="scss" scoped>
    h3 {
        margin: 30px 0px;
    }
</style>