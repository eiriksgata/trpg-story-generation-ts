<template>
  <div id="page500">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-6">
          <div>
            <h4 class="mt-4 display-3 text-black-50">500</h4>
            <h1 class="font-weight-light">
              Something has gone
              <span class="font-weight-bold text-primary">seriously</span> wrong
            </h1>
            <p class="lead my-4">
              It's always time for a coffee break. We should be back by the time
              you finish your coffee.
            </p>
            <router-link class="btn btn-primary animate-hover" to="/">
              <i class="fas fa-chevron-left mr-3 pl-2 animate-left-3"></i>Go
              back home
            </router-link>
          </div>
        </div>

        <div class="col-6 my-6 my-lg-0">
          <router-link to="/">
            <img class="img-fluid" src="../../assets/500-error.svg" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Page500 extends Vue {}
</script>

<style scoped>
#page500,
.container,
.row {
  height: 100%;
}
.animate-hover:hover .animate-left-3,
.animate-left-3:hover {
  transform: translate(-3px, 0);
}
.animate-left-3 {
  transition: all 0.5s ease;
}
</style>
