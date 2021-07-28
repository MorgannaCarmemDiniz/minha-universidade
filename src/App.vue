<template>
  <div id="app">
    <SiteHeader/>
    <b-container class="wrap">
      <router-view/>
    </b-container>
    <transition name="slide-fade">
      <button v-b-tooltip.hover.left.ds900 title="Ir para o topo" class="scrollToTop" v-if="showButton" @click="scrollToTop">
        <BIconChevronDoubleUp class="topIcon"/>
      </button>
    </transition>
  </div>
</template>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;400;600&display=swap');
  #app {
    font-family: Roboto, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .scrollToTop {
    $bgColor: rgba(81, 81, 81, 0.61);

    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;

    border-radius: 50%;
    border: none;
    padding: 10px;
    background-color: $bgColor;
    transition: box-shadow 0.5s ease , background-color 0.5s ease;

    &:hover {
      background-color: darken($bgColor, 30%);
      box-shadow: 0px 0px 20px grey;
    }
  }

  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: transform 0.3s, opacity 0.3s;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(30px);
    opacity: 0;
  }

  .topIcon {
    width: 35px;
    height: 35px;
    color: white;
  }
</style>
<script>
  import SiteHeader from "./components/SiteHeader";
  import universityService from "./services/universityService";
  export default {
    components: {SiteHeader},
    data: () => ({
      showButton: false
    }),
    mounted() {
      universityService.getList();
      document.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      handleScroll() {
        let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let GOLDEN_RATIO = 0.01;

        if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
          //show button
          this.showButton = true;
        } else {
          //hide button
          this.showButton = false;
        }
      }
    }
  }
</script>