_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{EcgH:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/item",function(){return n("mfwm")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),u=n("elyg"),f=n("nOHt"),i=n("vNVm"),a={};function l(e,t,n,r){if((0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t=!1!==e.prefetch,n=(0,f.useRouter)(),o=n&&n.pathname||"/",s=c.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],f=n[1];return{href:c,as:e.as?(0,u.resolveHref)(o,e.as):f||c}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,y=e.replace,h=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var w=c.Children.only(v),E=w&&"object"===typeof w&&w.ref,_=(0,i.useIntersection)({rootMargin:"200px"}),g=r(_,2),O=g[0],R=g[1],L=c.default.useCallback((function(e){O(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,O]);(0,c.useEffect)((function(){var e=R&&t&&(0,u.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=a[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,R,m,t,n]);var M={ref:L,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,f,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==f&&(f=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:i}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,p,d,y,h,b,m)},onMouseEnter:function(e){(0,u.isLocalURL)(p)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};return(e.passHref||"a"===w.type&&!("href"in w.props))&&(M.href=(0,u.addBasePath)((0,u.addLocale)(d,"undefined"!==typeof m?m:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(w,M)};t.default=s},mfwm:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n("q1tI"),o=n.n(r),c=n("YFqc"),u=n.n(c);n("vcXL");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,n,r,c=s(f);function f(){return i(this,f),c.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){return o.a.createElement("div",{className:"item"},o.a.createElement("div",null,o.a.createElement(u.a,{href:"/"},o.a.createElement("a",null,"Back Home"))),o.a.createElement("h2",null))}}])&&a(t.prototype,n),r&&a(t,r),f}(r.Component)},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!f,o=(0,c.useRef)(),a=(0,c.useState)(!1),l=r(a,2),s=l[0],p=l[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||s||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,u=r.elements;return u.set(e,t),c.observe(e),function(){c.unobserve(e),0===u.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return(0,c.useEffect)((function(){f||s||(0,u.default)((function(){return p(!0)}))}),[s]),[d,s]};var c=n("q1tI"),u=o(n("0G5g")),f="undefined"!==typeof IntersectionObserver;var i=new Map},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[["EcgH",0,1,2,5]]]);