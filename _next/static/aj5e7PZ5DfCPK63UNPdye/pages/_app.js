(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("q1tI"),o=n.n(r),a=(n("prBa"),n("Bxp/"),n("jaOS")),i=n("YFqc"),u=n.n(i);var l=o.a.createElement;function s(e){var t,n,r,o=e.inverted,i=void 0!==o&&o;return l("div",{style:(t={cursor:"pointer"},n="user-select",r="none",n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)},l(a.Logo,{inverted:i}),"\xa0",l(a.H3,{as:"span",color:"green",style:{fontSize:28}},".tech"))}var c=o.a.createElement;function f(){return c("footer",{style:{paddingTop:30,paddingBottom:30,backgroundColor:"#363639"}},c(a.Container,null,c(a.Row,{alignItems:"center",style:{marginBottom:15}},c(a.Col,null,c(u.a,{href:"/"},c("div",null,c(s,{inverted:!0}))))),c(a.Row,{alignItems:"center"},c(a.Col,null,c(a.Text,{inverted:!0},"\xa9 Vandebron")))))}var p=n("nOHt"),h=o.a.createElement,d=[{name:"Home",url:"/"},{name:"About",url:"/about"},{name:"Main website",url:"https://vandebron.nl",external:!0}];function v(){var e=Object(p.useRouter)();return h(a.Container,{as:"header",style:{paddingTop:30,paddingBottom:30,marginBottom:30}},h(a.Row,{alignItems:"center",justifyContent:"between"},h(a.Col,{col:12,sm:12,smAuto:!1,mdAuto:!0,lgAuto:!0},h(u.a,{href:"/"},h("div",null,h(s,null)))),h(a.Col,{col:12,sm:12,smAuto:!1,mdAuto:!0,lgAuto:!0},h(a.Flex,{smJustifyContent:"between"},h(a.Navigation,{onSelectLink:function(t){var n=d[t],r=n.url;return n.external?window.open(r,"_blank"):e.push(r)},selected:0,links:d,style:{marginRight:25}}),h("div",null,h(a.Link,{href:"https://github.com/vandebron/",target:"_blank"},h(a.Icon,{name:"github"})))))))}var m=o.a.createElement;function g(e){var t=e.Component,n=e.pageProps;return m(o.a.Fragment,null,m(v,null),m(t,n),m(f,null))}},"Bxp/":function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("48fX"),i=n("tCBg"),u=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("AroE"),c=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=c(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=s(n("nOHt")),m=n("elyg");function g(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,w=window.IntersectionObserver,b={};function C(){return f||(w?f=new w((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){a(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(g(e)),as:t?(0,m.addBasePath)(g(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,u=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,h.resolve)(l,i),u=u?(0,h.resolve)(l,u):i,e.preventDefault();var s=o.props.scroll;null==s&&(s=u.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](i,u,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=C();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),n}(p.Component);t.default=k},prBa:function(e,t,n){}},[[0,1,2,4,7,0,3,5]]]);