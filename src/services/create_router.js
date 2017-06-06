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



var b = {
    "一级导航1_short1":{
        "二级导航2_short2":{
            "三级导航2_short2":{
                "三级导航3_short3":{},
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
var paths = {}
function generatePath(Json) {
    if(Json&&Json instanceof Array){
        Json.forEach(function (p1, p2, p3) {
            paths[p2+'path']=[];
            paths[p2+'path'].push(p1.name);
        })
    }
}

function getChildren(val) {
    if(val.children&&val.children.length!=0){

    }
}


// for(var i in )

function generateDir(data,pre_dir) {
    for(var i in data){
        if(data.hasOwnProperty(i)){
            // console.log(i)
           if(!fs.existsSync(pre_dir+'/'+i)){
               if(pre_dir){
                   fs.mkdirSync(pre_dir+'/'+i);
               }else {
                   fs.mkdirSync(i);
               }
           }
           if(data[i]!=={}){
               generateDir(data[i],pre_dir+'/'+i);
           }
        }
    }
}

// generatePath(a);
// console.log(paths);

generateDir(b,__dirname);

console.log(__dirname);