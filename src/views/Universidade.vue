<template>
    <div class="universityReports">
        <div
                v-for="year of getAvailableYears(university)"
        >
            <h3> {{year}} </h3>
            <router-link
                    class="d-block"
                    :to="`/universidade/${university.code}/${year}/${ds.type.code}`"
                    v-for="ds of getAvailableSheets(university, year)"
            >
               {{ds.type.name}}
            </router-link>
        </div>
    </div>
</template>

<script>
    import universityService from "../services/universityService";
    import UniversityCard from "../components/UniversityCard";
    import getDataSheetComponent from "../components/datasheets/getDataSheetComponent";

    export default {
        name: "Universidade",
        components: {UniversityCard},
        data: () => ({
            university: null,
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
                this.university = await universityService.getByCode(this.$route.params.university);
            },

            getAvailableYears(university) {
                if (this.university) return university.datasheets.map(ds => ds.year).filter((y, i, a) => a.indexOf(y) === i);
            },

            getAvailableSheets(university, year) {
                if (this.university) return university.datasheets.filter(ds => ds.year === year);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .universityList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;

        a {
            text-decoration: none !important;
        }

        > * {
            max-width: 30%;
        }
    }
</style>