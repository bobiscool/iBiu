
        <template>
    <div class="content">
    
    <!--一级导航区域-->
    <div class="topTitle"><ul><li><router-link to='short1/short2'>二级导航2</router-link></li><li><router-link to='short1/short3'>二级导航3</router-link></li><li><router-link to='short1/short4'>二级导航4</router-link></li></ul></div>

    
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
