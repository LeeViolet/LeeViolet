(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6de44152"],{"546c":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var i=r("b775"),o=function(e){return Object(i["a"])("/companys","get",e)},n=function(e){return Object(i["a"])("/companys/".concat(e.id),"delete",e)},a=function(e){return Object(i["a"])("/companys/".concat(e.id),"get",e)},s=function(e){return Object(i["a"])("/companys/".concat(e.id,"/state"),"post",e)}},"5ad5":function(e,t,r){},6945:function(e,t,r){"use strict";r("5ad5")},"72a0":function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return a}));var i=[{value:1,label:"启用"},{value:0,label:"禁用"}],o=[{value:1,label:"简单"},{value:2,label:"一般"},{value:3,label:"困难"}],n=[{value:1,label:"单选"},{value:2,label:"多选"},{value:3,label:"简答"}],a=["o2o","外包服务","企业服务","互联网金融","企业咨询","互联网","电子商务","其他"]},d463:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"question-new"},[r("el-card",{staticClass:"box-card"},[r("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.id?"试题修改":"试题录入"))]),r("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"学科：",prop:"subjectID"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择"},on:{change:e.handleSubjectChange},model:{value:e.form.subjectID,callback:function(t){e.$set(e.form,"subjectID",t)},expression:"form.subjectID"}},e._l(e.subjectList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"目录：",prop:"catalogID"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择"},model:{value:e.form.catalogID,callback:function(t){e.$set(e.form,"catalogID",t)},expression:"form.catalogID"}},e._l(e.directoryList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"企业：",prop:"enterpriseID"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择"},model:{value:e.form.enterpriseID,callback:function(t){e.$set(e.form,"enterpriseID",t)},expression:"form.enterpriseID"}},e._l(e.companyList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.company,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"城市：",prop:"city"}},[r("el-select",{staticStyle:{width:"198px"},attrs:{placeholder:"请选择"},on:{change:e.handleProvinceChange},model:{value:e.form.province,callback:function(t){e.$set(e.form,"province",t)},expression:"form.province"}},e._l(e.provinceList,(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})})),1),r("el-select",{staticStyle:{width:"198px","margin-left":"4px"},attrs:{placeholder:"请选择："},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}},e._l(e.cityList,(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"方向：",prop:"direction"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择"},model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}},e._l(e.direction,(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"题型：",prop:"questionType"}},[r("el-radio-group",{model:{value:e.form.questionType,callback:function(t){e.$set(e.form,"questionType",t)},expression:"form.questionType"}},e._l(e.questionType,(function(t,i){return r("el-radio",{key:i,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),r("el-form-item",{attrs:{label:"难度：",prop:"difficulty"}},[r("el-radio-group",{model:{value:e.form.difficulty,callback:function(t){e.$set(e.form,"difficulty",t)},expression:"form.difficulty"}},e._l(e.difficulty,(function(t,i){return r("el-radio",{key:i,attrs:{label:t.value+""}},[e._v(e._s(t.label))])})),1)],1),r("el-form-item",{attrs:{label:"题干：",prop:"question"}},[r("quill-editor",{ref:"editor1",staticClass:"quill-editor",attrs:{options:e.editorOption},model:{value:e.form.question,callback:function(t){e.$set(e.form,"question",t)},expression:"form.question"}})],1),3!=e.form.questionType?r("el-form-item",{staticClass:"options",attrs:{label:"选项："}},[e._l(e.form.options,(function(t,i){return r("div",{key:i,staticClass:"options-item"},[1==e.form.questionType?[r("el-radio",{attrs:{label:i},model:{value:e.singleChoice,callback:function(t){e.singleChoice=t},expression:"singleChoice"}},[e._v(e._s(t.code+"："))])]:e._e(),2==e.form.questionType?[r("el-checkbox",{attrs:{checked:Boolean(t.isRight),"true-label":1,"false-label":0},model:{value:t.isRight,callback:function(r){e.$set(t,"isRight",r)},expression:"el.isRight"}},[e._v(e._s(t.code+"："))])]:e._e(),r("el-input",{model:{value:t.title,callback:function(r){e.$set(t,"title",r)},expression:"el.title"}}),r("el-upload",{attrs:{action:"/"}},[e._v(" 上传图片 "),r("i",{staticClass:"el-icon-circle-close"})])],2)})),r("el-button",{attrs:{size:"small",disabled:1==e.form.questionType,type:"danger"},on:{click:e.addOption}},[e._v("+增加选项与答案")])],2):e._e(),r("el-form-item",{attrs:{label:"解析视频："}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.form.videoURL,callback:function(t){e.$set(e.form,"videoURL",t)},expression:"form.videoURL"}})],1),r("el-form-item",{attrs:{label:"答案解析：",prop:"answer"}},[r("quill-editor",{ref:"editor2",staticClass:"quill-editor",attrs:{options:e.editorOption},model:{value:e.form.answer,callback:function(t){e.$set(e.form,"answer",t)},expression:"form.answer"}})],1),r("el-form-item",{attrs:{label:"题目备注："}},[r("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:"4"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),r("el-form-item",{attrs:{label:"试题标签："}},[r("el-select",{staticStyle:{width:"400px"},attrs:{multiple:"",placeholder:"请选择试题标签"},model:{value:e.form.tags,callback:function(t){e.$set(e.form,"tags",t)},expression:"form.tags"}},e._l(e.tagList,(function(e,t){return r("el-option",{key:t,attrs:{value:e,label:e}})})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.id?"确认修改":"确认提交"))])],1)],1)],1)],1)},o=[],n=r("1da1"),a=(r("96cf"),r("fb6a"),r("a9e3"),r("c740"),r("ac1f"),r("1276"),r("a15b"),r("159b"),r("a753"),r("8096"),r("14e1"),r("953d")),s=r("546c"),l=r("4ecf"),c=r("a77a"),u=r("fcec"),f=r("b59c"),m=r("72a0"),d=r("9eca"),p={components:{quillEditor:a["quillEditor"]},data:function(){return{id:this.$route.query.id,editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],["blockquote"],["code-block","image","link"]]},placeholder:""},companyList:[],subjectList:[],directoryList:[],tagList:[],provinceList:[],cityList:[],questionType:m["c"],direction:m["b"].slice(0),difficulty:m["a"],form:{questionType:1,difficulty:"1",options:[{isRight:0,code:"A",title:""},{isRight:0,code:"B",title:""},{isRight:0,code:"C",title:""},{isRight:0,code:"D",title:""}]},singleChoice:null,multipleChoice:[],rules:{subjectID:[{required:!0,message:"请选择学科"}],catalogID:[{required:!0,message:"请选择目录"}],enterpriseID:[{required:!0,message:"请选择企业"}],direction:[{required:!0,message:"请选择方向"}],questionType:[{required:!0,message:"请选择题型"}],difficulty:[{required:!0,message:"请选择难度"}],question:[{required:!0,message:"请输入解析"}],answer:[{required:!0,message:"请输入答案"}],city:[{required:!0,message:"请选择地区",trigger:"change"}]}}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getCompanyList(),e.getSubjectList(),e.provinceList=Object(f["b"])(),e.id&&e.initForm();case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){this.id&&(this.$refs.editor1.quill.enable(!1),this.$refs.editor2.quill.enable(!1))},methods:{initForm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d["f"])({id:e.id});case 3:r=t.sent,i=r.data,e.form=i,e.form.questionType=Number(e.form.questionType),1===e.form.questionType&&(e.singleChoice=e.form.options.findIndex((function(e){return e.isRight}))),e.getDirectoryList(e.form.subjectID),e.cityList=Object(f["a"])(e.form.province),e.getTagList(e.form.subjectID),"string"===typeof e.form.tags?e.form.tags=e.form.tags.split(","):e.form.tags||(e.form.tags=[]),e.$nextTick((function(){e.$refs.editor1.quill.enable(!0),e.$refs.editor2.quill.enable(!0)})),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},submitForm:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return console.log("error submit!!"),!1;1===Number(e.form.questionType)?e.singleChoice&&-1!==e.singleChoice&&(e.form.options[e.singleChoice].isRight=1):e.form.options=[],Array.isArray(e.form.tags)&&(e.form.tags=e.form.tags.join()),e.form.questionType+="",e.form.difficulty+="",e.addQuestions()}))},addQuestions:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.id){t.next=6;break}return t.next=4,Object(d["k"])(e.form);case 4:t.next=8;break;case 6:return t.next=8,Object(d["a"])(e.form);case 8:r=e.id?"修改成功":"添加成功",e.$message({message:r,type:"success"}),e.$router.push("/questions/list"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},addOption:function(){var e=this.form.options,t=e[e.length-1].code.charCodeAt(0);e.push({isRight:0,code:String.fromCharCode(t+1)})},getCompanyList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s["c"])({pagesize:1e4});case 3:r=t.sent,i=r.data,e.companyList=i.items,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.dir(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getSubjectList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l["e"])();case 3:r=t.sent,i=r.data,e.subjectList=i,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},handleSubjectChange:function(e){delete this.form.catalogID,this.getDirectoryList(e),this.getTagList(e)},getDirectoryList:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(c["e"])({subjectID:e});case 3:i=r.sent,o=i.data,t.directoryList=o,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},getTagList:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(u["e"])({subjectID:e});case 3:i=r.sent,o=i.data,o.forEach((function(e){t.tagList.push(e.label)})),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},handleProvinceChange:function(e){this.cityList=Object(f["a"])(e),this.$refs.form.validateField("city")}}},b=p,g=(r("6945"),r("2877")),h=Object(g["a"])(b,i,o,!1,null,"428afef4",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-6de44152.020c17fb.js.map