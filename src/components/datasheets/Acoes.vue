<template>
    <div v-if="loaded">
        <h3>{{university.shortName}} - Ações Orçamentárias {{year}}</h3>
        <p>Uma despesa pode ser financeira, primária obrigatória ou primária discricionária.
            A tabela abaixo mostra as ações do orçamento {{year}} e os seus respectivos valores alocados divididos em <b>Pago</b> e <b>Restos a Pagar</b>.</p>
        <table>
            <caption>
                Fonte dos dados:
                <a href="http://repositorio.metodosquantitativos.com/tesouro/index.html"
                   target="_blank"
                >DATAUNIRIO</a>
                e
                <a :href="'http://www9.senado.leg.br/QvAJAXZfc/opendoc.htm?document=Senado%2FSigaBrasilPainelEspecialista.qvw&host=QVS%40www9&anonymous=true&select=LB137,'+year"
                    target="_blank">
                    SIGA Brasil
                </a>
            </caption>
            <tr>
                <th>
                    Código
                </th>
                <th>
                    Descrição
                </th>
                <th class="text-right">
                    Pago
                </th>
                <th class="text-right">
                    RP Pago
                </th>
            </tr>
            <tr v-for="acao in acoesFinal.financeira.acoes">
                <td class="font-weight-bold">
                    {{acao.Codigo}}
                </td>
                <td>
                    {{acao.Nome}}
                </td>
                <td class="text-right">
                    {{formatCurrency(acao.TotalPago)}}
                </td>
                <td class="text-right">
                    {{formatCurrency(acao.TotalRP_Pago)}}
                </td>
            </tr>
            <tr>
                <td class="totalTD font-weight-bold">
                    TOTAL
                </td>
                <td class="totalTD font-weight-bold">
                    Despesa Financeira
                </td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(acoesFinal.financeira.totalPago)}}
                </td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(acoesFinal.financeira.totalRP_Pago)}}
                </td>
            </tr>
            <tr v-for="acao in acoesFinal.primariaObrigatoria.acoes">
                <td class="font-weight-bold">
                    {{acao.Codigo}}
                </td>
                <td>
                    {{acao.Nome}}
                </td>
                <td class="text-right">
                    {{formatCurrency(acao.TotalPago)}}
                </td>
                <td class="text-right">
                    {{formatCurrency(acao.TotalRP_Pago)}}
                </td>
            </tr>
            <tr>
                <td class="totalTD font-weight-bold">
                    TOTAL
                </td>
                <td class="totalTD font-weight-bold">
                    Despesa Primária Obrigatória
                </td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(acoesFinal.primariaObrigatoria.totalPago)}}
                </td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(acoesFinal.primariaObrigatoria.totalRP_Pago)}}
                </td>
            </tr>
            <tr v-for="acao in acoesFinal.primariaDiscricionaria.acoes">
                <td class="font-weight-bold">
                    {{acao.Codigo}}
                </td>
                <td>
                    {{acao.Nome}}
                </td>
                <td class="text-right">
                    {{formatCurrency(acao.TotalPago)}}
                </td>
                <td class="text-right">
                    {{formatCurrency(acao.TotalRP_Pago)}}
                </td>
            </tr>
            <tr>
                <td class="totalTD font-weight-bold">
                    TOTAL
                </td>
                <td class="totalTD font-weight-bold">
                    Despesa Primária Obrigatória
                </td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(acoesFinal.primariaDiscricionaria.totalPago)}}
                </td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(acoesFinal.primariaDiscricionaria.totalRP_Pago)}}
                </td>
            </tr>
        </table>
        <table>
            <caption>
                Fonte dos dados:
                <a href="http://repositorio.metodosquantitativos.com/tesouro/index.html"
                   target="_blank"
                >DATAUNIRIO</a>
                e
                <a :href="'http://www9.senado.leg.br/QvAJAXZfc/opendoc.htm?document=Senado%2FSigaBrasilPainelEspecialista.qvw&host=QVS%40www9&anonymous=true&select=LB137,'+year"
                   target="_blank">
                    SIGA Brasil
                </a>
            </caption>
            <tr>
                <th>Despesa</th>
                <th class="text-right">Pago</th>
                <th class="text-right">RP Pago</th>
            </tr>
            <tr>
                <td>Financeira</td>
                <td class="text-right">{{formatCurrency(acoesFinal.financeira.totalPago)}}</td>
                <td class="text-right">{{formatCurrency(acoesFinal.financeira.totalRP_Pago)}}</td>
            </tr>
            <tr>
                <td>Primária Obrigatória</td>
                <td class="text-right">{{formatCurrency(acoesFinal.primariaObrigatoria.totalPago)}}</td>
                <td class="text-right">{{formatCurrency(acoesFinal.primariaObrigatoria.totalRP_Pago)}}</td>
            </tr>
            <tr>
                <td>Primária Discricionária</td>
                <td class="text-right">{{formatCurrency(acoesFinal.primariaDiscricionaria.totalPago)}}</td>
                <td class="text-right">{{formatCurrency(acoesFinal.primariaDiscricionaria.totalRP_Pago)}}</td>
            </tr>
            <tr>
                <td class="totalTD font-weight-bold">TOTAL</td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(acoesFinal.financeira.totalPago + acoesFinal.primariaObrigatoria.totalPago + acoesFinal.primariaDiscricionaria.totalPago)}}
                </td>
                <td class="totalTD font-weight-bold text-right">
                    {{formatCurrency(acoesFinal.financeira.totalRP_Pago + acoesFinal.primariaObrigatoria.totalRP_Pago + acoesFinal.primariaDiscricionaria.totalRP_Pago)}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

    import acoesOrcamentarias from "../../../spreadsheetParser/data/acoesOrcamentarias";
    import {sumByProperty} from "../../../spreadsheetParser/data/utils/util";

    const numberFormatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2
    });

    export default {
        name: "AcoesDataSheetView",
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
            acoesFinal: null
        }),
        methods: {
            formatCurrency(v) {
                return `R$ ${numberFormatter.format(v)}`
            }
        },
        mounted() {
            //1ª tabela
            let acoesFinal = this.dataSheetData
                .filter(row => row.TotalPago || row.TotalRP_Pago)
                .map(row => ({
                    Codigo: row.Codigo,
                    Tipo: acoesOrcamentarias.find(el => el.codigo == row.Codigo).tipo,
                    Nome: acoesOrcamentarias.find(el => el.codigo == row.Codigo).nome,
                    Rows: row.Rows,
                    TotalPago: row.TotalPago,
                    TotalRP_Pago: row.TotalRP_Pago
                }));

            acoesFinal = {
                financeira: {
                    acoes: acoesFinal.filter(acao => acao.Tipo == 'financeira'),
                    totalPago: acoesFinal.filter(acao => acao.Tipo == 'financeira').reduce(sumByProperty('TotalPago'), 0),
                    totalRP_Pago: acoesFinal.filter(acao => acao.Tipo == 'financeira').reduce(sumByProperty('TotalRP_Pago'), 0)
                },
                primariaObrigatoria: {
                    acoes: acoesFinal.filter(acao => acao.Tipo == 'primariaObrigatoria'),
                    totalPago: acoesFinal.filter(acao => acao.Tipo == 'primariaObrigatoria').reduce(sumByProperty('TotalPago'), 0),
                    totalRP_Pago: acoesFinal.filter(acao => acao.Tipo == 'primariaObrigatoria').reduce(sumByProperty('TotalRP_Pago'), 0)
                },
                primariaDiscricionaria: {
                    acoes: acoesFinal.filter(acao => acao.Tipo == 'primariaDiscricionaria'),
                    totalPago: acoesFinal.filter(acao => acao.Tipo == 'primariaDiscricionaria').reduce(sumByProperty('TotalPago'), 0),
                    totalRP_Pago: acoesFinal.filter(acao => acao.Tipo == 'primariaDiscricionaria').reduce(sumByProperty('TotalRP_Pago'), 0)
                }
            }

            this.acoesFinal = acoesFinal;
            this.loaded = true;
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