<template>
<div class="header py-4">
  <div class="container">
      <div class="d-flex">
          <a class="header-brand" routerLink="/">
              <!--<img src="../../assets/logo.png" class="header-brand-img" alt="Vitalstatistix" width="64" height="64">-->
              <h1 class="page-title">{{ appTitle }}</h1>
          </a>
          <div class="d-flex order-lg-2 ml-auto">
              <div v-for="(item, index) in posts" v-bind:key="index" class="nav-item d-none d-md-flex">
                  <a href="https://github.com/" class="btn btn-sm btn-outline-primary" target="_blank">{{ item }}</a>
              </div>

              </div>
          </div>
          <a href="#" class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse"
              data-target="#headerMenuCollapse">
              <span class="header-toggler-icon"></span>
          </a>
      </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  data: function() {
      return {
          posts: this.getPosts()
      }
  }, 
  methods: {
      getPosts: function() {
          return ['post1', 'post2'];
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
