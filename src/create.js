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
        example:``,
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
  {
    "name": "视频",
    "short": "video",
    "children": [
      {
        "name": "搞笑视频",
        "short": "funny",
        "children": [
          {
            "name": "恶搞",
            "short": "sproof"
          },
          {
            "name": "无厘头",
            "short": "wulitou"
          }
        ]
      },
      {
        "name": "恐怖视频",
        "short": "scary",
        "children": [
          {
            "name": "灵异",
            "short": "ghost"
          },
          {
            "name": "血腥",
            "short": "blood"
          }
        ]
      },
      {
        "name": "运动视频",
        "short": "sports",
        "children": [
          {
            "name": "滑雪",
            "short": "skating"
          },
          {
            "name": "冲浪",
            "short": "surfing"
          }
        ]
      },
      {
        "name": "旅游",
        "short": "travel",
        "children": [
          {
            "name": "历史",
            "short": "history"
          },
          {
            "name": "风景",
            "short": "scenery"
          }
        ]
      }
    ]
  },
  {
    "name": "文章",
    "short": "posts",
    "children": [
      {
        "name": "鸡汤",
        "short": "soup",
        "children": [
          {
            "name": "毒鸡汤1",
            "short": "taintSoup1"
          },
          {
            "name": "毒鸡汤2",
            "short": "taintSoup2"
          }
        ]
      },
      {
        "name": "实时杂文",
        "short": "essays",
        "children": [
          {
            "name": "国内新闻",
            "short": "homeNews"
          },
          {
            "name": "国际新闻",
            "short": "inernationalNews"
          },{
            "name": "社会热点",
            "short": "socialFocus"
          }
        ]
      },
      {
        "name": "小说",
        "short": "fiction",
        "children": [
          {
            "name": "历史小说",
            "short": "historyFiction"
          },
          {
            "name": "科幻小说",
            "short": "scienceFiction"
          }
        ]
      },
      {
        "name": "文学",
        "short": "literature",
        "children": [
          {
            "name": "现代散文",
            "short": "third1"
          },
          {
            "name": "诗词",
            "short": "poetry"
          }
        ]
      }
    ]
  },
  {
    "name": "游戏",
    "short": "games",
    "children": [
      {
        "name": "动作游戏",
        "short": "action",
        "children": [
          {
            "name": "战神",
            "short": "godOfWar"
          },
          {
            "name": "全职猎人",
            "short": "hunter"
          },
          {
            "name": "GTA5",
            "short": "GTA5"
          }

        ]
      },
      {
        "name": "射击游戏",
        "short": "shooting",
        "children": [
          {
            "name": "使命召唤",
            "short": "callOfDuty"
          },
          {
            "name": "英雄连",
            "short": "BandOfBrothers"
          },
          {
            "name": "合金装备",
            "short": "MGS"
          }

        ]
      },
      {
        "name": "策略",
        "short": "strategy",
        "children": [
          {
            "name": "红色警戒",
            "short": "redAlert"
          },
          {
            "name": "地球帝国",
            "short": "earchEmpire"
          },
          {
            "name": "魔兽世界",
            "short": "warcraft"
          }

        ]
      }
    ]
  },
  {
    "name": "音乐",
    "short": "music",
    "children": [
      {
        "name": "电音",
        "short": "DM",
        "children": [
          {
            "name": "浩室",
            "short": "house"
          },
          {
            "name": "trance",
            "short": "trance"
          },
          {
            "name": "中国风",
            "short": "china"
          }
        ]
      },
      {
        "name": "民谣",
        "short": "folk",
        "children": [
          {
            "name": "宋冬野",
            "short": "songdongye"
          },
          {
            "name": "陈璧",
            "short": "chenbi"
          },
          {
            "name": "左小祖咒",
            "short": "zxzz"
          }
        ]
      },
      {
        "name": "流行",
        "short": "popMusic",
        "children": [
          {
            "name": "陈奕迅",
            "short": "eason"
          },
          {
            "name": "周杰伦",
            "short": "jay"
          },
          {
            "name": "薛之谦",
            "short": "Joker"
          }
        ]
      },
      {
        "name": "古典",
        "short": "classical",
        "children": [
          {
            "name": "约翰施特劳斯",
            "short": "john"
          },
          {
            "name": "久石让",
            "short": "hansishi"
          },
          {
            "name": "汉斯季默",
            "short": "Hans Zimmer"
          }
        ]
      }
    ]
  },
]
`
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
                        title: 'Please select where to save the project',
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
                          this.log.router = 2;
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
                                // this.log.static = 2;
                            },
                            error: () => {
                                // this.log.static = 3;
                            }
                        });

                        this.log.static = 2;



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

                        // console.log(this.log);

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
              // console.log(val.nav);
          }
        }
    }
});
