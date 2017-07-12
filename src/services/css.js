/**
 * Created by mac WuYiPing on 17/6/8.
 */

const writeFile = require('./write-file')


exports.createCss = function (opts) {
    let file= `
 html,body {
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  font-family: "Microsoft YaHei";
  //overflow-x: hidden;
  color: #fff;
}


input, button, submit { border:none; }

  input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    background: #f2f2f2;
  }
  input::-moz-placeholder { /* Firefox 19+ */
    background: #f2f2f2;
  }
  input:-ms-input-placeholder { /* IE 10+ */
    background: #f2f2f2;
  }
  input:-moz-placeholder { /* Firefox 18- */
    background: #f2f2f2;
  }


input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}


a {
  text-decoration: none;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}


.content {
   width: 100%;
  height: 100%;
  min-width: 1238px;
  min-height: 800px;
  position: absolute;
  overflow: hidden;
  .topTitle {
     width:100%;
     height:80px;
     position: absolute;
     top:0;
     left:0;
     background:#2B879E;
  }
  
  .leftSide {
     width:80px;
     height:calc(100% - 80px)
     top:80px;
     left:0;
     background:#3EC9A7;
  }
  .rightSide {
       width:calc(100% - 80px);
     height:calc(100% - 80px)
     top:80px;
     left:80px;
     background:#98D9B6;
     
     .tabArea {
      width:100%;
      height:80px;
      
      ul{
       width:100%;
       height:100%;
       background:#98D9B6;
       li {
        float:left;
       }
      }
      
      .center_content {
        width:100%;
        height:calc(100% - 80px)
      }
     
     }

  }
}`;
    writeFile({
        directory: `${opts.directory}/static/css`,
        fileName:'main.css',
        data: file,
        success () {
            opts.success();
        },
        error () {
            opts.error();
        }
    });
}




