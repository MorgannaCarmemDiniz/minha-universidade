<template>
    <div class="mb-3 wrap">
        <div class="text-center py-4 header">
            <h1>
                <router-link to="/">
                    Minha Universidade
                </router-link>
            </h1>
            <h2>Transparência nas Universidades Públicas Federais</h2>
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
    export default {
        name: "SiteHeader"
    }
</script>

<style lang="scss" scoped>
    .wrap {
        flex-grow: 0;
        flex-shrink: 0;
    }

    .header {
        background-color: #f5f5f5;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: normal;

        a:hover {
            text-decoration: none;
        }
    }

    h2 {
        font-size: 1.1rem;
    }

    .navBar {
        $textColor: #e2e2e2;
        $bgColor: black;

        background-color: $bgColor;

        a {
            text-decoration: none !important;
            color: $textColor;
        }

        .nav {
            * + * {
                margin-left: 20px;
            }
        }

        .navItem {
            padding: 5px;
            border-radius: 5px;
            transition: color 0.3s, background-color 0.3s;

            &:hover {
                color: darken($textColor, 10%);
                background-color: lighten($bgColor, 10%);
            }
        }
    }
</style>