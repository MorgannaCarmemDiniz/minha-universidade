<template>
    <div class="wrap">
        <div v-if="university" class="universitySidebar">
            <img :src="university.getImage()" alt="">
            <div class="universityInfo">
                <h3>{{university.shortName}}</h3>
                <h4>{{university.name}}</h4>
                <p><a target="_blank" href="http://www.unirio.br">Visite o site</a></p>
            </div>
        </div>
        <div class="universityList">
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
    .wrap {
        display: flex;
        flex-direction: row;
    }

    .universitySidebar {
        $bgColor: #e2e2e2;

        display: flex;
        flex-direction: column;
        width: 20%;

        border: 1px solid #666666;
        border-radius: 5px;
        padding: 5px;
        align-items: center;
        color: #414141;

        background-color: $bgColor;
        box-shadow: 0 0 10px rgba(black, 20%);

        img {
            width: 30%;
        }

        h3, h4, p {
            text-align: center;
        }

        .universityInfo {
            flex-wrap: wrap;
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

        > * {
            max-width: 30%;
        }
    }
</style>