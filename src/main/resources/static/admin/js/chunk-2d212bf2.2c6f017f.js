(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212bf2"],{aa73:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticStyle:{"margin-top":"10px"}},[n("el-form",{ref:"form",attrs:{"label-width":"160px"}},[t._l(t.list,(function(e){return[n("el-form-item",{key:e.id,attrs:{label:e.settingName}},[n("el-input",{attrs:{type:e.displayType,placeholder:e.placeholder,rows:"6"},model:{value:e.settingValue,callback:function(n){t.$set(e,"settingValue",n)},expression:"item.settingValue"}})],1)]})),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确定")])],1)],2)],1)],1)},s=[],a=n("b775");function l(){return Object(a["a"])({url:"/api/admin/setting_list",method:"post"})}function o(t){return Object(a["a"])({url:"/api/admin/setting_save",method:"post",data:t})}var r=n("5c96"),u={data:function(){return{list:[],oldList:[]}},created:function(){this.load()},methods:{load:function(){var t=this;new Promise((function(e,n){l().then((function(n){t.list=n.list,t.oldList=JSON.parse(JSON.stringify(n.list)),e()})).catch((function(t){n(t)}))})),console.log("sss")},onSubmit:function(){for(var t=this.list,e=this.oldList,n=0,i=[],s=0;s<t.length;s++)if(t[s].settingValue!==e[s].settingValue){n++;var a={};a["setting_value"]=t[s].settingValue,a["setting_key"]=t[s].settingKey,i.push(a)}console.log(i.length);for(var l=0;l<n;l++)o(i[l]);n>0&&Object(r["Message"])({message:"修改成功",type:"success",duration:5e3})}}},c=u,p=n("2877"),d=Object(p["a"])(c,i,s,!1,null,null,null);e["default"]=d.exports}}]);