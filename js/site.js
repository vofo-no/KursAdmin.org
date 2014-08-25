/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function t(n,o){var i=u.raw?n:r(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(r,c,f){if(void 0!==c&&!e.isFunction(c)){if(f=e.extend({},u.defaults,f),"number"==typeof f.expires){var a=f.expires,d=f.expires=new Date;d.setTime(+d+864e5*a)}return document.cookie=[n(r),"=",i(c),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var p=r?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,x=s.length;x>m;m++){var v=s[m].split("="),k=o(v.shift()),l=v.join("=");if(r&&r===k){p=t(l,c);break}r||void 0===(l=t(l))||(p[k]=l)}return p};u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});


/* ------- site.js ------- */

/* FADE-on-scroll-function: o = fadeBegin, c=fadeFinish */
$(function(){var o=10,c=400,n=$("div.scroll-down");$(window).on("scroll",function(){var l=$(document).scrollTop(),s=0;console.log(l),o>=l?s=1:c>=l&&(s=1-l/c),n.css("opacity",s)})});

/* Login clicks */
$(function(){var a='#stf-valg';$('#banner-form-login').on('click',function(){location.href='https://www.kursadmin.org/pls/kas/f?p='+$(a).val()});$('#banner-form-login-test').on('click',function(){location.href='http://test.senitel.no/pls/kastest/f?p='+$(a).val()});});

/* COOKIE-remember-selected-option: e = select id / cookie name */
$(function(){var e="stf-valg";null!=$.cookie(e)&&$("#"+e+' option[value="'+$.cookie(e)+'"]').attr("selected","selected"),$("#"+e).change(function(){$.cookie(e,$("#"+e+" option:selected").val(),{expires:90,path:"/"})})});

