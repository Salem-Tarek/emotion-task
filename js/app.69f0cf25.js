(function(t){function e(e){for(var s,i,n=e[0],c=e[1],l=e[2],d=0,u=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var n=a[i];0!==r[n]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},r={app:0},o=[];function n(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"64ec844e"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"d859dd76"}[t]+".css",r=c.p+s,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var l=o[n],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===r))return e()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){l=u[n],d=l.getAttribute("data-href");if(d===s||d===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete i[t],p.parentNode.removeChild(p),a(o)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){i[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=n(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,a[1](u)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/emotion-task/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1844:function(t,e,a){},"1f57":function(t,e,a){"use strict";a("1844")},"2a6f":function(t,e,a){"use strict";a("906b")},"3bb1":function(t,e,a){},"3c6d":function(t,e,a){},"512d":function(t,e,a){"use strict";a("3bb1")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=a("7496"),r=a("40dc"),o=a("8336"),n=a("132d"),c=a("f6c4"),l=a("2fa4"),d=function(){var t=this,e=t._self._c;return e(i["a"],[e("div",{staticClass:"sideBars"},[e("NavSideBar",{attrs:{show:t.showNav},on:{navSideClosed:t.toggleNavListAction}}),e("FavSideBar",{attrs:{show:t.showFav},on:{favSideClosed:t.toggleFavListAction}}),e("CartSideBar",{attrs:{show:t.showCart},on:{cartSideClosed:t.toggleCartListAction}})],1),e(r["a"],{staticClass:"elevation-0 pb-4",attrs:{app:""}},[e("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/Salem-Tarek/emotion-task",target:"_blank"}},[e(n["a"],{staticClass:"black--text",attrs:{large:""}},[t._v("mdi-github")])],1),e(l["a"]),e("div",{staticClass:"cart-nav d-flex align-center"},[e(n["a"],{staticClass:"d-block d-sm-none",on:{click:t.toggleNavListAction}},[t._v("mdi-menu")]),e(n["a"],{on:{click:t.toggleCartListAction}},[t._v("mdi-cart")]),e(n["a"],{on:{click:t.toggleFavListAction}},[t._v("mdi-heart")])],1),e("div",{staticClass:"list d-none d-sm-flex"},t._l(t.links,(function(a,s){return e(o["a"],{key:s,class:["mx-2",0===s&&"Home"===t.$route.name?"active":"","mb-2"],attrs:{to:"/",color:"grey lighten-2",tile:"",light:"",depressed:""}},[t._v(t._s(a))])})),1)],1),e(c["a"],[e("router-view")],1)],1)},u=[],p=a("8860"),h=a("da13"),m=a("1baa"),v=a("5d23"),g=a("f774"),f=(a("14d9"),function(){var t=this,e=t._self._c;return e(g["a"],{attrs:{app:"",temporary:""},model:{value:t.showSideBar,callback:function(e){t.showSideBar=e},expression:"showSideBar"}},[e("div",{staticClass:"grey lighten-2 d-flex rounded-0 mb-0 pa-2"},[e(l["a"]),e(n["a"],{on:{click:function(e){t.showSideBar=!1}}},[t._v("mdi-close")])],1),e(p["a"],{attrs:{nav:"",dense:""}},[e(m["a"],[e(h["a"],{on:{click:function(e){return t.$router.push("/")}}},[e(v["b"],[t._v("Products")])],1),e(h["a"],[e(v["b"],[t._v("Bar")])],1),e(h["a"],[e(v["b"],[t._v("Fizz")])],1),e(h["a"],[e(v["b"],[t._v("Buzz")])],1)],1)],1)],1)}),C=[],b={name:"NavSideBar",props:{show:{type:Boolean}},data(){return{group:null,showSideBar:null}},watch:{show:{handler(t){this.showSideBar=t},immediate:!0},showSideBar(t){!1===t&&!0===this.show&&this.$emit("navSideClosed")}}},w=b,y=(a("bb96"),a("2877")),L=Object(y["a"])(w,f,C,!1,null,null,null),_=L.exports,x=a("adda"),k=a("8270"),F=function(){var t=this,e=t._self._c;return e(g["a"],{attrs:{width:"350",right:"",app:"",temporary:""},model:{value:t.showSideBar,callback:function(e){t.showSideBar=e},expression:"showSideBar"}},[e("div",{staticClass:"grey lighten-2 d-flex justify-space-between rounded-0 mb-0 pa-2"},[e("h2",{staticClass:"text-uppercase"},[t._v("Wish List")]),e(n["a"],{on:{click:function(e){t.showSideBar=!1}}},[t._v("mdi-close")])],1),e(p["a"],{staticClass:"pa-0",attrs:{nav:"",dense:""}},[e(m["a"],[t._l(t.favListGetter,(function(a){return[e(h["a"],{key:"fav-item-"+a.id,staticClass:"mb-0 d-flex justify-space-between",attrs:{ripple:!1}},[e("div",{staticClass:"details_img d-flex align-center"},[e(k["a"],{staticClass:"mr-3",attrs:{tile:"",size:"50"}},[e(x["a"],{attrs:{width:"50",height:"50",contain:"",src:a.img}})],1),e("div",{staticClass:"details"},[e(v["b"],{staticClass:"subtitle-1 grey--text"},[t._v(t._s(a.title))]),e("p",{staticClass:"subtitle-1 font-weight-bold mb-0 ml-2"},[t._v(" $ "+t._s(parseFloat(a.price).toFixed(2))+" ")])],1)],1),e(v["a"],[e("div",{staticClass:"cart-item-info d-flex justify-space-between align-center"},[e(l["a"]),e(n["a"],{on:{click:function(e){return e.preventDefault(),t.toggleIsFavAction(a.id)}}},[t._v("mdi-trash-can")])],1)])],1),e("hr",{key:a.id})]}))],2)],1)],1)},A=[],I=a("2f62"),S={name:"FavSideBar",props:{show:{type:Boolean}},data(){return{showSideBar:null}},watch:{show:{handler(t){this.showSideBar=t},immediate:!0},showSideBar(t){!1===t&&!0===this.show&&this.$emit("favSideClosed")}},computed:{...Object(I["c"])(["favListGetter"])},methods:{...Object(I["b"])(["toggleIsFavAction"])}},j=S,B=(a("512d"),Object(y["a"])(j,F,A,!1,null,null,null)),T=B.exports,O=a("8654"),N=function(){var t=this,e=t._self._c;return e(g["a"],{staticClass:"cart",attrs:{right:"",app:"",temporary:""},model:{value:t.showSideBar,callback:function(e){t.showSideBar=e},expression:"showSideBar"}},[e("div",{staticClass:"grey lighten-2 d-flex justify-space-between rounded-0 mb-0 pa-2"},[e("h2",{staticClass:"text-uppercase"},[t._v("Cart List")]),e(n["a"],{on:{click:function(e){t.showSideBar=!1}}},[t._v("mdi-close")])],1),t.cartList.length?e(p["a"],{staticClass:"pa-0 mb-0 cartItems",attrs:{nav:"",dense:""}},[e(m["a"],[t._l(t.cartList,(function(a,s){return[e(h["a"],{key:`cart-item-${a.key||a.id}-${s}`,staticClass:"mb-3 d-flex justify-space-between mt-2",attrs:{ripple:!1}},[e("div",{staticClass:"details_img d-flex align-center"},[e(k["a"],{staticClass:"mr-3",attrs:{tile:"",size:"50"}},[e(x["a"],{attrs:{width:"50",height:"50",contain:"",src:a.img}})],1),e("div",{staticClass:"details"},[e(v["b"],{staticClass:"subtitle-1 grey--text"},[t._v(t._s(a.title))]),e("p",{staticClass:"subtitle-1 font-weight-bold ml-2 mb-1"},[t._v(" $ "+t._s(parseFloat(a.price).toFixed(2))+" "),a.weight?e("span",[t._v("/ "+t._s(a.weight+" gm"))]):t._e()]),e("div",{staticClass:"quantity d-flex align-center justify-space-between rounded-pill px-0"},[e(o["a"],{staticClass:"mb-0 elevation-0",attrs:{color:"transparent","x-small":""},on:{click:function(e){return t.decreaseQuantityAction(a)}}},[t._v("-")]),e(O["a"],{staticClass:"text-center rounded-0",attrs:{"hide-spin-buttons":"","hide-details":"",outlined:"",dense:"",type:"number"},model:{value:a.quantity,callback:function(e){t.$set(a,"quantity",e)},expression:"cartProduct.quantity"}}),e(o["a"],{staticClass:"mb-0 elevation-0",attrs:{color:"transparent","x-small":""},on:{click:function(e){return t.increaseQuantityAction(a)}}},[t._v("+")])],1)],1)],1),e(v["a"],{staticClass:"align-self-end"},[e("div",{staticClass:"d-flex"},[e(l["a"]),e("div",{staticClass:"actions d-flex flex-wrap justify-center"},[e("p",{staticClass:"red--text caption mb-0 text-center mr-2",on:{click:function(e){return t.removeProductFromCartAction(a)}}},[t._v("Remove")]),t.favListGetter.map(t=>t.id).indexOf(a.id)<0?e("p",{staticClass:"caption mb-0 text-center",on:{click:function(e){return t.addToWishList(a.id)}}},[t._v("Move To wishlist")]):t._e()])],1)])],1),e("hr",{key:(a.key||a.id)+s})]}))],2)],1):t._e(),t.cartList.length?e("div",{staticClass:"totalPrice"},[e(h["a"],{staticClass:"justify-space-between align-center total subTotal mt-3"},[e("p",[t._v("Subtotal")]),e("p",[t._v(t._s(t.totalCost)+" EGP")])]),e(h["a"],{staticClass:"justify-space-between align-center total tax"},[e("p",[t._v("Tax")]),e("p",[t._v("included")])]),e(h["a"],{staticClass:"justify-space-between align-center total allTotal"},[e("p",[t._v("Order Total")]),e("p",[t._v(t._s(t.totalCost)+" EGP")])])],1):e("div",{staticClass:"text-center mt-4"},[e("h1",{staticClass:"d-flex align-center justify-center display-1"},[e(n["a"],{staticClass:"black--text",attrs:{large:"",left:""}},[t._v("mdi-close-circle-outline")]),e("span",[t._v("No Products")])],1)])],1)},P=[],q={name:"CartSideBar",props:{show:{type:Boolean}},data(){return{showSideBar:null}},watch:{show:{handler(t){this.showSideBar=t},immediate:!0},showSideBar(t){!1===t&&!0===this.show&&this.$emit("cartSideClosed")}},computed:{...Object(I["d"])(["cartList","totalCost"]),...Object(I["c"])(["favListGetter"])},methods:{...Object(I["b"])(["removeProductFromCartAction","toggleIsFavAction","removeProductFromCartAction","toggleFavListAction","toggleCartListAction","decreaseQuantityAction","increaseQuantityAction","getTotalCostAction"]),isExistInFavList(t){return this.favListGetter.find(e=>e.id===t)},addToWishList(t){this.toggleIsFavAction(t),this.toggleCartListAction(),this.toggleFavListAction()}},mounted(){this.getTotalCostAction()}},E=q,$=(a("5b86"),Object(y["a"])(E,N,P,!1,null,null,null)),G=$.exports,Q={name:"App",data:()=>({links:["Products","Food","Non Food","Fashion & Linen"]}),components:{NavSideBar:_,FavSideBar:T,CartSideBar:G},computed:{...Object(I["d"])(["showCart","showNav","showFav"])},methods:{...Object(I["b"])(["toggleCartListAction","toggleNavListAction","toggleFavListAction"]),navigateToGithub(){window.location="https://github.com/Salem-Tarek/emotion-task"}}},z=Q,D=(a("2a6f"),Object(y["a"])(z,d,u,!1,null,"0d923a20",null)),M=D.exports,H=a("9483");Object(H["a"])("/emotion-task/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var W=a("8c4f"),J=a("62ad"),K=a("a523"),R=a("0fd9"),U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"products-header"},[e(K["a"],[e("div",{staticClass:"header-wrapper d-flex align-center justify-space-between mt-6"},[e("div",{staticClass:"prodsNum"},[t._v(t._s(t.products.length)+" "+t._s(1!==t.products.length?"Products":"product"))]),e("div",{staticClass:"sort d-flex align-center"},[e("div",{staticClass:"mr-2 d-flex"},[e("p",{staticClass:"mx-2 mb-0"},[t._v("Sort By")]),e("span",{staticClass:"font-weight-bold d-flex align-center"},[t._v("Newest First "),e(n["a"],[t._v("mdi-chevron-down")])],1)])])]),e("div",{staticClass:"prods my-3"},[e(R["a"],t._l(t.products,(function(t){return e(J["a"],{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("Product",{attrs:{product:t}})],1)})),1)],1)])],1)])},V=[],X=a("4ca6"),Y=a("b0af"),Z=a("ce87"),tt=function(){var t=this,e=t._self._c;return e(K["a"],[e(R["a"],[e(J["a"],{staticClass:"mx-auto",attrs:{cols:"8",sm:"12"}},[e(Y["a"],{staticClass:"position-relative",attrs:{elevation:"0"}},[e(Z["a"],{scopedSlots:t._u([{key:"default",fn:function({hover:a}){return[a||t.product.isFav?e(n["a"],{staticClass:"favIcon",attrs:{color:"teal darken-1"},on:{click:function(e){return e.preventDefault(),t.addToFavList(t.product.id)}}},[t._v("mdi-heart")]):e(n["a"],{staticClass:"favIcon",attrs:{color:"teal darken-1"},on:{click:function(e){return t.addToFavList(t.product.id)}}},[t._v("mdi-heart-outline")])]}}])}),e(x["a"],{staticClass:"my-3",attrs:{src:t.product.img,contain:"",height:"200"}}),e("p",{staticClass:"grey--text text--darken-2 font-weight-medium"},[t._v(" "+t._s(t.product.description)+" ")]),e("p",{staticClass:"price font-weight-bold"},[t._v("EGP "+t._s(t.product.price))]),e(o["a"],{staticClass:"addToCart",attrs:{small:"",rounded:"",outlined:""},on:{click:function(e){return e.preventDefault(),t.addToCart(t.product)}}},[e("span",{staticClass:"font-weight-bold"},[t._v("Add to cart")]),t.cartNum?e(X["a"],{attrs:{color:"teal darken-1",content:""+t.cartNum,"offset-y":"-2","offset-x":"-2"}}):t._e()],1)],1)],1)],1)],1)},et=[],at={name:"Product",props:{product:{type:Object,required:!0}},data:()=>({showFav:!1,showCart:!1,cartNum:0}),methods:{...Object(I["b"])(["toggleIsFavAction","updateCartListAction","toggleCartListAction","toggleNavListAction","toggleFavListAction","deactiveIsCartChangesAction"]),addToFavList(t){this.toggleIsFavAction(t),this.toggleFavListAction()},addToCart(t){t.weights?this.$router.push("/product/"+t.id):(this.updateCartListAction(t),this.quantityInCart(t.id),this.toggleCartListAction())},quantityInCart(t){let e=this.cartList.filter(e=>parseInt(e.id)===parseInt(t)),a=0;for(let s of e)a+=parseInt(s.quantity);this.cartNum=a}},computed:{...Object(I["d"])(["products","cartList","isCartChanges"]),...Object(I["c"])(["favListGetter"])},mounted(){this.quantityInCart(this.product.id),this.deactiveIsCartChangesAction()},watch:{isCartChanges(t){t&&this.quantityInCart(this.product.id)}}},st=at,it=(a("b839"),Object(y["a"])(st,tt,et,!1,null,"9b0f9b5e",null)),rt=it.exports,ot={name:"Home",components:{Product:rt},data(){return{}},computed:{...Object(I["d"])(["products","cartList"])},methods:{isExistInCart(t){if(this.cartList.length)for(let e of this.cartList)if(parseInt(e.id)===parseInt(t))return e.quantity;return 0}}},nt=ot,ct=(a("1f57"),Object(y["a"])(nt,U,V,!1,null,null,null)),lt=ct.exports;s["a"].use(W["a"]);const dt=[{path:"/",name:"Home",component:lt},{path:"/product/:id",name:"Product",component:()=>a.e("about").then(a.bind(null,"d2f1"))}],ut=new W["a"]({mode:"history",base:"/emotion-task/",routes:dt});var pt=ut,ht=a("0e44");s["a"].use(I["a"]);var mt=new I["a"].Store({plugins:[Object(ht["a"])()],state:{products:[{id:1,img:a("9b19"),price:200,title:"Lorem ipsum 1",description:"Lorem ipsum dolor sit amet, consectetur.",isFav:!1,weights:[250,500,750,1e3]},{id:2,img:a("9b19"),price:200,title:"Lorem ipsum 2",description:"Lorem ipsum dolor sit amet, consectetur.",isFav:!1},{id:3,img:a("9b19"),price:200,title:"Lorem ipsum 3",description:"Lorem ipsum dolor sit amet, consectetur.",isFav:!0,weights:[250,500,750,1e3]},{id:4,img:a("9b19"),price:200,title:"Lorem ipsum 4",description:"Lorem ipsum dolor sit amet, consectetur.",isFav:!1,weights:[250,500,750,1e3]},{id:5,img:a("9b19"),price:200,title:"Lorem ipsum 5",description:"Lorem ipsum dolor sit amet, consectetur.",isFav:!1},{id:6,img:a("9b19"),price:200,title:"Lorem ipsum 6",description:"Lorem ipsum dolor sit amet, consectetur.",isFav:!1,weights:[250,500,750,1e3]}],cartList:[],showNav:!1,showFav:!1,showCart:!1,isCartChanges:!1,totalCost:0},getters:{favListGetter(t){return t.products.filter(t=>t.isFav)}},mutations:{toggleIsFav(t,e){let a=t.products.findIndex(t=>t.id===e);t.products[a].isFav=!t.products[a].isFav},updateCartList(t,e){if(t.cartList.length)for(let a of t.cartList)if(parseInt(a.id)==parseInt(e.id)){let a=t.cartList.findIndex(t=>parseInt(t.id)===parseInt(e.id));return void(t.cartList[a].quantity=parseInt(t.cartList[a].quantity)+1)}e.quantity=1,t.cartList.push(e)},pushToCart(t,e){t.cartList.push(e)},removeProductFromCart(t,e){e.key?(t.cartList=t.cartList.filter(t=>t.key!==e.key),localStorage.setItem("removedFromCart",e.key)):t.cartList=t.cartList.filter(t=>parseInt(t.id)!==parseInt(e.id))},increaseQuantity(t,e){if(e.key){let a=t.cartList.findIndex(t=>t.key===e.key);t.cartList[a].quantity=parseInt(t.cartList[a].quantity)+1}else{let a=t.cartList.findIndex(t=>parseInt(t.id)===parseInt(e.id));a>=0?t.cartList[a].quantity=parseInt(t.cartList[a].quantity)+1:t.cartList.push(e)}},decreaseQuantity(t,e){if(parseInt(e.quantity)>1)if(e.key){let a=t.cartList.findIndex(t=>t.key===e.key);t.cartList[a].quantity=parseInt(t.cartList[a].quantity)-1}else{let a=t.cartList.findIndex(t=>t.id===e.id);a>=0&&(t.cartList[a].quantity=parseInt(t.cartList[a].quantity)-1)}},toggleNavList(t){t.showNav=!t.showNav},toggleFavList(t){t.showFav=!t.showFav},toggleCartList(t){t.showCart=!t.showCart},activeIsCartChanges(t){t.isCartChanges=!0},deactiveIsCartChanges(t){t.isCartChanges=!1},getTotalCost(t){let e=0;for(let a of t.cartList)e+=parseInt(a.quantity)*a.price;t.totalCost=e.toFixed(2)}},actions:{toggleIsFavAction({commit:t},e){t("toggleIsFav",e)},pushToCartAction({commit:t},e){t("pushToCart",e),t("getTotalCost")},removeProductFromCartAction({commit:t},e){t("removeProductFromCart",e),t("getTotalCost")},updateCartListAction({commit:t},e){t("updateCartList",e),t("getTotalCost")},increaseQuantityAction({commit:t},e){const a=new Promise((t,e)=>{t(),e()});a.then(()=>{t("increaseQuantity",e),t("getTotalCost"),t("activeIsCartChanges")}).then(()=>{t("deactiveIsCartChanges")}).catch(t=>console.log(t))},decreaseQuantityAction({commit:t},e){const a=new Promise((t,e)=>{t(),e()});a.then(()=>{t("decreaseQuantity",e),t("getTotalCost"),t("activeIsCartChanges")}).then(()=>{t("deactiveIsCartChanges")}).catch(t=>console.log(t))},toggleNavListAction({commit:t}){t("toggleNavList")},toggleFavListAction({commit:t}){t("toggleFavList")},toggleCartListAction({commit:t}){t("toggleCartList")},deactiveIsCartChangesAction({commit:t}){t("deactiveIsCartChanges")},getTotalCostAction({commit:t}){t("getTotalCost")}},modules:{}}),vt=a("f309");s["a"].use(vt["a"]);var gt=new vt["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:pt,store:mt,vuetify:gt,render:t=>t(M)}).$mount("#app")},"5b86":function(t,e,a){"use strict";a("3c6d")},"906b":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},b839:function(t,e,a){"use strict";a("ba2a")},ba2a:function(t,e,a){},bb96:function(t,e,a){"use strict";a("e4e9")},e4e9:function(t,e,a){}});
//# sourceMappingURL=app.69f0cf25.js.map