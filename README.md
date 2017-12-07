
## iBiu
### One-stop Vue scaffolding tool
![](./assets/img/ibiuFor.png)

#### [Windows x64](https://link.juejin.im/?target=https%3A%2F%2Fgit.oschina.net%2Fkarl-vicent%2FiBiu%2Fraw%2Fmaster%2Fwin%2FiBiu%2520Setup%25201.0.0.exe)
#### [MAC](https://link.juejin.im/?target=https%3A%2F%2Fgit.oschina.net%2Fkarl-vicent%2FiBiu%2Fraw%2Fmaster%2Fmacos%2FiBiu-1.0.0.dmg)


> iBiu  was developed based on [iView-cli](https://github.com/iview/iview-cli) 
> <br>`I'd like to thank iView-Cli's developers very much`


base on

- [Vue-cli](https://github.com/vuejs/vue-cli)
- [iView-cli](https://github.com/iview/iview-cli) 
- [Node.js](https://nodejs.org/en/)
- [electron](https://electron.atom.io/)

### Achieve function
#### Common scaffolding needs
   - Create a project directory structure
   - Create configuration items (including webpack configuration items, gitignore, etc.)
   - According to the settings to create packgejson

#### Pain point have been solved
   - Create  page directories based on the JSON array provided by the user, and the structure is consistent with the JSON
   - Create various pages to their respective directories based on the JSON array provided by the user.
   - Create a route configuration item based on the user-supplied json array and register the page with the route.

> Means: When faced with a larger vue project, you no longer have to go to register router one by one painfully! ! !

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
   
   

