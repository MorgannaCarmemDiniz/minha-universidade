<template>
    <div class="mb-3 wrap">
        <div class="stripeDiv">

        </div>

        <div class="logoDiv">
            <router-link to="/">
                <Logo/>
                <h1 class="headerText">
                    Minha Universidade
                </h1>
            </router-link>
        </div>

        <b-navbar class="navBarDesktop">
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

        <div class="navBarMobile">
            <font-awesome-icon class="faIcon" icon="bars" @click="mobileNavExpanded = !mobileNavExpanded" />
            <div class="navBarMobileNav" :class="{'invisible': !mobileNavExpanded}">
                <router-link class="navItem" to="/">
                    Início
                </router-link>
                <router-link class="navItem" to="/glossario">
                    Glossário
                </router-link>
                <router-link class="navItem" to="/universidades">
                    Universidades
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '../components/Logo.vue'

    export default {
        name: "SiteHeader",
        components: {
            Logo
        },
        data: () => ({
            mobileNavExpanded: false
        })
    }
</script>

<style lang="scss" scoped>
    @media (max-width: 575.98px) {
        .headerText {
            display: none;
        }
    }

    @media (max-width: 767.98px) {
        .navBarDesktop {
            display: none;
        }
    }

    @media (min-width: 767.98px) {
        .navBarMobile {
            display: none;
        }
    }

    .navBarMobile {

        .faIcon {
            font-size: 1.5em;
            color: white;
            cursor: pointer;
        }

        .navBarMobileNav {
            background-color: white;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #9d9d9d;
            box-shadow: 0 0 5px rgba(black, 50%);
            position: absolute;
            right: 15px;
            display: flex;
            flex-direction: column;
            text-align: end;
            transform: none;
            transition: 0.3s;

            a {
                color: black;
                text-shadow: 0 0 10px white;
                transition: 0.3s;
                padding: 5px;
                font-weight: normal;
            }
        }
    }

    .invisible {
        visibility: hidden;
        opacity: 0;
        transform: translateX(-110%) !important;
    }

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
                    width: 100px;
                    height: auto;
                    filter: drop-shadow(0px 0px 5px rgba(black, 50%));
                    transition: 0.3s;
                }

                &:hover {
                    text-decoration: none;

                    h1 {
                        text-shadow: 0 0 20px rgba($bright-blue, 60%);
                    }

                    svg {
                        filter: drop-shadow(0px 0px 10px rgba(black, 30%));
                        transform: scale(1.03, 1.03);
                    }
                }
            }
        }


    }

    .navBarDesktop {
        a {
            text-decoration: none !important;
            color: white;
            text-shadow: 0 0 10px black;
            transition: 0.3s;
            padding: 5px;

            &:hover {
                text-shadow: 0 0 20px rgba($bright-blue, 60%);
            }
        }
    }
</style>