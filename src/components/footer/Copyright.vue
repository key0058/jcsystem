<template>
  <div id="copyrightFooter">
    <Footer class="layout-footer-center">{{startYear}}-{{currentYear}} &copy; {{copyright}}</Footer>
  </div>
</template>

<script>
export default {
  name: 'CopyrightFooter',
  data() {
      return {
          copyright: "All copyright reserved.",
          startYear: 2018,
          currentYear: 2019
      }
  },
  mounted() {
    this.currentYear = this.getCurrentYear();
  },
  methods: {
      getCurrentYear() {
        var now = new Date();
        return now.getFullYear();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout-footer-center {
    text-align: center;
    background-color: white;
  }
</style>

