(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p}),a.d(t,"pageQuery",function(){return g});a(75);var n=a(7),r=a.n(n),i=(a(158),a(156)),l=a(164),o=a(0),s=a.n(o),c=a(160),u=a(161),d=a(165),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(u.a,{title:"Philipp Spiess",keywords:["blog","javascript","react","webassembly","elixir","ruby"]}),s.a.createElement("div",{className:"c1llnfj4 index"},s.a.createElement("aside",{className:"l8p6pvv"},s.a.createElement(d.a,null)),s.a.createElement("main",{className:"rzgs3ah"},a.map(function(e){var t=e.node,a=t.frontmatter.external,n=t.fields.readingTime.text;return a?s.a.createElement(h,{key:t.fields.slug,node:t}):s.a.createElement(f,{key:t.fields.slug,readingTime:n,node:t})}))))},t}(s.a.Component),m="p11w1uky";function f(e){var t=e.node,a=e.readingTime,n=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug},s.a.createElement("h3",{className:m},s.a.createElement(i.a,{style:{boxShadow:"none"},to:t.fields.slug},n)),s.a.createElement("small",null,t.frontmatter.date," • ",a),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}function h(e){var t=e.node,a=t.frontmatter.title||t.fields.slug,n=t.frontmatter.external,r=n.split("/")[2];return s.a.createElement("div",{key:t.fields.slug},s.a.createElement("h3",{className:m},s.a.createElement(l.OutboundLink,{href:n,style:{boxShadow:"none"}},a)),s.a.createElement("small",null,t.frontmatter.date," • ",r),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}var g="1353655924";a(153)},156:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(32),s=a.n(o);a.d(t,"a",function(){return s.a});a(157);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(158);var n=a(0),r=a.n(n),i="l18j298g";function l(e){return r.a.createElement("div",{className:i},e.children)}a(147)},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(167),c=a.n(s),u=a(156);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var p="1025518380"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Philipp Spiess",description:"Lead Engineer at PSPDFKit for Web, React DOM team member, and curator of This Week in React. He loves learning and building usable interaction designs.",author:"Philipp Spiess"}}}}},163:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n);function i(e){var t=e.width;return r.a.createElement("img",{src:"https://www.gravatar.com/avatar/046db2877d2f9342de37d0d59c5df4a9?s="+2*t,width:t,height:t,style:{borderRadius:"50%"},alt:"Philipp Spiess"})}},164:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.OutboundLink=o;var r=n(a(74)),i=n(a(0)),l=n(a(4));function o(e){return i.default.createElement("a",(0,r.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick(t);var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}o.propTypes={href:l.default.string,target:l.default.string,onClick:l.default.func}},165:function(e,t,a){"use strict";a.d(t,"a",function(){return b});var n=a(166),r=(a(158),a(156)),i=a(164),l=a(163),o=a(0),s=a.n(o),c="bprhekf",u="am5wy80",d="a1jjo5az",p="t46x00t",m="i168ru1r",f="idf8opn",h="lzrwvv",g={boxShadow:"none",textDecoration:"none",color:"inherit"};function b(){return s.a.createElement(r.b,{query:E,render:function(e){e.site.siteMetadata.author;return s.a.createElement("div",{className:c+" bio"},s.a.createElement("div",{className:u},s.a.createElement(r.a,{style:g,to:"/"},s.a.createElement(l.a,{width:100}))),s.a.createElement("div",{className:d},s.a.createElement("div",{className:p},"Philipp Spiess ",s.a.createElement("small",{className:m},"[ˈʃpiːs]")),s.a.createElement("p",{className:f},"Lead Engineer at"," ",s.a.createElement(i.OutboundLink,{href:"https://pspdfkit.com/pdf-sdk/web/",target:"_blank",rel:"noopener noreferrer"},"PSPDFKit for Web"),","," ",s.a.createElement(i.OutboundLink,{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React DOM")," ","team member, and curator of"," ",s.a.createElement(i.OutboundLink,{href:"https://this-week-in-react.org",target:"_blank",rel:"noopener noreferrer"},"This Week in React"),". He loves learning and building usable interaction designs."),s.a.createElement("ul",{className:h},s.a.createElement("li",null,s.a.createElement(i.OutboundLink,{href:"https://twitter.com/philippspiess",target:"_blank",rel:"noopener noreferrer"},"Twitter")),s.a.createElement("li",null,s.a.createElement(i.OutboundLink,{href:"https://github.com/philipp-spiess",target:"_blank",rel:"noopener noreferrer"},"GitHub")),s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:hello@philippspiess.com"},"Mail")),s.a.createElement("li",null,s.a.createElement(i.OutboundLink,{href:"https://www.linkedin.com/in/philipp-spiess/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))))},data:n})}var E="4027657132";a(148)},166:function(e){e.exports={data:{site:{siteMetadata:{author:"Philipp Spiess"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8f89bb67ce1e728c9b0d.js.map