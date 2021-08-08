<template>
    <div v-if="loaded">
        <h3>{{university.shortName}} - Quadro de Detalhamento de Despesa {{year}}</h3>
        <table class="styledTable">
            <caption>
                Fonte dos dados:
                <a href="http://www.unirio.br/pro-reitorias-1/diretoriadeorcamento/orcamento"
                   target="_blank">
                    DORC – UNIRIO
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
                    Valor Planejado
                </th>
            </tr>
            </thead>
            <tbody>
            <template v-for="grupoDespesas in groupedThirdCode">
                <template v-for="(despesa, index2) in grupoDespesas.Rows">
                    <tr v-for="(row, index) in despesa.Rows" :key="row.CodigoSuperior">
                        <td class="font-weight-bold">
                            <span v-if="index2 == 0 && index == 0">{{despesa.CodigoSuperior}}</span>
                        </td>
                        <td>
                            {{despesa.Rows[index].Despesa}}
                        </td>
                        <td class="text-right">
                            {{formatCurrency(despesa.Rows[index].Valor)}}
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
                    TOTAL QDD
                </td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(totalQDD)}}
                </td>
            </tr>
            </tbody>
        </table>
        <p>Abaixo, o resumo do <b>QDD</b> de acordo com a categoria econômica e a natureza da despesa:</p>
        <table class="styledTable">
            <caption>
                Fonte dos dados:
                <a href="http://www.unirio.br/pro-reitorias-1/diretoriadeorcamento/orcamento"
                   target="_blank">
                    DORC – UNIRIO
                </a>
            </caption>
            <thead>
                <tr>
                    <th>Despesa</th>
                    <th>Descrição</th>
                    <th class="text-right">Valor Pago</th>
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
                        {{formatCurrency(totalQDD)}}
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
        name: "QddDataSheetView",
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
            totalQDD: null
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
                    Rows: this.dataSheetData.filter(row => row.CodigoSuperior === CodigoAgrupado),
                    Total: this.dataSheetData.filter(row => row.CodigoSuperior === CodigoAgrupado).reduce(sumByProperty('Total'), 0)
                }));

            //2ª tabela
            this.groupedCodigoPrincipal = this.dataSheetData
                .map(row => row.CodigoPrincipal)
                .filter((codigo, index, arr) => index === arr.indexOf(codigo)) // de-dupe
                .map(CodigoPrincipal => ({
                    CodigoPrincipal,
                    Total: this.dataSheetData.filter(row => row.CodigoPrincipal === CodigoPrincipal).reduce(sumByProperty('Total'), 0),
                    Despesa: expenseCategories.natureza[CodigoPrincipal[1]]
                }))

            this.totalQDD = this.groupedThirdCode.reduce(sumByProperty('Total'), 0);
            this.loaded = true;
        }
    }
</script>

<style lang="scss" scoped>
    h3 {
        margin: 30px 0px;
    }
</style>