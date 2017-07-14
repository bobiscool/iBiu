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


.logo {
    display: inline-block;
    width: 200px;
    height: 100%;
    background: #00AAFF;
}

.header li {
    float: left;
    list-style: none;
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
    padding: 0.75rem 1rem;
    color: #fff;
    text-decoration: none;
    background: transparent;
}

.left_link li:hover {
  background: #20a8d8;
}

.leftBoard {
  width: 100%;
  height: 50px;
  background: #304047;
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
}


.main .container {
      padding: 0 30px;
}`;
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




