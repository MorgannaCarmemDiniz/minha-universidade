<template>
    <div class="wrap">
        <div class="background">
        </div>
        <div class="content firstContent">
            <div class="contentInfo text-left">
                <h2>Minha Universidade</h2>
                <h3>
                    Transparência nas Universidades Públicas Federais
                </h3>
            </div>
            <div class="contentIcon">
                <HomeIcon/>
            </div>
        </div>
        <div class="content secondContent">
            <div class="contentInfo text-left" v-animate-onscroll.repeat="'fadeInRight'">
                <h4>O Projeto</h4>
                <p>
                    Este projeto tem por objetivo definir um padrão de transparência para as universidades públicas de
                    acordo com a Lei 12.527 (Lei de Acesso à Informação -  LAI) . Atualmente as universidades públicas
                    disponibilizam parte das informações exigidas de forma fragmentada (espalhadas em vários locais) e,
                    muitas vezes, de forma incompleta. O tema inicial de estudo deste projeto é o orçamento das 69
                    universidades federais públicas.
                </p>
                <router-link to="/universidades">
                    Lista de Universidades
                </router-link>
            </div>
            <div class="contentLogo" v-animate-onscroll.repeat="'fadeInUp'">
                <Logo />
            </div>
            <div class="contentInfo" v-animate-onscroll.repeat="'fadeInLeft'">
                <h4>Os Dados</h4>
                <p>
                    Este projeto usa, principalmente, como fonte de dados para estudo e análise, os sites do Portal da
                    Transparência, Siga Brasil, o projeto DATAUNIRIO e os sites das universidades federais.
                </p>
                <a target="_blank" href="http://www.portaltransparencia.gov.br">
                    Portal da Transparência
                    <font-awesome-icon class="faIcon" icon="external-link-alt" />
                </a>
                <a target="_blank" href="https://www12.senado.leg.br/orcamento/sigabrasil">
                    Siga Brasil
                    <font-awesome-icon class="faIcon" icon="external-link-alt" />
                </a>
                <a target="_blank" href="https://duttross.shinyapps.io/transparencia1/">
                    DATAUNIRIO
                    <font-awesome-icon class="faIcon" icon="external-link-alt" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeIcon from "./HomeIcon.vue";
    import Logo from "../../components/Logo.vue"

    export default {
        name: 'Home',
        components: {
            HomeIcon,
            Logo
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: -16px;
    }

    .background {
        background-color: darken($dark-blue, 5%);
        width: 100%;
        height: 100%;

        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .content {
        display: flex;
        color: white;
        justify-content: space-between;

        &.firstContent {
            align-items: center;
            min-height: 90vh;

            .contentInfo {
                flex: 0 0 40%;
            }

            .contentIcon {
                svg {
                    width: 350px;
                    height: auto;
                    filter: drop-shadow(0px 0px 5px rgba(black, 50%));
                    transition: 0.3s;
                }
            }
        }

        &.secondContent {
            align-items: flex-start;
            min-height: 60vh;

            .contentLogo {
                svg {
                    width: 330px;
                    height: auto;
                    filter: drop-shadow(0px 0px 5px rgba(black, 50%));
                }
            }

            .contentInfo {
                width: 33%;
            }

            a {
                display: inline-block;
                padding: 10px;
                color: white;
                border-radius: 3px;
                background-color: $bright-pink;
                box-shadow: 0 0 5px rgba(black, 50%);
                transition: 0.3s;
                margin-right: 0.5em;
                margin-bottom: 0.5em;

                &:hover {
                    text-decoration: none;
                    background-color: darken($bright-pink, 10%);
                }

                & + a {

                }
            }
        }
    }

    .contentInfo {
        //flex: 0 0 40%;

        h2 {
            font-size: 4em;
            font-weight: 200;
            text-shadow: 0 0 10px black;
        }

        h3 {
            font-weight: 200;
            font-size: 2em;
            text-shadow: 0 0 10px black;
        }

        h4 {
            font-weight: 200;
            font-size: 3em;
            text-shadow: 0 0 10px black;
        }
    }
</style>
