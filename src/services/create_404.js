/**
 * Created by mac WuYiPing on 17/7/16.
 */
const writeFile = require('./write-file')

exports.create_404 = function (opts) {

    var notF = `

<template>
<div class="notFound">
      <span>页面未找到=_=</span>
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
        fileName: '404.vue',
        data: notF,
        codeType:"html",
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });

}