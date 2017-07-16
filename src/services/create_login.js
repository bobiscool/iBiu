/**
 * Created by mac WuYiPing on 17/7/16.
 */

const writeFile = require('./write-file')

exports.create_login = function (opts) {

    var login = `

<template>
<div class="login">
<div class="login-form">
  <div class="login-logo"></div>
  <input type="text" placeholder="name"/>
   <input type="password" placeholder="password"/>
      <button>login</button>
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


</style>
`;

    writeFile({
        directory: opts.directory + "/src/views",
        fileName: 'login.vue',
        data: login,
        codeType:"html",
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });

}