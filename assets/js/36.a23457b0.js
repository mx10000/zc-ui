(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{889:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{table:{total:200,currentPage:1,pageSize:10,data:[]}}},methods:{handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))}}},o=a(2),i=Object(o.a)(n,(function(){var e=this._self._c;return e("zc-layout-page",[e("zc-layout-page-item",[e("zc-pagination",{attrs:{"current-page":this.table.currentPage,isShowPagination:!0,"page-size":this.table.pageSize,"page-sizes":[10,20,50,100],"pager-count":5,total:this.table.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)],1)}),[],!1,null,"6ff264c9",null);t.default=i.exports}}]);