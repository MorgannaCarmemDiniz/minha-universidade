<script>
    import { Pie } from 'vue-chartjs';

    export default {
        name: "PizzaChart",
        extends: Pie,
        props: ['chartData', 'options'],
        data: () => ({}),
        mounted() {
            this.renderChart(this.chartData, this.options);
        }
    }
</script>

<style lang="scss" scoped>

</style>