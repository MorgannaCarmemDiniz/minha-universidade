<template>
  <div class="wrap">
    <div class="background">
    </div>
    <div class="homeBanner">
      <div class="homeInfo">
        <h2>Minha Universidade</h2>
        <h3>
          Transparência nas Universidades Públicas Federais
        </h3>
        <router-link to="/universidades">
          <b-button variant="primary">Universidades</b-button>
        </router-link>
      </div>
      <div class="homeIcon">
        <HomeIcon />
      </div>
    </div>
  </div>
</template>

<script>
import HomeIcon from "./HomeIcon.vue";

export default {
  name: 'Home',
  components: {
    HomeIcon
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

  .homeBanner {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    color: white;

    .homeInfo {
      text-align: left;
      flex: 0 0 40%;

      > * {
        margin-bottom: 20px;
      }

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
    }

    .homeIcon {
      //flex: 0 0 40%;
      //display: flex;

      svg {
        width: 350px;
        height: auto;
        filter: drop-shadow(0px 0px 5px rgba(black, 50%));
        transition: 0.3s;
      }
    }
  }

</style>
