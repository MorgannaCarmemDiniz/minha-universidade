<template>
  <div id="app">
    <SiteHeader/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import SiteHeader from "./components/SiteHeader";
  export default {
    components: {SiteHeader}
  }
</script>