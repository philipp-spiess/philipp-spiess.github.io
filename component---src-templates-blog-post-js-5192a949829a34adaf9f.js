(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{155:function(e,t,a){"use strict";a.r(t);a(33),a(158);var n=a(156),r=a(0),i=a.n(r),o=a(171),l=a(172),s=a.n(l),c=a(173),u=new(a.n(c).a)({title:"Philipp Spiess Theme 2019",baseFontSize:"16px",baseLineHeight:1.75,scaleRatio:2.5,headerFontFamily:["Merriweather","Georgia","serif"],bodyFontFamily:["Merriweather","Georgia","serif"],bodyColor:"rgba(0, 0, 0, 0.9)",headerWeight:900,bodyWeight:400,boldWeight:700,overrideStyles:function(e,t){var a,n=e.adjustFontSizeTo,r=e.scale,i=e.rhythm;return(a={h1:{fontFamily:"Tahoma, Helvetica, sans-serif"},blockquote:Object.assign({},r(.2),{color:s()(41),fontStyle:"italic",paddingLeft:i(.8125),marginLeft:0,borderLeft:i(3/16)+" solid "+s()(10)}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":Object.assign({},n(t.baseFontSize),{color:t.bodyColor,fontWeight:t.bodyWeight}),"blockquote cite:before":{content:'"— "'},ul:{listStyle:"disc"},"ul,ol":{marginLeft:i(1.5)}})[o.MOBILE_MEDIA_QUERY]={"ul,ol":{marginLeft:i(1)},blockquote:{marginLeft:0,marginRight:0,paddingLeft:i(9/16)}},a["h1,h2,h3,h4,h5,h6"]={marginTop:i(1)},a.h4={letterSpacing:"0.140625em",textTransform:"uppercase"},a.h6={fontStyle:"italic"},a.a={boxShadow:"inset 0 -1px 0 0 currentColor",color:"#8e6e15",textDecoration:"none"},a["a:hover,a:active"]={boxShadow:"none"},a["mark,ins"]={background:"#8e6e15",color:"white",padding:i(1/16)+" "+i(1/8),textDecoration:"none"},a}});var d=u.rhythm,m=u.scale,p=a(163),h=a(165),f=a(160),g=a(161);a.d(t,"default",function(){return w}),a.d(t,"pageQuery",function(){return k});var b="h9gspy",E="sktosja",y="c1s19ez3",v="hrktb2s";function w(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata,r=e.pageContext,o=r.previous,l=r.next,s=a.author;return i.a.createElement(f.a,null,i.a.createElement("header",{className:b},i.a.createElement("div",{className:y+" "+v},i.a.createElement("div",null,i.a.createElement(p.a,{width:30}),i.a.createElement("h3",null,s)),i.a.createElement("div",{className:E}),i.a.createElement("div",null,i.a.createElement(n.a,{to:"/"},"All Articles")))),i.a.createElement("div",{className:y+" post"},i.a.createElement(g.a,{title:t.frontmatter.title,description:t.excerpt}),i.a.createElement("h1",null,t.frontmatter.title),i.a.createElement("p",{style:Object.assign({},m(-.2),{display:"block",marginBottom:d(1),marginTop:d(-1)})},t.frontmatter.date," • ",t.fields.readingTime.text),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o||o?i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,o&&i.a.createElement(n.a,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),i.a.createElement("li",null,l&&i.a.createElement(n.a,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →")))):null,i.a.createElement("h4",{style:{marginTop:"3.5rem"}},"About the author"),i.a.createElement(h.a,null)))}var k="3042546985";a(150)},156:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(32),s=a.n(l);a.d(t,"a",function(){return s.a});a(157);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(158);var n=a(0),r=a.n(n),i="l18j298g";function o(e){return r.a.createElement("div",{className:i},e.children)}a(147)},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(167),c=a.n(s),u=a(156);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Philipp Spiess",description:"Front End Engineer at Facebook, curator of This Week in React, and React DOM team member. Loves building usable interaction designs.",author:"Philipp Spiess"}}}}},163:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n);function i(e){var t=e.width;return r.a.createElement("img",{src:"https://www.gravatar.com/avatar/046db2877d2f9342de37d0d59c5df4a9?s="+2*t,width:t,height:t,style:{borderRadius:"50%"},alt:"Philipp Spiess"})}},165:function(e,t,a){"use strict";a.d(t,"a",function(){return b});var n=a(166),r=(a(158),a(156)),i=a(164),o=a(163),l=a(0),s=a.n(l),c="bprhekf",u="am5wy80",d="a1jjo5az",m="t46x00t",p="i168ru1r",h="idf8opn",f="lzrwvv",g={boxShadow:"none",textDecoration:"none",color:"inherit"};function b(){return s.a.createElement(r.b,{query:E,render:function(e){e.site.siteMetadata.author;return s.a.createElement("div",{className:c+" bio"},s.a.createElement("div",{className:u},s.a.createElement(r.a,{style:g,to:"/"},s.a.createElement(o.a,{width:100}))),s.a.createElement("div",{className:d},s.a.createElement("div",{className:m},"Philipp Spiess ",s.a.createElement("small",{className:p},"[ˈʃpiːs]")),s.a.createElement("p",{className:h},"Front End Engineer at Facebook, curator of"," ",s.a.createElement(i.OutboundLink,{href:"https://this-week-in-react.org",target:"_blank",rel:"noopener noreferrer"},"This Week in React"),", and"," ",s.a.createElement(i.OutboundLink,{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React DOM")," ","team member. Loves building usable interaction designs."),s.a.createElement("ul",{className:f},s.a.createElement("li",null,s.a.createElement(i.OutboundLink,{href:"https://twitter.com/philippspiess",target:"_blank",rel:"noopener noreferrer"},"Twitter")),s.a.createElement("li",null,s.a.createElement(i.OutboundLink,{href:"https://github.com/philipp-spiess",target:"_blank",rel:"noopener noreferrer"},"GitHub")),s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:hello@philippspiess.com"},"Mail")),s.a.createElement("li",null,s.a.createElement(i.OutboundLink,{href:"https://www.linkedin.com/in/philipp-spiess/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))))},data:n})}var E="4027657132";a(148)},166:function(e){e.exports={data:{site:{siteMetadata:{author:"Philipp Spiess"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5192a949829a34adaf9f.js.map