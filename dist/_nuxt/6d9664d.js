(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{233:function(t,r,e){var content=e(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("139f2100",content,!0,{sourceMap:!1})},234:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));e(69);function n(t){return t.startsWith("/")?"https://stickershop.azurewebsites.net".concat(t):t}},235:function(t,r,e){"use strict";e.r(r);var n=e(234),o={props:{products:Array,error:Object,storeUrl:String},directives:{lazy:{inserted:function(t){new IntersectionObserver((function(r,e){r.forEach((function(r){if(r.isIntersecting){var n=r.target;n.src=n.dataset.src,e.unobserve(t)}}))})).observe(t)}}},methods:{getStrapiMedia:n.a}},c=(e(237),e(4)),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[t.error?n("div",[t._v("\r\n    "+t._s(t.error)+"\r\n  ")]):n("div",{staticClass:"m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8"},t._l(t.products,(function(r){return n("div",{key:r.id,staticClass:"border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"},[n("nuxt-link",{attrs:{to:"/products/"+r.slug}},[n("div",{staticClass:"rounded-t-lg bg-white pt-2 pb-2"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"crop mx-auto",attrs:{src:e(236),"data-src":""+t.getStrapiMedia(r.image.formats.thumbnail.url)}})]),t._v(" "),n("div",{staticClass:"pl-4 pr-4 pb-4 pt-4 rounded-lg"},[n("h4",{staticClass:"mt-1 font-semibold text-base leading-tight truncate text-gray-700"},[t._v(t._s(r.title)+" sticker")]),t._v(" "),n("div",{staticClass:"mt-1 text-sm text-gray-700"},[t._v(t._s(r.description))])])])],1)})),0)])}),[],!1,null,null,null);r.default=component.exports},236:function(t,r,e){t.exports=e.p+"img/placeholder-image.e11ba59.png"},237:function(t,r,e){"use strict";var n=e(233);e.n(n).a},238:function(t,r,e){(r=e(52)(!1)).push([t.i,".crop{width:180px;height:180px}",""]),t.exports=r},241:function(t,r,e){"use strict";e.r(r);e(20);var n=e(2),o={data:function(){return{category:{},error:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$strapi.$categories.findOne(t.$route.params.id);case 3:t.category=r.sent,r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),t.error=r.t0;case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()},components:{Products:e(235).default}},c=e(4),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("Products",{attrs:{products:this.category.products,error:this.error}})}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{Products:e(235).default})}}]);
//# sourceMappingURL=6d9664d.js.map