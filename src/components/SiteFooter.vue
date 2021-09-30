<template>
    <div class="footerWrapper">
        <div class="container footer">
            <div class="footerInfo d-flex">
                <div>
                    <Logo />
                </div>
                <div>
                    <h5>
                        Sobre o projeto
                    </h5>
                    <p>
                        Este projeto tem por objetivo definir um padrão de transparência para as universidades públicas.
                        O tema inicial de estudo deste projeto é o orçamento das 69 universidades federais públicas.
                    </p>
                </div>
            </div>
            <div class="footerInfo">
                <h5>
                    Menu
                </h5>
                <nav class="footerNav">
                    <router-link class="navItem" to="/">
                        Início
                    </router-link>
                    <router-link class="navItem" to="/glossario">
                        Glossário
                    </router-link>
                    <router-link class="navItem" to="/universidades">
                        Universidades
                    </router-link>
                    <router-link class="navItem" to="/creditos">
                        Créditos
                    </router-link>
                </nav>
            </div>
            <div class="footerInfo">
                <h5>
                    Contato
                </h5>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "./Logo";
    export default {
        name: "SiteFooter",
        components: {Logo},
        data: () => ({})
    }
</script>

<style lang="scss" scoped>
    .footerWrapper {
        margin-top: 2.5em;
        min-height: 150px;
        width: 100%;
        background-color: $neutral-darkest;

        .footer {
            display: flex;
            justify-content: space-between;

            padding-top: 20px;
            height: 100%;

            color: $neutral-light;
            font-size: 0.85em;

            .footerInfo + * {
                margin-left: 20px;
            }

            .footerInfo {
                align-items: flex-start;
                height: 100px;
                min-width: 20%;
                flex-grow: 1;

            }

            .footerNav {
                display: flex;
                flex-direction: column;

                .navItem {
                    color: $neutral-light;

                    &:hover {
                        //color: $neutral-lightest;
                        color: $bright-pink;
                    }
                }
            }

            svg {
                width: 130px;
                height: auto;
                filter: drop-shadow(0px 0px 5px rgba(black, 50%)) brightness(0.6);
                transform: translateY(-20px);
            }
        }
    }
</style>