(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{"2d3b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:e.sortedKeyList,"search-input":e.searchInput,"item-text":"name","item-value":"name",clearable:"","deletable-chips":"",dense:"",filled:"",multiple:"",rounded:"","small-chips":"",solo:""},on:{"update:searchInput":function(t){e.searchInput=t},"update:search-input":function(t){e.searchInput=t},change:function(t){e.searchInput=""}},scopedSlots:e._u([{key:"selection",fn:function(t){return[a("v-chip",e._b({attrs:{"input-value":t.selected,close:""},on:{click:t.select,"click:close":function(a){return e.removeSelectedKey(t.item)}}},"v-chip",t.attrs,!1),[t.item.avatar?a("v-avatar",{attrs:{left:""}},[a("v-img",{attrs:{src:t.item.avatar},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1):a("v-icon",{attrs:{left:""}},[e._v(" mdi-"+e._s(t.item.icon)+" ")]),e._v(" "+e._s(t.item.name)+" ")],1)]}},{key:"item",fn:function(t){return[[a("v-list-item-avatar",[t.item.avatar?a("img",{attrs:{src:t.item.avatar}}):a("v-icon",{attrs:{left:""}},[e._v(" mdi-"+e._s(t.item.icon)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.selectedKeys,callback:function(t){e.selectedKeys=t},expression:"selectedKeys"}})],1)],1),a("v-row",[e._l(e.selectedKeys,(function(t,s){return[a("v-col",{key:t,staticClass:"mt-2",attrs:{cols:"12"}},[a("strong",[e._v(e._s(t))])]),e._l(e.itemsWithKey(t),(function(c){return a("v-col",{key:t+":"+s+":"+c.name,staticClass:"d-flex child-flex",attrs:{cols:"6"}},[a("ItemCard",{attrs:{"is-tile":!0,"show-metadata":e.showMetadata,"image-src":c.avatar,"header-class":"align-end"},on:{"select-item":function(t){return e.selectItem(c.id)}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(c.name)+" ")]},proxy:!0},{key:"metadata",fn:function(){return[a("div",[e._v(" "+e._s(c.description)+" ")])]},proxy:!0}],null,!0)})],1)}))]}))],2)],1)},c=[],n=a("5530"),r=(a("99af"),a("b0c0"),a("a434"),a("2f62")),i=a("6ff8"),o={components:{ItemCard:i["a"]},data:function(){return{searchInput:"",selectedKeys:[]}},beforeMount:function(){this.selectedKeys=this.getPrefs.searchKeys},computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["sortedKeyList","itemsWithKey","getPrefs"])),{},{showMetadata:function(){return this.getPrefs.showMetadata}}),watch:{selectedKeys:function(e,t){console.log("selectedKeys changed: ".concat(t," -> ").concat(e)),this.storeSearchKeys(e)}},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])(["addSearchKey","removeSearchKey","storeSearchKeys"])),{},{selectItem:function(e){console.log("selectItem: ".concat(e)),this.$router.push({name:"Item",params:{slug:e}})},removeSelectedKey:function(e){console.log("removeSelectedKey: ".concat(e));var t=this.selectedKeys.indexOf(e.name);t>=0&&this.selectedKeys.splice(t,1)}})},l=o,u=a("2877"),d=a("6544"),m=a.n(d),f=a("c6a6"),h=a("8212"),v=a("cc20"),p=a("62ad"),y=a("a523"),K=a("132d"),g=a("adda"),_=a("8270"),b=a("5d23"),I=a("490a"),w=a("0fd9"),k=Object(u["a"])(l,s,c,!1,null,null,null);t["default"]=k.exports;m()(k,{VAutocomplete:f["a"],VAvatar:h["a"],VChip:v["a"],VCol:p["a"],VContainer:y["a"],VIcon:K["a"],VImg:g["a"],VListItemAvatar:_["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VProgressCircular:I["a"],VRow:w["a"]})}}]);
//# sourceMappingURL=search.2b997b7e.js.map