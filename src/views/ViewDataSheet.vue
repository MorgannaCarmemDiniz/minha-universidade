<template>
    <div>
        <component
                v-if="viewComponent && dataSheetData"
                :is="viewComponent"
                :dataSheetData="dataSheetData"
                :year="this.$route.params.year"
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

                let uni = await universityService.getByCode(this.$route.params.university);

                this.dataSheet = uni.datasheets.find(
                    ds => ds.year == this.$route.params.year && ds.type.code === this.$route.params.sheet
                );

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