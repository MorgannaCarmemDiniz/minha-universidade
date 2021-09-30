<template>
  <div id="app">
    <SiteHeader/>
    <b-container class="contentWrap">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </b-container>
    <SiteFooter />
    <!-- Scroll To Top Button -->
    <transition name="slide-fade">
      <button v-b-tooltip.hover.left.ds900 title="Ir para o topo" class="scrollToTop" v-if="showButton" @click="scrollToTop">
        <BIconChevronDoubleUp class="topIcon"/>
      </button>
    </transition>
  </div>
</template>

<style lang="scss">


  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .contentWrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 75vh;
  }

  .scrollToTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;

    border-radius: 50%;
    border: none;
    padding: 10px;
    background-color: $yellow;
    transition: 0.5s ease;

    &:hover {
      background-color: darken($yellow, 10%);
      box-shadow: 0px 0px 20px rgba(black, 30%);
    }
  }

  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: transform 0.3s, opacity 0.3s;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(30px);
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter, .fade-leave-to {
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
  import SiteFooter from "./components/SiteFooter";
  import universityService from "./services/universityService";
  export default {
    components: {
      SiteHeader,
      SiteFooter
    },
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
        if (document.documentElement.scrollTop > 200) {
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