
        import Vue from 'vue';
        import Router from 'vue-router';
        import contend from 'views/index.vue'

       
       	 import short1 from './short1.js'; 
	 import short2 from './short2.js'; 
	 import short3 from './short3.js'; 
	 import short4 from './short4.js'; 

        
       Vue.use(Router);
       
       export default new Router({
       mode:'history',
       routes: [
        {
            path: '/',
            name: 'home',
            redirect:'/home',
            component: contend,
            children:[
                short1,
short2,
short3,
short4,

        ]

        },
      {
            path:'*',
            name:'404',
            component:notFound
    }
  ]
})
   
        