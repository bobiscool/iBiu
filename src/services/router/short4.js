
       export default {
  path:"/short4",
  meta:{requiresAuth:true},
  redirect:"/short4/short2",
  component(resolve) {
    require.ensure(['views/short4/index.vue'], () => {
      resolve(require('views/short4/index.vue'));
    })
  },
  children:[
     {
      path:"/short4/short2",
      component(resolve) {
        require.ensure(['views/short4/short2/index.vue'], () => {
          resolve(require('views/short4/short2/index.vue'));
        })
      }
    }
 {
      path:"/short4/short3",
      component(resolve) {
        require.ensure(['views/short4/short3/index.vue'], () => {
          resolve(require('views/short4/short3/index.vue'));
        })
      }
    }
 {
      path:"/short4/short4",
      component(resolve) {
        require.ensure(['views/short4/short4/index.vue'], () => {
          resolve(require('views/short4/short4/index.vue'));
        })
      }
    }

  ]
} 