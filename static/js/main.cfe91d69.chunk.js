(this["webpackJsonpchina-deputy-map"]=this["webpackJsonpchina-deputy-map"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/3267422dcabe6c8764b6d0563a53623c2beb3110eef3a0c26cabce860f82cd888988ca7b43f8e1e90cb49c38f7d1372e0afbfe7ec10c03f2be7277311892ff86.e5e45d1c.bin"},37:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/023f2e516d30f7483d2feb8ec2216b9af7fb5a2d3ff0ff615cfbfab3331a610a36ea2eb5a096ab59013e080c0e8db70c055f18b8c2a898e0ebe67742aaae6bfb.9ac3d3fa.bin"},39:function(t,e,n){"use strict";n.r(e);var a,r,i,o,l,c,s,d,u=n(6),f=n.n(u),p=n(23),h=n.n(p),m=(n(30),n(3)),g=(n(31),n(18)),b=n(0),v=n.n(b),x=n(1),y=n(10);function w(t,e){var n=t.module();return n.variable(e()).define(["md"],(function(t){return t(a||(a=Object(y.a)(['# Color Legend\n\nA simple legend for a [color scale](/@d3/color-schemes). Supports [continuous](/@d3/continuous-scales), [sequential](/@d3/sequential-scales), [diverging](/@d3/diverging-scales), [quantize, quantile, threshold](/@d3/quantile-quantize-and-threshold-scales) and [ordinal](/@d3/d3-scaleordinal) scales. To use:\n\n~~~js\nimport {legend, swatches} from "@d3/color-legend"\n~~~\n\nThen call the legend function as shown below. (For ordinal scales, also consider the swatches function.)'])))})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleSequential([0,100],e.interpolateViridis),title:"Temperature (\xb0F)"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleSequentialSqrt([0,1],e.interpolateTurbo),title:"Speed (kts)"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleDiverging([-.1,0,.1],e.interpolatePiYG),title:"Daily change",tickFormat:"+%"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleDivergingSqrt([-.1,0,.1],e.interpolateRdBu),title:"Daily change",tickFormat:"+%"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleSequentialLog([1,100],e.interpolateBlues),title:"Energy (joules)",ticks:10,tickFormat:".0s"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleSequentialQuantile(Array.from({length:100},(function(){return Math.pow(Math.random(),2)})),e.interpolateBlues),title:"Quantile",tickFormat:".2f"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleSqrt([-100,0,100],["blue","white","red"]),title:"Temperature (\xb0C)"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleQuantize([1,10],e.schemePurples[9]),title:"Unemployment rate (%)"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleQuantile(e.range(1e3).map(e.randomNormal(100,20)),e.schemeSpectral[9]),title:"Height (cm)",tickFormat:".0f"})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleThreshold([2.5,3.1,3.5,3.9,6,7,8,9.5],e.schemeRdBu[9]),title:"Unemployment rate (%)",tickSize:0})})),n.variable(e()).define(["legend","d3"],(function(t,e){return t({color:e.scaleOrdinal(["<10","10-19","20-29","30-39","40-49","50-59","60-69","70-79","\u226580"],e.schemeSpectral[10]),title:"Age (years)",tickSize:0})})),n.variable(e()).define(["md"],(function(t){return t(r||(r=Object(y.a)(["But wait, there\u2019s more!\n\nHow about swatches for ordinal color scales? Both variable-width swatches and [column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) are supported."])))})),n.variable(e()).define(["swatches","d3"],(function(t,e){return t({color:e.scaleOrdinal(["blueberries","oranges","apples"],e.schemeCategory10)})})),n.variable(e()).define(["swatches","d3"],(function(t,e){return t({color:e.scaleOrdinal(["Wholesale and Retail Trade","Manufacturing","Leisure and hospitality","Business services","Construction","Education and Health","Government","Finance","Self-employed","Other"],e.schemeTableau10),columns:"180px"})})),n.variable(e()).define(["md"],(function(t){return t(i||(i=Object(y.a)(["---\n\n## Implementation"])))})),n.variable(e("legend")).define("legend",["d3","ramp"],(function(t,e){return function(){var n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=a.color,i=a.title,o=a.tickSize,l=void 0===o?6:o,c=a.width,s=void 0===c?320:c,d=a.height,u=void 0===d?44+l:d,f=a.marginTop,p=void 0===f?18:f,h=a.marginRight,m=void 0===h?0:h,g=a.marginBottom,b=void 0===g?16+l:g,v=a.marginLeft,x=void 0===v?0:v,y=a.ticks,w=void 0===y?s/64:y,j=a.tickFormat,A=a.tickValues,O=t.create("svg").attr("width",s).attr("height",u).attr("viewBox",[0,0,s,u]).style("overflow","visible").style("display","block"),k=function(t){return t.selectAll(".tick line").attr("y1",p+b-u)};if(r.interpolate){var N=Math.min(r.domain().length,r.range().length);n=r.copy().rangeRound(t.quantize(t.interpolate(x,s-m),N)),O.append("image").attr("x",x).attr("y",p).attr("width",s-x-m).attr("height",u-p-b).attr("preserveAspectRatio","none").attr("xlink:href",e(r.copy().domain(t.quantize(t.interpolate(0,1),N))).toDataURL())}else if(r.interpolator){if(n=Object.assign(r.copy().interpolator(t.interpolateRound(x,s-m)),{range:function(){return[x,s-m]}}),O.append("image").attr("x",x).attr("y",p).attr("width",s-x-m).attr("height",u-p-b).attr("preserveAspectRatio","none").attr("xlink:href",e(r.interpolator()).toDataURL()),!n.ticks){if(void 0===A){var S=Math.round(w+1);A=t.range(S).map((function(e){return t.quantile(r.domain(),e/(S-1))}))}"function"!==typeof j&&(j=t.format(void 0===j?",f":j))}}else if(r.invertExtent){var P=r.thresholds?r.thresholds():r.quantiles?r.quantiles():r.domain(),C=void 0===j?function(t){return t}:"string"===typeof j?t.format(j):j;n=t.scaleLinear().domain([-1,r.range().length-1]).rangeRound([x,s-m]),O.append("g").selectAll("rect").data(r.range()).join("rect").attr("x",(function(t,e){return n(e-1)})).attr("y",p).attr("width",(function(t,e){return n(e)-n(e-1)})).attr("height",u-p-b).attr("fill",(function(t){return t})),A=t.range(P.length),j=function(t){return C(P[t],t)}}else n=t.scaleBand().domain(r.domain()).rangeRound([x,s-m]),O.append("g").selectAll("rect").data(r.domain()).join("rect").attr("x",n).attr("y",p).attr("width",Math.max(0,n.bandwidth()-1)).attr("height",u-p-b).attr("fill",r),k=function(){};return O.append("g").attr("transform","translate(0,".concat(u-b,")")).call(t.axisBottom(n).ticks(w,"string"===typeof j?j:void 0).tickFormat("function"===typeof j?j:void 0).tickSize(l).tickValues(A)).call(k).call((function(t){return t.select(".domain").remove()})).call((function(t){return t.append("text").attr("x",x).attr("y",p+b-u-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").attr("class","title").text(i)})),O.node()}})),n.variable(e("swatches")).define("swatches",["DOM","html","entity"],(function(t,e,n){return function(a){var r=a.color,i=a.columns,d=void 0===i?null:i,u=a.format,f=void 0===u?function(t){return t}:u,p=a.swatchSize,h=void 0===p?15:p,m=a.swatchWidth,g=void 0===m?h:m,b=a.swatchHeight,v=void 0===b?h:b,x=a.marginLeft,w=void 0===x?0:x,j=t.uid().id;return null!==d?e(o||(o=Object(y.a)(['<div style="display: flex; align-items: center; margin-left: ','px; min-height: 33px; font: 10px sans-serif;">\n  <style>\n\n.',"-item {\n  break-inside: avoid;\n  display: flex;\n  align-items: center;\n  padding-bottom: 1px;\n}\n\n.","-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: calc(100% - ","px - 0.5em);\n}\n\n.","-swatch {\n  width: ","px;\n  height: ",'px;\n  margin: 0 0.5em 0 0;\n}\n\n  </style>\n  <div style="width: 100%; columns: ',';">',"\n  </div>\n</div>"])),+w,j,j,+g,j,+g,+v,d,r.domain().map((function(t){var a=f(t);return e(l||(l=Object(y.a)(['<div class="','-item">\n      <div class="','-swatch" style="background:',';"></div>\n      <div class="','-label" title="','">',"</div>\n    </div>"])),j,j,r(t),j,a.replace(/["&]/g,n),document.createTextNode(a))}))):e(c||(c=Object(y.a)(['<div style="display: flex; align-items: center; min-height: 33px; margin-left: ','px; font: 10px sans-serif;">\n  <style>\n\n.'," {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 1em;\n}\n\n.",'::before {\n  content: "";\n  width: ',"px;\n  height: ","px;\n  margin-right: 0.5em;\n  background: var(--color);\n}\n\n  </style>\n  <div>","</div>"])),+w,j,j,+g,+v,r.domain().map((function(t){return e(s||(s=Object(y.a)(['<span class="','" style="--color: ','">',"</span>"])),j,r(t),document.createTextNode(f(t)))})))}})),n.variable(e("entity")).define("entity",(function(){return function(t){return"&#".concat(t.charCodeAt(0).toString(),";")}})),n.variable(e("ramp")).define("ramp",["DOM"],(function(t){return function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,a=t.canvas(n,1),r=a.getContext("2d"),i=0;i<n;++i)r.fillStyle=e(i/(n-1)),r.fillRect(i,0,1,1);return a}})),n.variable(e("d3")).define("d3",["require"],(function(t){return t("d3@6")})),n}function j(t,e){var a=t.module(),r=new Map([["China@5.geojson",n(36).default],["population@3.csv",n(37).default]]);a.builtin("FileAttachment",t.fileAttachments((function(t){return r.get(t)}))),a.variable(e()).define(["md"],(function(t){return t(d||(d=Object(y.a)(["# China Province Population Map"])))})),a.variable(e("viewof year")).define("viewof year",["Inputs","data"],(function(t,e){return t.select(e.columns.slice(1,-2),{value:"2020",label:"Year"})})),a.variable(e("year")).define("year",["Generators","viewof year"],(function(t,e){return t.input(e)})),a.variable(e("viewof metrics")).define("viewof metrics",["Inputs"],(function(t){return t.radio(["Population","Deputies"],{value:"Population"})})),a.variable(e("metrics")).define("metrics",["Generators","viewof metrics"],(function(t,e){return t.input(e)})),a.variable(e("chart")).define("chart",["d3","width","height","legend","color","china","population","year","metrics","x","year_list","y","xAxis","yAxis","margin","deputy","x2","gender_list","y2","xAxis2","yAxis2","callout","format"],(function(t,e,n,a,r,i,o,l,c,s,d,u,f,p,h,m,g,b,v,x,y,w,j){var A=t.create("svg").attr("viewBox",[0,0,e,n]);A.append("g").attr("transform","translate(10,20)").append((function(){return a({color:r,title:"Population",width:260,tickFormat:".2s"})}));var O=t.geoMercator().center([e>500?111.8:105,e>500?46.9:42]).translate([e>500?e/3:e/2,n/3]).scale(e>500?e/2.5:e/1.2),k=t.geoPath().projection(O);A.append("g").selectAll("path").data(i.features).enter().append("path").attr("class","province").attr("d",k).attr("stroke","white").attr("fill",(function(t){return"Taiwan"!==t.properties.name?r(o.get(t.properties.name)[l-2011]):"#000000"})),"Population"==c?(A.append("g").attr("class","bar").selectAll("rect").data(o.get("Guangdong")).join("rect").attr("x",(function(t,e){return s(d[e])})).attr("y",(function(t){return u(t)})).attr("height",(function(t){return u(0)-u(t)})).attr("width",s.bandwidth()).attr("fill","red"),A.append("g").call(f),A.append("g").call(p),A.append("text").attr("class","bartitle").attr("x",e>500?.75*e+h.left:e/2).attr("y",e>500?h.top:.6*n+h.top).attr("text-anchor","middle").style("font-size",16).style("font-weight","bold").text("".concat(c," of Guangdong"))):(A.append("g").attr("class","bar").selectAll("rect").data(m.get("Guangxi")).join("rect").attr("x",(function(t,e){return g(b[e])+g.bandwidth()/4})).attr("y",(function(t){return v(t)})).attr("height",(function(t){return v(0)-v(t)})).attr("width",g.bandwidth()/2).attr("fill","blue"),A.append("g").call(x),A.append("g").call(y),A.append("text").attr("class","bartitle").attr("x",e>500?.75*e+h.left:e/2).attr("y",e>500?h.top:.6*n+h.top).attr("text-anchor","middle").style("font-size",16).style("font-weight","bold").text("".concat(c," of Guangxi")));var N=A.append("g");return A.selectAll(".province").on("touchmove click",(function(a,r){N.call(w,"".concat(r.properties.name,"\nMale NPC deputies\uff1b").concat(m.get(r.properties.name)[0],"\nFemale NPC deputies: ").concat(m.get(r.properties.name)[1],"\n").concat(l," Population: ").concat("Taiwan"===r.properties.name?"N/A":j(o.get(r.properties.name)[l-2011]))),N.attr("transform","translate(".concat(t.pointer(a,this),")")),t.select(this).attr("stroke","red").raise(),"Population"==c?(t.selectAll(".bar").remove(),t.selectAll(".bartitle").remove(),A.append("g").attr("class","bar").selectAll("rect").data(o.get(r.properties.name)).join("rect").attr("x",(function(t,e){return s(d[e])})).attr("width",s.bandwidth()).attr("y",n-h.top).attr("height",0).transition().duration(200).ease(t.easeLinear).attr("y",(function(t){return u(t)})).attr("height",(function(t){return u(0)-u(t)})).attr("fill","red"),A.append("g").call(f),A.append("g").call(p),A.append("text").attr("class","bartitle").attr("x",e>500?.75*e+h.left:e/2).attr("y",e>500?h.top:.6*n+h.top).attr("text-anchor","middle").style("font-size",16).style("font-weight","bold").text("".concat(c," of ").concat(r.properties.name))):(t.selectAll(".bar").remove(),t.selectAll(".bartitle").remove(),A.append("g").attr("class","bar").attr("fill","blue").selectAll("rect").data(m.get(r.properties.name)).join("rect").attr("x",(function(t,e){return g(b[e])+g.bandwidth()/4})).attr("width",g.bandwidth()/2).attr("y",n-h.top).attr("height",0).transition().duration(200).ease(t.easeLinear).attr("y",(function(t){return v(t)})).attr("height",(function(t){return v(0)-v(t)})),A.append("g").call(x),A.append("g").call(y),A.append("text").attr("class","bartitle").attr("x",e>500?.75*e+h.left:e/2).attr("y",e>500?h.top:.6*n+h.top).attr("text-anchor","middle").style("font-size",16).style("font-weight","bold").text("".concat(c," of ").concat(r.properties.name)))})).on("touchend mouseleave",(function(){N.call(w,null),t.select(this).attr("stroke","white").lower()})),A.node()})),a.variable(e("x")).define("x",["d3","year_list","width","margin"],(function(t,e,n,a){return t.scaleBand().domain(e).range([n>500?n/2+a.left:a.left,n-a.right]).padding(.1)})),a.variable(e("x2")).define("x2",["d3","gender_list","width","margin"],(function(t,e,n,a){return t.scaleBand().domain(e).range([n>500?n/2+a.left:a.left,n-a.right]).padding(.1)})),a.variable(e("y")).define("y",["d3","population","height","margin","width"],(function(t,e,n,a,r){return t.scaleLinear().domain([0,t.max(e.get("Guangdong"))]).nice().range([n-a.bottom,r>500?a.top:a.top+.6*n])})),a.variable(e("y2")).define("y2",["d3","deputy","height","margin","width"],(function(t,e,n,a,r){return t.scaleLinear().domain([0,t.max(e.get("Guangxi"))]).nice().range([n-a.bottom,r>500?a.top:a.top+.6*n])})),a.variable(e("xAxis")).define("xAxis",["height","margin","d3","x"],(function(t,e,n,a){return function(r){return r.attr("transform","translate(0,".concat(t-e.bottom,")")).attr("class","bar").call(n.axisBottom(a).tickSizeOuter(0))}})),a.variable(e("xAxis2")).define("xAxis2",["height","margin","d3","x2"],(function(t,e,n,a){return function(r){return r.attr("transform","translate(0,".concat(t-e.bottom,")")).attr("class","bar").call(n.axisBottom(a).tickSizeOuter(0))}})),a.variable(e("yAxis")).define("yAxis",["width","margin","d3","y","y_format","height"],(function(t,e,n,a,r,i){return function(o){return o.attr("transform","translate(".concat(t>500?t/2+e.left:e.left,",0)")).attr("class","bar").call(n.axisLeft(a).ticks(null,r)).call((function(t){return t.select(".domain").remove()})).call((function(n){return n.append("text").attr("x",-e.left).attr("y",t>500?10:.62*i).attr("fill","black").attr("text-anchor","start").text("Population")}))}})),a.variable(e("yAxis2")).define("yAxis2",["width","margin","d3","y2","y_format","height"],(function(t,e,n,a,r,i){return function(o){return o.attr("transform","translate(".concat(t>500?t/2+e.left:e.left,",0)")).attr("class","bar").call(n.axisLeft(a).ticks(null,r)).call((function(t){return t.select(".domain").remove()})).call((function(n){return n.append("text").attr("x",-e.left).attr("y",t>500?10:.62*i).attr("fill","black").attr("text-anchor","start").text("Number of Deputies")}))}})),a.variable(e("year_list")).define("year_list",["data"],(function(t){return t.columns.slice(1,-2).reverse()})),a.variable(e("gender_list")).define("gender_list",["data"],(function(t){return t.columns.slice(-2)})),a.variable(e("population")).define("population",["data"],(function(t){return new Map(t.map((function(t){return[t.Delegation,[t[2011],t[2012],t[2013],t[2014],t[2015],t[2016],t[2017],t[2018],t[2019],t[2020]]]}))).set("Taiwan",["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A"])})),a.variable(e("deputy")).define("deputy",["data"],(function(t){return new Map(t.map((function(t){return[t.Delegation,[t.Men,t.Women]]}))).set("Taiwan",["N/A","N/A"])})),a.variable(e("height")).define("height",["width"],(function(t){return t>500?400:550})),a.variable(e("data")).define("data",["d3","FileAttachment"],function(){var t=Object(x.a)(v.a.mark((function t(e,n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n("population@3.csv").text();case 3:return t.t1=t.sent,t.t2=e.autoType,t.abrupt("return",t.t0.csvParse.call(t.t0,t.t1,t.t2));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),a.variable(e("callout")).define("callout",(function(){return function(t,e){if(!e)return t.style("display","none");t.style("display",null).style("pointer-events","none").style("font","10px sans-serif");var n=t.selectAll("path").data([null]).join("path").attr("fill","white").attr("stroke","black"),a=t.selectAll("text").data([null]).join("text").call((function(t){return t.selectAll("tspan").data((e+"").split(/\n/)).join("tspan").attr("x",0).attr("y",(function(t,e){return"".concat(1.1*e,"em")})).style("font-weight",(function(t,e){return e?null:"bold"})).text((function(t){return t}))})),r=a.node().getBBox(),i=(r.x,r.y),o=r.width,l=r.height;a.attr("transform","translate(".concat(-o/2,",").concat(15-i,")")),n.attr("d","M".concat(-o/2-10,",5H-5l5,-5l5,5H").concat(o/2+10,"v").concat(l+20,"h-").concat(o+20,"z"))}})),a.variable(e("color")).define("color",["d3"],(function(t){return t.scaleQuantize([0,12e7],t.schemeBlues[7])})),a.variable(e("path")).define("path",["d3"],(function(t){return t.geoPath()})),a.variable(e("format")).define("format",["d3"],(function(t){return t.format(",")})),a.variable(e("y_format")).define("y_format",["d3"],(function(t){return t.format("s")})),a.variable(e("states")).define("states",["china"],(function(t){return new Map(t.features.map((function(t){return[t.id,t.properties]})))})),a.variable(e("china")).define("china",["FileAttachment"],(function(t){return t("China@5.geojson").json()})),a.variable(e("margin")).define("margin",(function(){return{top:30,right:0,bottom:30,left:40}})),a.variable(e("d3")).define("d3",["require"],(function(t){return t("d3@6")}));var i=t.module(w);return a.import("legend",i),a}var A=n(4);var O=function(t){var e=t.width,n=Object(u.useRef)(),a=Object(u.useRef)(),r=Object(u.useRef)(),i=Object(u.useState)(),o=Object(m.a)(i,2),l=o[0],c=o[1];return Object(u.useEffect)((function(){var t=new g.b,e=t.module(j,(function(t){return"viewof year"===t?new g.a(n.current):"viewof metrics"===t?new g.a(a.current):"chart"===t?new g.a(r.current):void 0}));return c(e),function(){c(void 0),t.dispose()}}),[]),Object(u.useEffect)((function(){void 0!==l&&l.redefine("width",e)}),[e,l]),Object(A.jsxs)("div",{className:"".concat(e>500?null:"order"),children:[Object(A.jsx)("div",{ref:n,className:"".concat(e>500?"year":"year-mobile")}),Object(A.jsx)("div",{ref:a,className:"".concat(e>500?"deputy":"deputy-mobile")}),Object(A.jsx)("div",{ref:r,className:"".concat(e>500?null:"chart")})]})};var k=function(){var t=Object(u.useRef)(null),e=function(t){var e=function(){return{width:t.current.offsetWidth<1e3?t.current.offsetWidth:1e3,height:t.current.offsetHeight}},n=Object(u.useState)({width:0,height:0}),a=Object(m.a)(n,2),r=a[0],i=a[1];return Object(u.useEffect)((function(){var n=function(){i(e())};return t.current&&i(e()),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[t]),r}(t),n=e.width;return e.height,n>500?Object(A.jsxs)("div",{className:"App",ref:t,children:[Object(A.jsxs)("h1",{children:["Chinese Provinces With More National People\u2019s Congress (NPC) Deputies ",Object(A.jsx)("br",{})," Are Not Necessary More Populous"]}),Object(A.jsx)(O,{width:n}),Object(A.jsxs)("p",{children:["Source: ",Object(A.jsx)("a",{href:"http://www.npc.gov.cn/npc/dbmd13/dbmd.shtml",children:"National People's Congress"})]})]}):Object(A.jsxs)("div",{className:"App",ref:t,children:[Object(A.jsxs)("h3",{children:["Chinese Provinces With More National People\u2019s Congress (NPC) Deputies ",Object(A.jsx)("br",{})," Are Not Necessary More Populous"]}),Object(A.jsx)(O,{width:n}),Object(A.jsxs)("p",{children:["Source: ",Object(A.jsx)("a",{href:"http://www.npc.gov.cn/npc/dbmd13/dbmd.shtml",children:"National People's Congress"})]})]})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),i(t),o(t)}))};h.a.render(Object(A.jsx)(f.a.StrictMode,{children:Object(A.jsx)(k,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.cfe91d69.chunk.js.map