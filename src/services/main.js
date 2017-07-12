const writeFile = require('./write-file');

module.exports = function (opts) {


    let vuex = '';
    let vuexUse = '';
    let store = '';
    let storeSet = '';

    if (opts.data.store.indexOf('vuex') > -1) {
        vuex = "import Vuex from 'vuex';";
        vuexUse = 'Vue.use(Vuex);';
        store = `
        const store = new Vuex.Store({
            state: {
                
            },
            getters: {
                
            },
            mutations: {
                
            },
            actions: {
                
            }
        });
        `;
        storeSet = 'store: store,';
    }



    const file = `
        import Vue from 'vue';
        import VueRouter from 'vue-router';
        import router from './router/index'
        import '../static/css/main.css'

        ${vuex}
        import App from './app.vue';
        
        Vue.use(VueRouter);
        ${vuexUse}
        
// 路由配置


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

`;
    writeFile({
        directory: `${opts.directory}/src`,
        fileName: 'main.js',
        data: file,
        codeFormat: {
            indent_size: 2
        },
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });
};