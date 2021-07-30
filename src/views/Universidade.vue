<template>
    <div class="wrap">
        <!-- SIDEBAR -->
        <div v-if="university" class="universitySidebar">
            <div class="universityImage">
                <img :src="university.getImage()" alt="">
            </div>
            <div class="universityContent">
                <div class="universityInfo">
                    <div class="universityLogo">
                        <img :src="university.getLogo()" alt="">
                    </div>
                    <h3>{{university.shortName}}</h3>
                    <h4>{{university.name}}</h4>
                </div>
                <div class="universityFooter">
                    <a class="sidebarLink" target="_blank" href="http://www.unirio.br">
                        Visite o site
                        <font-awesome-icon class="faIcon" icon="external-link-alt" />
                    </a>
                </div>
            </div>
        </div>
        <!-- Lista de Relatórios -->
        <div class="contentWrap">
            <div class="universitySearch">
                <b-form-input v-model="searchString" type="search" placeholder="Buscar Ano" />
            </div>
            <div class="universityList">
                <ReportsCard
                        v-for="year of filteredYears"
                        :key="year"

                        :reports="getAvailableSheets(university, year)"
                        :year="year"
                        :university="university"
                >
                </ReportsCard>
            </div>
        </div>
    </div>
</template>

<script>
    import universityService from "../services/universityService";
    import UniversityCard from "../components/UniversityCard";
    import ReportsCard from "../components/ReportsCard";

    export default {
        name: "Universidade",
        components: {ReportsCard, UniversityCard},
        data: () => ({
            university: null,
            searchString: ''
        }),
        computed: {
            filteredYears() {
                if(!this.university) return [];
                return this.getAvailableYears(this.university).filter(year => {
                    return year.includes(this.searchString);
                })
            }
        },
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

    .contentWrap {
        display: flex;
        flex-direction: column;
        width: 100%;

        .universitySearch {
            padding: 0px 0px 15px 0px;
        }
    }

    .universitySidebar {
        $bgColor: #e2e2e2;

        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        position: relative;
        align-items: center;
        margin-right: 20px;

        overflow: hidden;

        width: 20%;
        border: 1px solid #666666;
        border-radius: 5px;
        background-color: $bgColor;
        box-shadow: 0 0 10px rgba(black, 20%);

        color: #414141;

        .universityImage {
            overflow: hidden;

            img {
                filter: blur(1px);
                width: 100%;
                height: 100%;
                transform: scale(1.05);
            }

        }

        .universityContent {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            z-index: 1;

            padding: 0px 10px 10px 10px;
            box-shadow: 0 -5px 10px rgba(black, 60%);

            align-items: center;

            .universityInfo {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;

                .universityLogo {
                    $size: 70px;

                    transform: translateY(-50%);

                    width: $size;
                    height: $size;
                    margin-bottom: -($size/2);
                    background-color: white;
                    padding: 7px;
                    overflow: hidden;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(black, 40%);

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                h3 {
                    margin-top: 5px;
                }
            }

            .sidebarLink {
                $bgColor: #19539c;

                //align-self: flex-end;
                display: block;
                background-color: $bgColor;
                border-radius: 3px;
                padding: 5px;
                text-decoration: none;
                color: white;
                transition: 0.3s;

                .faIcon {
                    font-size: .8em;
                    margin-left: 2px;
                    transform: translateY(-0.05em);
                }

                &:hover {
                    background-color: lighten($bgColor, 5%);
                    box-shadow: 0 0 15px rgba($bgColor, 50%);
                }
            }

            .universityFooter {
                width: 100%;
                flex-grow: 0;
            }
        }

        h3, h4, p, a {
            text-align: center;
        }

        h4 {
            font-size: 1em;
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