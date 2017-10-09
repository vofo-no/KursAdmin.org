/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function t(n,o){var i=u.raw?n:r(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(r,c,f){if(void 0!==c&&!e.isFunction(c)){if(f=e.extend({},u.defaults,f),"number"==typeof f.expires){var a=f.expires,d=f.expires=new Date;d.setTime(+d+864e5*a)}return document.cookie=[n(r),"=",i(c),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var p=r?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,x=s.length;x>m;m++){var v=s[m].split("="),k=o(v.shift()),l=v.join("=");if(r&&r===k){p=t(l,c);break}r||void 0===(l=t(l))||(p[k]=l)}return p};u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});

/* ------- site.js ------- */

$(document).on('click', 'div.scroll-down', function() {
    $('html, body').animate({scrollTop: $('div.container:first').offset().top}, 500);
});



/* COOKIE-remember-selected-option: e = select id / cookie name */
$(function() {
    var e = "stf-valg";
    if (null !== $.cookie(e)) {
        $("#" + e + ' option[value="' + $.cookie(e) + '"]').attr("selected", "selected");
        $("#" + e).on('change', function() {
            var v = $(this).val(),
                o = $('#banner-form-login'),
                p = $('#banner-form-login-test'),
                q = $('#tilgang-stf');
            $.cookie(e, v, {
                expires: 90,
                path: "/"
            });
			$('#stf-table tr').removeClass('active');
            if (v) {
                o.attr('href', 'https://www.kursadmin.org/pls/kas/f?p=' + v).attr('disabled', false);
                p.attr('href', 'http://test.senitel.no/pls/kastest/f?p=' + v).attr('disabled', false);
				q.find('option').filter(function(){return $(this).val() == v}).prop('selected', true);
				$('#stf-row-' + v).addClass('active');
            } else {
                o.attr('href', '#').attr('disabled', true);
                p.attr('href', '#').attr('disabled', true);
            }
        }).trigger('change');
    }
});
