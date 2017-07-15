/**
 * Created by mac WuYiPing on 17/6/8.
 */

const writeFile = require('./write-file')


exports.createCss = function (opts) {
    let file= `
*, :after, :before {
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

ol {
      margin-top: 0;
}


html,body {
    margin: 0;
    padding:0;
    width: 100%;
    height: 100%;
}

.main_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh
}

.header {
    width: 100%;
    height: 55px;
    background-color: #fff;
    border-bottom: 1px solid #cfd8dc;
    display: flex;
    flex-direction: row;
}
.header ul {
  display: flex;
  flex-direction: row;
}

.logo {
    display: inline-block;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /*background: #C1C9C8;*/
}

.logo-items {
  display: inline-block;
  width: 26px;
  height: 30px;
  background: url("http://7o50ww.com1.z0.glb.clouddn.com/ibiu.svg");
  background-size: cover;
}

.title {
  font-size: 20px;
  font-weight: bold;
}
.title span:first-child{
  color: #00AAFF;
  margin-left: 10px;
}

.title span:last-child{
  color: #000;
}

.header li {
   margin-left: 40px;

}

.header li:first-child {
  margin-left: 0;
}

.header a {
   color: rgba(0, 0, 0, 0.3);
}

.user-area {
  position: absolute;
  right: 30px;
  width: 200px;
  height:55px;
  line-height: 55px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /*border-radius:20px;*/
}

.favico {
  display: inline-block;;
  background: #263238;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: url("http://7o50ww.com1.z0.glb.clouddn.com/emoji-4.svg");
  background-size: cover;
}

.name {
  display: inline-block;
margin-left: 5px;
line-height: 20px;
   color: rgba(0, 0, 0, 0.3);
}

.name i {
  display:inline-block;
     color: rgba(0, 0, 0, 0.3);
  transform: translate(2px,5px);
  width: 14px;
  height: 14px;
  background: url("http://7o50ww.com1.z0.glb.clouddn.com/more.svg") ;
  background-size: cover;
}

.bell {
  display:inline-block;
     color: rgba(0, 0, 0, 0.3);
  width: 16px;
  height: 16px;
  margin-right: 15px;
  background: url("http://7o50ww.com1.z0.glb.clouddn.com/bell.svg") ;
  background-size: cover;
}

.detail {
  display:inline-block;
     color: rgba(0, 0, 0, 0.3);
  width: 16px;
  height: 16px;
  margin-right: 10px;
  background: url("http://7o50ww.com1.z0.glb.clouddn.com/detail.svg") ;
  background-size: cover;
}


.alarm {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: red;
  font-size: 12px;
  transform: translate(10px,-30px);
  line-height: 16px;
  color: #fff;
  border-radius: 5px;
}












.body {
  /*margin-top: 55px;*/
  width: 100%;
  height: calc(100% - 55px);
  position: relative;
 display: flex;
    flex-direction: row;
}

.left_col {
    flex:0 0 200px;
    height: 100%;
    padding: 0;
    overflow: hidden;
    color: #fff;
    background: #263238;
}



.left_link {
    width:100%;

}

.left_link ul {
  padding: 0;
}




.left_link li {
    display: block;
    padding: 0.4rem 2.8rem;
    color: #fff;
    text-decoration: none;
    background: transparent;
  font-weight: lighter;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
}

.left_link i {
   display: inline-block;
   width: 15px;
   height: 15px;
   background: url("http://7o50ww.com1.z0.glb.clouddn.com/side1-01%20%281%29.svg");
   background-size: cover;
   margin-right: 5px;
}

.left_link li:hover {
  background: #20a8d8;
}

.leftBoard {
  width: 100%;
  height: 50px;
  background: #304047;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
}

.leftBoard .icon {
  display: inline-block;
    color: #00AAFF;
  width: 15px;
  height: 15px;
  background: url("http://7o50ww.com1.z0.glb.clouddn.com/sidebar%20%281%29.svg");
  background-size: cover;

}

.leftBoard .sideTitle {
  margin-left: 10px;
  font-size: 16px;
}

.left_link .info {
  display: inline-block;
  text-align: center;
  margin-left: 10px;
  width: 40px;
  height: 20px;
  background: #00AAFF;
  line-height: 20px;
  border-radius: 5px;
}

.left_link a {
    color: white;
}


.main {
  /*margin-left: 200px;*/
  flex: 1;
min-width: 0;

}
.breadcrumb {
  position: relative;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid #cfd8dc;
      padding: 0.75rem 1rem;
margin-bottom: 1rem;
list-style: none;
background-color: #fff;
color: #666;
 display: flex;
 flex-direction: row;
}


.main .container {
      padding: 0 30px;
}

.breadcrumb li {
  margin-left: 10px;
  font-size: 14px;
}

.breadcrumb a {
  color: #666;
}
.breadcrumb .breadcrumb-item:first-of-type a {
  color: #00aaff;
}
`;
    writeFile({
        directory: `${opts.directory}/static/css`,
        fileName:'main.css',
        data: file,
        codeType:"css",
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });
}




