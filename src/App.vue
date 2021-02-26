<template>
  <div id="app">
    <SiteHeader/>
    <router-view/>
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