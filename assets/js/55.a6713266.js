(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{861:function(t,e,n){"use strict";n.r(e);var o={data:function(){var t=this,e=this.$createElement;return{table:{data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",address:"广东省广州市天河区3"}],operator:[{text:"新增",type:"primary",fun:this.add,icon:"el-icon-delete",noshow:[{key:"status",val:["1"]}]},{text:"编辑",type:"danger",show:{key:"status",val:["2"]},fun:this.edit},{text:"删除",render:function(n,o){return e("el-popconfirm",{attrs:{title:"你确定要删除吗？"},on:{confirm:function(){return t.del(o)}}},[e("div",{slot:"reference",attrs:{type:"link"}},["删除"])])}}],operatorConfig:{fixed:"right",width:280,label:"操作"}},columns:[{prop:"name",label:"姓名",minWidth:"100",noShowColumn:!0},{prop:"date",label:"日期",minWidth:"180",noShowColumn:!0},{prop:"address",label:"地址",minWidth:"220",noShowColumn:!0},{prop:"date",label:"日期",minWidth:"180",noShowColumn:!0},{prop:"address",label:"地址",minWidth:"220",noShowColumn:!0}]}},methods:{add:function(t){console.log("新增",t)},edit:function(t){console.log("编辑",t)},del:function(t){var e=this;this.$confirm("是否永久删除该项, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log("删除",t)})).catch((function(){e.$message.info("已取消删除")}))}}},a=n(2),i=Object(a.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"t-table",staticStyle:{width:"100%"}},[t("zc-table",{attrs:{table:this.table,columns:this.columns}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);