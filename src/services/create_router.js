/**
 * Created by mac WuYiPing on 17/6/6.
 */
const fs = require('fs');
const path = require('path');
const os = require('os')
const beauty = require('js-beautify').js_beautify;
const { template,routerTempalte } = require("./vue_template_A.js");
var paths = []


// console.log(template);

// 拿到数据 创建目录
/*
* 首先拿到数据
* 然后 遍历 拿到一级 二级
* 有点像遍历二叉树 不过这是树结构
* */

/* 拿到的数据不是json 所以需要报一个var c = 然后来执行*/


/*把json数据转换成我想要的数据*/
function gernerateData(nav) {
    var tem = {};
    nav.forEach(function (val) {
        // console.log(val);
      if(val.children&&val.children.length>0){
          tem[val.name+"_"+val.short]=gernerateData(val.children)
      }else {
          tem[val.name+"_"+val.short]=""
      }
    })

    return tem;
}



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
    // console.log(Object.keys(a));
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


function generSrcName(name) {
    var b = name.match(/views(\/[\u4e00-\u9fa5_a-zA-Z0-9]+)+/g)
    var c=[];
    var posiPos='';
    // var b = a.match(/(?<=(views))\/\w+/)
    if(b&&b[0]) {
         c = b[0].split('/');
        c.shift();
    }

    if(c.length>0){
        posiPos=c.join('/')
    }else {
        posiPos=''
    }

    return posiPos;
}

/*生成template里面的名称 以及src用的*/
function splitShortAll(names,src) {
    var temSrc = generSrcName(src);
    // console.log(temSrc);
    var tem2 = [];
    for(var i in names) {
        tem2.push({text:names[i].split('_')[0],src:temSrc+'/'+names[i].split('_')[1]})
    }
    return tem2;
}




function splitShort(name) {

        return {name:name.split('_')[0],short:name.split('_')[1]}

}

function getShort(name) {
    return name.split('_')[1];
}
/*生成src*/

function getChildrenShort(data){
    var a = getChildren(data);
    var b =[];
    a.forEach(function (val) {
        b.push(getShort(val));
    })

    return b;
}


// var template='aaa'


// for(var i in )

function generateDir(data,pre_dir) {
    // layer ++;
    paths.push(pre_dir);
    // console.log(data,pre_dir);
    for(var i in data){
        if(data.hasOwnProperty(i)){
            // console.log(template[getDeep(pre_dir).length](getChildren(data[i])));
            var tem = splitShort(i);
            if(tem.name=="views"){
                tem.short = "views";
            }
// console.log(tem);

           if(!fs.existsSync(pre_dir+'/'+tem.short)){
               if(pre_dir){

                   // console.log(pre_dir);
                   fs.mkdirSync(pre_dir+'/'+tem.short);//当前目录
                   if(tem.short!=="views"){
                       fs.writeFile(`${pre_dir}/${tem.short}/index.vue`,
                           template[getDeep(pre_dir).length+1]
                           (splitShortAll(getChildren(data[i]),pre_dir+'/'+tem.short))
                           ,function (err) {
                               if(err){ console.log('error')}//生成文件
                           })
                   }else{
                       fs.writeFile(`${pre_dir}/${tem.short}/index.vue`,
                           template[getDeep(pre_dir).length]
                           (splitShortAll(getChildren(data[i]),pre_dir+'/'+tem.short))
                           ,function (err) {
                               if(err){ console.log('error')}//生成文件
                           })
                   }


               }else {
                   // console.log("没有这个目录 创建目录");
                   // console.log(tem.short);
                   fs.mkdirSync(tem.short);
                   fs.writeFile(`${tem.short}/index.vue`,template[getDeep(pre_dir).length](getChildren(data[i])),function (err) {
                       if(err){ console.log('error')}
                   })
               }
           }
           if(data[i]!=={}){
               generateDir(data[i],pre_dir+'/'+tem.short);
           }
        }
        // console.log(getChildren(data[i]))
    }
}

// generatePath(a);
// console.log(paths);
// todo
// generateDir(wrapViews(b),__dirname);

// 下一步 根据路径选择模板
/*
*拿到 路径 然后将views 前面的全部过滤
* / 拆成 数组 然后找到同级路由
 */



//
// console.log(getDeep('/Users/mac/Downloads/iview-cli-2.0/src/services/views/一级导航1_short1/ss/ss/ssdff/sfdsg/dfg/dfg'));
// console.log(paths);

// console.log(__dirname);

/*根据数据 创建js*/

/*todo  首先是创建 文件夹子router
*
*
* */



function generateRoutejs(location,data) {
    var names =getChildren(data);
    var namesShort = [];
    names.forEach(function (val) {
        namesShort.push(getShort(val));
    });
    // console.log('data');
    // console.log(data);
    fs.mkdir(`${location}`+'/router');
    fs.writeFile(`${location}/router/index.js`,beauty(routerTempalte[0](namesShort)));
    for(var i in namesShort){
        // 产生三级
        let _names = getChildren(data[names[i]]);
        let __CsC = {};
        _names.forEach(function (val) {
            __CsC[getShort(val)] = getChildrenShort(data[names[i]][val])
        });


        // console.log(__CsC);

        fs.writeFile(`${location}/router/${namesShort[i]}.js`,beauty(routerTempalte[1](namesShort[i],getChildrenShort(data[names[i]]),__CsC)));
    }
}


// generateRoutejs(b);


/*最后暴露一个函数*/
exports.create_router = function (location,navData) {
    var _location = location;
    if(os.type().indexOf('Windows')!=-1){
        _location = location.split('\\').join('/');
    }



    var c=`var data=${navData}
        var geData =gernerateData(data);
       //console.log(geData);
        
         generateDir(wrapViews(geData),"${_location}/src");
         generateRoutejs("${_location}/src",geData)
        console.log("执行")
        `;

    eval(c);
    // console.log(c);
}

