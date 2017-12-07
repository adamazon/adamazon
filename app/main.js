import Vue from 'vue';
import AOS from 'aos';

import AppMain from './components/app-main.vue';

new Vue(AppMain).$mount('#app-main');
AOS.init();
