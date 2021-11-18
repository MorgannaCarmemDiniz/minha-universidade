<template>
        <div>
            <h2>Crowdfunding</h2>
            <p>Vamos <span>começar</span>?</p>
            {{texto}}
        </div>
</template>

<script>
    export default {
        name: "Crowdfunding",
        data: () => ({
            texto: 'Oba, dinheiro :)'
        })
    }
</script>

<style lang="scss" scoped>
    p {
        color: orange;
        span {
            color: green;
        }
    }
</style>