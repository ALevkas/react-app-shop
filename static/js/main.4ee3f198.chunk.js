(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(6),r=c.n(s),i=(c(13),c(0)),o=function(){return Object(i.jsx)("nav",{className:"green darken-1",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"https://allevchenko.ru/react-app-shop/",className:"brand-logo",children:"React Shop Fortnite"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/ALevkas/",children:"My others app in github page."})})})]})})},l=function(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})},j=c(1),d=c(7),u=c(8),b=function(e,t){var c=t.type,n=t.payload;switch(c){case"CLOSE_MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{messageName:""});case"REMOVE_FROM_BASKET":return Object(j.a)(Object(j.a)({},e),{},{order:e.order.filter((function(e){return e.id!==n.id}))});case"TOGGLE_BASKET":return Object(j.a)(Object(j.a)({},e),{},{isBasketShow:!e.isBasketShow});case"CHANGE_QUNTITY":var a=null,s=e.order.findIndex((function(e){return e.id===n.id}));return a="increment"===n.type?e.order.map((function(e,t){if(t===s)return Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1})})):e.order.map((function(e,t){if(t===s)return Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1})})),Object(j.a)(Object(j.a)({},e),{},{order:a});case"ADD_ORDER":var r=e.order.findIndex((function(e){return e.id===n.id})),i=null;if(r<0){var o=Object(j.a)(Object(j.a)({},n),{},{quantity:1});i=[].concat(Object(u.a)(e.order),[o])}else i=e.order.map((function(e,t){return t===r?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(j.a)(Object(j.a)({},e),{},{order:i,messageName:n.name});case"SET_GOODS":return Object(j.a)(Object(j.a)({},e),{},{goods:n||[],loading:!1});default:return e}},h=Object(n.createContext)(),O={goods:[],loading:!0,order:[],isBasketShow:!1,messageName:""},m=function(e){var t=e.children,c=Object(n.useReducer)(b,O),a=Object(d.a)(c,2),s=a[0],r=a[1];return s.closeMessage=function(){r({type:"CLOSE_MESSAGE"})},s.removeFromBasket=function(e){r({type:"REMOVE_FROM_BASKET",payload:{id:e}})},s.handleBasketShow=function(){r({type:"TOGGLE_BASKET"})},s.changeQuntity=function(e,t){r({type:"CHANGE_QUNTITY",payload:{id:e,type:t}})},s.addOrder=function(e){r({type:"ADD_ORDER",payload:e})},s.setGoods=function(e){r({type:"SET_GOODS",payload:e})},Object(i.jsx)(h.Provider,{value:s,children:t})},x=function(e){var t=e.id,c=e.name,a=e.description,s=e.price,r=e.full_background,o=Object(n.useContext)(h).addOrder;return Object(i.jsxs)("div",{className:"card card-shop",id:t,children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:r,alt:c})}),Object(i.jsxs)("div",{className:"card-content card-content-shop",children:[Object(i.jsx)("span",{className:"card-title",children:c}),Object(i.jsx)("p",{children:a})]}),Object(i.jsxs)("div",{className:"card-action card-action-shop",children:[Object(i.jsx)("button",{className:"btn",onClick:function(){o({id:t,name:c,price:s})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(i.jsxs)("span",{className:"right",style:{fontSize:"1.2rem"},children:[s," v-bucks."]})]})]})},p=function(){var e=Object(n.useContext)(h).goods,t=void 0===e?[]:e;return t.length?Object(i.jsx)("div",{className:"shoop-items",children:t.map((function(e){return Object(i.jsx)(x,Object(j.a)({},e),e.id)}))}):Object(i.jsx)("h3",{children:"Nothing here"})},f=function(){var e=Object(n.useContext)(h),t=e.order,c=e.handleBasketShow,a=t.length;return Object(i.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:function(){return c()},children:[Object(i.jsx)("i",{className:"material-icons",children:"shopping_cart"}),a?Object(i.jsx)("span",{className:"cart-quantity",children:a}):null]})},v=function(e){var t=e.id,c=e.name,a=e.price,s=e.quantity,r=Object(n.useContext)(h),o=r.removeFromBasket,l=r.changeQuntity;return Object(i.jsxs)("li",{className:"collection-item",children:[c,Object(i.jsx)("span",{children:Object(i.jsx)("i",{className:"material-icons basket__quantity",onClick:function(){return l(t,"increment")},children:"add"})})," ","x",s," ",Object(i.jsx)("span",{children:Object(i.jsx)("i",{className:"material-icons basket__quantity",onClick:function(){return l(t,"decrement")},children:"remove"})}),"= ",a*s,Object(i.jsx)("span",{className:"secondary-content",children:Object(i.jsx)("i",{className:"material-icons basket__delete",onClick:function(){return o(t)},children:"remove_shopping_cart"})})]})},g=function(){var e=Object(n.useContext)(h),t=e.order,c=e.handleBasketShow,a=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(i.jsxs)("ul",{className:"collection basket__list basket__list-show",children:[Object(i.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),t.length?t.map((function(e){return Object(i.jsx)(v,Object(j.a)({},e),e.id)})):Object(i.jsx)("li",{className:"collection-item",children:"\u0423\u043f\u0441, \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442\u043e"}),Object(i.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",a," v-bucks."]}),Object(i.jsx)("li",{className:"collection-item",children:Object(i.jsx)("button",{className:"btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(i.jsx)("i",{className:"material-icons basket__close",onClick:function(){return c()},children:"clear"})]})},N=function(){var e=Object(n.useContext)(h),t=e.messageName,c=e.closeMessage;return Object(n.useEffect)((function(){var e=setTimeout(c,3e3);return function(){clearTimeout(e)}}),[t]),Object(i.jsx)("div",{id:"toast-container",children:Object(i.jsxs)("div",{className:"toast",children:[t," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})},y=function(){var e=Object(n.useContext)(h),t=e.loading,c=e.order,a=e.isBasketShow,s=e.messageName,r=e.setGoods;return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{authorization:"ef079d90-94f947aa-2c3e04d6-f006e12f"}}).then((function(e){return e.json()})).then((function(e){r(e.specialFeatured)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{quantity:c.length}),t?Object(i.jsx)(l,{}):Object(i.jsx)(p,{}),a&&Object(i.jsx)(g,{}),s&&Object(i.jsx)(N,{})]})},k=function(){return Object(i.jsx)("main",{className:"container content",children:Object(i.jsx)(m,{children:Object(i.jsx)(y,{})})})},_=function(){return Object(i.jsx)("footer",{className:"page-footer green lighten-2",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear," Aleksandr Levchenko and @Levkas my profile in github.com",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/ALevkas/",children:"My others app in github page."})]})})})};var E=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(k,{}),Object(i.jsx)(_,{})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4ee3f198.chunk.js.map