<template>
    <div>
        <table>
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
            <template v-for="grupoDespesas in finalQDD">
                <tr v-for="(despesa, index) in grupoDespesas.Rows" :key="despesa.Codigo+despesa.Despesa+despesa.Valor">
                    <td class="font-weight-bold">
                        <span v-b-tooltip.hover :title="grupoDespesas.categoria" v-if="index == 0">{{despesa.Codigo}}</span>
                    </td>
                    <td>
                        {{despesa.Despesa}}
                    </td>
                    <td class="text-right">
                        {{formatCurrency(despesa.Valor)}}
                    </td>
                </tr>
                <tr :key="grupoDespesas.codigo">
                    <td>

                    </td>
                    <td class="totalTD font-weight-bold">
                        TOTAL:
                    </td>
                    <td class="totalTD font-weight-bold text-right">
                        {{formatCurrency(grupoDespesas.Total)}}
                    </td>
                </tr>
            </template>
        </table>
        <div>
            <PizzaChart :chartData="chartData" :options="{}" />
        </div>
    </div>
</template>

<script>
    import qdd from '../../spreadsheetParser/output/unirio_qdd_2020.json';
    import codes from "../codes";
    import PizzaChart from "../components/charts/PizzaChart";

    qdd.forEach(row => {
        row.Valor = parseFloat((row.Valor.replace(/[^0-9,]/gi, '').replace(',', '.')))
    });

    let finalQDD = qdd
        .map(row => row.Codigo)
        .filter((codigo, index, arr) => index === arr.indexOf(codigo))
        .map(codigo => ({
            codigo,
            Rows: qdd.filter(row => row.Codigo === codigo),
            Total: qdd.filter(row => row.Codigo === codigo).reduce((acumulador, row) => acumulador + row.Valor, 0),
            categoria: getCategoria(codigo)
        }));



    const numberFormatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2
    });

    //Pega a categoria de um grupo de despesas baseado no seu código
    function getCategoria(code){
        code = code.split('.').reverse();
        let categoria;
        if(code[1] !== '00'){
            categoria = `${code[1]} - ${codes.elemento[code[1]]}`
        }else if(code[2] !== '00'){
            categoria = `${code[2]} - ${codes.modalidade[code[2]]}`
        }
        return categoria;
    }

    //Gera o objeto de Data que é usado pelo vue-chartjs pra desenhar o gráfico com base nos dados do QDD
    function generateChartData(){
        let labels = [];
        let values = [];
        let colors = [];
        let i = 1;
        for (let grupoDespesas of finalQDD){
            labels.push(grupoDespesas.categoria);
            values.push(grupoDespesas.Total);
            colors.push(rainbow(finalQDD.length, i++));
        }
        console.log(colors);
        let data = {
            datasets: [{
                data: values,
                backgroundColor: colors
            }],
            labels
        }
        return data;
    }
    //Guardar a chartData numa variável que será guardada no Data para ser acessível (?)
    let chartData = generateChartData();

    //Gerador de cores únicas e igualmente espaçadas no espectro
    //numOfSteps = quantidade total de cores desejadas (10, 100, etc)
    //step = index da cor atual (3ª, 10ª, etc)
    function rainbow(numOfSteps, step) {
        // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
        // Adam Cole, 2011-Sept-14
        // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        var r, g, b;
        var h = step / numOfSteps;
        var i = ~~(h * 6);
        var f = h * 6 - i;
        var q = 1 - f;
        switch(i % 6){
            case 0: r = 1; g = f; b = 0; break;
            case 1: r = q; g = 1; b = 0; break;
            case 2: r = 0; g = 1; b = f; break;
            case 3: r = 0; g = q; b = 1; break;
            case 4: r = f; g = 0; b = 1; break;
            case 5: r = 1; g = 0; b = q; break;
        }
        var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
        return (c);
    }

    export default {
        name: "QDD2020",
        data: () => ({
            finalQDD,
            chartData
        }),
        components: {
            PizzaChart
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
    ;

        &.totalTD {
            color: #CF2E2E;
        }
    }
</style>