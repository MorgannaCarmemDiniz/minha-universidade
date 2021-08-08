<template>
  <div class="wrap">
    <div class="background">
    </div>
    <div class="homeBanner">
      <div class="homeInfo">
        <h3>Minha Universidade</h3>
        <h4>
          Relatórios financeiros de Universidades Públicas Federais brasileiras
        </h4>
        <router-link to="/universidades">
          <b-button variant="primary">Universidades</b-button>
        </router-link>
      </div>
      <div class="homeImage">
        <img src="./assets/university.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
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
    background-color: hsl(178deg 22% 74%);
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .homeBanner {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .homeInfo {
      text-align: center;
      flex: 0 0 50%;

      > * {
        margin-bottom: 50px;
      }

      h3 {
        font-size: 2.5em;
      }

      h4 {
        font-size: 1.4em;
      }
    }

    .homeImage {
      flex: 0 0 40%;
      display: flex;

      img {
        object-fit: contain;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
      }
    }

  }

</style>
