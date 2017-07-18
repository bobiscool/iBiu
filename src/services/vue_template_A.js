/**
 * Created by mac WuYiPing on 17/6/8.
 */

/*现在只写到三级目录 以及导航*/
exports.template = [

    function (names) {
        //一级导航
        var temString = "";
        for (var i in names) {
            temString += "<li><router-link to='" + names[i].src + "'>" + names[i].text + "</router-link></li>"
        }

        console.log(names);
        var temUl = temString;


        return `
        <template>
      <div class="main_container">

        <header class="header">
            <div class="logo"> 
                  <span class="logo-items"></span>
                <span class="title"><span>i</span><span>Biu</span></span>
            </div>
            <ul>
               ${temUl}
            </ul>
            <div class="user-area">
              <span class="bell">
                <span class="alarm">20</span>
              </span>
              <span class="detail"></span>
                   <div class="favico"></div>
                   <span class="name"><span><router-link to="/login">admin</router-link></span><i></i></span>
            </div>
        </header>


            <router-view></router-view>

     </div>

</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                //todo 这里是data区域
      
            }
        },
        components: {
            //TODO 添加子组件
        },
        computed: {
            //TODO 计算区
        },
        methods: {
            //TODO 方法区
        },
        mounted: function () {

            //TODO 函数执行区域
        }
    }
</script>
<style lang="scss">
  .contend {
    width:100%;
    height: 100%;
    background: #4caf50;
    .nav{
      width: 100px;
      height:100%;
      background: #00AAFF;
      position: absolute;
      left: 0;
      top:0;
    }
  }
</style>
`
    },

    function (names) {
        var temString = "";
        for (var i in names) {
            temString += "<li><router-link to='/" + names[i].src + "'>" + names[i].text + "</router-link></li>"
        }

        var temUl = "<ul>" + temString + "</ul>";


        return `
<template>
            <div class="body">

        <div class="left_col ">

    <!--一级导航区域-->
    <div class="left_link">

       <div class="leftBoard">
      <span class="icon"></span>
      <span class='sideTitle'>Sidebars</span>
      <span class='info'>new</span>
      </div>
   ${temUl}
  </div>

     </div>
                
                <router-view></router-view>

            </div>
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                //todo 这里是data区域
      
            }
        },
        components: {
            //TODO 添加子组件
        },
        computed: {
            //TODO 计算区
        },
        methods: {
            //TODO 方法区
        },
        mounted: function () {

            //TODO 函数执行区域
        }
    }
</script>
<style lang="scss">
 
</style>
`
    },
    function (names) {
        var temString = "";
        for (var i in names) {
            temString += "<li class='breadcrumb-item'><router-link to='/" + names[i].src + "'>" + names[i].text + "</router-link></li>"
        }

        // var temUl = "<ul>" + temString + "</ul>";


        return `
        <template>
  <div class="main">

    <ol class="breadcrumb">

      <!--<li class="breadcrumb-item">-->
      <!--<router-link to='first1/sec1/third1'>三级导航</router-link>-->
      <!--</li>-->
      ${temString}
  </ol>

    <router-view></router-view>
     </div>

  
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                //todo 这里是data区域
      
            }
        },
        components: {
            //TODO 添加子组件
        },
        computed: {
            //TODO 计算区
        },
        methods: {
            //TODO 方法区
        },
        mounted: function () {

            //TODO 函数执行区域
        }
    }
</script>
<style lang="scss">
 
</style>`
    },
    function (name) {

        return `
        <template>
        <div class="container">

    <!--四级页面区域-->
                  <div class="demo">

<div class="info-board">
   <div class="info-board__items">
      <div class="box color1"></div>
   </div>
   <div class="info-board__items">
  <div class="box color2"></div>
   </div>
   <div class="info-board__items">
  <div class="box color3"></div>
   </div>
   <div class="info-board__items">
  <div class="box color4"></div>
   </div>
</div>
<div class="chart">

</div>

     </div>
</div>
  
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                //todo 这里是data区域
      
            }
        },
        components: {
            //TODO 添加子组件
        },
        computed: {
            //TODO 计算区
        },
        methods: {
            //TODO 方法区
        },
        mounted: function () {

            //TODO 函数执行区域
        }
    }
</script>
<style lang="scss">
 
</style>`
    },
]


exports.routerTempalte = [
    function (names) {
        var im = "";
        var im2 = "";
        if (names.length) {
            for (var i in names) {
                im += "import " + names[i] + " from './" + names[i] + ".js'; \n";
                im2 += names[i] + ",\n";
            }
        }


        if (!names[0]) {
            names[0] = '';
        }

        return `
    import Vue from 'vue';
    import Router from 'vue-router';
    import contend from 'views/index.vue'
    import login from 'views/login.vue'
    import notF from 'views/404.vue'


       
    ${im}
        
    Vue.use(Router);
       
    export default new Router({
            mode:'history',
            routes: [
            {
                path: '/',
                name: 'home',
                redirect:'/${names[0]}',
                component: contend,
                children:[
                ${im2}
            ]

            },
            {
               path: '/login',
               name: 'login',
               component: login
            },
            {
              path:'*',
              name:'404',
              component: notF
            }
        ]
    })
   
        `
    },
    function (mainName, childrens, _childrens) {
        // console.log('Sam级导航');
        // console.log(_childrens);
        var temChild = "";
        let temThirdRdirect = [];
        let ifRedirect = "";
        let ifRedirect2 = ""




        if (childrens.length >= 0) {
            ifRedirect2 = ",redirect:/"+mainName+"/"+childrens[0];
            for (let i in childrens) {
                // 拼接三级导航
                var $CsC = "";
                if (_childrens[childrens[i]] && _childrens[childrens[i]].length > 0) {
                    for (let j in _childrens[childrens[i]]) {
                        $CsC += " {\n      path:\"/" + mainName + "/" + childrens[i] + "/" + _childrens[childrens[i]][j] + "\",\n      component(resolve) {\n        require.ensure(['views/" + mainName + "/" + childrens[i] + "/" + _childrens[childrens[i]][j] + "/index.vue'], () => {\n          resolve(require('views/" + mainName + "/" + childrens[i] + "/" + _childrens[childrens[i]][j] + "/index.vue'));\n        })\n      }\n    }\n";

                        temThirdRdirect.push("/" + mainName + "/" + childrens[i] + "/" + _childrens[childrens[i]][j]); //收集三级链接 用于redirect
                        // console.log($CsC);
                    }
                }

                // console.log(_childrens[i]&&_childrens[childrens[i]].length>0);
                //拼接二级导航
                if (temThirdRdirect[0]) {
                    //如果二级不存在 子集 那就指向自己
                    ifRedirect = ",redirect:'" + temThirdRdirect[0]+"'";
                }

                temChild += " {\n      path:\"/" + mainName + "/" + childrens[i] + "\",\n      component(resolve) {\n        require.ensure(['views/" + mainName + "/" + childrens[i] + "/index.vue'], () => {\n          resolve(require('views/" + mainName + "/" + childrens[i] + "/index.vue'));\n        })\n   }\n" + ifRedirect + ",\n" + "children:[\n" + $CsC + "]\n" + "   }\n";
            }


            // console.log(temChild);


            return `
  export default {
  path:"/${mainName}",
  meta:{requiresAuth:true}
  ${ifRedirect2},
  component(resolve) {
    require.ensure(['views/${mainName}/index.vue'], () => {
      resolve(require('views/${mainName}/index.vue'));
    })
  },
  children:[
    ${temChild}
  ]
} `

        } else {
            return `
  export default {
  path:"/${mainName}",
  meta:{requiresAuth:true},
  component(resolve) {
    require.ensure(['views/${mainName}/index.vue'], () => {
      resolve(require('views/${mainName}/index.vue'));
    })
  }
} `
        }


    }
]