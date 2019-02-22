webpackJsonp([28],{eFpw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,title:"",text:"",type:"",userId:"",createTime:"",sourceUrl:"",heat:"",love:"",hate:""},dataRule:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}],text:[{required:!0,message:"内容不能为空",trigger:"blur"}],type:[{required:!0,message:"类型不能为空",trigger:"blur"}],userId:[{required:!0,message:"创建者不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}],sourceUrl:[{required:!0,message:"资源链接不能为空",trigger:"blur"}],heat:[{required:!0,message:"热度评分不能为空",trigger:"blur"}],love:[{required:!0,message:"顶不能为空",trigger:"blur"}],hate:[{required:!0,message:"踩不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/generator/hhojoker/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.title=a.hhojoker.title,t.dataForm.text=a.hhojoker.text,t.dataForm.type=a.hhojoker.type,t.dataForm.userId=a.hhojoker.userId,t.dataForm.createTime=a.hhojoker.createTime,t.dataForm.sourceUrl=a.hhojoker.sourceUrl,t.dataForm.heat=a.hhojoker.heat,t.dataForm.love=a.hhojoker.love,t.dataForm.hate=a.hhojoker.hate)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/generator/hhojoker/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,title:e.dataForm.title,text:e.dataForm.text,type:e.dataForm.type,userId:e.dataForm.userId,createTime:e.dataForm.createTime,sourceUrl:e.dataForm.sourceUrl,heat:e.dataForm.heat,love:e.dataForm.love,hate:e.dataForm.hate})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"标题"},model:{value:e.dataForm.title,callback:function(t){e.$set(e.dataForm,"title",t)},expression:"dataForm.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内容",prop:"text"}},[a("el-input",{attrs:{placeholder:"内容"},model:{value:e.dataForm.text,callback:function(t){e.$set(e.dataForm,"text",t)},expression:"dataForm.text"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建者",prop:"userId"}},[a("el-input",{attrs:{placeholder:"创建者"},model:{value:e.dataForm.userId,callback:function(t){e.$set(e.dataForm,"userId",t)},expression:"dataForm.userId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createTime,callback:function(t){e.$set(e.dataForm,"createTime",t)},expression:"dataForm.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资源链接",prop:"sourceUrl"}},[a("el-input",{attrs:{placeholder:"资源链接"},model:{value:e.dataForm.sourceUrl,callback:function(t){e.$set(e.dataForm,"sourceUrl",t)},expression:"dataForm.sourceUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"热度评分",prop:"heat"}},[a("el-input",{attrs:{placeholder:"热度评分"},model:{value:e.dataForm.heat,callback:function(t){e.$set(e.dataForm,"heat",t)},expression:"dataForm.heat"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"顶",prop:"love"}},[a("el-input",{attrs:{placeholder:"顶"},model:{value:e.dataForm.love,callback:function(t){e.$set(e.dataForm,"love",t)},expression:"dataForm.love"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"踩",prop:"hate"}},[a("el-input",{attrs:{placeholder:"踩"},model:{value:e.dataForm.hate,callback:function(t){e.$set(e.dataForm,"hate",t)},expression:"dataForm.hate"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=a("46Yf")(r,o,!1,null,null,null);t.default=l.exports}});