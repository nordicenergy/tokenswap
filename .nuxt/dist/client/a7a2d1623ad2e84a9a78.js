(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{450:function(t,e,r){"use strict";var n={props:{src:{type:String,default:""},height:{type:String,default:"30"}},data:function(){return{error:!1}}},c=r(30),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.error?r("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"dollar",width:t.height,height:t.height,fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}})]):r("img",{attrs:{src:t.src,height:t.height},on:{error:function(e){t.error=!0}}})},[],!1,null,null,null);e.a=component.exports},451:function(t,e,r){var content=r(455);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("7366a1d1",content,!0,{sourceMap:!1})},454:function(t,e,r){"use strict";var n=r(451);r.n(n).a},455:function(t,e,r){(t.exports=r(36)(!1)).push([t.i,".bordered{border-right:1px solid}",""])},461:function(t,e,r){"use strict";r.r(e);r(68),r(28),r(29),r(20),r(49),r(50),r(67);var n=r(3),c=r(25),o=r(450),l=r(8),d=r(17),h=r(236),f=r(111);function m(object,t){var e=Object.keys(object);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(object)),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e}var v,y,x,_,O,k={head:function(){return{title:"TOKENSWAP | Sell ".concat(this.order.sell.quantity," for ").concat(this.order.buy.quantity," by omgnoob4ever")}},components:{TokenImage:o.a},data:function(){return{order:{},no_found:!1,loading:!0}},computed:function(t){for(var i=1;i<arguments.length;i++)if(i%2){var source=null!=arguments[i]?arguments[i]:{};m(source,!0).forEach(function(e){Object(c.a)(t,e,source[e])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[i])):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(arguments[i],e))});return t}({},Object(f.b)("chain",["rpc","scatter"]),{},Object(f.b)(["user"])),asyncData:(O=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,o,h,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.error,c=e.params,o=r.getters["chain/rpc"],t.prev=2,t.next=5,o.get_table_rows({code:d.a.contract,scope:d.a.contract,table:"orders",lower_bound:c.id,limit:1});case 5:if(h=t.sent,!(f=h.rows[0])||f.id!=c.id){t.next=11;break}return t.abrupt("return",{order:f,loading:!1});case 11:n({message:"Order ".concat(c.id," not found or finished"),statusCode:404});case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(2),Object(l.captureException)(t.t0),t.abrupt("return",n({message:"Error fetching order: "+t.t0,statusCode:500}));case 18:case"end":return t.stop()}},t,null,[[2,14]])})),function(t){return O.apply(this,arguments)}),methods:{login:(_=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.$store.dispatch("chain/login");case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),Object(l.captureException)(t.t0),this.$notify({title:"Loading error",message:t.t0.message,type:"error"});case 10:return t.prev=10,this.loading=!1,t.finish(10);case 13:case"end":return t.stop()}},t,this,[[1,6,10,13]])})),function(){return _.apply(this,arguments)}),cancelOrder:(x=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.user){t.next=2;break}return t.abrupt("return",this.$notify({title:"Authorization",message:"Pleace login first",type:"info"}));case 2:return r=this.$loading({lock:!0,text:"Wait for Scatter"}),t.prev=3,n=this.order,t.next=7,Object(h.cancelorder)(n.maker,n.id);case 7:this.$notify({title:"Success",message:"Order canceled ".concat(n.id),type:"success"}),this.$router.push({name:"index"}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(3),Object(l.captureException)(t.t0,{extra:{order:e}}),this.$notify({title:"Place order",message:t.t0.message,type:"error"}),console.log(t.t0);case 16:return t.prev=16,r.close(),t.finish(16);case 19:case"end":return t.stop()}},t,this,[[3,11,16,19]])})),function(t){return x.apply(this,arguments)}),fetchOrder:(y=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)})),function(){return y.apply(this,arguments)}),buy:(v=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n,c,o,f=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$store.state.chain.scatterConnected){t.next=2;break}return t.abrupt("return",this.$notify({title:"Authorization",message:"Pleace connect Scatter",type:"info"}));case 2:if(e=this.$loading({lock:!0,text:"Wait for Scatter"}),!this.$store.state.chain.scatterConnected||this.$store.state.user){t.next=6;break}return t.next=6,this.$store.dispatch("chain/login");case 6:return t.prev=6,r=this.order,n=r.buy,r.sell,c=r.id,t.next=10,Object(h.transfer)(n.contract,this.user.name,n.quantity,"fill|".concat(c));case 10:o=t.sent,this.$alert('<a href="'.concat(d.a.monitor,"/tx/").concat(o.transaction_id,'" target="_blank">Transaction id</a>'),"Transaction complete!",{dangerouslyUseHTMLString:!0,confirmButtonText:"OK",callback:function(t){f.$router.push({name:"index"}),f.$notify({title:"Success",message:"You fill ".concat(c," order"),type:"success"})}}),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(6),Object(l.captureException)(t.t0,{extra:{order:this.order}}),this.$notify({title:"Place order",message:t.t0.message,type:"error"}),console.log(t.t0);case 19:return t.prev=19,e.close(),t.finish(19);case 22:case"end":return t.stop()}},t,this,[[6,14,19,22]])})),function(){return v.apply(this,arguments)})}},w=(r(454),r(30)),component=Object(w.a)(k,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.no_found?r("el-card",{staticClass:"box-card mt-3"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("Order: "+t._s(t.id))]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.$router.push({name:"index"})}}},[t._v("Go to main page")])],1),r("div",{staticClass:"text item text-center"},[r("h1",{staticClass:"display-4"},[t._v("Order "+t._s(t.id)+" not found or finished")])])]):r("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card mt-3"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("Order "+t._s(t.order.id)+" created by  "),r("a",{attrs:{href:t._f("monitorAccount")(t.order.maker),target:"_blank"}},[t._v(t._s(t.order.maker))])]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.$router.push({name:"index"})}}},[t._v("Go to main page")])],1),t.order.maker?r("div",{staticClass:"text item"},[r("div",{staticClass:"row mb-3"},[r("div",{staticClass:"col-6 text-center bordered"},[r("h2",[t._v("Sell")]),r("hr"),r("TokenImage",{staticClass:"mr-2 mb-2",attrs:{src:t.$tokenLogo(t.order.sell.quantity.split(" ")[1],t.order.sell.contract),height:"50"}}),r("div",{staticClass:"lead"},[t._v(t._s(t.order.sell.quantity)+"@"),r("a",{attrs:{href:t._f("monitorAccount")(t.order.sell.contract),target:"_blank"}},[t._v(t._s(t.order.sell.contract))])])],1),r("div",{staticClass:"col-6 text-center"},[r("h2",[t._v("Buy")]),r("hr"),r("TokenImage",{staticClass:"mr-2 mb-2",attrs:{src:t.$tokenLogo(t.order.buy.quantity.split(" ")[1],t.order.buy.contract),height:"50"}}),r("div",{staticClass:"lead"},[t._v(t._s(t.order.buy.quantity)+"@"),r("a",{attrs:{href:t._f("monitorAccount")(t.order.buy.contract),target:"_blank"}},[t._v(t._s(t.order.buy.contract))])])],1)]),t.user?r("div",[t.user&&t.order.maker==t.user.name?r("el-button",{staticClass:"w-100",attrs:{type:"warning"},on:{click:t.cancelOrder}},[t._v("Cancel order")]):r("el-button",{staticClass:"w-100",attrs:{type:"primary"},on:{click:t.buy}},[t._v("Buy   "+t._s(t.order.sell.quantity)+"@"+t._s(t.order.sell.contract))])],1):r("div",[r("el-button",{staticClass:"w-100",on:{click:t.login}},[t._v("Pleace login")])],1)]):t._e()])},[],!1,null,null,null);e.default=component.exports}}]);