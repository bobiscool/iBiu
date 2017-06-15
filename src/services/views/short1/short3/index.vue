
        <template>
    <div class="leftSide">
    
    <!--二级导航区域-->
    <ul><li><router-link to='short1/short3/short2'>三级导航2</router-link></li><li><router-link to='short1/short3/short3'>三级导航3</router-link></li><li><router-link to='short1/short3/short4'>三级导航4</router-link></li></ul>
     </div>

<router-view></router-view>
  
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
