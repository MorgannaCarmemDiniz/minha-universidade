<template>
    <div>
        <h2>Entrevistas 2022</h2>
        <ul>
            <li><router-link to="/entrevistas/janeiro22">
                Janeiro/22   : entrevista com a Profa. Claudia Cappelli sobre transparência em Sistemas de Informação
                <br><br>           
                </router-link>
            </li>
            <li><router-link to="/entrevistas/fevereiro22">
                Fevereiro/22 : entrevista com o Prof. Steven Dutt-Ross sobre transparência orçamentária
                <br><br>            
                </router-link>
            </li>
            <li><router-link to="/entrevistas/marco22">
                Março/22 : entrevista com o Prof. Sean Siqueira sobre dados abertos
                <br><br>          
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "Forum",
        data: () => ({})
    }
</script>

<style lang="scss" scoped>

</style>
