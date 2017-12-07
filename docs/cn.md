
## iBiu
### 一步到位的Vue脚手架工具
![](./assets/img/ibiuFor.png)

#### [windows 64位版本软件下载](https://link.juejin.im/?target=https%3A%2F%2Fgit.oschina.net%2Fkarl-vicent%2FiBiu%2Fraw%2Fmaster%2Fwin%2FiBiu%2520Setup%25201.0.0.exe)
#### [MAC 软件下载](https://link.juejin.im/?target=https%3A%2F%2Fgit.oschina.net%2Fkarl-vicent%2FiBiu%2Fraw%2Fmaster%2Fmacos%2FiBiu-1.0.0.dmg)


> iBiu  was developed based on [iView-cli](https://github.com/iview/iview-cli) 
> <br>`I'd like to thank iView-Cli's developers very much`


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

### 使用方法

1. 点击新建项目<br>
   ![](./assets/github/2017-07-21_11-20-39.png)
2. 选择你与要配置的库  
3. 粘贴上你需要创建目录JSON[格式请参照此格式来](https://github.com/bobiscool/iBiu/blob/master/assets/github/formater.json)<br>
   ![](./assets/github/2017-07-21_11-23-54.png)
4. 点击创建工程 
5. 创建完毕后打开目录<br>
   ![](./assets/github/2017-07-21_11-26-29.png)<br>
   ![](./assets/github/games_js_和_src.png)
   - 执行 `npm install`
   - 执行 `npm run dev`
6. 访问 `http://localhost:8080`<br>
   ![](./assets/github/2017-07-18_23-01-10.png)<br>   
   ![](./assets/github/2017-07-18_22-58-58.png)   
   
   

