(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{873:function(t,a,e){"use strict";e.r(a);var o={name:"TtableRowSort",data:function(){return{table:{data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",amount:3e3,address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"2",amount:2e3,address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",amount:4e3,address:"广东省广州市天河区3"}],columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"160"},{prop:"address",label:"地址",minWidth:"220"},{prop:"status",label:"状态",minWidth:"100"},{prop:"amount",label:"金额",minWidth:"160"}]}}},methods:{rowSort:function(t){console.log("行拖拽后的数据---",t)}}},n=e(2),s=Object(n.a)(o,(function(){var t=this._self._c;return t("zc-layout-page",[t("zc-layout-page-item",[t("zc-table",{attrs:{title:"行拖拽排序示例",table:this.table,columns:this.table.columns,isRowSort:"","row-key":"id"},on:{rowSort:this.rowSort}})],1)],1)}),[],!1,null,null,null);a.default=s.exports}}]);