<template>
    <div>
        <div class="text-center py-4">
            <h1>
                <router-link to="/">
                    Minha Universidade
                </router-link>
            </h1>
            <h2>Transparência nas Universidades Públicas Federais</h2>
        </div>

        <!-- NAV -->
        <b-navbar type="dark" class="navBar">
            <b-navbar-nav>
                <b-nav-item-dropdown text="UNIRIO">
                    <b-dropdown-item>
                        <router-link to="/qdd2020">
                            QDD 2020
                        </router-link>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
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
    h1 {
        font-size: 2rem;

        a:hover {
            text-decoration: none;
        }
    }

    h2 {
        font-size: 1.2rem;
    }

    .navBar {
        background-color: black;

        >* {
            color: white !important;
        }
    }
</style>