<template>
    <div>
        <component
                v-if="viewComponent && dataSheetData"
                :is="viewComponent"
                :dataSheetData="dataSheetData"
                :year="this.$route.params.year"
                :university="university"
        />
    </div>
</template>

<script>
    import universityService from "../services/universityService";
    import getDataSheetComponent from "../components/datasheets/getDataSheetComponent";

    export default {
        name: "ViewDataSheet",
        data: () => ({
            viewComponent: null,
            dataSheet: null,
            dataSheetData: null,
            university: null
        }),
        watch: {
            $route: {
                deep: true,
                handler() {
                    this.load();
                }
            }
        },
        mounted() {
            this.load();
        },
        methods: {
            async load() {
                this.viewComponent = null;
                this.dataSheetData = null;

                //Pegar a universidade desejada pelo código enviado na rota
                this.university = await universityService.getByCode(this.$route.params.university);
                //Pegar o relatório desejado pelo código enviado na rota
                this.dataSheet = this.university.datasheets.find(
                    ds => ds.year == this.$route.params.year && ds.type.code === this.$route.params.sheet
                );
                //Caso o relatório exista, pegar o componente responsável pela sua exibição (QDD.vue, Pago.vue, etc)
                //e carregar os dados do relatório
                if (this.dataSheet) {
                    this.viewComponent = getDataSheetComponent(this.dataSheet.type.code);
                    this.dataSheetData = await this.dataSheet.load();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>