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
        var temUl = "<ul>" + temString + "</ul>";


        return `
        <template>
      <div class="main_container">

        <header class="header">
            <div class="logo"> </div>
            <ul>
               ${temUl}
            </ul>
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
            temString += "<li><router-link to='" + names[i].src + "'>" + names[i].text + "</router-link></li>"
        }

        var temUl = "<ul>" + temString + "</ul>";


        return `
<template>
            <div class="body">

        <div class="left_col ">

    <!--一级导航区域-->
    <div class="left_link">

      <div class="leftBoard">

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
            temString += "<li class='breadcrumb-item'><router-link to='" + names[i].src + "'>" + names[i].text + "</router-link></li>"
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

    <!--二级导航区域-->
         ${name}

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
        for (var i in names) {
            im += "import " + names[i] + " from './" + names[i] + ".js'; \n";
            im2 += names[i]+",\n";
        }


        return `
    import Vue from 'vue';
    import Router from 'vue-router';
    import contend from 'views/index.vue'

       
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

            }
        ]
    })
   
        `
    },
    function (mainName,childrens,_childrens) {
    console.log('Sam级导航');
    console.log(_childrens);
    var temChild = ""



    if(childrens.length>=0){



        for(let i in childrens){

            // 拼接三级导航
            var $CsC ="";
            if(_childrens[childrens[i]]&&_childrens[childrens[i]].length>0) {
                for (let j in _childrens[childrens[i]]) {
                    $CsC += " {\n      path:\"/" + mainName + "/" + childrens[i] + "/" + _childrens[childrens[i]][j] + "\",\n      component(resolve) {\n        require.ensure(['views/" + mainName + "/" + childrens[i] + "/" + _childrens[childrens[i]][j] + "/index.vue'], () => {\n          resolve(require('views/" + mainName + "/" + childrens[i] + "/" + _childrens[childrens[i]][j] + "/index.vue'));\n        })\n      }\n    }\n";

                    // console.log($CsC);
                }
            }

            // console.log(_childrens[i]&&_childrens[childrens[i]].length>0);
           //拼接二级导航
            temChild+=" {\n      path:\"/" + mainName + "/" + childrens[i] + "\",\n      component(resolve) {\n        require.ensure(['views/" + mainName + "/" + childrens[i] + "/index.vue'], () => {\n          resolve(require('views/" + mainName + "/" + childrens[i] + "/index.vue'));\n        })\n " +"children:[\n"+$CsC+"];\n"+
                "     }\n    }\n";
        }


        console.log(temChild);


        return `
  export default {
  path:"/${mainName}",
  meta:{requiresAuth:true},
  redirect:"/${mainName}/${childrens[0]}",
  component(resolve) {
    require.ensure(['views/${mainName}/index.vue'], () => {
      resolve(require('views/${mainName}/index.vue'));
    })
  },
  children:[
    ${temChild}
  ]
} `

    }else {
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