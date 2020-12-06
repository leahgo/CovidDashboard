(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[0],{243:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},498:function(e,t,a){},504:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(1),c=a.n(r),o=a(43),s=a.n(o),d=(a(243),a(67)),i=a.n(d),l=a(127),u=a(40),j=(a(245),a(246),a(16)),b=function(e){return Object(n.jsx)("div",{className:"Chart",children:Object(n.jsxs)(j.d,{width:900,height:500,data:e.data,children:[Object(n.jsx)(j.a,{strokeDasharray:"3 3"}),Object(n.jsx)(j.h,{dataKey:"stateDt",domain:["auto","auto"]}),Object(n.jsx)(j.i,{domain:["auto","auto"]}),Object(n.jsx)(j.g,{}),Object(n.jsx)(j.b,{}),Object(n.jsx)(j.c,{type:"monotone",dataKey:"decideCnt",stroke:"#8884d8",name:"\ud655\uc9c4\uc790 \uc218",dot:!1}),Object(n.jsx)(j.c,{type:"monotone",dataKey:"clearCnt",stroke:"#003882",name:"\uaca9\ub9ac\ud574\uc81c \uc218",dot:!1}),Object(n.jsx)(j.c,{type:"monotone",dataKey:"examCnt",stroke:"#007682",name:"\uac80\uc0ac\uc9c4\ud589 \uc218",dot:!1}),Object(n.jsx)(j.c,{type:"monotone",dataKey:"careCnt",stroke:"#985993",name:"\uce58\ub8cc\uc911 \ud658\uc790 \uc218",dot:!1})]})})},h=a(130),m=a.n(h),p=(a(421),function(e){return Object(n.jsx)("div",{className:"Main",children:Object(n.jsxs)(j.f,{width:1e3,height:500,children:[Object(n.jsx)(j.e,{data:e.ageData,dataKey:"death",nameKey:"gubun",cx:"30%",cy:"50%",label:function(e){return e.name},outerRadius:130,fill:"#8884d8"}),Object(n.jsx)(j.e,{data:e.genData,dataKey:"death",nameKey:"gubun",cx:"70%",cy:"50%",label:function(e){return e.name},outerRadius:130,fill:"#114399"})]})})}),O=(a(422),a(511)),f=function(e){var t=Object(r.useState)("Home"),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)(new Date((new Date).getTime()-6048e5)),d=Object(u.a)(s,2),i=d[0],l=d[1],j=Object(r.useState)(new Date),h=Object(u.a)(j,2),f=h[0],D=h[1];return Object(n.jsxs)("div",{className:"Main",children:[Object(n.jsxs)("div",{className:"Toolbar",children:[Object(n.jsx)("h1",{children:"\ucf54\ub85c\ub09819 \uc2e4\uc2dc\uac04 \uc0c1\ud669\ud310"}),Object(n.jsx)("h1",{children:"Covid-19 Dashboard"})]}),Object(n.jsxs)("div",{className:"Navigation",children:[Object(n.jsx)("button",{className:"btnNav",onClick:function(){return o("Home")},children:"Home"}),Object(n.jsx)("button",{className:"btnNav",onClick:function(){return o("GenAgeCase")},children:"\uc131\ubcc4/\uc5f0\ub839\ubcc4"})]}),Object(n.jsx)("div",{className:"Content",children:"Home"===c?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"Date",children:[Object(n.jsx)(m.a,{locale:O.a,dateFormat:"yyyy/MM/dd",className:"react-datepicker",maxDate:new Date,closeOnScroll:!0,placeholderText:"\uc2dc\uc791\uc77c\uc790",selected:i,onChange:function(e){return l(new Date(e))}}),"~",Object(n.jsx)(m.a,{locale:O.a,dateFormat:"yyyy/MM/dd",className:"react-datepicker",maxDate:new Date,closeOnScroll:!0,placeholderText:"\uc2dc\uc791\uc77c\uc790",selected:f,onChange:function(e){return D(new Date(e))}}),Object(n.jsx)("button",{className:"btnSearch",onClick:function(){return e.handleButtonClick(i,f)},children:"\uac80\uc0c9"})]}),Object(n.jsx)(b,{data:e.lineChartData})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:["\uae30\uc900\uc77c\uc790 : ",f.toString()]}),Object(n.jsx)(p,{genData:e.genData,ageData:e.ageData})]})})]})},D=a(133),g=a.n(D),x=a(34),y=a.n(x),v=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),s=Object(u.a)(o,2),d=s[0],j=s[1],b=Object(r.useState)([]),h=Object(u.a)(b,2),m=h[0],p=h[1],O=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r,o,s,d,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("startDt:"+y()(t).format("YYYYMMDD")+"/endDt:"+y()(a).format("YYYYMMDD")),n="http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",r="pazBdlMEQ8jBn1ovS4UfBWEMzypVRd5jPd887GygCIAQWJYJWbzAcAn3w5jaYyPN3lwpX69kUb6dl3rbeMgAww%3D%3D","1","10",o=y()(t).format("YYYYMMDD"),s=y()(a).format("YYYYMMDD"),d=[],console.log("url",n+"?ServiceKey="+r+"&pageNo=1&numOfRows=10&startCreateDt="+o+"&endCreateDt="+s),e.next=11,g.a.get(n+"?ServiceKey="+r+"&pageNo=1&numOfRows=10&startCreateDt="+o+"&endCreateDt="+s);case 11:"00"===(l=e.sent).data.response.header.resultCode&&(0!==l.data.response.body.items.length?((d=l.data.response.body.items.item).length>1?d.reverse():(d=[]).push(l.data.response.body.items.item),c(d)):console.log("error : ",l.data.response.header.resultCode,l.data.response.header.resultMsg));case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r,c,o,s,d,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("startDt:"+y()(t).format("YYYYMMDD")+"/endDt:"+y()(a).format("YYYYMMDD")),n="http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson",r="pazBdlMEQ8jBn1ovS4UfBWEMzypVRd5jPd887GygCIAQWJYJWbzAcAn3w5jaYyPN3lwpX69kUb6dl3rbeMgAww%3D%3D","1","10",c=y()(t).format("YYYYMMDD"),o=y()(a).format("YYYYMMDD"),s=[],console.log("url",n+"?ServiceKey="+r+"&pageNo=1&numOfRows=10&startCreateDt="+c+"&endCreateDt="+o),e.next=11,g.a.get(n+"?ServiceKey="+r+"&pageNo=1&numOfRows=10&startCreateDt="+o+"&endCreateDt="+o);case 11:if(d=e.sent,console.log(d.data),"00"!==d.data.response.header.resultCode){e.next=22;break}if(l=[],u=[],0===d.data.response.body.items.length){e.next=22;break}if((s=d.data.response.body.items.item)!==[]){e.next=20;break}return e.abrupt("return");case 20:s.length>1&&s.reverse(),s.map((function(e){"\uc5ec\uc131"===e.gubun||"\ub0a8\uc131"===e.gubun?u.push(e):l.push(e),j(l),p(u)}));case 22:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.jsx)(f,{lineChartData:a,genData:m,ageData:d,handleButtonClick:function(e,t){console.log(e,t),O(e,t),D(e,t)}})},C=a(213),Y=a(13);a(498);var M=function(){return Object(n.jsx)(C.a,{children:Object(n.jsx)(Y.a,{path:"/",exact:!0,component:v})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,512)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),w()}},[[504,1,2]]]);
//# sourceMappingURL=main.0ed5b965.chunk.js.map