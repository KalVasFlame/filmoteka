(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(e,t,n){},"H/xR":function(e,t){var n="light-theme",a="dark-theme",r=document.querySelector("#theme-switch-toggle");function o(e,t){document.body.classList.add(e),document.body.classList.remove(t),localStorage.setItem("theme",e)}localStorage.getItem("theme")===a?(r.checked="true",o(a,n)):(r.checked=!1,o(n,a)),r.addEventListener("change",(function(e){e.target.checked?o(a,n):o(n,a)}))},Il5l:function(e,t){var n=document.getElementById("myBtn");function a(){document.body.scrollTop>100||document.documentElement.scrollTop>100?n.style.display="block":n.style.display="none"}window.onscroll=function(){a()},n.addEventListener("click",(function(e){e.preventDefault(),a(),window.scroll(40,40)}))},QfWi:function(e,t,n){"use strict";n.r(t);var a={body:document.body,logo:document.querySelector(".js-logo"),gallery:document.querySelector(".js-fetch-list"),home:document.querySelector(".js-header-home"),sliderContainer:document.querySelector(".js-slider-container"),headerSearchForm:document.querySelector(".js-form"),prevBtn:document.querySelector(".js-btn-p"),nextBtn:document.querySelector(".js-btn-n"),btnPopular:document.querySelector('[data-action="popular"]'),btnTopRated:document.querySelector('[data-action="top rated"]'),btnModalClose:document.querySelector(".modal-close"),filmInfoContainer:document.querySelector(".film-info-container"),filmModal:document.querySelector(".backdrop"),preloader:document.querySelector(".preloader"),titleFilm:document.querySelector(".photo-card-title"),myLibrary:document.getElementById("sign-in-status"),registrationBtn:document.getElementById("sign-in"),accountInfo:document.getElementById("account-details"),registrationModal:document.getElementById("registration-container"),test:document.querySelector(".test"),trailerModal:document.querySelector(".js-trailer-modal"),trailerBackdrop:document.querySelector(".js-trailer-backdrop"),backdrop:document.querySelector(".backdrop")};setTimeout((function(){sessionStorage.preload?a.preloader.remove():setTimeout((function(){a.preloader.remove(),sessionStorage.setItem("preload","done")}),2100)}),700);n("lYjL"),n("RtS0"),n("IvQZ"),n("8cZI"),n("WB5j"),n("D/wG"),n("JBxO"),n("FdtR"),n("4NM0"),n("3dw1");var r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],o="1a7532c831c19ca759402dbd11644ca2",l="https://api.themoviedb.org/3/",i={searchQuery:"",galleryStatus:"ByTrend",page:1,getByTrend:function(){var e=this;this.galleryStatus="ByTrend";var t=l+"trending/all/day?api_key="+o+"&page="+this.page;return fetch(t).then((function(e){return e.json()})).then((function(t){var n=t.results;return e.titleValidation(n),e.releaseDateValidation(n),e.posterValidation(n),e.genresValidation(n,r),n}))},getBySearchQuery:function(){var e=this;this.galleryStatus="BySearchQuery";var t=l+"search/movie?api_key="+o+"&language=en-US&page="+this.page+"&query="+this.searchQuery;return fetch(t).then((function(e){return e.json()})).then((function(t){var n=t.results;return e.titleValidation(n),e.releaseDateValidation(n),e.posterValidation(n),e.genresValidation(n,r),n}))},getByPopular:function(){var e=this;this.galleryStatus="ByPopular";var t=l+"movie/popular?api_key="+o+"&language=en-US&page="+this.page;return fetch(t).then((function(e){return e.json()})).then((function(t){var n=t.results;return e.titleValidation(n),e.releaseDateValidation(n),e.posterValidation(n),e.genresValidation(n,r),n}))},getByTopRated:function(){var e=this;this.galleryStatus="ByTopRated";var t=l+"movie/top_rated?api_key="+o+"&language=en-US&page="+this.page;return fetch(t).then((function(e){return e.json()})).then((function(t){var n=t.results;return e.titleValidation(n),e.releaseDateValidation(n),e.posterValidation(n),e.genresValidation(n,r),n}))},getById:function(e){return fetch(l+"movie/"+e+"?api_key="+o+"&language=en-US").then((function(e){return e.json()}))},getUpcoming:function(){var e=this,t=l+"movie/upcoming?api_key="+o+"&language=en-US&page="+this.page;return fetch(t).then((function(e){return e.json()})).then((function(t){var n=t.results;return e.titleValidation(n),e.releaseDateValidation(n),e.posterValidation(n),e.genresValidation(n,r),n}))},titleValidation:function(e){return e.forEach((function(e){return e.original_title?e.name?e.title?void 0:e.original_title="Sorry, No Info":e.original_title=e.title:e.original_title=e.name}))},releaseDateValidation:function(e){return e.forEach((function(e){if(!e.release_date)return e.release_date="2077";e.release_date=e.release_date.slice(0,4)}))},posterValidation:function(e){return e.forEach((function(e){return e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path:e.poster_path="https://i.pinimg.com/originals/d9/c4/1b/d9c41b5b1197e78fe5a6423a01734917.jpg"}))},genresValidation:function(e,t){return e.forEach((function(e){t.forEach((function(t){e.genre_ids.includes(t.id)&&e.genre_ids.push(t.name)})),e.genre_ids=e.genre_ids.filter((function(e){return isNaN(e)})).join(", ")})),e},getTrailerById:function(e){return fetch(l+"movie/"+e+"/videos?api_key="+o+"&language=en-US").then((function(e){return e.json()}))},incrementPage:function(){return this.page+=1},decrementPage:function(){if(1!==this.page)return this.page-=1}},c=n("xaHX"),s=n.n(c),u=(n("wcNg"),n("SzhR")),d=(n("VwVG"),n("SHTW"),n("DSQa"));function p(){if(a.registrationModal.classList.toggle("is-hidden"),a.registrationModal.classList.contains("is-hidden"))return window.removeEventListener("keydown",h),a.registrationModal.querySelector(".modal-close").removeEventListener("click",p),void a.registrationModal.removeEventListener("click",m);window.addEventListener("keydown",h),a.registrationModal.querySelector(".modal-close").addEventListener("click",p),a.registrationModal.addEventListener("click",m)}function m(e){e.target===a.registrationModal&&p()}function h(e){"Escape"===e.code&&p()}u.a.initializeApp({apiKey:"AIzaSyDCrVa6zpkJN0MnC22HGNcfi7vaIe8Op8M",authDomain:"filmoteka-bl1.firebaseapp.com",databaseURL:"https://filmoteka-bl1-default-rtdb.firebaseio.com",projectId:"filmoteka-bl1",storageBucket:"filmoteka-bl1.appspot.com",messagingSenderId:"616243203343",appId:"1:616243203343:web:c89027d397f3da6ce4827a",measurementId:"G-3Z1JDDZM39"});var f=new d.a.AuthUI(u.a.auth()),g=u.a.database(),v={callbacks:{signInSuccessWithAuthResult:function(e){return p(),!1},uiShown:function(){}},signInFlow:"popup",signInSuccessUrl:"/",signInOptions:[u.a.auth.GoogleAuthProvider.PROVIDER_ID,u.a.auth.FacebookAuthProvider.PROVIDER_ID,u.a.auth.GithubAuthProvider.PROVIDER_ID,u.a.auth.EmailAuthProvider.PROVIDER_ID],tosUrl:"https://www.termsfeed.com/live/6606e203-ca11-437b-b584-e1765cda9c0e>",privacyPolicyUrl:"https://www.privacypolicies.com/live/5a40fc7e-8fd2-4cd0-8754-e6ebf6281fb4"};function y(){u.a.auth().onAuthStateChanged((function(e){var t,n;e?(t=e.photoURL,n=e.displayName,a.registrationBtn.textContent="Sign out",a.registrationBtn.style.marginRight="0px",a.registrationBtn.addEventListener("click",b),a.accountInfo.insertAdjacentHTML("afterbegin",'<img  class="user-img" src= '+t+" alt= "+n+' width="48px">')):(a.registrationBtn.textContent="Sign in",a.registrationBtn.style.marginRight="60px",a.accountInfo.textContent="",a.registrationBtn.removeEventListener("click",b))}),(function(e){console.log(e)}))}function b(){u.a.auth().signOut(),document.getElementById("home").click()}function w(e,t){var n,a=u.a.auth().currentUser.uid,r={};r[null!=(n=t.id)?n:t.title]=t,g.ref("users/"+a+e).update(r)}function L(e){var t=u.a.auth().currentUser.uid;return g.ref("users/"+t+e).get().then((function(e){if(e.exists())return e.val();console.log("No data available")})).catch((function(e){console.error(e)}))}function _(e,t){var n=u.a.auth().currentUser.uid;g.ref("users/"+n+e+"/"+t).remove()}function k(e){i.page=1,R(e),i.getByPopular().then((function(e){a.gallery.innerHTML=s()(e)}))}function S(e){i.page=1,R(e),i.getByTopRated().then((function(e){a.gallery.innerHTML=s()(e)}))}function T(e,t,n,a,r,o,l){try{var i=e[o](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(a,r)}function B(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function l(e){T(o,a,r,l,i,"next",e)}function i(e){T(o,a,r,l,i,"throw",e)}l(void 0)}))}}function E(e){var t,n,a,r,o,l,i=document.querySelector(".add-t-w"),c=document.querySelector(".add-t-q"),s=null!=(t=e.id)?t:e.title;n=s,a=i,r=c,o=function(){var e=B(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("/watched");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=B(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("/queue");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o().then((function(e){e&&e[n]&&(a.textContent="remove from watched")})),l().then((function(e){e&&e[n]&&(r.textContent="remove from queue")})),i.addEventListener("click",(function(){if("add to watched"===i.textContent)return w("/watched",e),void(i.textContent="remove from watched");_("/watched",s),i.textContent="add to watched"})),c.addEventListener("click",(function(){if("add to queue"===c.textContent)return w("/queue",e),void(c.textContent="remove from queue");_("/queue",s),c.textContent="add to queue"}))}function x(e){e.target.classList.contains("current")||(a.myLibrary.classList.toggle("current"),a.home.firstElementChild.classList.toggle("current"))}function M(e){L(e).then((function(e){a.gallery.innerHTML=s()(e)})).catch((function(e){return console.log(e)}))}function P(e){M("/watched"),R(e)}function I(e){M("/queue"),R(e)}function R(e){e.target.classList.contains("active")||(a.btnPopular.classList.toggle("active"),a.btnTopRated.classList.toggle("active")),e.target!==a.home.firstElementChild&&e.target!==a.myLibrary||(a.btnPopular.classList.add("active"),a.btnTopRated.classList.remove("active"))}a.btnPopular.addEventListener("click",k),a.btnTopRated.addEventListener("click",S);var C=function(e){a.prevBtn.classList.remove("js-top-rated-prev"),a.nextBtn.classList.remove("js-top-rated-next"),a.prevBtn.classList.remove("js-by-popular-prev"),a.nextBtn.classList.remove("js-by-popular-next"),a.prevBtn.classList.add("js-by-trend-prev"),a.nextBtn.classList.add("js-by-trend-next"),x(e),function(e){a.gallery.nextElementSibling.style.display="block",a.btnPopular.addEventListener("click",k),a.btnTopRated.addEventListener("click",S),a.btnPopular.removeEventListener("click",P),a.btnTopRated.removeEventListener("click",I),a.btnPopular.textContent="popular",a.btnTopRated.textContent="top rated",a.btnPopular.classList.toggle("active"),R(e)}(e),e.preventDefault(),i.page=1,i.getByTrend().then((function(e){a.gallery.innerHTML=s()(e)}))};a.logo.addEventListener("click",C),a.home.addEventListener("click",C);a.headerSearchForm.addEventListener("submit",(function(e){e.preventDefault(),i.searchQuery=e.target[0].value,""!==i.searchQuery&&(e.target[0].value="",i.getBySearchQuery().then((function(e){a.gallery.innerHTML=s()(e)})))}));n("H/xR");var j=n("JTMI"),q=n("qI3A"),V=n.n(q);new j.a(".glide",{type:"slider",startAt:0,perView:7,autoplay:4e3,hoverpause:!0,bound:!0,gap:30,animationDuration:700,breakpoints:{920:{perView:5},767:{perView:3}}}).mount(),i.getUpcoming().then((function(e){a.sliderContainer.innerHTML=V()(e)})).catch((function(e){console.log(e)})),i.getByTrend().then((function(e){a.gallery.insertAdjacentHTML("beforeend",s()(e))})).catch((function(e){return console.log(e)}));n("Ri8E");window.addEventListener("load",(function(){return y()})),a.registrationBtn.addEventListener("click",(function(){"Sign out"!==a.registrationBtn.textContent&&(p(),f.start("#firebaseui-auth-container",v))})),a.myLibrary.addEventListener("click",(function(e){if(e.preventDefault(),"Sign in"===a.registrationBtn.textContent)return p(),void f.start("#firebaseui-auth-container",v);!function(e){a.gallery.innerHTML="",a.gallery.nextElementSibling.style.display="none",a.btnPopular.removeEventListener("click",k),a.btnTopRated.removeEventListener("click",S),a.btnPopular.addEventListener("click",P),a.btnTopRated.addEventListener("click",I),a.btnPopular.textContent="Watched",a.btnTopRated.textContent="Queue",R(e)}(e),x(e),M("/watched")}));n("Il5l");a.nextBtn.addEventListener("click",(function(){if("ByTrend"===i.galleryStatus)return i.incrementPage(),i.getByTrend().then((function(e){a.gallery.innerHTML=s()(e)})),void window.scrollTo({top:0,left:0,behavior:"smooth"});if("BySearchQuery"===i.galleryStatus)return i.incrementPage(),i.getBySearchQuery().then((function(e){a.gallery.innerHTML=s()(e)})),void window.scrollTo({top:0,left:0,behavior:"smooth"});if("ByPopular"===i.galleryStatus)return i.incrementPage(),i.getByPopular().then((function(e){a.gallery.innerHTML=s()(e)})),void window.scrollTo({top:0,left:0,behavior:"smooth"});if("ByTopRated"===i.galleryStatus)return i.incrementPage(),i.getByTopRated().then((function(e){a.gallery.innerHTML=s()(e)})),void window.scrollTo({top:0,left:0,behavior:"smooth"})})),a.prevBtn.addEventListener("click",(function(){if("ByTrend"===i.galleryStatus)return i.decrementPage(),i.getByTrend().then((function(e){a.gallery.innerHTML=s()(e)})),void window.scrollTo({top:0,left:0,behavior:"smooth"});if("BySearchQuery"===i.galleryStatus)return i.decrementPage(),i.getBySearchQuery().then((function(e){a.gallery.innerHTML=s()(e)})),void window.scrollTo({top:0,left:0,behavior:"smooth"});if("ByPopular"===i.galleryStatus)return i.decrementPage(),i.getByPopular().then((function(e){a.gallery.innerHTML=s()(e)})),void window.scrollTo({top:0,left:0,behavior:"smooth"});if("ByTopRated"===i.galleryStatus)return i.decrementPage(),i.getByTopRated().then((function(e){a.gallery.innerHTML=s()(e)})),void window.scrollTo({top:0,left:0,behavior:"smooth"})}));n("lmye"),n("Muwe"),n("aZFp");var H=n("wfPh"),D=n.n(H),A=n("XhRf"),O=n.n(A);a.gallery.addEventListener("click",(function(e){if(a.filmInfoContainer.innerHTML="",!(U=e.target.closest(".photo-card")))return;Q=U.getAttribute("data"),i.getById(Q).then((function(e){return W(e),a.filmInfoContainer.innerHTML=D()(e),e})).then((function(e){return E(e),e.id})).then((function(e){i.getTrailerById(e).then((function(e){var t=e.results;document.querySelector(".film-poster-wrapper").addEventListener("click",(function(e){var n=O()(t[0]);a.trailerModal.innerHTML=n,a.trailerModal.classList.remove("is-close"),a.trailerBackdrop.classList.remove("is-close")}))}))})).catch(console.log),a.filmModal.classList.remove("is-hidden")})),a.btnModalClose.addEventListener("click",F),a.filmModal.addEventListener("click",(function(e){if(e.target!==a.filmModal)return;F()})),a.sliderContainer.addEventListener("click",(function(e){if(a.filmInfoContainer.innerHTML="",!(U=e.target.closest(".card-slider")))return;Q=U.getAttribute("data-action"),i.getById(Q).then((function(e){return W(e),a.filmInfoContainer.innerHTML=D()(e),e})).then(E).catch(console.log),a.filmModal.classList.remove("is-hidden"),document.body.style.overflow="hidden"})),window.addEventListener("keydown",(function(e){if("Escape"===e.code)return F()}));var Q=null,U=null;function F(){if(!a.filmModal.classList.contains("is-hidden")&&a.trailerBackdrop.classList.contains("is-close"))return a.btnPopular.classList.contains("active")&&"Watched"===a.btnPopular.textContent&&M("/watched"),a.btnTopRated.classList.contains("active")&&"Queue"===a.btnTopRated.textContent&&M("/queue"),document.body.style.overflow="visible",a.filmModal.classList.add("is-hidden")}function N(e){("Escape"===e.code||e.target.classList.contains("js-trailer-backdrop"))&&(a.trailerBackdrop.classList.add("is-close"),a.trailerModal.innerHTML="")}function W(e){var t=U.getAttribute("data-img"),n=U.getAttribute("data-title"),a=U.getAttribute("data-pop"),r=U.getAttribute("data-v_a"),o=U.getAttribute("data-v_c"),l=U.getAttribute("data-overview"),i=U.getAttribute("data-genres");e.poster_path||(e.poster_path=t),e.title||(e.title=n),e.popularity||(e.popularity=a),e.original_title||(e.original_title=n),e.overview||(e.overview=l),e.vote_average||(e.vote_average=r),e.vote_count||(e.vote_count=o),e.genres||(e.genres=i.split(" ").map((function(e){return{name:e}})))}window.addEventListener("keydown",N),a.trailerBackdrop.addEventListener("click",N);n("0HMw")},XhRf:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<iframe width="560" height="315" src="https://www.youtube.com/embed/'+e.escapeExpression("function"==typeof(o=null!=(o=l(n,"key")||(null!=t?l(t,"key"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"key",hash:{},data:r,loc:{start:{line:1,column:68},end:{line:1,column:75}}}):o)+'" title="YouTube video player"\r\n  frameborder="0"\r\n  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "></iframe>'},useData:!0})},qI3A:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,c="function",s=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\r\n<div class="card-slider" data-action=\''+s(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:i)===c?o.call(l,{name:"id",hash:{},data:r,loc:{start:{line:3,column:38},end:{line:3,column:44}}}):o)+'\'>\r\n    <div class="thumbe">\r\n        <div class="btn-id">\r\n\r\n        </div>\r\n        <img class="slider-img" src="https://image.tmdb.org/t/p/w500'+s(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:i)===c?o.call(l,{name:"poster_path",hash:{},data:r,loc:{start:{line:13,column:68},end:{line:13,column:83}}}):o)+'" alt="'+s(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:i)===c?o.call(l,{name:"title",hash:{},data:r,loc:{start:{line:13,column:90},end:{line:13,column:99}}}):o)+" "+s(typeof(o=null!=(o=u(n,"name")||(null!=t?u(t,"name"):t))?o:i)===c?o.call(l,{name:"name",hash:{},data:r,loc:{start:{line:13,column:100},end:{line:13,column:108}}}):o)+"\"\r\n            data-id='"+s(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:i)===c?o.call(l,{name:"id",hash:{},data:r,loc:{start:{line:14,column:21},end:{line:14,column:27}}}):o)+'\' height=" auto">\r\n    </div>\r\n</div>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:17,column:9}}}))?o:""},useData:!0})},wfPh:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return" "+e.escapeExpression("function"==typeof(o=null!=(o=l(n,"name")||(null!=t?l(t,"name"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:r,loc:{start:{line:17,column:54},end:{line:17,column:62}}}):o)+" "},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,l,i=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="film-poster-wrapper">\r\n  <img loading="lazy" src="https://image.tmdb.org/t/p/w500'+u(typeof(l=null!=(l=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?l:c)===s?l.call(i,{name:"poster_path",hash:{},data:r,loc:{start:{line:2,column:58},end:{line:2,column:73}}}):l)+'" alt="'+u(typeof(l=null!=(l=d(n,"title")||(null!=t?d(t,"title"):t))?l:c)===s?l.call(i,{name:"title",hash:{},data:r,loc:{start:{line:2,column:80},end:{line:2,column:89}}}):l)+'" class="film-poster">\r\n</div>\r\n<div class="film-info">\r\n  <h2 class="film-title">'+u(typeof(l=null!=(l=d(n,"title")||(null!=t?d(t,"title"):t))?l:c)===s?l.call(i,{name:"title",hash:{},data:r,loc:{start:{line:5,column:25},end:{line:5,column:34}}}):l)+'</h2>\r\n  <div class="film-descr-container">\r\n    <ul class="film-description">\r\n      <li class="film-descr-itm">Vote/Votes:</li>\r\n      <li class="film-descr-itm">Popularity: <span class="film-descr-itm-txt-pop"></span></li>\r\n      <li class="film-descr-itm">Original Title: <span class="film-descr-itm-txt-orig_ttl"></span></li>\r\n      <li class="film-descr-itm">Genre:</li>\r\n    </ul>\r\n    <ul class="film-description-txt">\r\n      <li class="film-descr-itm-txt"><span class="vote-ave">'+u(typeof(l=null!=(l=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?l:c)===s?l.call(i,{name:"vote_average",hash:{},data:r,loc:{start:{line:14,column:60},end:{line:14,column:76}}}):l)+"</span>/"+u(typeof(l=null!=(l=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?l:c)===s?l.call(i,{name:"vote_count",hash:{},data:r,loc:{start:{line:14,column:84},end:{line:14,column:98}}}):l)+'</li>\r\n      <li class="film-descr-itm-txt">'+u(typeof(l=null!=(l=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?l:c)===s?l.call(i,{name:"popularity",hash:{},data:r,loc:{start:{line:15,column:37},end:{line:15,column:51}}}):l)+'</li>\r\n      <li class="film-descr-itm-txt">'+u(typeof(l=null!=(l=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?l:c)===s?l.call(i,{name:"original_title",hash:{},data:r,loc:{start:{line:16,column:37},end:{line:16,column:55}}}):l)+'</li>\r\n      <li class="film-descr-itm-txt">'+(null!=(o=d(n,"each").call(i,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:17,column:37},end:{line:17,column:72}}}))?o:"")+'</li>\r\n    </ul>\r\n  </div>\r\n\r\n  <h3 class="about-title">About</h3>\r\n  <p class="about-description">'+u(typeof(l=null!=(l=d(n,"overview")||(null!=t?d(t,"overview"):t))?l:c)===s?l.call(i,{name:"overview",hash:{},data:r,loc:{start:{line:22,column:31},end:{line:22,column:43}}}):l)+'</p>\r\n  <div class="button-add-container" style="margin-top: 20px;">\r\n    <button class="modal-button add-t-w">add to watched</button>\r\n    <button class="modal-button add-t-q">add to queue</button>\r\n  </div>\r\n</div>'},useData:!0})},xaHX:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,c="function",s=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\r\n<li class="photo-card" data="'+s(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:i)===c?o.call(l,{name:"id",hash:{},data:r,loc:{start:{line:3,column:29},end:{line:3,column:35}}}):o)+'" data-img="'+s(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:i)===c?o.call(l,{name:"poster_path",hash:{},data:r,loc:{start:{line:3,column:47},end:{line:3,column:62}}}):o)+'" data-title="'+s(typeof(o=null!=(o=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?o:i)===c?o.call(l,{name:"original_title",hash:{},data:r,loc:{start:{line:3,column:76},end:{line:3,column:94}}}):o)+'"\r\n  data-pop="'+s(typeof(o=null!=(o=u(n,"popularity")||(null!=t?u(t,"popularity"):t))?o:i)===c?o.call(l,{name:"popularity",hash:{},data:r,loc:{start:{line:4,column:12},end:{line:4,column:26}}}):o)+'" data-v_a="'+s(typeof(o=null!=(o=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?o:i)===c?o.call(l,{name:"vote_average",hash:{},data:r,loc:{start:{line:4,column:38},end:{line:4,column:54}}}):o)+'" data-v_c="'+s(typeof(o=null!=(o=u(n,"vote_count")||(null!=t?u(t,"vote_count"):t))?o:i)===c?o.call(l,{name:"vote_count",hash:{},data:r,loc:{start:{line:4,column:66},end:{line:4,column:80}}}):o)+'" data-overview="'+s(typeof(o=null!=(o=u(n,"overview")||(null!=t?u(t,"overview"):t))?o:i)===c?o.call(l,{name:"overview",hash:{},data:r,loc:{start:{line:4,column:97},end:{line:4,column:109}}}):o)+'"\r\n  data-genres="'+s(typeof(o=null!=(o=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?o:i)===c?o.call(l,{name:"genre_ids",hash:{},data:r,loc:{start:{line:5,column:15},end:{line:5,column:28}}}):o)+'">\r\n  <img loading="lazy" src="https://image.tmdb.org/t/p/w500'+s(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:i)===c?o.call(l,{name:"poster_path",hash:{},data:r,loc:{start:{line:6,column:58},end:{line:6,column:73}}}):o)+'" alt="'+s(typeof(o=null!=(o=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?o:i)===c?o.call(l,{name:"original_title",hash:{},data:r,loc:{start:{line:6,column:80},end:{line:6,column:98}}}):o)+'" width="320"\r\n    height="auto">\r\n\r\n  <div class="photo-card-container">\r\n    <h2 class="photo-card-title"> '+s(typeof(o=null!=(o=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?o:i)===c?o.call(l,{name:"original_title",hash:{},data:r,loc:{start:{line:10,column:34},end:{line:10,column:52}}}):o)+'</h2>\r\n    <p class="photo-card-release-date">'+s(typeof(o=null!=(o=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?o:i)===c?o.call(l,{name:"release_date",hash:{},data:r,loc:{start:{line:11,column:39},end:{line:11,column:55}}}):o)+'</p>\r\n    <p class="photo-card-rating"><span class="rating-span"> Rating: </span> '+s(typeof(o=null!=(o=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?o:i)===c?o.call(l,{name:"vote_average",hash:{},data:r,loc:{start:{line:12,column:76},end:{line:12,column:92}}}):o)+'</p>\r\n    <p class="photo-card-genres">'+s(typeof(o=null!=(o=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?o:i)===c?o.call(l,{name:"genre_ids",hash:{},data:r,loc:{start:{line:13,column:33},end:{line:13,column:46}}}):o)+"</p>\r\n  </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:16,column:9}}}))?o:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.04ff7fed6ddcbf27bb1d.js.map