<template>
  <div id="page403">
    <div class="row">
      <div class="offset-3 col-6 d-flex flex-column justify-content-around">
        <div class="text-center">
          <h1 class="display-1 font-weight-bold">403</h1>
          <p class="h1">Permission Deny.</p>
          <p class="h2 font-weight-normal mt-3 mb-4">
            The server encountered something unexpected that didn't allow it to
            complete the request.
          </p>
          <router-link to="/">
            <button class="btn btn-primary btn-lg">
              Return to website
            </button>
          </router-link>
        </div>
        <!-- blank div -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Page403 extends Vue {}
</script>

<style scoped>
#page403,
.container,
.row {
  height: 100%;
}
</style>
