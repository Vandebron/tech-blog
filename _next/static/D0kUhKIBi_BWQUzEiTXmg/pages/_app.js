(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("q1tI"),o=n.n(r),i=(n("7h5G"),n("Bxp/"),n("Xnqh")),a=n("YFqc"),u=n.n(a);var s=o.a.createElement;function l(e){var t,n,r,o=e.inverted,a=void 0!==o&&o;return s("div",{style:(t={cursor:"pointer"},n="user-select",r="none",n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)},s(i.Logo,{inverted:a}),"\xa0",s(i.H3,{as:"span",color:"green",style:{fontSize:28}},".tech"))}var c=o.a.createElement;function f(){return c("footer",{style:{paddingTop:30,paddingBottom:30,backgroundColor:"#363639"}},c(i.Container,null,c(i.Row,{alignItems:"center",style:{marginBottom:15}},c(i.Col,null,c(u.a,{href:"/"},c("div",null,c(l,{inverted:!0}))))),c(i.Row,{alignItems:"center"},c(i.Col,null,c(i.Text,{inverted:!0},"\xa9 Vandebron")))))}var p=n("nOHt"),h=o.a.createElement,d=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function v(){var e=Object(p.useRouter)();return h(i.Container,{as:"header",style:{paddingTop:30,paddingBottom:30,marginBottom:30}},h(i.Row,{alignItems:"center",justifyContent:"between"},h(i.Col,{col:12,sm:12,smAuto:!1,mdAuto:!0,lgAuto:!0},h(u.a,{href:"/"},h("div",null,h(l,null)))),h(i.Col,{col:12,sm:12,smAuto:!1,mdAuto:!0,lgAuto:!0},h(i.Flex,{smJustifyContent:"between"},h(i.Navigation,{onSelectLink:function(t){var n=d[t].url;return e.push(n)},selected:0,links:d,style:{marginRight:25}}),h("div",null,h(i.Link,{style:{marginRight:15}},h(i.Icon,{name:"github"})),h(i.Link,null,h(i.Icon,{name:"twitter"})))))))}var m=o.a.createElement;function g(e){var t=e.Component,n=e.pageProps;return m(o.a.Fragment,null,m(v,null),m(t,n),m(f,null))}},"7h5G":function(e,t,n){},"Bxp/":function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),i=n("48fX"),a=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=n("AroE"),c=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=c(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=l(n("nOHt")),m=n("elyg");function g(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,w=window.IntersectionObserver,b={};function C(){return f||(w?f=new w((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){i(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,m.addBasePath)(g(e)),as:t?(0,m.addBasePath)(g(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,u=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var s=window.location.pathname;a=(0,h.resolve)(s,a),u=u?(0,h.resolve)(s,u):a,e.preventDefault();var l=o.props.scroll;null==l&&(l=u.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](a,u,{shallow:o.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=C();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);t.default=k}},[[0,0,1,4,2,3]]]);