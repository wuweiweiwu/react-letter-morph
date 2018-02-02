!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),i=n(2),s=r(i),l=n(3),c=n(4),f=r(c),p=document.getElementById("app");s.default.render(a.default.createElement(l.AppContainer,null,a.default.createElement(f.default,null)),p)},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("react-hot-loader")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(5),p=r(f),u=n(13),d=r(u);n(18);var m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e="https://github.com/wuweiweiwu/react-letter-morph";return c.default.createElement("div",null,c.default.createElement("section",{className:d.default["page-header"]},c.default.createElement("h1",{className:d.default["project-name"]},"React Letter Morph"),c.default.createElement("h2",{className:d.default["project-tagline"]},"React component to display letter morphs like the Google I/O 2016"," ",c.default.createElement("a",{href:"https://events.google.com/io2016/"},"website"))),c.default.createElement("section",{className:d.default["main-content"]},c.default.createElement("h3",null,"Demo"),c.default.createElement("div",{style:{height:"200px",textAlign:"center"}},c.default.createElement(p.default,{words:["19:35:02","29:85:13","37:35:04","44:99:05","19:35:06"],height:300,width:1e3,colors:["#ff0000","#53c93f","#5c89ff","#cd7dff"]})),c.default.createElement("a",{href:e},"Documentation on Github"),c.default.createElement("br",null),c.default.createElement("a",{href:"storybook/index.html"},"More examples on Storybook"),c.default.createElement("footer",{className:d.default["site-footer"]},c.default.createElement("span",{className:d.default["site-footer-owner"]},c.default.createElement("a",{href:e},"React Letter Morph")," is maintained by"," ",c.default.createElement("a",{href:"https://github.com/wuweiweiwu"},"Wei-Wei Wu"),"."),c.default.createElement("span",{className:d.default["site-footer-credits"]},"This page was generated by"," ",c.default.createElement("a",{href:"https://pages.github.com"},"GitHub Pages")," using the"," ",c.default.createElement("a",{href:"https://github.com/jasonlong/cayman-theme"},"Cayman theme")," ","by ",c.default.createElement("a",{href:"https://twitter.com/jasonlong"},"Jason Long"),"."))),c.default.createElement("a",{href:e},c.default.createElement("img",{style:{position:"absolute",top:0,right:0,border:0},src:"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"})))}}]),t}(l.Component);t.default=m},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),p=n(7),u=r(p),d=n(8),m=n(9),h=r(m),_=n(10),b=r(_),g=n(11),v={position:"relative"},y=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.transitionTime=2,n.interpolationPoint={percentage:0},n.state={offset:0,paths:[],pathIndex:0,animation:void 0},n.loop=n.loop.bind(n),n.tweenPaths=n.tweenPaths.bind(n),n.interpolatePaths=n.interpolatePaths.bind(n),n.getPaths=n.getPaths.bind(n),n.drawPathToCanvas=n.drawPathToCanvas.bind(n),n.getColorSegment=n.getColorSegment.bind(n),n.resetAnimation=n.resetAnimation.bind(n),n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.resetAnimation()}},{key:"componentWillReceiveProps",value:function(e){b.default.isEqual(this.props,e)||this.resetAnimation()}},{key:"getPaths",value:function(){var e=this.props,t=e.words,r=e.fontUrl,o=e.fontSize,a=e.steps;return new Promise(function(e,i){n(12).load(r,function(n,r){if(n)i(new Error("Failed to load font: "+n));else{var s=0;t.forEach(function(e){var t=r.getPath(e,0,0,o),n=t.getBoundingBox().y2-t.getBoundingBox().y1;s=Math.max(s,n)});var l=t.map(function(e){var t=r.getPath(e,0,s,o).toPathData(2),n=(0,g.getSvgPath)();n.setAttribute("d",t);var i=n.getTotalLength(),l=Array.from(Array(a).keys()).map(function(e){return n.getPointAtLength(i*e/a)});return{length:i,path:l}});e(l)}})})}},{key:"getColorSegment",value:function(e){var t=this.props,n=t.colors,r=t.steps,o=this.state.offset,a=e/r+o;return a>1&&(a-=1),n[Math.floor(a*n.length)]}},{key:"loop",value:function(){if(this.canvas){var e=this.state,t=e.paths,n=e.pathIndex,r=e.offset,o=this.props.speed;if(this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height),0!==t.length){var a=r+o/t[n].length;a=a>=1?0:a,this.setState({offset:a},this.drawPathToCanvas),this.state.offset=a,this.drawPathToCanvas()}requestAnimationFrame(this.loop)}}},{key:"resetAnimation",value:function(){var e=this,t=this.props.lineWidth;this.getPaths().then(function(n){e.setState({paths:n,pathIndex:0},function(){if(e.canvas){var n=e.canvas.getContext("2d");n.lineCap="round",n.lineWidth=t,e.state.animation&&e.state.animation.kill(),e.tweenPaths(),e.loop()}})}).catch(function(e){console.error("Failed to get paths: "+e)})}},{key:"tweenPaths",value:function(){var e=this;this.setState(function(t,n){return{animation:d.TweenLite.to(e.interpolationPoint,e.transitionTime,{percentage:1,ease:d.Power2.easeInOut,delay:n.period,onComplete:function(){e.interpolationPoint.percentage=0,e.setState(function(e){return{pathIndex:e.paths.length?(e.pathIndex+1)%e.paths.length:e.pathIndex}},e.tweenPaths)}})}})}},{key:"drawPathToCanvas",value:function(){var e=this.interpolatePaths(),t=this.getColorSegment(0),n=this.canvas.getContext("2d");n.strokeStyle=t,n.beginPath();for(var r=0;r<e.length-1;r+=1)n.moveTo(e[r].x,e[r].y),(!r||(0,g.distance)(e[r],e[r+1])<=2*(0,g.distance)(e[r],e[r-1]))&&(n.lineTo(e[r+1].x,e[r+1].y),(t=this.getColorSegment(r))!==n.strokeStyle&&(n.stroke(),n.beginPath(),n.strokeStyle=t));n.stroke()}},{key:"interpolatePaths",value:function(){var e=this,t=this.state,n=t.paths,r=t.pathIndex,o=this.props.steps,a=n[r%n.length].path,i=n[(r+1)%n.length].path;return Array.from(Array(o).keys()).map(function(t){return{x:a[t].x+(i[t].x-a[t].x)*e.interpolationPoint.percentage,y:a[t].y+(i[t].y-a[t].y)*e.interpolationPoint.percentage}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.height,r=t.width,o=t.style;return f.default.createElement("canvas",{ref:function(t){e.canvas=t},height:n,width:r,style:s({},v,{style:o})})}}]),t}(c.Component);y.propTypes={height:u.default.number,width:u.default.number,words:u.default.arrayOf(u.default.string).isRequired,colors:u.default.arrayOf(u.default.string),fontUrl:u.default.string,fontSize:u.default.number,lineWidth:u.default.number,period:u.default.number,speed:u.default.number,style:h.default,steps:u.default.number},y.defaultProps={height:200,width:500,colors:[],fontUrl:"https://fonts.gstatic.com/s/pacifico/v9/yunJt0R8tCvMyj_V4xSjafesZW2xOQ-xsNqO47m55DA.woff",fontSize:200,lineWidth:2,period:2,speed:2,style:v,steps:500},t.default=y},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("gsap")},function(e,t){e.exports=require("react-style-proptype")},function(e,t){e.exports=require("lodash")},function(e,t,n){"use strict";function r(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function o(){return document.createElementNS("http://www.w3.org/2000/svg","path")}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=r,t.getSvgPath=o},function(e,t){e.exports=require("opentype.js")},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insertAt:"top",hmr:!0};o.transform=void 0;n(16)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(15)(!1),t.push([e.i,'body {\n  padding: 0;\n  margin: 0; }\n\n.rst__btn {\n  display: inline-block;\n  margin-bottom: 1rem;\n  color: rgba(255, 255, 255, 0.7);\n  background-color: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 0.3rem;\n  -webkit-transition: color 0.2s, background-color 0.2s, border-color 0.2s;\n  transition: color 0.2s, background-color 0.2s, border-color 0.2s; }\n\n.rst__btn + .rst__btn {\n  margin-left: 1rem; }\n\n.rst__btn:hover {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.3); }\n\n@media screen and (min-width: 64em) {\n  .rst__btn {\n    padding: 0.75rem 1rem; } }\n\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .rst__btn {\n    padding: 0.6rem 0.9rem;\n    font-size: 0.9rem; } }\n\n@media screen and (max-width: 42em) {\n  .rst__btn {\n    display: block;\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 0.9rem; }\n  .rst__btn + .rst__btn {\n    margin-top: 1rem;\n    margin-left: 0; } }\n\n.rst__page-header {\n  color: #fff;\n  text-align: center;\n  background-color: #159957;\n  background-image: linear-gradient(120deg, #155799, #159957); }\n\n@media screen and (min-width: 64em) {\n  .rst__page-header {\n    padding: 5rem 6rem; } }\n\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .rst__page-header {\n    padding: 3rem 4rem; } }\n\n@media screen and (max-width: 42em) {\n  .rst__page-header {\n    padding: 2rem 1rem; } }\n\n.rst__project-name {\n  margin-top: 0;\n  margin-bottom: 0.1rem; }\n\n@media screen and (min-width: 64em) {\n  .rst__project-name {\n    font-size: 3.25rem; } }\n\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .rst__project-name {\n    font-size: 2.25rem; } }\n\n@media screen and (max-width: 42em) {\n  .rst__project-name {\n    font-size: 1.75rem; } }\n\n.rst__project-tagline {\n  margin-bottom: 2rem;\n  font-weight: normal;\n  opacity: 0.7; }\n\n@media screen and (min-width: 64em) {\n  .rst__project-tagline {\n    font-size: 1.25rem; } }\n\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .rst__project-tagline {\n    font-size: 1.15rem; } }\n\n@media screen and (max-width: 42em) {\n  .rst__project-tagline {\n    font-size: 1rem; } }\n\n@media screen and (min-width: 64em) {\n  .rst__main-content {\n    /* max-width: 64rem; */\n    padding: 2rem 6rem;\n    /* margin: 0 auto; */\n    font-size: 1.1rem; } }\n\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .rst__main-content {\n    padding: 2rem 4rem;\n    font-size: 1.1rem; } }\n\n@media screen and (max-width: 42em) {\n  .rst__main-content {\n    padding: 2rem 1rem;\n    font-size: 1rem; } }\n\n.rst__site-footer {\n  padding-top: 2rem;\n  margin-top: 2rem;\n  border-top: solid 1px #7f7f80; }\n\n.rst__site-footer-owner {\n  display: block;\n  font-weight: bold; }\n\n.rst__site-footer-credits {\n  color: #819198; }\n\n@media screen and (min-width: 64em) {\n  .rst__site-footer {\n    font-size: 1rem; } }\n\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .rst__site-footer {\n    font-size: 1rem; } }\n\n@media screen and (max-width: 42em) {\n  .rst__site-footer {\n    font-size: 0.9rem; } }\n\n/*\n   Copyright 2014 GitHub Inc.\n\n   Licensed under the Apache License, Version 2.0 (the "License");\n   you may not use this file except in compliance with the License.\n   You may obtain a copy of the License at\n\n       http://www.apache.org/licenses/LICENSE-2.0\n\n   Unless required by applicable law or agreed to in writing, software\n   distributed under the License is distributed on an "AS IS" BASIS,\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n   See the License for the specific language governing permissions and\n   limitations under the License.\n\n*/\n.rst__pl-c {\n  color: #969896; }\n\n.rst__pl-c1,\n.rst__pl-s .rst__pl-v {\n  color: #0086b3; }\n\n.rst__pl-e,\n.rst__pl-en {\n  color: #795da3; }\n\n.rst__pl-s .rst__pl-s1,\n.rst__pl-smi {\n  color: #333; }\n\n.rst__pl-ent {\n  color: #63a35c; }\n\n.rst__pl-k {\n  color: #a71d5d; }\n\n.rst__pl-pds,\n.rst__pl-s,\n.rst__pl-s .rst__pl-pse .rst__pl-s1,\n.rst__pl-sr,\n.rst__pl-sr .rst__pl-cce,\n.rst__pl-sr .rst__pl-sra,\n.rst__pl-sr .rst__pl-sre {\n  color: #183691; }\n\n.rst__pl-v {\n  color: #ed6a43; }\n\n.rst__pl-id {\n  color: #b52a1d; }\n\n.rst__pl-ii {\n  background-color: #b52a1d;\n  color: #f8f8f8; }\n\n.rst__pl-sr .rst__pl-cce {\n  color: #63a35c;\n  font-weight: bold; }\n\n.rst__pl-ml {\n  color: #693a17; }\n\n.rst__pl-mh,\n.rst__pl-mh .rst__pl-en,\n.rst__pl-ms {\n  color: #1d3e81;\n  font-weight: bold; }\n\n.rst__pl-mq {\n  color: #008080; }\n\n.rst__pl-mi {\n  color: #333;\n  font-style: italic; }\n\n.rst__pl-mb {\n  color: #333;\n  font-weight: bold; }\n\n.rst__pl-md {\n  background-color: #ffecec;\n  color: #bd2c00; }\n\n.rst__pl-mi1 {\n  background-color: #eaffea;\n  color: #55a532; }\n\n.rst__pl-mdr {\n  color: #795da3;\n  font-weight: bold; }\n\n.rst__pl-mo {\n  color: #1d3e81; }\n\n.rst__page-header {\n  padding: 1rem 6rem; }\n\n.rst__main-content {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.rst__footer {\n  margin: 0 auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 2rem 6rem;\n  max-width: 64rem; }\n\nbody {\n  background-color: #fafafa;\n  font-family: Arial, Helvetica, sans-serif; }\n\n/**\n * Uncomment to simulate bootstrap environment\n */\n',""]),t.locals={btn:"rst__btn","page-header":"rst__page-header","project-name":"rst__project-name","project-tagline":"rst__project-tagline","main-content":"rst__main-content","site-footer":"rst__site-footer","site-footer-owner":"rst__site-footer-owner","site-footer-credits":"rst__site-footer-credits","pl-c":"rst__pl-c","pl-c1":"rst__pl-c1","pl-s":"rst__pl-s","pl-v":"rst__pl-v","pl-e":"rst__pl-e","pl-en":"rst__pl-en","pl-s1":"rst__pl-s1","pl-smi":"rst__pl-smi","pl-ent":"rst__pl-ent","pl-k":"rst__pl-k","pl-pds":"rst__pl-pds","pl-pse":"rst__pl-pse","pl-sr":"rst__pl-sr","pl-cce":"rst__pl-cce","pl-sra":"rst__pl-sra","pl-sre":"rst__pl-sre","pl-id":"rst__pl-id","pl-ii":"rst__pl-ii","pl-ml":"rst__pl-ml","pl-mh":"rst__pl-mh","pl-ms":"rst__pl-ms","pl-mq":"rst__pl-mq","pl-mi":"rst__pl-mi","pl-mb":"rst__pl-mb","pl-md":"rst__pl-md","pl-mi1":"rst__pl-mi1","pl-mdr":"rst__pl-mdr","pl-mo":"rst__pl-mo",footer:"rst__footer"}},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(f(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(f(r.parts[a],t));m[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s=a[1],l=a[2],c=a[3],f={css:s,media:l,sourceMap:c};r[i]?r[i].parts.push(f):n.push(r[i]={id:i,parts:[f]})}return n}function a(e,t){var n=_(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=_(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),a(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),a(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function f(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var c=g++;n=b||(b=s(t)),r=p.bind(null,n,c,!1),o=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=u.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function u(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=y(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),_=function(e){var t={};return function(n){if(void 0===t[n]){var r=e.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[n]=r}return t[n]}}(function(e){return document.querySelector(e)}),b=null,g=0,v=[],y=n(17);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],l=m[s.id];l.refs--,a.push(l)}if(e){r(o(e,t),t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete m[l.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(e,t,n){e.exports=n.p+"static/favicon.ico"}]);