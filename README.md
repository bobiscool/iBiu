## iBiu~


> iBiu  was developed based on [iView-cli](https://github.com/iview/iview-cli) 
> <br>`I'd like to thank iView-Cli's developers very much`
> 


### 一步到位的Vue脚手架工具
主要基于

- [Vue-cli](https://github.com/vuejs/vue-cli)
- [iView-cli](https://github.com/iview/iview-cli) 
- [Node.js](https://nodejs.org/en/)
- [electron](https://electron.atom.io/)

### 实现功能
#### 常见的脚手架需求
   - 创建项目目录结构
   - 创建配置项（包括 webpack 的配置项,gitignore等）
   - 根据设置创建packgejson
    
#### 痛点需求解决
   - 根据用户提供的json数组**创建页面目录,结构与json上的一致**
   - 根据用户提供的json数组**创建各个页面到各自对应的目录**
   - 根据用户提供的json数组创建**路由配置项，并将页面注册到路由上**

> 意思是:当遇到比较大的vue项目时，你再也不用痛苦的一个一个去注册路由了！！！

