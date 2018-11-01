(function(e){function t(t){for(var i,n,a=t[0],u=t[1],c=t[2],d=0,m=[];d<a.length;d++)n=a[d],s[n]&&m.push(s[n][0]),s[n]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],i=!0,a=1;a<o.length;a++){var u=o[a];0!==s[u]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=o[0]))}return e}var i={},s={app:0},r=[];function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0050":function(e,t,o){"use strict";var i=o("2d9f"),s=o.n(i);s.a},"034f":function(e,t,o){"use strict";var i=o("64a9"),s=o.n(i);s.a},"0ce0":function(e,t,o){},"2b3c":function(e,t,o){},"2d9f":function(e,t,o){},"30d6":function(e,t,o){},3774:function(e,t,o){"use strict";var i=o("ab9d"),s=o.n(i);s.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var i=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Layout")],1)},r=[],n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-layout"},["/"!==this.$route.path?o("div",[o("Navbar")],1):e._e(),o("AppContent")],1)},a=[],u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("router-view")],1)},c=[],l=(o("3774"),o("2877")),d={},m=Object(l["a"])(d,u,c,!1,null,"a2c7d876",null);m.options.__file="AppContent.vue";var v=m.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("nav",e._l(e.links,function(t){return o("router-link",{key:t.id,attrs:{to:""+t.page}},[e._v("\n    "+e._s(t.text)+"\n    ")])}))])},f=[],b={name:"Navbar",data:function(){return{links:[{id:0,text:"Home",page:"/"},{id:1,text:"About",page:"/about"},{id:2,text:"Guide",page:"/guide"}]}}},h=b,g=(o("5dfc"),Object(l["a"])(h,p,f,!1,null,null,null));g.options.__file="Navbar.vue";var _=g.exports,y={name:"appLayout",data:function(){return{showNav:!1}},components:{AppContent:v,Navbar:_},created:function(){console.log(this.$route)},watch:{$route(e,t){console.log(this.$route)}}},P=y,k=(o("8766"),Object(l["a"])(P,n,a,!1,null,null,null));k.options.__file="index.vue";var x=k.exports,S={name:"app",components:{Layout:x}},w=S,C=(o("034f"),Object(l["a"])(w,s,r,!1,null,null,null));C.options.__file="App.vue";var O=C.exports,j=o("8c4f"),T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Works Cited")])])}],$={name:"About"},Z=$,z=(o("e76e"),Object(l["a"])(Z,T,N,!1,null,null,null));z.options.__file="About.vue";var D=z.exports,E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hero",style:{"background-image":"url("+e.img+")"}},[o("h1",[e._v("Zombie Survival Guide")]),o("h3",[e._v("Get Started before it's too late")]),o("router-link",{attrs:{to:"/guide"}},[o("v-btn",[e._v("\n    Get Started\n    ")])],1)],1)},H=[],A=o("ca81"),G=o.n(A),U={name:"Hero",data:function(){return{img:G.a}}},I=U,q=(o("f9bb"),Object(l["a"])(I,E,H,!1,null,null,null));q.options.__file="Hero.vue";var L=q.exports,M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Guide")]),o("div",{class:["post-view",e.selected?"post-view--active":"",e.ready?"post-view--ready":""]},[e.selected?o("div",{staticClass:"post-view__container"},[o("div",{staticClass:"post-controls"},[o("div",{staticClass:"post-control post-control--close",on:{click:function(t){e.closePost()}}},[o("v-icon",{attrs:{name:"x"}})],1),o("div",{staticClass:"post-control",attrs:{id:"next-post"},on:{click:function(t){e.nextPost()}}},[o("v-icon",{attrs:{name:"chevron-right"}})],1),o("div",{staticClass:"post-control",attrs:{id:"prev-post"},on:{click:function(t){e.prevPost()}}},[o("v-icon",{attrs:{name:"chevron-left"}})],1)]),o("h2",{staticClass:"post-view__title"},[e._v(e._s(e.currentPost.page))]),o("div",{staticClass:"post-view__content",domProps:{innerHTML:e._s(e.currentPost.content)}})]):e._e()]),o("div",{class:["post-list",e.selected?"post-list--hide":""]},e._l(e.posts,function(t,i){return o("div",{key:t.id,staticClass:"post",on:{mouseenter:function(t){e.changePost(i)},click:function(t){e.selectedPost(i)}}},[o("h2",{staticClass:"post__title"},[e._v(e._s(t.page))])])}))])},Q=[],F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v("\n  "+e._s(e.$route.params.id)+"\n")])},J=[],R={beforeRouteUpdate:function(e,t,o){console.log("Updating slug from ".concat(t," to ").concat(e)),o()}},W=R,B=(o("5b9e"),Object(l["a"])(W,F,J,!1,null,null,null));B.options.__file="Tip.vue";var K=B.exports,V=[{id:1,page:"One",content:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},{id:2,page:"Two",content:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},{id:3,page:"Three",content:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},{id:4,page:"Four",content:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},{id:5,page:"Five",content:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."}],X=V,Y={name:"Guide",components:{Tip:K},data:function(){return{posts:X,routes:[],currentRouteId:0,currentPost:X[0],postIndex:0,selected:!0,ready:!0,lastSelectedPost:0,clipPath:X[0].clip_path}},methods:{changePost:function(e){this.postImage!=this.posts[e].image&&0==this.selected&&(this.postImage=this.posts[e].image,this.clipPath=this.posts[e].clip_path)},closePost:function(){null!=this.lastSelectedPost&&(this.selected=!1,this.ready=!1,this.clipPath=this.posts[this.lastSelectedPost].clip_path)},selectedPost:function(e){var t=this;this.selected=!0,this.clipPath=this.selectedClipPath,this.lastSelectedPost=e,this.currentPost=this.posts[e],setTimeout(function(){t.ready=!0},600)},nextPost:function(){var e=this;this.lastSelectedPost<this.posts.length-1&&(this.lastSelectedPost++,this.ready=!1,setTimeout(function(){e.currentPost=e.posts[e.lastSelectedPost],e.postImage=e.currentPost.image,e.ready=!0},600))},prevPost:function(){var e=this;this.lastSelectedPost<=this.posts.length-1&&0!=this.lastSelectedPost&&(this.lastSelectedPost--,this.ready=!1,setTimeout(function(){e.currentPost=e.posts[e.lastSelectedPost],e.postImage=e.currentPost.image,e.ready=!0},600))}},created:function(){var e=this;window.addEventListener("keydown",function(t){39==t.keyCode&&e.nextPost(),37==t.keyCode&&e.prevPost(),27==t.keyCode&&e.closePost()})}},ee=Y,te=(o("0050"),Object(l["a"])(ee,M,Q,!1,null,null,null));te.options.__file="Guide.vue";var oe=te.exports;i["default"].use(j["a"]);var ie=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:D},{path:"/guide",name:"Guide",component:oe}]}),se=o("3459"),re=o("ce5b"),ne=o.n(re);o("d1e7");i["default"].use(se["a"],"v-icon"),i["default"].use(ne.a),i["default"].config.productionTip=!1,new i["default"]({router:ie,render:function(e){return e(O)}}).$mount("#app")},"5b9e":function(e,t,o){"use strict";var i=o("0ce0"),s=o.n(i);s.a},"5dfc":function(e,t,o){"use strict";var i=o("30d6"),s=o.n(i);s.a},"64a9":function(e,t,o){},8766:function(e,t,o){"use strict";var i=o("ef15"),s=o.n(i);s.a},ab9d:function(e,t,o){},baff:function(e,t,o){},ca81:function(e,t,o){e.exports=o.p+"img/the-walking-dead-atlanta.47f2e256.jpg"},e76e:function(e,t,o){"use strict";var i=o("2b3c"),s=o.n(i);s.a},ef15:function(e,t,o){},f9bb:function(e,t,o){"use strict";var i=o("baff"),s=o.n(i);s.a}});
//# sourceMappingURL=app.c7f6f9c8.js.map