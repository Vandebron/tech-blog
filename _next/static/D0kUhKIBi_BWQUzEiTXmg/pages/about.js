(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n("q1tI")),a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,u=void 0!==r&&r,a=e.hasQuery;return n||u&&(void 0!==a&&a)}t.isInAmpMode=o,t.useAmp=function(){return o(u.default.useContext(a.AmpStateContext))}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n("q1tI")),a=r(n("Xuae")),o=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function s(e,t){return e.reduce((function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(u){var a=!0;if(u.key&&"number"!==typeof u.key&&u.key.indexOf("$")>0){var o=u.key.slice(u.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(u.type){case"title":case"base":t.has(u.type)?a=!1:t.add(u.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var l=d[i];if(u.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=u.props[l],s=r[l]||new Set;s.has(f)?a=!1:(s.add(f),r[l]=s)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return u.default.cloneElement(e,{key:n})}))}var p=a.default();function h(e){var t=e.children;return u.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return u.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return u.default.createElement(p,{reduceComponentsToState:s,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n("q1tI"));t.HeadManagerContext=u.createContext(null)},Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("q1tI"),u=n.n(r),a=n("8Kt/"),o=n.n(a),i=n("Xnqh"),c=u.a.createElement;function l(){return c(u.a.Fragment,null,c(o.a,null,c("title",null,"About Vandebron.tech")),c(i.Container,null,c(i.H2,null,"About Vandebron"),c(i.Paragraph,null,"This is a page about the green tech innovator")))}},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),u=n("qXWd"),a=n("i2R6"),o=n("48fX"),i=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var u=c(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),s=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(i){o(l,i);var c=f(l);function l(e){var a;return r(this,l),a=c.call(this,e),s&&(t.add(u(a)),n(u(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component)}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n("q1tI"));t.AmpStateContext=u.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),u=n("rlHP"),a=n("kG2m");e.exports=function(e){return r(e)||u(e)||a()}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}}},[["rB5V",0,1,2]]]);