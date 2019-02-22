webpackJsonp([14,26],{gvwr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,openId:"",name:"",phone:"",img:"",wechatNum:"",wechatName:"",creator:"",createDate:"",modifier:"",modifyDate:""},dataRule:{openId:[{required:!0,message:"微信openID不能为空",trigger:"blur"}],name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],phone:[{required:!0,message:"电话不能为空",trigger:"blur"}],img:[{required:!0,message:"头像不能为空",trigger:"blur"}],wechatNum:[{required:!0,message:"微信号不能为空",trigger:"blur"}],wechatName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],creator:[{required:!0,message:"创建人不能为空",trigger:"blur"}],createDate:[{required:!0,message:"创建时间不能为空",trigger:"blur"}],modifier:[{required:!0,message:"修改人不能为空",trigger:"blur"}],modifyDate:[{required:!0,message:"修改时间不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/generator/hhouser/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.openId=a.hhouser.openId,t.dataForm.name=a.hhouser.name,t.dataForm.phone=a.hhouser.phone,t.dataForm.img=a.hhouser.img,t.dataForm.wechatNum=a.hhouser.wechatNum,t.dataForm.wechatName=a.hhouser.wechatName,t.dataForm.creator=a.hhouser.creator,t.dataForm.createDate=a.hhouser.createDate,t.dataForm.modifier=a.hhouser.modifier,t.dataForm.modifyDate=a.hhouser.modifyDate)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/generator/hhouser/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,openId:e.dataForm.openId,name:e.dataForm.name,phone:e.dataForm.phone,img:e.dataForm.img,wechatNum:e.dataForm.wechatNum,wechatName:e.dataForm.wechatName,creator:e.dataForm.creator,createDate:e.dataForm.createDate,modifier:e.dataForm.modifier,modifyDate:e.dataForm.modifyDate})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"微信openID",prop:"openId"}},[a("el-input",{attrs:{placeholder:"微信openID"},model:{value:e.dataForm.openId,callback:function(t){e.$set(e.dataForm,"openId",t)},expression:"dataForm.openId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"电话"},model:{value:e.dataForm.phone,callback:function(t){e.$set(e.dataForm,"phone",t)},expression:"dataForm.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"头像",prop:"img"}},[a("el-input",{attrs:{placeholder:"头像"},model:{value:e.dataForm.img,callback:function(t){e.$set(e.dataForm,"img",t)},expression:"dataForm.img"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"微信号",prop:"wechatNum"}},[a("el-input",{attrs:{placeholder:"微信号"},model:{value:e.dataForm.wechatNum,callback:function(t){e.$set(e.dataForm,"wechatNum",t)},expression:"dataForm.wechatNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户昵称",prop:"wechatName"}},[a("el-input",{attrs:{placeholder:"用户昵称"},model:{value:e.dataForm.wechatName,callback:function(t){e.$set(e.dataForm,"wechatName",t)},expression:"dataForm.wechatName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建人",prop:"creator"}},[a("el-input",{attrs:{placeholder:"创建人"},model:{value:e.dataForm.creator,callback:function(t){e.$set(e.dataForm,"creator",t)},expression:"dataForm.creator"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"createDate"}},[a("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createDate,callback:function(t){e.$set(e.dataForm,"createDate",t)},expression:"dataForm.createDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"修改人",prop:"modifier"}},[a("el-input",{attrs:{placeholder:"修改人"},model:{value:e.dataForm.modifier,callback:function(t){e.$set(e.dataForm,"modifier",t)},expression:"dataForm.modifier"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"修改时间",prop:"modifyDate"}},[a("el-input",{attrs:{placeholder:"修改时间"},model:{value:e.dataForm.modifyDate,callback:function(t){e.$set(e.dataForm,"modifyDate",t)},expression:"dataForm.modifyDate"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},n=a("46Yf")(r,o,!1,null,null,null);t.default=n.exports},"il+Z":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("gvwr").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/generator/hhouser/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/generator/hhouser/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("generator:hhouser:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("generator:hhouser:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"主键ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"openId","header-align":"center",align:"center",label:"微信openID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone","header-align":"center",align:"center",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"img","header-align":"center",align:"center",label:"头像"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wechatNum","header-align":"center",align:"center",label:"微信号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wechatName","header-align":"center",align:"center",label:"用户昵称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"creator","header-align":"center",align:"center",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createDate","header-align":"center",align:"center",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"modifier","header-align":"center",align:"center",label:"修改人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"modifyDate","header-align":"center",align:"center",label:"修改时间"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},n=a("46Yf")(r,o,!1,null,null,null);t.default=n.exports}});