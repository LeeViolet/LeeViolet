(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c44f7f18","chunk-d54a044e"],{"1cf7":function(e,t,n){},"6da3":function(e,t,n){"use strict";n("1cf7")},"87b6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-details-container"},[n("el-row",[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[e._v("【题型】："+e._s(e.QuestionType))])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[e._v("【编号】："+e._s(e.questionDetail.id))])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[e._v("【难度】："+e._s(e.Difficulty))])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[e._v("【标签】："+e._s(e.questionDetail.tags))])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[e._v(" 【学科】："+e._s(e.questionDetail.subjectName)+" ")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[e._v(" 【目录】："+e._s(e.questionDetail.directoryName)+" ")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[e._v("【方向】："+e._s(e.questionDetail.direction))])])],1),n("hr"),n("el-row",[n("el-col",{staticClass:"p0",attrs:{span:24}},[n("div",{staticClass:"grid-content"},[e._v("【题干】：")]),n("div",{staticClass:"grid-content",staticStyle:{color:"blue"},domProps:{innerHTML:e._s(e.questionDetail.question)}}),1==e.questionDetail.questionType?n("div",[n("div",{staticClass:"question-body"},[e._v(" "+e._s(e.QuestionType)+"题 选项：（以下选中的选项为正确答案） ")]),n("el-radio-group",{attrs:{value:e.radio}},e._l(e.questionDetail.options,(function(t){return n("el-radio",{key:t.id,attrs:{label:t.isRight}},[e._v(e._s(t.title))])})),1)],1):2==e.questionDetail.questionType?n("div",[n("el-checkbox-group",{attrs:{value:e.checkList}},e._l(e.questionDetail.options,(function(t){return n("el-checkbox",{key:t.id,attrs:{label:t.isRight}},[e._v(e._s(t.title))])})),1)],1):e._e()])],1),n("hr"),n("el-row",[n("el-col",{staticClass:"p0",attrs:{span:24}},[n("div",{staticClass:"grid-content"},[e._v(" 【参考答案】： "),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){e.isVideoShow=!0,e.$refs.video.play()}}},[e._v("视频答案预览")])],1)])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isVideoShow,expression:"isVideoShow"}],staticClass:"video"},[n("video",{ref:"video",attrs:{src:e.questionDetail.videoURL,controls:""}})]),n("hr"),n("el-row",[n("el-col",{staticClass:"p0",attrs:{span:24}},[n("div",{staticClass:"answer"},[n("span",[e._v("【参考答案】：")]),n("span",{domProps:{innerHTML:e._s(e.questionDetail.answer)}})])])],1),n("hr"),n("el-row",[n("el-col",{staticClass:"p0",attrs:{span:24}},[n("div",{staticClass:"grid-content"},[e._v(" 【题目备注】："+e._s(e.questionDetail.remarks)+" ")])])],1)],1)},i=[],s=n("5530"),r=n("1da1"),o=(n("96cf"),n("a9e3"),n("2f62")),l=Object(o["a"])("questions"),c=l.mapActions,u={props:{questionId:{type:Number,required:!0}},data:function(){return{radio:1,checkList:[1],isVideoShow:!1}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.UpdateQuestionDetail({id:e.questionId});case 2:case"end":return t.stop()}}),t)})))()},methods:Object(s["a"])({},c(["UpdateQuestionDetail"])),computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["questionDetail"])),{},{QuestionType:function(){return["","单选","多选","简答"][this.questionDetail.questionType]},Difficulty:function(){return["","简单","一般","困难"][this.questionDetail.difficulty]}})},d=u,p=(n("6da3"),n("2877")),v=Object(p["a"])(d,a,i,!1,null,"b60db7a4",null);t["default"]=v.exports},"9ff9":function(e,t,n){},d555:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-card",[n("el-form",{staticClass:"search",nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-row",[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{size:"small",label:"关键字","label-width":"80px"}},[n("el-input",{attrs:{placeholder:"根据编号搜索"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)],1),n("el-col",{attrs:{span:6,offset:12}},[n("el-form-item",{staticStyle:{"text-align":"right"},attrs:{size:"small"}},[n("el-button",{on:{click:function(t){e.keyword=""}}},[e._v("清除")]),n("el-button",{attrs:{type:"primary"},on:{click:e.getDataList}},[e._v("搜索")])],1)],1)],1)],1),n("el-alert",{attrs:{title:"数据一共 "+e.count+" 条",type:"info",closable:!1,"show-icon":!0}}),n("el-table",{attrs:{data:e.list}},[n("el-table-column",{attrs:{width:"220",prop:"id",label:"编号"}}),n("el-table-column",{attrs:{width:"80",label:"题型"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[1==n.questionType?[e._v("单选")]:e._e(),2==n.questionType?[e._v("多选")]:e._e(),3==n.questionType?[e._v("简答")]:e._e()]}}])}),n("el-table-column",{attrs:{width:"220",label:"题目编号"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return e._l(a.questionIDs,(function(t,a){return n("el-link",{key:a,attrs:{type:"primary",underline:!1},on:{click:function(n){return e.handleShowPreview(t.id)}}},[e._v(e._s(t.number))])}))}}])}),n("el-table-column",{attrs:{width:"180",prop:"addTime",label:"录入时间"}}),n("el-table-column",{attrs:{"min-width":"80",prop:"totalSeconds",label:"答题时间(s)"}}),n("el-table-column",{attrs:{"min-width":"80",prop:"accuracyRate",label:"正确率(%)"}}),n("el-table-column",{attrs:{"min-width":"80",prop:"userName",label:"录入人"}}),n("el-table-column",{attrs:{width:"80",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{plain:"",size:"small",type:"danger",circle:""},on:{click:function(t){return e.handleDel(a.id)}}},[n("i",{staticClass:"el-icon-delete"})])]}}])})],1),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes, jumper","page-sizes":[20,30,50,100],total:e.count,"current-page":e.page},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPageChange}})],1),n("el-dialog",{attrs:{title:"题目预览",visible:e.isPreviewShow},on:{"update:visible":function(t){e.isPreviewShow=t}}},[e.isPreviewShow?n("questions-preview",{attrs:{questionId:e.questionId}}):e._e()],1)],1)},i=[],s=n("1da1"),r=(n("96cf"),n("9eca")),o=n("87b6"),l={components:{QuestionsPreview:o["default"]},data:function(){return{list:[],page:1,pagesize:20,keyword:"",count:0,isPreviewShow:!1,questionId:""}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getDataList();case 1:case"end":return t.stop()}}),t)})))()},methods:{handleSizeChange:function(e){this.pagesize=e,this.page=1,this.getDataList()},handleCurrentPageChange:function(e){this.page=e,this.getDataList()},getDataList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(r["h"])({page:e.page,pagesize:e.pagesize,keyword:e.keyword});case 3:n=t.sent,a=n.data,e.count=a.counts,e.list=a.items,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},handleDel:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$confirm("此操作将永久删除该题组，是否继续？","提示",{type:"warning"}).then((function(e){return t.delRandoms(e)})).catch((function(){}));case 1:case"end":return e.stop()}}),e)})))()},delRandoms:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(r["j"])({id:e});case 3:t.$message({message:"删除成功",type:"success"}),t.getDataList(),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},handleShowPreview:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.isPreviewShow=!0,t.questionId=e;case 2:case"end":return n.stop()}}),n)})))()}}},c=l,u=(n("d576"),n("2877")),d=Object(u["a"])(c,a,i,!1,null,"5de898e0",null);t["default"]=d.exports},d576:function(e,t,n){"use strict";n("9ff9")}}]);
//# sourceMappingURL=chunk-c44f7f18.c5ebd596.js.map