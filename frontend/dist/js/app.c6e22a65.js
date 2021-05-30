(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-main",[a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.sensors,(function(e){return a("v-col",{key:e.type,attrs:{md:"4",cols:"12"}},[e.latest.time?a("main-card",{attrs:{timestamp:e.latest.time.toLocaleString(),value:e.latest.value,"sensor-type":e.type}}):t._e()],1)})),1),a("v-row",{attrs:{justify:"center","no-gutters":""}},[a("v-col",{staticClass:"py-2",attrs:{lg:"6",cols:"12"}},[a("v-card",{attrs:{elevation:"5"}},[a("chart",{attrs:{title:"Inverter current",symbol:"mAh",yTitle:"Current",data:t.mapDataForChart(t.sensors[0].data)}})],1)],1),a("v-col",{staticClass:"py-2",attrs:{lg:"6",cols:"12"}},[a("v-card",{attrs:{elevation:"5"}},[a("chart",{attrs:{title:"Solar current",symbol:"mAh",yTitle:"Current",data:t.mapDataForChart(t.sensors[1].data)}})],1)],1),a("v-col",{staticClass:"py-2",attrs:{lg:"6",cols:"12"}},[a("v-card",{attrs:{elevation:"5"}},[a("chart",{attrs:{title:"Battery voltage",symbol:"V",yTitle:"Voltage",data:t.mapDataForChart(t.sensors[2].data)}})],1)],1)],1)],1)],1)],1)],1)},s=[],o=a("5530"),i=(a("d81d"),a("2f62")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"40vh"}},[a("v-chart",{ref:"chart",staticClass:"chart",attrs:{option:t.option,autoresize:""}})],1)},c=[],u=a("22b4"),p=a("f95e"),d=a("4b2a"),f=a("9394"),m=a("2da7"),v=a("104d"),y=a("9502"),h=a("a0c6"),b=a("3620"),g=a("5c7f");Object(u["a"])([p["a"],d["a"],b["a"],f["a"],m["a"],v["a"],y["a"],h["a"]]);var _={components:{VChart:g["a"]},props:{data:{required:!0,type:Array},loading:{type:Boolean,default:!1},title:{type:String,default:""},yTitle:{type:String,default:""},symbol:{type:String,default:""}},computed:{option:function(){return{dataZoom:{type:"inside"},title:{text:this.title,left:"center"},tooltip:{trigger:"axis"},xAxis:{type:"time",name:"Time",maxInterval:864e5},grid:{left:"2%",right:"13%",bottom:"3%",containLabel:!0},yAxis:{name:this.yTitle,type:"value",axisLabel:{formatter:"{value} "+this.symbol}},series:[{showSymbol:!1,data:this.data,type:"line",smooth:!0,markLine:{data:[{type:"average",name:"Average"}]}}]}}}},T=_,O=(a("f6f2"),a("2877")),S=Object(O["a"])(T,l,c,!1,null,"14f0c8d6",null),A=S.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{dark:"",elevation:"4",raised:"",rounded:"",shaped:""}},[a("v-card-title",[a("v-icon",{staticClass:"pr-2"},[t._v(t._s(t.data.iconBefore))]),a("v-icon",{staticClass:"pr-2"},[t._v("mdi-arrow-right")]),a("v-icon",[t._v(t._s(t.data.iconAfter))])],1),a("v-card-subtitle",[t._v(" "+t._s(t.timestamp)+" "),a("span",[t._v(" - "+t._s(t.data.title))])]),a("v-card-text",[a("span",{staticClass:"text-h3"},[t._v(t._s(t.value))]),a("span",{staticClass:"text-h5"},[t._v(t._s(t.data.symbol))])])],1)},w=[],R=(a("a9e3"),{name:"HelloWorld",props:{sensorType:{required:!0,type:String},value:{type:Number},timestamp:{type:String}},computed:{data:function(){return"CURRENT_FROM_BATTERY_TO_INVERTER"===this.sensorType?{title:"Inverter Current",iconBefore:"mdi-battery-charging-70",iconAfter:"mdi-power-plug",symbol:"mAh"}:"CURRENT_FROM_SOLAR_TO_BATTERY"===this.sensorType?{title:"Solar Current",iconBefore:"mdi-weather-sunny",iconAfter:"mdi-battery-charging-70",symbol:"mAh"}:"BATTERY_VOLTAGE"===this.sensorType?{title:"Battery Voltage",iconBefore:"mdi-battery-charging-30",iconAfter:"mdi-battery-charging-90",symbol:"V"}:{dataZoom:{type:"inside"},title:{text:this.title,left:"center"},tooltip:{trigger:"axis"},xAxis:{type:"time",name:"Time"},yAxis:{name:this.yTitle,type:"value",axisLabel:{formatter:"{value} "+this.symbol}},series:[{showSymbol:!1,data:this.data,type:"line",smooth:!0,markLine:{data:[{type:"average",name:"Average"}]}}]}}}}),C=R,E=(a("c4db"),Object(O["a"])(C,x,w,!1,null,"4fbd291a",null)),j=E.exports,V={components:{Chart:A,MainCard:j},name:"App",methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["initEvents","getSensorValues","getLatestSensorValues"])),{},{mapDataForChart:function(t){return t.map((function(t){var e=t.time,a=t.value;return[e.toISOString(),a,"".concat(a," mah")]}))}}),computed:Object(o["a"])({},Object(i["c"])(["sensors"])),mounted:function(){this.initEvents(),this.getSensorValues(),this.getLatestSensorValues()}},L=V,$=Object(O["a"])(L,n,s,!1,null,null,null),B=$.exports,k=a("b462"),M=a.n(k),F=a("4059"),D=a.n(F),N=a("8055"),P=a.n(N),I={install:function(t){var e=P()("https://solar.friz.xyz/"),a=M()();a.configure(D()(e,{timeout:3e4})),t.prototype.$api=a}},Y=I,q=a("ce5b"),U=a.n(q);a("bf40"),a("5363");r["default"].use(U.a);var z={},G=new U.a(z),J=a("1da1");a("96cf"),a("7db0"),a("159b");r["default"].use(i["a"]);var Z=function(t){return{time:new Date(t.updatedAt),value:t.value,id:t._id}},H=new i["a"].Store({state:{sensors:[{type:"CURRENT_FROM_BATTERY_TO_INVERTER",data:[],latest:0},{type:"CURRENT_FROM_SOLAR_TO_BATTERY",data:[],latest:0},{type:"BATTERY_VOLTAGE",data:[],latest:0}]},mutations:{setSensorValues:function(t,e){var a=t.sensors.find((function(t){return t.type===e.type}));a&&(a.data=e.data)},setLatestSensorValue:function(t,e){var a=t.sensors.find((function(t){return t.type===e.type}));a&&(a.latest=e.data)}},actions:{initEvents:function(t){var e=t.dispatch;console.log("init events"),this._vm.$api.service("sensor-data").on("created",(function(){e("getSensorValues"),e("getLatestSensorValues")}))},getSensorValues:function(t){var e=this,a=t.commit,r=t.state;r.sensors.map(function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(r){var n,s,o,i,l,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=r.type,s=[],o=500,i=0;case 4:return t.next=6,e._vm.$api.service("sensor-data").find({query:{sensor:n,updatedAt:{$gte:new Date(Date.now()-6048e5)},$sort:{updatedAt:-1},$select:["updatedAt","sensor","value"],$limit:o,$skip:i}});case 6:c=t.sent,u=c.data,l=c.total,u.forEach((function(t){return s.push(t)})),i+=o;case 11:if(l>i){t.next=4;break}case 12:a("setSensorValues",{type:n,data:s.map(Z)});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getLatestSensorValues:function(t){var e=this,a=t.commit,r=t.state;r.sensors.map(function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(r){var n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.type,t.next=3,e._vm.$api.service("sensor-data").find({query:{sensor:n,$limit:1,$sort:{updatedAt:-1},$select:["updatedAt","sensor","value"]}});case 3:s=t.sent,o=s.data,a("setLatestSensorValue",{type:n,data:o.map(Z)[0]});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},modules:{}});r["default"].config.productionTip=!1,r["default"].use(Y),new r["default"]({store:H,vuetify:G,render:function(t){return t(B)}}).$mount("#app")},"60c8":function(t,e,a){},c4db:function(t,e,a){"use strict";a("60c8")},c889:function(t,e,a){},f6f2:function(t,e,a){"use strict";a("c889")}});
//# sourceMappingURL=app.c6e22a65.js.map