<template>
    <div>
        <div class="universitySearch">
            <b-form-input v-model="searchString" type="search" placeholder="Buscar Universidade" />
        </div>
        <div class="universityList">
            <router-link
                    v-for="university of filteredUniversities"
                    :to="`/universidade/${university.code}`"
            >
                <UniversityCard :university="university" />
            </router-link>
        </div>
    </div>
</template>

<script>
    import universityService from "../services/universityService";
    import UniversityCard from "../components/UniversityCard";

    export default {
        name: "Universidades",
        components: {UniversityCard},
        data: () => ({
            universities: [],
            searchString: ''
        }),
        computed: {
            filteredUniversities() {
                return this.universities.filter(university => {
                    let regex = new RegExp('' + this.searchString, 'i');
                    return university.shortName.match(regex) || university.name.match(regex)
                })
            }
        },
        async mounted() {
            this.universities = await universityService.getList();
        },
        methods: {
            getAvailableYears(university) {
                return university.datasheets.map(ds => ds.year).filter((y, i, a) => a.indexOf(y) === i);
            },

            getAvailableSheets(university, year) {
                return university.datasheets.filter(ds => ds.year === year);
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

    .universitySearch {
        padding: 0px 0px 15px 0px;
    }
</style>