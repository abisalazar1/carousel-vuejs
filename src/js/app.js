import Vue from 'vue';

window.Event = new Vue();

Vue.component('vue-carousel', require('./components/Slider.vue'));


var app = new Vue({
    el: '#app',
    created () {

    }
});


