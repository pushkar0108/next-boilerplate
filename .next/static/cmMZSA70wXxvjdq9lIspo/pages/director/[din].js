(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"68Av":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/director/[din]",function(){return a("K7wr")}])},K7wr:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),o=a.n(n),l=a("q1tI"),s=a.n(l),c=a("YFqc"),i=a.n(c),r=a("ffb8"),d=a("pjTg"),u=a("kluC"),p=a("bhCS"),m=a("qdu6"),b=s.a.createElement,h=function(e){e.t,e.i18n;var t=e.dinData;Object(l.useEffect)((function(){$((function(){$('[data-toggle="tooltip"]').tooltip()}))}));var a=[{title:"DIN",value:t.DIN},{title:"Name",value:t.name},{title:"Date of birth",value:"*********",tooltip:!0},{title:"Father Name",value:"*********",tooltip:!0},{title:"Mobile",value:"*********",tooltip:!0},{title:"Phone",value:"*********",tooltip:!0},{title:"Email",value:"*********",tooltip:!0},{title:"Address",value:"*********",tooltip:!0},{title:"City",value:t.city},{title:"Gender",value:t.gender}],n=t.name,o={title:"".concat(t.name,", ").concat(t.DIN," - Company, charges, directors, CIN, DIN and contact details _ Kitaablu"),description:"Company information, business information, directors/partners details and director/partners contact information of ".concat(n,", ").concat(t.DIN)};return b(m.d,{containerClass:"container-fluid",gridSize:{left:"col-md-2",mid:"col-lg-7 col-md-8",right:"col-lg-3 col-md-4"},leftNav:b("div",{className:"sticky-top",style:{top:"100px"}},b("div",{id:"list-example",className:"list-group shadow-sm bg-white rounded"},b("a",{className:"list-group-item list-group-item-action",href:"#basicInfo"},"Basic Information"),b("a",{className:"list-group-item list-group-item-action",href:"#companyList"},"List Of Companies"),b("a",{className:"list-group-item list-group-item-action",href:"#llpList"},"List Of LLPs")),b(m.b,{lastUpdatedAt:t.updated_at,entityType:"2",entityId:t.DIN}))},b(r.NextSeo,{title:o.title,description:o.description}),b("h1",{className:"my-4"},b("small",null,t.DIN),b("div",null,n)),b("h4",{id:"basicInfo"},"Basic Information"),b("div",{className:"card mb-4 shadow bg-white rounded"},b("div",{className:"card-body"},b("div",{className:"table-responsive"},b("table",{className:"table table-hover"},b("tbody",null,a.map((function(e){return b("tr",{key:e.title},b("th",{scope:"row"},e.title),b("td",null,e.tooltip?b("button",{type:"button",className:"btn btn-secondary btn-sm","data-toggle":"tooltip","data-placement":"right",title:"Contact us at kitaablueterprise@gmail.com"},e.value):e.value))}))))))),b("h4",{id:"companyList"},"List Of Companies"),b("div",{className:"card mb-4 shadow bg-white rounded"},b("div",{className:"card-body"},t.companies.length?b("div",{className:"table-responsive"},b("table",{className:"table table-hover"},b("thead",null,b("tr",{className:"text-semibold text-fiord-blue"},b("th",{scope:"col"},"#"),b("th",{scope:"col"},"CIN/FCRN"),b("th",{scope:"col"},"Company Name"),b("th",{scope:"col"},"Begin date"),b("th",{scope:"col"},"End date"),b("th",{scope:"col"},"Active compliance"))),b("tbody",null,t.companies.map((function(e,t){return b("tr",{key:"director_".concat(e.CIN),className:"text-semibold text-reagent-gray"},b("td",null,t+1),b("td",null,b(i.a,{href:"/company/[cin]",as:"/company/".concat(e.CIN)},b("a",null,e.CIN))),b("td",null,e.name),b("td",null,e.beginDate),b("td",null,e.endDate),b("td",null,e.status))}))))):b("div",null,"No Companies mapped ".concat(t.name)))),b("h4",{id:"llpList"},"List Of LLP"),b("div",{className:"card mb-4 shadow bg-white rounded"},b("div",{className:"card-body"},t.llps.length?b("div",{className:"table-responsive"},b("table",{className:"table table-hover"},b("thead",{className:"bg-light"},b("tr",{className:"text-semibold text-fiord-blue"},b("th",{scope:"col",className:"border-0"},"#"),b("th",{scope:"col",className:"border-0"},"LLPIN/FLLPIN"),b("th",{scope:"col",className:"border-0"},"LLP Name"),b("th",{scope:"col",className:"border-0"},"Begin date"),b("th",{scope:"col",className:"border-0"},"End date"),b("th",{scope:"col",className:"border-0"},"Status"))),b("tbody",null,t.llps.map((function(e,t){return b("tr",{key:"charge_".concat(e.CIN),className:"text-semibold text-reagent-gray"},b("td",null,t+1),b("td",null,b(i.a,{href:"/company/[cin]",as:"/company/".concat(e.CIN)},b("a",null,e.CIN))),b("td",null,e.name),b("td",null,e.beginDate),b("td",null,e.endDate),b("td",null,e.status))}))))):b("div",null,"No LLPs mapped to ".concat(t.name)))))};h.getInitialProps=function(e){var t,a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.din,n.next=3,o.a.awrap(d.a.Request("GET","https://kitaablu.com/api/v1/director/".concat(t)));case 3:return a=n.sent,n.next=6,o.a.awrap(e.store.dispatch(p.a.GetApod({params:{hd:!0}})));case 6:return n.abrupt("return",{namespacesRequired:["common"],dinData:a});case 7:case"end":return n.stop()}}),null,null,null,Promise)};var N=Object(u.b)("common")(h);t.default=N},bhCS:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("o0o1"),o=a.n(n),l=a("h1MZ"),s=a("pjTg"),c=function(e){var t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.awrap(s.a.Request("GET","/planetary/apod",e.params));case 3:t=a.sent,a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),t={copyright:"",date:"",explanation:"",hdurl:"",service_version:"",title:"",url:""};case 9:return a.abrupt("return",t);case 10:case"end":return a.stop()}}),null,null,[[0,6]],Promise)},i={Map:function(e){return{payload:e,type:l.a.Home.SetReducer}},Reset:function(){return{type:l.a.Home.ResetReducer}},GetApod:function(e){return function(t){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(c({params:e.params}));case 2:a=n.sent,t({payload:{image:a},type:l.a.Home.SetReducer});case 4:case"end":return n.stop()}}),null,null,null,Promise)}}}},h1MZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={Home:{ResetReducer:"Home_ResetReducer",SetReducer:"Home_SetReducer"}}}},[["68Av",1,2,6,0,3,5,7,4]]]);