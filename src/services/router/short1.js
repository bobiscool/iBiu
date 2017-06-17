
       export default {
  path:"/short1",
  meta:{requiresAuth:true},
  redirect:"/short1/short2",
  component(resolve) {
    require.ensure(['views/short1/index.vue'], () => {
      resolve(require('views/short1/index.vue'));
    })
  },
  children:[
     {
      path:"/short1/short2",
      component(resolve) {
        require.ensure(['views/short1/short2/index.vue'], () => {
          resolve(require('views/short1/short2/index.vue'));
        })
      }
    }
 {
      path:"/short1/short3",
      component(resolve) {
        require.ensure(['views/short1/short3/index.vue'], () => {
          resolve(require('views/short1/short3/index.vue'));
        })
      }
    }
 {
      path:"/short1/short4",
      component(resolve) {
        require.ensure(['views/short1/short4/index.vue'], () => {
          resolve(require('views/short1/short4/index.vue'));
        })
      }
    }

  ]
} 