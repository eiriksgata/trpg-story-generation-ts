<template>
  <div id="page404">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col d-flex justify-content-center">
          <div class="text-center">
            <router-link to="/">
              <img class="img-fluid w-75" src="../../assets/404-error.svg" />
            </router-link>
            <h1 class="mt-5 font-weight-light">
              Page Not
              <span class="font-weight-bolder text-primary">Found</span>
            </h1>
            <p class="lead my-4">
              Oops! Looks like you followed a bad link. If you think this is a
              problem with us, please tell us.
            </p>
            <router-link class="btn btn-primary animate-hover" to="/">
              <i class="fas fa-chevron-left mr-3 pl-2 animate-left-3"></i>
              Go back home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Page404 extends Vue {}
</script>

<style scoped>
#page404,
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
