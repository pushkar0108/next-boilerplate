(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{CAth:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ifsc",function(){return a("M5+7")}])},"M5+7":function(n,e,a){"use strict";a.r(e);var t=a("o0o1"),r=a.n(t),i=a("q1tI"),o=a.n(i),s=a("ffb8"),c=a("kluC"),u=a("qdu6"),l=a("pjTg"),p=o.a.createElement,d=function(n){n.t,n.i18n,n.bannerDetails,n.companies;var e="New company registered in India in last 24 hours or 1 day _ Kitaablu",a="Company information, business information, directors/partners details and director/partners contact information of companies registered in last 24 hours or 1 day";return p(u.d,null,p(s.NextSeo,{title:e,description:a}),p("h1",{className:"my-4"},p("small",null,"IFSC")),p("div",null,"Find details of any bank using the IFSC code."),p("div",null,"Try the search box on the right."))};d.getInitialProps=function(n){var e,a,t,i;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=n.query,a=e.doiDayDiff,t=void 0===a?1:a,i={bannerDetails:void 0,companies:[]},o.prev=3,o.next=6,r.a.awrap(l.a.Request("GET","https://kitaablu.com/api/v1/company/banner"));case 6:return i.bannerDetails=o.sent,o.next=9,r.a.awrap(l.a.Request("GET","https://kitaablu.com/api/v1/company",{doiDayDiff:t,limit:100}));case 9:i.companies=o.sent,o.next=15;break;case 12:o.prev=12,o.t0=o.catch(3),console.log("Error while fetching props: ",o.t0);case 15:return o.abrupt("return",i);case 16:case"end":return o.stop()}}),null,null,[[3,12]],Promise)};var f=Object(c.b)("common")(d);e.default=f}},[["CAth",1,2,6,0,3,5,7,4]]]);