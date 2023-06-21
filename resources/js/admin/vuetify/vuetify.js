import '@mdi/font/css/materialdesignicons.css';
import  Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.component('filter-icon', {
    template: `<img src="/assets/icon/filter.png" alt="filter-icon" style="max-height: 40px">`
});

const opts = {
    icons: {
        iconfont: 'mdi',
        values: {
            // ****** Icons ****** //
            filterIcon: { component: 'filter-icon' },
        }
    },
};


export default new Vuetify(opts);
