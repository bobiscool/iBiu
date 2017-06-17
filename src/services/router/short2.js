
       export default {
  path:"/short2",
  meta:{requiresAuth:true},
  redirect:"/short2/short2",
  component(resolve) {
    require.ensure(['views/short2/index.vue'], () => {
      resolve(require('views/short2/index.vue'));
    })
  },
  children:[
     {
      path:"/short2/short2",
      component(resolve) {
        require.ensure(['views/short2/short2/index.vue'], () => {
          resolve(require('views/short2/short2/index.vue'));
        })
      }
    }
 {
      path:"/short2/short3",
      component(resolve) {
        require.ensure(['views/short2/short3/index.vue'], () => {
          resolve(require('views/short2/short3/index.vue'));
        })
      }
    }
 {
      path:"/short2/short4",
      component(resolve) {
        require.ensure(['views/short2/short4/index.vue'], () => {
          resolve(require('views/short2/short4/index.vue'));
        })
      }
    }

  ]
} 