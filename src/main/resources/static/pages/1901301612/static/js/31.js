webpackJsonp([31],{"6i8u":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",[a("h2",[e._v("布局设置")]),e._v(" "),a("el-form-item",{attrs:{label:"导航条类型"}},[a("el-radio-group",{model:{value:e.navbarLayoutType,callback:function(t){e.navbarLayoutType=t},expression:"navbarLayoutType"}},[a("el-radio",{attrs:{label:"default",border:""}},[e._v("default")]),e._v(" "),a("el-radio",{attrs:{label:"inverse",border:""}},[e._v("inverse")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"侧边栏皮肤"}},[a("el-radio-group",{model:{value:e.sidebarLayoutSkin,callback:function(t){e.sidebarLayoutSkin=t},expression:"sidebarLayoutSkin"}},[a("el-radio",{attrs:{label:"light",border:""}},[e._v("light")]),e._v(" "),a("el-radio",{attrs:{label:"dark",border:""}},[e._v("dark")])],1)],1)],1)},staticRenderFns:[]},o=a("46Yf")({computed:{navbarLayoutType:{get:function(){return this.$store.state.common.navbarLayoutType},set:function(e){this.$store.commit("common/updateNavbarLayoutType",e)}},sidebarLayoutSkin:{get:function(){return this.$store.state.common.sidebarLayoutSkin},set:function(e){this.$store.commit("common/updateSidebarLayoutSkin",e)}}}},r,!1,null,null,null);t.default=o.exports}});