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
    import universityService from "../../services/universityService";
    import UniversityCard from "./UniversityCard";

    export default {
        name: "Universidades",
        components: {UniversityCard},
        data: () => ({
            universities: [],
            searchString: ''
        }),
        computed: {
            //Função que filtra as universidades de acordo com a barra de busca
            filteredUniversities() {
                return this.universities.filter(university => {
                    let regex = new RegExp('' + this.searchString, 'i');
                    return university.shortName.match(regex) || university.name.match(regex)
                })
            }
        },
        async mounted() {
            //Pegar a lista de universidades cadastradas
            this.universities = await universityService.getList();
        }
    }
</script>

<style lang="scss" scoped>

    @media (min-width: 767.98px) {
        .universityList {
            > * {
                max-width: 33%;
            }
        }
    }

    .universityList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;

        a {
            text-decoration: none !important;
        }
    }

    .universitySearch {
        padding: 0px 0px 15px 0px;
    }
</style>