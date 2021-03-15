<template>
    <div class="mb-3">
        <div class="text-center py-4 header">
            <h1>
                <router-link to="/">
                    Minha Universidade
                </router-link>
            </h1>
            <h2>Transparência nas Universidades Públicas Federais</h2>
        </div>

        <!-- NAV -->
        <b-navbar type="dark" class="navBar">
            <b-container>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/">
                            Início
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/glossario">
                            Glossário
                        </router-link>
                    </b-nav-item>
                    <b-nav-item-dropdown text="UNIRIO">
                        <b-dropdown-item>
                            <router-link to="/qdd2020">
                                QDD 2020
                            </router-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "SiteHeader",
        data: () => ({})
    }
</script>

<style lang="scss" scoped>
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
        background-color: black;

        >* {
            color: white !important;
        }
    }
</style>