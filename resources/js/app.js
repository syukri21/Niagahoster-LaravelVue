import Vue from "vue";
import Main from './main.vue'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faPhone,
    faPhoneAlt,
    faUserCircle,
    faComments,
} from '@fortawesome/free-solid-svg-icons'


library.add(faPhone, faPhoneAlt, faUserCircle, faComments)
Vue.component('faw-icon', FontAwesomeIcon)
Vue.config.productionTip = false


new Vue({
    el: "#app",
    render: (createElement) => createElement(Main)
});
