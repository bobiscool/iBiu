
       export default {
  path:"/short3",
  meta:{requiresAuth:true},
  redirect:"/short3/short2",
  component(resolve) {
    require.ensure(['views/short3/index.vue'], () => {
      resolve(require('views/short3/index.vue'));
    })
  },
  children:[
     {
      path:"/short3/short2",
      component(resolve) {
        require.ensure(['views/short3/short2/index.vue'], () => {
          resolve(require('views/short3/short2/index.vue'));
        })
      }
    }
 {
      path:"/short3/short3",
      component(resolve) {
        require.ensure(['views/short3/short3/index.vue'], () => {
          resolve(require('views/short3/short3/index.vue'));
        })
      }
    }
 {
      path:"/short3/short4",
      component(resolve) {
        require.ensure(['views/short3/short4/index.vue'], () => {
          resolve(require('views/short3/short4/index.vue'));
        })
      }
    }

  ]
} 