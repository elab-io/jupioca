(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{ArTG:function(e,t,o){"use strict";var i=o("q1tI"),a=o.n(i),r=o("OkTZ"),n=o("Dom9");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t,o){return t&&c(e.prototype,t),o&&c(e,o),e}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,i=h(e);if(t){var a=h(this).constructor;o=Reflect.construct(i,arguments,a)}else o=i.apply(this,arguments);return d(this,o)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){g(o,e);var t=p(o);function o(e){var i;return l(this,o),(i=t.call(this)).categoryButtons="#shuffle-menu .filter-group li a",i.shuffleGrid="#shuffle-menu #shuffle-grid-menu",i.itemSelector="#shuffle-menu .category",i.sizer="#shuffle-menu .sizer",i.state={menu:"undefined"!==typeof e.data?e.data.menu:n.menu},i}return m(o,[{key:"componentDidMount",value:function(){this.addCategoryButtonEventListener();var e=document.querySelector(this.shuffleGrid);this.shuffle=new r.a(e,{itemSelector:this.itemSelector,sizer:this.sizer,group:this.setDefaultGroup()})}},{key:"addCategoryButtonEventListener",value:function(){var e=this,t=document.querySelectorAll(this.categoryButtons);t.forEach((function(t){t.addEventListener("click",(function(t){e.setItemActiveState(t.target),e.shuffle.filter(t.target.dataset.filter)}))})),t.forEach((function(t){t.addEventListener("keyup",(function(t){9==t.which&&(e.setItemActiveState(t.target),e.shuffle.filter(t.target.dataset.filter))}))}))}},{key:"updateMenuDropdownLable",value:function(e){document.querySelector(".menu-dropdown-button").innerHTML=e.text}},{key:"setGroupImage",value:function(e){}},{key:"setDefaultGroup",value:function(){var e=this,t=this.state.menu.filter((function(e){return 1==e.default}))[0];return"undefined"==typeof t&&(t=this.state.menu[0]),document.querySelectorAll(this.categoryButtons).forEach((function(o){o.dataset.filter==t["group-name"]&&e.setItemActiveState(o)})),t["group-name"]}},{key:"setItemActiveState",value:function(e){document.querySelectorAll(this.categoryButtons).forEach((function(e){e.classList.remove("active")})),e.classList.add("active")}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"page-section",id:"shuffle-menu"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("ul",{className:"filter-group col-sm-12 nav justify-content-center"},this.state.menu.map((function(e,t){return a.a.createElement("li",{className:"nav-item",key:t},a.a.createElement("a",{tabIndex:"0",className:"nav-link","data-filter":e["group-name"]},e["group-name"]))})))),a.a.createElement("div",{id:"shuffle-grid-menu"},this.state.menu.map((function(e,t){return a.a.createElement(w,{menu:e,key:t})}))),a.a.createElement("div",{className:"sizer"},"\xa0\xa0\xa0"))))}}]),o}(a.a.Component),w=function(e){g(o,e);var t=p(o);function o(e){return l(this,o),t.call(this,e)}return m(o,[{key:"render",value:function(){var e=this;return a.a.createElement("ul",{className:"category row","data-groups":'["'+this.props.menu["group-name"]+'"]'},this.props.menu["group-items"].map((function(t,o){var i=e.props.menu.id+o;return a.a.createElement("li",{key:i,className:"group-item col-lg-6 col-sm-12"},a.a.createElement("div",{className:"group-item__wrapper"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"group-item__image col-sm-12 col-md-3"},a.a.createElement("img",{src:t.image,alt:t.title+t.n2})),a.a.createElement("div",{className:"group-item__text_container col-sm-12  col-md-9"},a.a.createElement("div",{className:"group-item__title"},t.title,a.a.createElement("br",null),t.n2),a.a.createElement("div",{className:"group-item__description"},t.description),t.calories?a.a.createElement("div",{className:"group-item__calories"},"Calories: ",t.calories):null))))})))}}]),o}(a.a.Component);t.a=f},Dom9:function(e){e.exports=JSON.parse('{"menu":[{"id":"C1","group-name":"Fruit Tea","n2":"\u9c9c\u679c\u8336","default":true,"imgs":[{"img":"classic_fruit_tea.jpg"}],"group-items":[{"title":"Fresh Lemon Four Season Tea","n2":"\u7206\u67e0\u56db\u5b63\u6625","description":"Made with fresh lemon and lime (Non Caffeine;  Non-Diary). \u9644\u65b0\u9c9c\u9752\u67e0\u548c\u9ec4\u67e0","calories":"97.5","price":"$8.75","image":"/img/menu/c11.jpg"},{"title":"Super Fruit Green Tea","n2":"\u8d85\u7ea7\u6c34\u679c\u7eff","description":"Made with fresh orange, lime , lemon , watermelon (Non Caffeine;  Non-Diary). \u9644\u4e0a \u65b0\u9c9c\u897f\u74dc\uff0c\u6a59\u5b50 \uff0c\u9752\u67e0\uff0c\u9ec4\u62e7","calories":"58.4","price":"$6.00","image":"/img/menu/c12.jpg"},{"title":"Cheese Foam Red Dragon Fruit Tea","n2":"\u829d\u58eb\u7ea2\u8089\u706b\u9f99\u679c\u8336","description":"Made with fresh red dragon fruit (Non Caffeine;  Non-Diary). \u91c7\u7528\u65b0\u9c9c\u7684\u7ea2\u8089\u706b\u9f99\u679c","calories":"58.4","price":"$6.00","image":"/img/menu/c13.jpg"},{"title":"Cheese Foam Berry Tea","n2":"\u6ee1\u676f\u8393\u8393\u8336","description":"Made with fresh raspberry and blueberry (Non Caffeine;  Non-Diary). \u91c7\u7528\u65b0\u9c9c\u7684\u8986\u76c6\u5b50\u548c\u84dd\u8393","calories":"53-65","price":"$5.50","image":"/img/menu/c14.jpg"},{"title":"Cheese Foam Strawberry Tea","n2":"\u829d\u58eb\u8349\u8393\u8336","description":"Made with fresh strawberry (Non Caffeine;  Non-Diary). \u91c7\u7528\u65b0\u9c9c\u7684\u8349\u8393","calories":"44-54","price":"$5.50","image":"/img/menu/c15.jpg"}]},{"id":"C2","group-name":"Cheese Tea","n2":"\u810f\u810f\u8336","imgs":[{"img":"dirty-milk3.png"}],"group-items":[{"title":"Cheese Dongding Oolong Tea","n2":"\u829d\u58eb\u51bb\u9876\u4e4c\u9f99","description":"Freshly cooked tea with foam on the top (non-caffeine). \u65b0\u9c9c\u70f9\u996a\u7684\u8336\u914d\u829d\u58eb","calories":"48.4","price":"$5.25","image":"/img/menu/c21.jpg"},{"title":"Foam Four Season Tea","n2":"\u829d\u58eb\u56db\u5b63\u6625\u8336","description":"Freshly cooked tea with foam on the top (non-caffeine). \u65b0\u9c9c\u70f9\u996a\u7684\u8336\u914d\u829d\u58eb","calories":"59.8","price":"$4.75","image":"/img/menu/c22.jpg"},{"title":"Foam Rose Oolong Tea","n2":"\u829d\u58eb\u73ab\u7470\u4e4c\u9f99","description":"Freshly cooked tea with foam on the top (non-caffeine). \u65b0\u9c9c\u70f9\u996a\u7684\u8336\u914d\u829d\u58eb","calories":"48.4","price":"$4.75","image":"/img/menu/c23.jpg"},{"title":"Cheese Earl Grey Tea","n2":"\u829d\u58eb\u7ea2\u7389\u8317\u8336","description":"Freshly cooked tea with foam on the top (non-caffeine). \u65b0\u9c9c\u70f9\u996a\u7684\u8336\u914d\u829d\u58eb","calories":"48.4","price":"$4.75","image":"/img/menu/c24.jpg"}]},{"id":"C3","group-name":"Dirty Milk Tea","n2":"\u4efb\u6027\u676f","imgs":[{"img":"jpg"}],"group-items":[{"title":"Brown Sugar Bubble Milk Tea","n2":"\u9ed1\u7cd6\u810f\u810f\u5976\u8336\u6b3e","description":"Freshly made brown sugar with milk tea (non-caffeine)","calories":"460-540","price":"$7.00","image":"/img/menu/c31.jpg"},{"title":"Taro Bubble Milk Tea","n2":"\u9999\u828b\u810f\u810f\u5976\u8336\u6b3e","description":"Freshly made taro and limited every day (non-caffeine). \u91c7\u7528\u65b0\u9c9c\u7684\u9999\u828b\u53ca\u6bcf\u65e5\u9650\u91cf","calories":"320-390","price":"$7.00","image":"/img/menu/c32.jpg"},{"title":"Purple Yam Bubble Milk Tea","n2":"\u7d2b\u85af\u810f\u810f\u5976\u8336\u6b3e","description":"Freshly made purple yam and limited every day (non-caffeine). \u91c7\u7528\u65b0\u9c9c\u7684\u7d2b\u85af\u53ca\u6bcf\u65e5\u9650\u91cf","calories":"320-390","price":"$7.00","image":"/img/menu/c33.jpg"}]},{"id":"C4","group-name":"Milk Tea","n2":"\u8f85\u6599","imgs":[{"img":"jpg"}],"group-items":[{"title":"Bubble Milk Tea","n2":"\u73cd\u73e0\u5976\u8336","description":"Come with bubble and milk tea (non-caffeine)","calories":"299","price":"$0.70","image":"/img/menu/c41.jpg"},{"title":"Cheese Milk Black Tea","n2":"\u829d\u58eb\u7ea2\u7389\u5976\u8336","description":"With cheese, no bubble (non-caffeine)","calories":"234-364","price":"$0.60","image":"/img/menu/c42.jpg"},{"title":"Creme Brulee Milk Tea","n2":"\u5e03\u857e\u86cb\u7cd5\u5976\u8336","description":"With creme brulee (non-caffeine). \u9644\u86cb\u7cd5\u9171","calories":"299-364","price":"$0.60","image":"/img/menu/c43.jpg"},{"title":"Oreo Milk Tea","n2":"\u5965\u5229\u5965\u5976\u8336","description":"With creme top and oreo (non-caffeine). \u9644\u5976\u6cb9\u5728\u4e0a\u9762\u53ca\u5965\u5229\u5965","calories":"299-364","price":"$0.60","image":"/img/menu/c44.jpg"},{"title":"Red Bean Milk Tea","n2":"\u7ea2\u8c46\u5976\u8336","description":"With red bean (non-caffeine). \u9644\u7ea2\u8c46","calories":"299-364","price":"$0.60","image":"/img/menu/c45.jpg"}]},{"id":"C5","group-name":"Super Parfait","n2":"\u8349\u8393\u7cfb\u52173.0","imgs":[{"img":"jpg"}],"group-items":[{"title":"Mango Parfait","n2":"\u8292\u679c\u4efb\u6027\u676f","description":"With organic plain yogurt, fresh mango, and waffles (non-caffeine). \u91c7\u7528\u6709\u673a\u539f\u5473\u9178\u5976,\u65b0\u9c9c\u8292\u679c\u548c\u5a01\u5316\u997c","calories":"412","price":"$6.50","image":"/img/menu/c51.jpg"},{"title":"Super Strawberry Parfait","n2":"\u4efb\u6027\u8349\u8393\u676f","description":"with organic plain yogurt \uff0c fresh strawberry and waffles (non-caffeine). \u91c7\u7528\u6709\u673a\u539f\u5473\u9178\u5976\uff0c\u65b0\u9c9c\u8349\u8393\u548c\u5a01\u5316\u997c","calories":"357","price":"$6.00","image":"/img/menu/c52.jpg"}]},{"id":"C6","group-name":"Fresh Fruit Yakult","n2":"\u9c9c\u679c\u591a\u591a","imgs":[{"img":"jpg"}],"group-items":[{"title":"Dragon Fruit Yakult","n2":"\u706b\u9f99\u679c\u591a\u591a","description":"With fresh dragon fruit and yakult. (Non Caffeine;  Non-Diary)","calories":"105","price":"$6.50","image":"/img/menu/c61.jpg"},{"title":"Grapefruit Yakult","n2":"\u897f\u67da\u591a\u591a","description":"With fresh grapefruit and yakult. (Non Caffeine;  Non-Diary)","calories":"105","price":"$6.00","image":"/img/menu/c62.jpg"},{"title":"Orange Yakult","n2":"\u9c9c\u6a59\u591a\u591a","description":"With fresh orange and yakult. (Non Caffeine;  Non-Diary)","calories":"105","price":"$6.00","image":"/img/menu/c63.jpg"},{"title":"Lemon Yakult","n2":"\u67e0\u6aac\u591a\u591a","description":"With fresh lemon and yakult. (Non Caffeine;  Non-Diary)","calories":"105","price":"$6.00","image":"/img/menu/c64.jpg"}]},{"id":"C7","group-name":"Uji Matcha","n2":"\u5b87\u6cbb\u62b9\u8336","imgs":[{"img":"jpg"}],"group-items":[{"title":"Cheese Foam Uji Match","n2":"\u829d\u58eb\u5b87\u6cbb\u5976\u8336","description":"Non Caffeine","calories":"39-91","price":"$6.50","image":"/img/menu/c71.jpg"},{"title":"Creme Brulee Uji Matcha","n2":"\u8d85\u6d53\u5b87\u6cbb\u62b9\u8336","description":"Non Caffeine","calories":"39-91","price":"$6.00","image":"/img/menu/c72.jpg"},{"title":"Uji Matcha","n2":"\u5b87\u6cbb\u62b9\u8336","description":"Uji Matcha","calories":"91-152","price":"$6.00","image":"/img/menu/c73.jpg"}]},{"id":"C8","group-name":"Dorayaki","n2":"\u94dc\u9523\u70e7","imgs":[{"img":"jpg"}],"group-items":[{"title":"Cheese Dorayaki","n2":"\u829d\u58eb\u94dc\u9523\u70e7","description":"","calories":"","price":"$6.50","image":"/img/menu/c81.jpg"},{"title":"Cheese Oreo Dorayki","n2":"\u829d\u58eb\u5965\u5229\u5965\u94dc\u9523\u70e7","description":"","calories":"","price":"$6.00","image":"/img/menu/c82.png"},{"title":"Taro Dorayaki","n2":"\u9999\u828b\u94dc\u9523\u70e7","description":"","calories":"","price":"$6.00","image":"/img/menu/c83.jpg"},{"title":"Red Bean Dorayaki","n2":"\u7ea2\u8c46\u94dc\u9523\u70e7","description":"","calories":"","price":"$6.00","image":"/img/menu/c84.jpg"}]},{"id":"C9","group-name":"Fresh Milk Tea","n2":"\u73b0\u8403\u5976\u8336","imgs":[{"img":"jpg"}],"group-items":[{"title":"DaHongPao Milk Tea","n2":"\u91d1\u51e4\u5976\u8336","description":"Non Caffeine","calories":"122.4-132.6","price":"$6.50","image":"/img/menu/c91.jpg"},{"title":"Rose Milk Tea","n2":"\u73ab\u7470\u5976\u8336","description":"Non Caffeine","calories":"122.4","price":"$6.00","image":"/img/menu/c92.jpg"},{"title":"Hawaii Milk Tea","n2":"\u590f\u5a01\u5937\u5976\u8336","description":"","calories":"122.4","price":"$6.00","image":"/img/menu/c93.jpg"}]}],"locations":[{"group-name":"all","group-items":[]},{"group-name":"New York","default":true,"group-items":[{"id":"001","title":"Moge Tee Flushing","address":"38-03 Main St, Flushing, NY 11354","hours":{"Mon-Sun":"10:300AM - 10:30PM"},"phone":"(718) 321-1188","cs":false,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-flushing","facebook":"https://www.facebook.com/Mogeteeusa/","instagram":"https://www.instagram.com/mogeteeusa/"},"order":"https://www.ubereats.com/en-US/new-york/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6-flushing/K81n8zJKScy7x4r84ajTJg/"},{"id":"002","title":"Moge Tee Chinatown","address":"90 Canal St, New York, NY 10002","hours":{"Mon-Sun":"11:00AM-10:00PM"},"phone":"(646) 858-0257","cs":false,"social":{"yelp":"https://www.yelp.com/biz/m\xf6ge-tee-new-york-2?osq=moge+tee","facebook":"https://www.facebook.com/Mogeteeusa/","instagram":"https://www.instagram.com/mogeteeusa/"},"order":"https://www.ubereats.com/en-US/new-york/food-delivery/moge-tee/vE3QKqpcSe6e4llek-4PmQ/"},{"id":"003","title":"Moge Tee East Village","address":"69 Cooper Sq, New York, NY 10003","hours":{"Mon-Thur":"12:00PM - 10:30PM","Fri-Sat":"12:00PM - 12:00AM","Sun":"12:00PM - 10:30PM"},"phone":"(917) 675-7697","cs":false,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-new-york-3?osq=moge+tee","facebook":"","instagram":"https://www.instagram.com/mogetee_eastvillage/"},"order":"https://www.ubereats.com/en-US/new-york/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6-east-village/PjcSIPVZRu6OybTFdEFgmQ/"},{"id":"005","title":"Moge Tee Midtown 39th St","address":"302 W 39th St, New York, NY 10018","hours":{"Mon-Sun":"11:00AM - 10:00PM"},"phone":"(917) 262-0472","cs":false,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-new-york-4?osq=moge+tee","facebook":"https://www.facebook.com/Mogeteeusa/","instagram":"https://www.instagram.com/mogeteeusa/"},"order":"https://www.ubereats.com/en-US/new-york/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6-midtown/SY8QUpq4SPuekomM_lPzhg/"},{"id":"006","title":"Mogee Tee Brooklyn","address":"705 59th St, Unit D, Brooklyn, NY 11220","hours":{"Mon-Sun":"12:00PM - 11:00PM"},"phone":"(347) 889-5134","cs":false,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-brooklyn-2?osq=moge+tee","facebook":"https://www.facebook.com/Mogeteeusa/","instagram":"https://www.instagram.com/mogeteeusa/"},"order":"https://www.ubereats.com/en-US/new-york/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6/T2hs6ZdySoaY9eA3AG9vPw/"},{"id":"007","title":"Moge Tee Long Island City","address":"42-32 Crescent St, Long Island City, NY 11101","hours":{"Mon-Thur":"11:00AM - 10:30PM","Fri-Sat":"11:00AM - 11:00PM","Sun":"11:00AM - 10:30PM"},"phone":"(518) 418-0137","cs":false,"social":{"yelp":"https://www.yelp.com/biz/m%C3%B6ge-tee-long-island-city?osq=moge+tee","facebook":"https://www.facebook.com/Moge-Tee-Long-Island-City-1957370507723045/","instagram":"https://www.instagram.com/mogeteelic/"},"order":"https://www.ubereats.com/en-US/new-york/food-delivery/moge-tee-lic-%E6%84%BF%E8%8C%B6/xs7nlctfSjqfSrgQRcub3Q/"},{"id":"009","title":"Moge Tee Greenwich Village","address":"168 Bleecker St New York, NY 10012","hours":{"Sun-Thur":"12:00 PM - 10:00 PM","Fri-Sat":"12:00 PM - 12:00 AM"},"phone":"(646) 861-0200","cs":false,"social":{}},{"id":"020","title":"Moge Tee 1st AVE, 23rd St","address":"379 1st Ave New York, NY 10010","hours":{"Mon-Sat":"10:30 AM - 10:00 PM","Sun":"11:00 AM - 09:30 PM"},"phone":"(646) 370-5846","cs":false,"social":{}},{"id":"021","title":"Moge Tee Bayside, Queens","address":"43-19 Bell Blvd, Bayside, NY 11364","hours":{"Mon":"11:00 AM - 10:00 PM"},"phone":"(347) 836-8831","cs":false,"social":{}},{"id":"021x","title":"Moge Tee Bensonhurst","address":"2013 86th St, Brooklyn NY 11214","hours":{},"phone":"(347) 922-7380","cs":false,"social":{}}]},{"group-name":"Washington DC","group-items":[{"id":"0010","title":"Moge Tee DC","address":"2428 Wisconsin Ave, NW Washington, DC 20007","hours":{"Mon-Thur":"11:00AM - 10:00PM","Fri-Sat":"11:00AM - 11:00PM","Sun":"11:00AM - 10:00PM"},"phone":"(202) 333-2929","cs":false,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-dc-washington-3?osq=moge+tee","facebook":"https://www.facebook.com/mogeteedc/","instagram":"https://www.instagram.com/mogeteedmv/"},"order":"https://www.ubereats.com/en-US/washington-dc/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6/2FGmEKnTS1OI7qrmySuEeQ/"}]},{"group-name":"Virginia","group-items":[{"id":"0011","title":"Moge Tee Falls Church","address":"6122-B Arlington Blvd, Falls Church, VA 22044","hours":{"Mon-Thur":"11:00AM - 10:00PM","Fri-Sat":"11:00AM - 11:00PM","Sun":"11:00AM - 10:00PM"},"phone":"(703) 533-8889","cs":false,"social":{"yelp":"https://www.yelp.com/biz/m%C3%B6ge-tee-falls-church-va-falls-church-2?osq=moge+tee","facebook":"https://www.facebook.com/mogeteeva/","instagram":"https://www.instagram.com/mogeteedmv/"},"order":"https://www.ubereats.com/en-US/washington-dc/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6/3XCofasvT6uH-IMXiHsfWw/"},{"id":"1001","title":"Moge Tee Virginia Tech","address":"109 Fourteenth St, N.W, Charlottesville, VA 22903","store_pic":"/img/moge/g1.jpg","hours":{"Mon-Thur":"11:00AM - 10:00PM","Fri-Sat":"11:00AM - 11:00PM","Sun":"11:00AM - 10:00PM"},"phone":"(703) 533-8889","cs":true,"social":{"yelp":"https://www.yelp.com/biz/m%C3%B6ge-tee-falls-church-va-falls-church-2?osq=moge+tee","facebook":"https://www.facebook.com/mogeteeva/","instagram":"https://www.instagram.com/mogeteedmv/"},"order":"https://www.ubereats.com/en-US/washington-dc/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6/3XCofasvT6uH-IMXiHsfWw/"},{"id":"0019","title":"Tyson\u2019s Corner, VA","address":"1961 Chain Bridge Rd, McLean, VA 22102","hours":{"Mon-Sat":"10:00AM - 9:30PM","Sun":"11:00AM - 7:00PM"},"phone":"(571) 326-4382","cs":false,"social":{},"order":"https://www.ubereats.com/washington-dc/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6-tysons-corner/lFTZt9PmRnCZ-87Yo6C4kA"}]},{"group-name":"Maryland","group-items":[{"id":"0012","title":"Moge Tee Montgomery Mall","address":"7101 Democracy Blvd Bethesda, MD 20817","hours":{"Mon - Sat":"10:00AM - 9:00PM","Sun":"11:00AM - 6:00PM"},"phone":"(301) 347-6111","cs":false,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-montgomery-mall-bethesda?osq=moge+tee","facebook":"https://www.facebook.com/mogeteemontgomerymall/","instagram":"https://www.instagram.com/mogeteedmv/"}},{"id":"043","title":"Moge Tee Annapolis Mall","address":"2002 Annapolis Mall Annapolis, MD 21401","hours":{"Mon":"10:00 AM - 9:30 PM"},"phone":"(443) 949-0116","cs":false,"social":{}}]},{"group-name":"Massachusetts","group-items":[{"id":"0015","title":"Amherst, MA","address":"71 N Pleasant street, Amherst, MA 01002","hours":{"Mon-Sun":"12:00PM - 10:00PM"},"phone":"(413) 835-0628","cs":false,"social":{}}]},{"group-name":"Florida","group-items":[{"id":"042","title":"Moge Tee Tampa, Florida","address":"2850 University Square Dr, Tampa, FL 33612","hours":{"Mon-Thur":"11:00AM - 10:00PM","Fri-Sat":"11:00AM - 11:00PM","Sun":"11:00AM - 10:00PM"},"phone":"(703) 533-8889","cs":true,"social":{}},{"id":"0062","title":"Moge Tee Sand Lake, Florida","address":"7583 Sand Lake Rd, Orlando, FL 32819","hours":{"Mon-Sun":"11:00AM - 8:00PM"},"phone":"(407) 720-3645","cs":false,"social":{}},{"id":"0063","title":"Moge Tee Orlando, Florida","address":"636 N Mills Ave, Unit #A, Orlando, FL 32803","hours":{"Mon-Sun":"11:00AM - 8:00PM"},"phone":"(407) 720-3645","cs":true,"social":{}}]},{"group-name":"Georgia","group-items":[{"id":"0016","title":"Atlanta, GA","address":"2180 Pleasant Hill Rd. Suite B7, Duluth, GA. 30096","hours":{"Mon-Sat":"10:00AM - 9:00PM","Sun":"11:00AM - 6:00PM"},"phone":"(301) 347-6111","cs":true,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-montgomery-mall-bethesda?osq=moge+tee","facebook":"https://www.facebook.com/mogeteemontgomerymall/","instagram":"https://www.instagram.com/mogeteedmv/"}}]},{"group-name":"Michigan","group-items":[{"id":"026a","title":"Michgan Lansing","address":"515 E Grand River E, Lansing MI 48823","hours":{"Mon-Sat":"10:00AM - 9:00PM","Sun":"11:00AM - 6:00PM"},"phone":"(301) 347-6111","cs":true,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-montgomery-mall-bethesda?osq=moge+tee","facebook":"https://www.facebook.com/mogeteemontgomerymall/","instagram":"https://www.instagram.com/mogeteedmv/"}}]},{"group-name":"New Jersey","group-items":[{"id":"0017","title":"Fort Lee, NJ","address":"2029 Lemoine Ave, Suite 102, Fort Lee, NJ 07024","hours":{"Mon-Sat":"10:30AM - 10:30PM","Sun":"10:30AM - 11:00PM"},"phone":"(201) 849-5082","cs":false,"social":{},"order":"https://mogeteefortlee.smartonlineorder.com/"},{"id":"0060","title":"Moge Tee Newport, NJ","address":"564 Washington Blvd, Jersey City, NJ 07310","hours":{"Mon-Sun":"12:00PM - 9:00PM"},"phone":"(551) 556-2880","cs":false,"social":{},"order":"https://www.mogeteenewport.com/"},{"id":"0061","title":"Edison, NJ","address":"1803 Route 27, Unit 5, Edison NJ 08817","hours":{"Mon-Sun":"12:00PM - 9:00PM"},"phone":"(551) 556-2880","cs":true,"social":{}}]},{"group-name":"Pennsylvania","group-items":[{"id":"0013","title":"Moge Tee Philadelphia","address":"1025 Arch St Philadelphia, PA 19107","hours":{"Mon-Sun":"10:30AM - 11:00PM"},"phone":"(215) 608 - 8849","cs":false,"social":{"yelp":"https://www.yelp.com/biz/moge-tee-philadelphia?osq=moge+tee","facebook":"https://www.facebook.com/mogeteephilly-100107848003050/","instagram":"https://www.instagram.com/mogeteephilly/"},"order":"https://www.ubereats.com/en-US/philadelphia/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6-pa/HSmBMEwvSwa25OKjKtszCg/"},{"id":"043","title":"Moge Tee Market, Philadelphia","address":"901 Market St 2nd FL, Philadelphia 19107","hours":{"Mon-Sun":"10:30AM - 11:00PM"},"phone":"(XXX) XXX-XXXX","cs":true,"social":{}}]},{"group-name":"North Carolina","group-items":[{"id":"0014","title":"Moge Tee Asheville NC","address":"5 Biltmore Ave Asheville, NC 28801","hours":{"Mon-Fri":"11:00AM - 10:00PM","Sat-Sun":"11:00AM - 11:00PM"},"phone":"(828) 552-3055","cs":false,"social":{"facebook":"https://www.facebook.com/Moge-Tee-Asheville-102488224455682/","instagram":"https://www.instagram.com/mogetee.asheville/"}},{"id":"0019","title":"Raleigh, NC","address":"2304 Hillsborough Street Unit #100 Raleigh, NC 27607","hours":{"Sun-Thur":"10:30AM - 9:30PM","Fri-Sat":"10:30AM - 10:00PM"},"phone":"(984) 200-9008","cs":false,"social":{}},{"id":"0019x","title":"Chapel, NC","address":"151 E Franklin St Chapel Hill, NC 27514","hours":{"Sun-Thur":"10:30AM - 9:30PM","Fri-Sat":"10:30AM - 10:00PM"},"phone":"(984) 200-9008","cs":true,"social":{}}]}],"gallery":[{"id":"001","caption":"Fresh GrapeFruit Tea & Fresh Orange Tea","t1":"","t2":"Fresh GrapeFruit Tea & Fresh Orange Tea","img":"/img/gallery/g1.jpg","img2":"/img/gallery/g1-thumb.jpg"},{"id":"002","caption":"Dorayaki","t1":"","t2":"Dorayaki","img":"/img/gallery/g2.jpg","img2":"/img/gallery/g2-thumb.jpg"},{"id":"003","caption":"Taro Bubble Milk Tea","t1":"","t2":"Taro Bubble Milk Tea","img":"/img/gallery/g3.jpg","img2":"/img/gallery/g3-thumb.jpg"},{"id":"004","caption":"Cheese Tea Series","t1":"","t2":"Cheese Tea Series","img":"/img/gallery/g4.jpg","img2":"/img/gallery/g4-thumb.jpg"},{"id":"005","caption":"Super Fruit Green Tea","t1":"","t2":"Super Fruit Green Tea","img":"/img/gallery/g5.jpg","img2":"/img/gallery/g5-thumb.jpg"},{"id":"006","caption":"Brown Sugar Bubble Milk Tea","t1":"","t2":"Brown Sugar Bubble Milk Tea","img":"/img/gallery/g6.jpg","img2":"/img/gallery/g6-thumb.jpg"}]}')}}]);