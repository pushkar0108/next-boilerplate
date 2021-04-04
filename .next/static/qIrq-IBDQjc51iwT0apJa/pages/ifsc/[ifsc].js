(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Vd6p:function(a,t,e){"use strict";e.r(t);var n=e("o0o1"),s=e.n(n),i=e("q1tI"),l=e.n(i),c=e("LvDl"),o=e.n(c),r=e("ffb8"),d=e("YFqc"),u=e.n(d),f=e("pjTg"),b=e("kluC"),m=e("qdu6"),v=l.a.createElement,p=function(a){a.t;var t=a.data,e=a.similarData,n=void 0===e?[]:e;if(!t||!t[0])return v(m.d,null,v("h1",{className:"my-4"},v("div",null,"NO DATA FOUND FOR IFSC.")));var s=[{title:"BRANCH",value:(t=t[0]).branch},{title:"IFSC",value:t.ifsc},{title:"MICR CODE",value:t.micr},{title:"CONTACT",value:t.contact},{title:"ADDRESS",value:t.address},{title:"STD CODE",value:t.std_code},{title:"CITY",value:t.city},{title:"DISTRICT",value:t.district},{title:"STATE",value:t.state}],i=t.bank,l={title:"".concat(i,", ").concat(t.branch,", ").concat(t.city,", ").concat(t.state,", ").concat(t.ifsc," - IFSC Code, MICR Code and Full Address"),description:"".concat(i,", ").concat(t.branch,", ").concat(t.city,", ").concat(t.state,", IFSC Code: ").concat(t.ifsc,", MICR Code: ").concat(t.micr,", Address: ").concat(t.address,". Find all Indian bank branches for NEFT, RTGS and ECS transactions.")};return v(m.d,{containerClass:"container-fluid",gridSize:{left:"col-md-2",mid:"col-lg-7 col-md-8",right:"col-lg-3 col-md-4"},leftNav:v("div",{className:"sticky-top",style:{top:"100px"}},v(m.b,{lastUpdatedAt:t.updated_at,entityType:"1",entityId:t.CIN,hideUpdateButton:!0}))},v(r.NextSeo,{title:l.title,description:l.description}),v("h1",{className:"my-4"},v("div",null,i),v("small",null,"IFSC - ",t.ifsc)),v("div",{className:"card mb-4 shadow bg-white rounded",id:"basicInfo"},v("div",{className:"card-body"},v("div",{className:"table-responsive"},v("table",{className:"table table-hover"},v("tbody",null,s.filter((function(a){return a.value})).map((function(a){return v("tr",{key:a.title},v("td",null,a.title),v("th",{scope:"row"},a.value))}))))))),v("div",{className:"mt-2"},v("small",null,'Disclaimer - "All information provided in respect of IFSC Codes of Banks, contact numbers and other details are for information purposes only. Kitaablu, on best efforts basis, collates this information from relevant sources and endeavors to offer accurate and responsible data. Kitaablu is not responsible for any sort of discrepancies and shall not be responsible for any loss and/or damage that may arise or is incurred by use of such information. It is a mutual understanding that the visitor\'s usage of any such information will be at his own preference and risk."')),v("h4",{id:"similarData",className:"mt-2"},"List of nearby ",t.bank," in ",t.city),v("div",{className:"card mb-4 shadow bg-white rounded"},v("div",{className:"card-body"},n.length?v("div",{className:"table-responsive"},v("table",{className:"table table-hover table-sm"},v("thead",null,v("tr",{className:"text-semibold text-fiord-blue"},v("th",{scope:"col"},"#"),v("th",{scope:"col"},"Bank"),v("th",{scope:"col"},"Branch"))),v("tbody",null,n.map((function(a,t){return v("tr",{key:"director_".concat(a.ifsc),className:"text-semibold text-reagent-gray"},v("td",null,t+1),v("td",null,v(u.a,{href:"/ifsc/[ifsc]",as:"/ifsc/".concat(a.ifsc)},v("a",null,a.bank))),v("td",null,a.branch))}))))):v("div",null,"No Nearby Bank Available"))))};p.getInitialProps=function(a){var t,e;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.query.ifsc,e={data:null,similarData:[]},n.prev=2,n.next=5,s.a.awrap(f.a.Request("GET","v1/ifsc",{ifsc:t}));case 5:return e.data=n.sent,n.next=8,s.a.awrap(f.a.Request("GET","v1/ifsc",{city:o.a.get(e,"data.0.city",void 0),bank:o.a.get(e,"data.0.bank",void 0),limit:100}));case 8:e.similarData=n.sent,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),console.log("Error while fetching data for ifsc: ",t,n.t0);case 14:return n.abrupt("return",e);case 15:case"end":return n.stop()}}),null,null,[[2,11]],Promise)};var h=Object(b.b)("common")(p);t.default=h},Z33Y:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ifsc/[ifsc]",function(){return e("Vd6p")}])}},[["Z33Y",1,2,6,9,0,3,5,7,4]]]);