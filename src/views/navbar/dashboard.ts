import i18n from "../../i18n";
import Vue from "vue";
import { Component } from "vue-property-decorator";

// views
import Sidebar from "./Sidebar.vue";

@Component({ components: { Sidebar } })
export default class ViewDashboard extends Vue {

}