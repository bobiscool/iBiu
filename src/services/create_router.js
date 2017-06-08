/**
 * Created by mac WuYiPing on 17/6/6.
 */
const writeFile = require('./write-file');
const fs = require('fs');
const path = require('path');
var a =[
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
];
var layer =0;
var paths = []


var b = {
    "一级导航1_short1":{
        "二级导航2_short2":{
            "三级导航2_short2":{
                "三级导航3_short3":{
                    "四级导航3_short3":{},
                    "四级导航4_short4":{}
                },
                "三级导航4_short4":{}
            },
            "三级导航3_short3":{},
            "三级导航4_short4":{}
        },
        "二级导航3_short3":{
            "三级导航2_short2":{},
            "三级导航3_short3":{},
            "三级导航4_short4":{}
        },
        "二级导航4_short4":{
            "三级导航2_short2":{},
            "三级导航3_short3":{}
        }
    },
    "一级导航2_short2":{
        "二级导航2_short2":{
            "三级导航2_short2":{},
            "三级导航3_short3":{},
            "三级导航4_short4":{}
        },
        "二级导航3_short3":{
            "三级导航2_short2":{},
            "三级导航3_short3":{},
            "三级导航4_short4":{}
        },
        "二级导航4_short4":{}
    },
    "一级导航3_short3":{
        "二级导航2_short2":{},
        "二级导航3_short3":{},
        "二级导航4_short4":{}
    },
    "一级导航4_short4":{
        "二级导航2_short2":{},
        "二级导航3_short3":{},
        "二级导航4_short4":{}
    }
}
// 拿到数据 创建目录
/*
* 首先拿到数据
* 然后 遍历 拿到一级 二级
* 有点像遍历二叉树 不过这是树结构
* */

function wrapViews(a) {
    return {
        "views":a
    }
}

// var paths = {}
// function generatePath(Json) {
//     if(Json&&Json instanceof Array){
//         Json.forEach(function (p1, p2, p3) {
//             paths[p2+'path']=[];
//             paths[p2+'path'].push(p1.name);
//         })
//     }
// }

function getChildren(a) {
  return Object.keys(a)
}

function getDeep(a) {
    var b = a.match(/views(\/[\u4e00-\u9fa5_a-zA-Z0-9]+)+/g)

    // var b = a.match(/(?<=(views))\/\w+/)
    if(b&&b[0]) {
        var c = b[0].split('/');
        c.shift();
        return c;
    }

    return [];
}

var template='aaa'


// for(var i in )

function generateDir(data,pre_dir) {
    // layer ++;
    paths.push(pre_dir);
    console.log(getDeep(pre_dir).length);
    for(var i in data){
        if(data.hasOwnProperty(i)){
            // console.log(i)
           if(!fs.existsSync(pre_dir+'/'+i)){
               if(pre_dir){
                   fs.mkdirSync(pre_dir+'/'+i);
                   fs.writeFile(`${pre_dir}/${i}/index.vue`,template,function (err) {
                   if(err){ console.log('error')}
                   })

               }else {
                   fs.mkdirSync(i);
                   fs.writeFile(`${i}/index.vue`,data,function (err) {
                       if(err){ console.log('error')}
                   })
               }
           }
           if(data[i]!=={}){
               generateDir(data[i],pre_dir+'/'+i);
           }
        }
        console.log(getChildren(data[i]))
    }
}

// generatePath(a);
// console.log(paths);

generateDir(wrapViews(b),__dirname);

// 下一步 根据路径选择模板
/*
*拿到 路径 然后将views 前面的全部过滤
* / 拆成 数组 然后找到同级路由
 */




console.log(getDeep('/Users/mac/Downloads/iview-cli-2.0/src/services/views/一级导航1_short1/ss/ss/ssdff/sfdsg/dfg/dfg'));
// console.log(paths);

console.log(__dirname);