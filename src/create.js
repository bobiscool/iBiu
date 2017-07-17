const electron = require('electron');
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;
const win = BrowserWindow.getAllWindows()[0];
const dialog = remote.dialog;
const shell = electron.shell;

const fs = require('fs');
const createPackage = require('../src/services/package');
const createBabel = require('../src/services/babel');
const createApp = require('../src/services/app');
const createIndexHtml = require('../src/services/index-html');
const createMain = require('../src/services/main');
const { createCss }= require('../src/services/css');
const { create_login }= require('../src/services/create_login');
const { create_404 }= require('../src/services/create_404');



const createBus = require('../src/services/bus');

const createGitignore = require('../src/services/gitignore');
const createEditorconfig = require('../src/services/editorconfig');
const { create_router }= require('../src/services/create_router.js');
const { create_build }= require('../src/services/create_build.js');
const { create_config }= require('../src/services/create_config.js');
const { create_static }= require('../src/services/create_static.js');
const { readme }= require('../src/services/readme.js');


let saveDirectory = undefined;

Vue.component('log', {
    template: `
<li>
    <Icon size="14" type="load-c" class="ivu-load-loop" v-show="status === 1" color="#3399ff"></Icon>
    <Icon size="14" type="ios-checkmark-outline" v-show="status === 2" color="#00cc66"></Icon>
    <Icon size="14" type="ios-close-outline" v-show="status === 3" color="#ff5500"></Icon>
    <span> {{ content }}</span>
</li>
`,
    props: ['content', 'status']
});

const app = new Vue({
    el: '#app',
    data: {
        example:`[
            {name:"一级导航1",
             short:"first",
             children:[
                 {name:"二级导航1",
                     short:"first",
                     children:[
                         {name:"三级导航",
                             short:"first"
                         }
                     ]
                 }
             ]
            },
            {name:"一级导航2",
                short:"first",
                children:[
                    {name:"二级导航2",
                        short:"first",
                        children:[
                            {name:"三级导航",
                                short:"first"
                            }
                        ]
                    }
                ]
            },
            {name:"一级导航3",
                short:"first",
                children:[
                    {name:"二级导航3",
                        short:"first",
                        children:[
                            {name:"三级导航",
                                short:"first"
                            }
                        ]
                    }
                ]
            }
        ]`,
        formValidate: {
            iviewVersion: '2.x',
            ui:"elementUI",
            css: [],
            ajax: true,
            jq:true,
            store: [],
            chart: [],
            funs: [],
            name: '',
            version: '1.0.0',
            desc: '',
            git: '',
            navNeed:true,

            nav:`[
            {name:"first1",
             short:"first1",
             children:[
                 {name:"sec1",
                     short:"sec1",
                     children:[
                         {name:"third1",
                             short:"third1"
                         }
                     ]
                 }
             ]
            },
            {name:"first2",
                short:"first2",
                children:[
                    {name:"sec2",
                        short:"sec1",
                        children:[
                            {name:"third1",
                                short:"third1"
                            }
                        ]
                    }
                ]
            },
            {name:"first3",
                short:"first3",
                children:[
                    {name:"sec3",
                        short:"sec1",
                        children:[
                            {name:"third1",
                                short:"third1"
                            }
                        ]
                    }
                ]
            }
        ]`
        },
        ruleValidate: {

        },
        showMore: false,
        status: 'options',    // options,log,next
        log: {    // 1 is doing, 2 is done, 3 is error
            package: 1,
            babel: 1,
            builds: 1,
            configs:1,
            static:1,
            readme:1,
            router: 1,
            app: 1,
            indexHtml: 1,
            main: 1,
            bus: 1,
            gitignore: 1,
            editorconfig: 1,
            login:1,
            css:1,
            notFound:1
        },
        temName:"",
        temShort:""
    },
    computed: {
        titleStatus () {
            let status = 2;
            for (let i in this.log) {
                let item = this.log[i];

                if (i === 'bus' && this.formValidate.store.indexOf('bus') < 0) continue;


                if (item === 1) {
                    status = 1;
                    break;
                }
                if (item === 3) {
                    status = 3;
                    break;
                }
                status = 2;
            }

            return status;
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    saveDirectory = dialog.showOpenDialog(win, {
                        title: '选择工程保存目录',
                        properties: ['openDirectory', 'createDirectory']
                    });

                    if (saveDirectory) {
                        saveDirectory = saveDirectory[0];
                        this.status = 'log';

                        // package.json
                        createPackage({
                            data: this.formValidate,
                            directory: saveDirectory,
                            success: () => {
                                this.log.package = 2;
                            },
                            error: () => {
                                this.log.package = 3;
                            }
                        });

                        // .babelrc
                        createBabel({
                            data: this.formValidate,
                            directory: saveDirectory,
                            success: () => {
                                this.log.babel = 2;
                            },
                            error: () => {
                                this.log.babel = 3;
                            }
                        });


                        // app.vue
                        createApp({
                            data: this.formValidate,
                            directory: saveDirectory,
                            success: () => {
                                this.log.app = 2;
                            },
                            error: () => {
                                this.log.app = 3;
                            }
                        });



                        // index.html
                        createIndexHtml({
                            data: this.formValidate,
                            directory: saveDirectory,
                            success: () => {
                                this.log.indexHtml = 2;
                            },
                            error: () => {
                                this.log.indexHtml = 3;
                            }
                        });


                        // main
                        createMain({
                            data: this.formValidate,
                            directory: saveDirectory,
                            success: () => {
                                this.log.main = 2;
                            },
                            error: () => {
                                this.log.main = 3;
                            }
                        });

                        // bus.js
                        if (this.formValidate.store.indexOf('bus.js') > -1) {
                            createBus({
                                data: this.formValidate,
                                directory: saveDirectory,
                                success: () => {
                                    this.log.bus = 2;
                                },
                                error: () => {
                                    this.log.bus = 3;
                                }
                            });
                        }



                        // .gitignore
                        createGitignore({
                            data: this.formValidate,
                            directory: saveDirectory,
                            success: () => {
                                this.log.gitignore = 2;
                            },
                            error: () => {
                                this.log.gitignore = 3;
                            }
                        });

                        // .editorconfig
                        createEditorconfig({
                            data: this.formValidate,
                            directory: saveDirectory,
                            success: () => {
                                this.log.editorconfig = 2;
                            },
                            error: () => {
                                this.log.editorconfig = 3;
                            }
                        });


                        // 我的创建目录以及路由
                      if(this.formValidate.navNeed&&this.formValidate.nav){
                          create_router(saveDirectory,this.formValidate.nav);
                      }
                      // 创建 配置项
                        create_build(
                            {
                                directory: saveDirectory,
                                success: () => {
                                    this.log.builds = 2;

                                },
                                error: () => {
                                    this.log.builds = 3;

                                }
                            }
                        );
                      // 创建
                        create_config(
                            {
                                directory: saveDirectory,
                                success: () => {
                                    this.log.configs = 2;
                                },
                                error: () => {
                                    this.log.configs = 3;
                                }
                            }
                        );
                        //创建static
                        create_static({
                            directory: saveDirectory,
                            success: () => {
                                this.log.static = 2;
                            },
                            error: () => {
                                this.log.static = 3;
                            }
                        });

                        //创建css
                        createCss(
                            {
                                data: this.formValidate,
                                directory: saveDirectory,
                                success: () => {
                                    this.log.css = 2;
                                },
                                error: () => {
                                    this.log.css = 3;
                                }
                            }
                        );
                       //readme
                        readme({
                            directory: saveDirectory,
                            success: () => {
                                this.log.readme = 2;
                            },
                            error: () => {
                                this.log.readme = 3;
                            }
                        });
                        //创建 login
                        create_login({
                            directory: saveDirectory,
                            success: () => {
                                this.log.login = 2;
                            },
                            error: () => {
                                this.log.login = 3;
                            }
                        });
                        //创建 404
                        create_404({
                            directory: saveDirectory,
                            success: () => {
                                this.log.notFound = 2;
                            },
                            error: () => {
                                this.log.notFound = 3;
                            }
                        })

                        console.log(this.log);

                    }
                }
            });
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        handleShowMore () {
            this.showMore = true;
        },
        handleNext () {
            this.status = 'next';
        },
        handleOpenDirectory () {
            shell.showItemInFolder(saveDirectory);
        },
        handleOpenFile (path) {
            shell.openItem(`${saveDirectory}/${path}`);
        },
        handleOpenLink (url) {
            shell.openExternal(url);
        },
        handleBackHome () {
            window.location.href = 'index.html';
        },
        addDlist:function () {

        }
        
    },
    watch:{
        formValidate:{
          deep:true,
          handler:function (val) {
              console.log(val.nav);
          }
        }
    }
});
