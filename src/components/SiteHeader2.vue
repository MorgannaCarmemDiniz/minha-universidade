<template>
    <div class="mb-3 wrap">
        <div class="stripeDiv">

        </div>

        <div class="logoDiv">
            <router-link to="/">
                <Logo/>
                <h1>
                    Minha Universidade
                </h1>
            </router-link>
        </div>

        <!-- NAV -->
        <b-navbar class="navBar">
            <b-container>
                <b-navbar-nav class="nav">
                    <router-link class="navItem" to="/">
                        Início
                    </router-link>
                    <router-link class="navItem" to="/glossario">
                        Glossário
                    </router-link>
                    <router-link class="navItem" to="/universidades">
                        Universidades
                    </router-link>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
    import Logo from '../components/Logo.vue'

    export default {
        name: "SiteHeader",
        components: {
            Logo
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
        position: relative;

        z-index: 10;
        background-color: $dark-blue;
        height: 100px;

        box-shadow: 0 0 15px rgba(black, 50%);

        font-weight: 200;

        .stripeDiv {
            position: absolute;
            transform: translateX(-100px) translateY(-30px) rotate(-40deg);
            z-index: -1;

            width: 200px;
            height: 100px;
            background-color: $bright-blue;
        }

        .logoDiv {
            display: flex;

            a {
                color: white;
                display: flex;
                align-items: center;

                h1 {
                    font-weight: 200;
                    text-shadow: 0 0 10px black;
                    transition: text-shadow 0.3s;
                }

                svg {
                    transition: 0.3s;
                }

                &:hover {
                    text-decoration: none;

                    h1 {
                        text-shadow: 0 0 10px rgba($yellow, 60%);
                    }

                    svg {
                        filter: drop-shadow(0px 0px 10px rgba($yellow, 20%));
                    }
                }
            }
        }


    }

    .navBar {
        $textColor: #e2e2e2;

        a {
            text-decoration: none !important;
            color: $textColor;
        }

        .nav {
            * + * {
                margin-left: 10px;
            }


        }

        .navItem {
            padding: 5px;
            border-radius: 5px;
            transition: color 0.3s, background-color 0.3s;

            &:hover {
                color: darken($textColor, 10%);
            }
        }
    }
</style>