_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{Ov82:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,n,r,a=u(f);function f(){return c(this,f),a.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){return o.a.createElement("header",{className:"masthead"},o.a.createElement("div",{className:"container h-100"},o.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},o.a.createElement("div",{className:"col-lg-10 align-self-end"},o.a.createElement("h1",{className:"text-uppercase text-white font-weight-bold"},"M\xf6ge Tee"),o.a.createElement("hr",{className:"divider my-4"})),o.a.createElement("div",{className:"col-lg-8 align-self-baseline"},o.a.createElement("p",{className:"text-white-75 font-weight-light mb-5"},"DEDICATED JUST FOR TEA")))))}}])&&i(t.prototype,n),r&&i(t,r),f}(o.a.Component);t.a=p},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("5Yp1");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,r,a=f(c);function c(){return i(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.handleTabEvent()}},{key:"handleTabEvent",value:function(){document.querySelectorAll(".navbar #navbarResponsive li").forEach((function(e){e.addEventListener("keyup",(function(e){13==e.which&&(event.preventDefault(),e.target.getElementsByClassName("nav-link")[0].click())}))}))}},{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top py-3",id:"mainNav"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"/",tabIndex:"-1"},o.a.createElement("img",{src:"/img/moge/logo.png",height:"60",alt:"company logo",tabIndex:"0"})),o.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},o.a.createElement("ul",{className:"navbar-nav ml-auto my-2 my-lg-0"},o.a.createElement("li",{className:"nav-item",tabIndex:"0"},o.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about",tabIndex:"-1"},"About")),o.a.createElement("li",{className:"nav-item",tabIndex:"0"},o.a.createElement("a",{className:"nav-link js-scroll-trigger",tabIndex:"-1",href:"#shuffle-menu"},"Menu")),o.a.createElement("li",{className:"nav-item",tabIndex:"0"},o.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#locations",tabIndex:"-1"},"Locations")),o.a.createElement("li",{className:"nav-item",tabIndex:"0"},o.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#gallery",tabIndex:"-1"},"Gallery")),o.a.createElement("li",{className:"nav-item",tabIndex:"0"},o.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#contact",tabIndex:"-1"},"Contact")),o.a.createElement("li",{className:"nav-item",tabIndex:"0"},o.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#jobs",tabIndex:"-1"},"Jobs")),o.a.createElement("li",{className:"nav-item",tabIndex:"0"},o.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#franchise",tabIndex:"-1"},"Franchise"))))))}}])&&l(t.prototype,n),r&&l(t,r),c}(o.a.Component),m=n("Ov82"),b=n("wxuQ");function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}o.a.Component;var _=n("Dom9");function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),e}function R(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){R(n,e);var t=k(n);function n(e){var r;return x(this,n),(r=t.call(this)).state={gallery:"undefined"!==typeof e.data?e.data.gallery:_.gallery},r}return N(n,[{key:"componentDidMount",value:function(){this.handleTabEvent()}},{key:"handleTabEvent",value:function(){document.querySelectorAll(".gallery-box").forEach((function(e){e.addEventListener("keyup",(function(e){13==e.which&&(event.preventDefault(),e.target.click())}))}))}},{key:"render",value:function(){return o.a.createElement("section",{id:"gallery",className:"page-section"},o.a.createElement("div",{className:"container-fluid p-0"},o.a.createElement("div",{className:"row no-gutters"},this.state.gallery.map((function(e,t){return o.a.createElement(C,{info:e,key:t})})))))}}]),n}(o.a.Component),C=function(e){R(n,e);var t=k(n);function n(e){return x(this,n),t.call(this,e)}return N(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-4 col-sm-6"},o.a.createElement("a",{className:"gallery-box",href:this.props.info.img,title:this.props.info.caption,tabIndex:"-1"},o.a.createElement("img",{className:"img-fluid",src:this.props.info.img2,alt:this.props.info.caption,tabIndex:"0"}),o.a.createElement("div",{className:"gallery-box-caption"},o.a.createElement("div",{className:"gallery-category text-white-50"},this.props.info.t1),o.a.createElement("div",{className:"gallery-name"},this.props.info.t2))))}}]),n}(o.a.Component),A=I;function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=W(e);if(t){var o=W(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return J(this,n)}}function J(e,t){return!t||"object"!==M(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}o.a.Component;var G=n("G96P"),Q=n("18LF"),Y=n("8lYe"),B=n("ArTG"),V=n("FgAK"),X=n("E32k");function H(e){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=te(e);if(t){var o=te(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ee(this,n)}}function ee(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(i,e);var t,n,r,c=z(i);function i(){return K(this,i),c.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null,o.a.createElement(y,null),o.a.createElement(m.a,{data:this.props.data}),o.a.createElement(b.a,null),o.a.createElement(B.a,{data:this.props.data}),o.a.createElement(V.a,{data:this.props.data}),o.a.createElement(A,{data:this.props.data}),o.a.createElement(G.a,null),o.a.createElement(X.a,null),o.a.createElement(Q.a,null),o.a.createElement(Y.a,null)))}}])&&Z(t.prototype,n),r&&Z(t,r),i}(o.a.Component);t.default=ne},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},wxuQ:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,n,r,a=u(f);function f(){return c(this,f),a.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){return o.a.createElement("section",{className:"page-section bg-secondary",id:"about"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"text-dark"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("h2",{className:"text-dark mt-0"},"About"),o.a.createElement("hr",{className:"divider dark my-4"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},o.a.createElement("img",{src:"/img/moge/about-us.jpg",alt:"About Us"})),o.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 text-dark about-text"},"MOGE TEE is dedicated to delivering the finest Bubble Tea in America, using only natural and fresh ingredients to deliver new and fashionable drinks that are extremely rich in flavor for our customers! With over 300 outlets worldwide,  Moge Tee has won the hearts of tea lovers around the world all the way from China,  Japan, Vietnam, Malaysia to Australia, and is now expanding its reach to the United States of America.",o.a.createElement("br",null),o.a.createElement("br",null),"MOGE TEE makes each cup of tea with care and no detail is overlooked, including the ambiance of each of our meticulously designed locations. We are determined to offer our best to our customers, and we truly live our motto: WE NEVER COMPROMISE THE QUALITY OF OUR PRODUCTS."))))))}}])&&i(t.prototype,n),r&&i(t,r),f}(o.a.Component);t.a=p}},[["vlRD",0,1,3,4,6]]]);