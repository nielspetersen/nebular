(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"0zsz":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("KM9H"),a=t("vuB0"),r=t("4vXS"),c=t("7uv5"),b=t("MGne"),s=t("NfCQ"),m=t("kztb"),d=t("V+dw"),f=t("8bEz"),g=t("k6ER"),p=t("eBIP"),x=t("2CvD"),h=t("pUqt"),M=t("g5qn"),w=t("o4D4"),y=t("jiCe"),v=t("ZYCi"),k=t("4Ssn"),H=t("S+eJ"),P=t("jvbL"),C=function(){function n(n){this.menuService=n,this.sidebarMenuItems=[{title:"Menu Items",group:!0,icon:"home-outline"},{title:"Menu #1",link:"/menu/menu-test.component/1",icon:"home-outline",queryParams:{param:1},fragment:"#fragment"},{title:"Menu #2",link:"/menu/menu-test.component/2",icon:"home-outline"},{title:"Menu #3",icon:"home-outline",children:[{title:"Menu #3.1",link:"/menu/menu-test.component/3/1"},{title:"Menu #3.2",link:"/menu/menu-test.component/3/2"},{title:"Menu #3.3",children:[{title:"Menu #3.3.1",link:"/menu/menu-test.component/3/3/1"},{title:"Menu #3.3.2",link:"/menu/menu-test.component/3/3/2",queryParams:{param:2},fragment:"#fragment",home:!0},{title:"@nebular/theme",target:"_blank",url:"https://github.com/akveo/ng2-admin"}]}]}],this.firstMenuItems=[{title:"Menu Items",group:!0,icon:"home-outline"},{title:"Menu #1",link:"/menu/menu-test.component/1",icon:"home-outline",queryParams:{param:1},fragment:"#fragment"},{title:"Menu #2",link:"/menu/menu-test.component/2",icon:"home-outline"}],this.secondMenuItems=[{title:"Menu items with fragments ",group:!0},{title:"Menu #1",link:"/menu/menu-test.component/1",icon:"home-outline",pathMatch:"partial"},{title:"Menu #12 + fragment",link:"/menu/menu-test.component/12",fragment:"fragment",icon:"home-outline"},{title:"Menu #3",link:"/menu/menu-test.component/3",icon:"home-outline"}],this.thirdMenuItems=[{title:"Menu #1"},{title:"Menu #2",children:[{title:"Menu #2.1"},{title:"Hidden Submenu Item",hidden:!0}]},{title:"Hidden Menu Item",hidden:!0}],this.alive=!0}return n.prototype.ngOnInit=function(){var n=this;this.menuService.onItemClick().pipe(Object(P.a)(function(){return n.alive})).subscribe(function(n){return console.info(n)}),this.menuService.onItemSelect().pipe(Object(P.a)(function(){return n.alive})).subscribe(function(n){return console.info(n)}),this.menuService.onSubmenuToggle().pipe(Object(P.a)(function(){return n.alive})).subscribe(function(n){return console.info(n)}),this.menuService.addItems([{title:"Menu #3",icon:"home-outline",children:[{title:"Menu #3.1",link:"/menu/menu-test.component/3/1"},{title:"Menu #3.2",link:"/menu/menu-test.component/3/2"},{title:"Menu #3.3",children:[{title:"Menu #3.3.1",link:"/menu/menu-test.component/3/3/1"},{title:"Menu #3.3.2",link:"/menu/menu-test.component/3/3/2",queryParams:{param:2},fragment:"#fragment",home:!0},{title:"@nebular/theme",target:"_blank",url:"https://github.com/akveo/ng2-admin"}]}]}],"firstMenu")},n.prototype.ngOnDestroy=function(){this.alive=!1},n.prototype.addMenuItem=function(){this.menuService.addItems([{title:"New Menu Item"}],"firstMenu")},n.prototype.navigateHome=function(){this.menuService.navigateHome("firstMenu")},n}(),O=u.vb({encapsulation:2,styles:[],data:{}});function _(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,37,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null]],[["window","scroll"],["window","resize"]],function(n,l,t){var e=!0;return"window:scroll"===l&&(e=!1!==u.Hb(n,1).onScroll(t)&&e),"window:resize"===l&&(e=!1!==u.Hb(n,1).onResize(t)&&e),e},i.f,i.b)),u.wb(1,4374528,null,0,a.b,[r.a,c.a,u.k,u.G,b.f,b.b,u.D,s.c,m.a,d.a,f.a,g.a],null,null),(n()(),u.xb(2,0,null,1,3,"nb-sidebar",[["state","compacted"]],[[2,"fixed",null],[2,"right",null],[2,"left",null],[2,"start",null],[2,"end",null],[2,"expanded",null],[2,"collapsed",null],[2,"compacted",null]],null,null,p.c,p.a)),u.wb(3,770048,null,0,x.a,[h.a,r.a,u.k],{state:[0,"state"]},null),(n()(),u.xb(4,0,null,1,1,"nb-menu",[["id","menu-sidebar"],["tag","sidebarMenu"]],null,null,null,M.b,M.a)),u.wb(5,4440064,null,0,w.a,[b.f,y.a,v.l],{tag:[0,"tag"],items:[1,"items"]},null),(n()(),u.xb(6,0,null,3,31,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,i.e,i.a)),u.wb(7,49152,null,0,a.a,[],null,null),(n()(),u.xb(8,0,null,0,11,"nb-card",[["size","xxlarge"]],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,k.f,k.b)),u.wb(9,49152,null,0,H.b,[],{size:[0,"size"]},null),(n()(),u.xb(10,0,null,1,9,"nb-card-body",[],null,null,null,k.e,k.a)),u.wb(11,49152,null,0,H.a,[],null,null),(n()(),u.xb(12,0,null,0,1,"nb-menu",[["id","menu-first"],["tag","firstMenu"]],null,null,null,M.b,M.a)),u.wb(13,4440064,null,0,w.a,[b.f,y.a,v.l],{tag:[0,"tag"],items:[1,"items"],autoCollapse:[2,"autoCollapse"]},null),(n()(),u.xb(14,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),u.wb(15,212992,null,0,v.q,[v.b,u.T,u.j,[8,null],u.h],null,null),(n()(),u.xb(16,0,null,0,1,"button",[["id","addBtn"],["nbButton",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.addMenuItem()&&u),u},null,null)),(n()(),u.Pb(-1,null,["Add"])),(n()(),u.xb(18,0,null,0,1,"button",[["id","homeBtn"],["nbButton",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.navigateHome()&&u),u},null,null)),(n()(),u.Pb(-1,null,["Home"])),(n()(),u.xb(20,0,null,0,11,"nb-card",[["size","xxlarge"]],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,k.f,k.b)),u.wb(21,49152,null,0,H.b,[],{size:[0,"size"]},null),(n()(),u.xb(22,0,null,1,9,"nb-card-body",[],null,null,null,k.e,k.a)),u.wb(23,49152,null,0,H.a,[],null,null),(n()(),u.xb(24,0,null,0,1,"nb-menu",[["id","menu-second"],["tag","SecondMenu"]],null,null,null,M.b,M.a)),u.wb(25,4440064,null,0,w.a,[b.f,y.a,v.l],{tag:[0,"tag"],items:[1,"items"]},null),(n()(),u.xb(26,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),u.wb(27,212992,null,0,v.q,[v.b,u.T,u.j,[8,null],u.h],null,null),(n()(),u.xb(28,0,null,0,1,"button",[["id","addBtn"],["nbButton",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.addMenuItem()&&u),u},null,null)),(n()(),u.Pb(-1,null,["Add"])),(n()(),u.xb(30,0,null,0,1,"button",[["id","homeBtn"],["nbButton",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.navigateHome()&&u),u},null,null)),(n()(),u.Pb(-1,null,["Home"])),(n()(),u.xb(32,0,null,0,5,"nb-card",[["size","xxlarge"]],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,k.f,k.b)),u.wb(33,49152,null,0,H.b,[],{size:[0,"size"]},null),(n()(),u.xb(34,0,null,1,3,"nb-card-body",[],null,null,null,k.e,k.a)),u.wb(35,49152,null,0,H.a,[],null,null),(n()(),u.xb(36,0,null,0,1,"nb-menu",[["id","menu-third"],["tag","thirdMenu"]],null,null,null,M.b,M.a)),u.wb(37,4440064,null,0,w.a,[b.f,y.a,v.l],{tag:[0,"tag"],items:[1,"items"]},null)],function(n,l){var t=l.component;n(l,3,0,"compacted"),n(l,5,0,"sidebarMenu",t.sidebarMenuItems),n(l,9,0,"xxlarge"),n(l,13,0,"firstMenu",t.firstMenuItems,!0),n(l,15,0),n(l,21,0,"xxlarge"),n(l,25,0,"SecondMenu",t.secondMenuItems),n(l,27,0),n(l,33,0,"xxlarge"),n(l,37,0,"thirdMenu",t.thirdMenuItems)},function(n,l){n(l,0,0,u.Hb(l,1).windowModeValue,u.Hb(l,1).withScrollValue,u.Hb(l,1).withSubheader),n(l,2,0,u.Hb(l,3).fixedValue,u.Hb(l,3).rightValue,u.Hb(l,3).leftValue,u.Hb(l,3).startValue,u.Hb(l,3).endValue,u.Hb(l,3).expanded,u.Hb(l,3).collapsed,u.Hb(l,3).compacted),n(l,6,0,u.Hb(l,7).leftValue,u.Hb(l,7).startValue),n(l,8,1,[u.Hb(l,9).tiny,u.Hb(l,9).small,u.Hb(l,9).medium,u.Hb(l,9).large,u.Hb(l,9).giant,u.Hb(l,9).primary,u.Hb(l,9).info,u.Hb(l,9).success,u.Hb(l,9).warning,u.Hb(l,9).danger,u.Hb(l,9).hasAccent,u.Hb(l,9).primaryAccent,u.Hb(l,9).infoAccent,u.Hb(l,9).successAccent,u.Hb(l,9).warningAccent,u.Hb(l,9).dangerAccent]),n(l,20,1,[u.Hb(l,21).tiny,u.Hb(l,21).small,u.Hb(l,21).medium,u.Hb(l,21).large,u.Hb(l,21).giant,u.Hb(l,21).primary,u.Hb(l,21).info,u.Hb(l,21).success,u.Hb(l,21).warning,u.Hb(l,21).danger,u.Hb(l,21).hasAccent,u.Hb(l,21).primaryAccent,u.Hb(l,21).infoAccent,u.Hb(l,21).successAccent,u.Hb(l,21).warningAccent,u.Hb(l,21).dangerAccent]),n(l,32,1,[u.Hb(l,33).tiny,u.Hb(l,33).small,u.Hb(l,33).medium,u.Hb(l,33).large,u.Hb(l,33).giant,u.Hb(l,33).primary,u.Hb(l,33).info,u.Hb(l,33).success,u.Hb(l,33).warning,u.Hb(l,33).danger,u.Hb(l,33).hasAccent,u.Hb(l,33).primaryAccent,u.Hb(l,33).infoAccent,u.Hb(l,33).successAccent,u.Hb(l,33).warningAccent,u.Hb(l,33).dangerAccent])})}function z(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-test",[],null,null,null,_,O)),u.wb(1,245760,null,0,C,[y.b],null,null)],function(n,l){n(l,1,0)},null)}var R=u.tb("nb-menu-test",C,z,{},{},[]),I=function(){return function(){}}(),F=function(){return function(){}}(),S=function(){return function(){}}(),A=function(){return function(){}}(),G=function(){return function(){}}(),V=function(){return function(){}}(),j=function(){return function(){}}(),q=function(){return function(){}}(),B=function(){return function(){}}(),T=u.vb({encapsulation:2,styles:[],data:{}});function N(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Pb(-1,null,["Menu Item #1"]))],null,null)}function E(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item1",[],null,null,null,N,T)),u.wb(1,49152,null,0,I,[],null,null)],null,null)}var J=u.tb("nb-menu-item1",I,E,{},{},[]),D=u.vb({encapsulation:2,styles:[],data:{}});function K(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Pb(-1,null,["Menu Item #2"]))],null,null)}function Q(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item2",[],null,null,null,K,D)),u.wb(1,49152,null,0,F,[],null,null)],null,null)}var X=u.tb("nb-menu-item2",F,Q,{},{},[]),Y=u.vb({encapsulation:2,styles:[],data:{}});function L(n){return u.Rb(0,[(n()(),u.xb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.wb(1,212992,null,0,v.q,[v.b,u.T,u.j,[8,null],u.h],null,null)],function(n,l){n(l,1,0)},null)}function U(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item3",[],null,null,null,L,Y)),u.wb(1,49152,null,0,S,[],null,null)],null,null)}var Z=u.tb("nb-menu-item3",S,U,{},{},[]),W=u.vb({encapsulation:2,styles:[],data:{}});function $(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Pb(-1,null,["Menu Item #3.1"]))],null,null)}function nn(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item31",[],null,null,null,$,W)),u.wb(1,49152,null,0,A,[],null,null)],null,null)}var ln=u.tb("nb-menu-item31",A,nn,{},{},[]),tn=u.vb({encapsulation:2,styles:[],data:{}});function un(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Pb(-1,null,["Menu Item #3.2"]))],null,null)}function en(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item32",[],null,null,null,un,tn)),u.wb(1,49152,null,0,G,[],null,null)],null,null)}var on=u.tb("nb-menu-item32",G,en,{},{},[]),an=u.vb({encapsulation:2,styles:[],data:{}});function rn(n){return u.Rb(0,[(n()(),u.xb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.wb(1,212992,null,0,v.q,[v.b,u.T,u.j,[8,null],u.h],null,null)],function(n,l){n(l,1,0)},null)}function cn(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item33",[],null,null,null,rn,an)),u.wb(1,49152,null,0,V,[],null,null)],null,null)}var bn=u.tb("nb-menu-item33",V,cn,{},{},[]),sn=u.vb({encapsulation:2,styles:[],data:{}});function mn(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Pb(-1,null,["Menu Item #3.3.1"]))],null,null)}function dn(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item331",[],null,null,null,mn,sn)),u.wb(1,49152,null,0,j,[],null,null)],null,null)}var fn=u.tb("nb-menu-item331",j,dn,{},{},[]),gn=u.vb({encapsulation:2,styles:[],data:{}});function pn(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Pb(-1,null,["Menu Item #3.3.2"]))],null,null)}function xn(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item332",[],null,null,null,pn,gn)),u.wb(1,49152,null,0,q,[],null,null)],null,null)}var hn=u.tb("nb-menu-item332",q,xn,{},{},[]),Mn=u.vb({encapsulation:2,styles:[],data:{}});function wn(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Pb(-1,null,["Menu Item #4"]))],null,null)}function yn(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-menu-item4",[],null,null,null,wn,Mn)),u.wb(1,49152,null,0,B,[],null,null)],null,null)}var vn=u.tb("nb-menu-item4",B,yn,{},{},[]),kn=t("Ip0R"),Hn=t("gIcY"),Pn=t("i6JN"),Cn=t("IVq4"),On=t("NFr4"),_n=t("gM8K"),zn=t("F4EV"),Rn=t("q1xA"),In=t("0AKQ"),Fn=function(){return function(){}}();t.d(l,"MenuTestModuleNgFactory",function(){return Sn});var Sn=u.ub(e,[],function(n){return u.Eb([u.Fb(512,u.j,u.gb,[[8,[o.a,R,J,X,Z,ln,on,bn,fn,hn,vn]],[3,u.j],u.z]),u.Fb(4608,kn.p,kn.o,[u.w,[2,kn.H]]),u.Fb(4608,Hn.z,Hn.z,[]),u.Fb(4608,f.a,f.a,[v.l]),u.Fb(4608,y.b,y.b,[]),u.Fb(4608,y.a,y.a,[kn.j]),u.Fb(4608,h.a,h.a,[]),u.Fb(1073742336,kn.c,kn.c,[]),u.Fb(1073742336,Hn.y,Hn.y,[]),u.Fb(1073742336,Hn.i,Hn.i,[]),u.Fb(1073742336,v.p,v.p,[[2,v.u],[2,v.l]]),u.Fb(1073742336,Pn.a,Pn.a,[]),u.Fb(1073742336,Cn.a,Cn.a,[On.a]),u.Fb(1073742336,_n.a,_n.a,[]),u.Fb(1073742336,zn.a,zn.a,[]),u.Fb(1073742336,Rn.a,Rn.a,[]),u.Fb(1073742336,In.a,In.a,[]),u.Fb(1073742336,Fn,Fn,[]),u.Fb(1073742336,e,e,[]),u.Fb(1024,v.j,function(){return[[{path:"menu-test.component",component:C,children:[{path:"",redirectTo:"1",pathMatch:"full"},{path:"1",component:I},{path:"2",component:F},{path:"12",component:I},{path:"3",component:S,children:[{path:"",redirectTo:"1",pathMatch:"full"},{path:"1",component:A},{path:"2",component:G},{path:"3",component:V,children:[{path:"",redirectTo:"1",pathMatch:"full"},{path:"1",component:j},{path:"2",component:q}]}]},{path:"4",component:B}]}]]},[])])})},"4Ssn":function(n,l,t){"use strict";var u=t("CcnG");t("S+eJ"),t.d(l,"d",function(){return e}),t.d(l,"h",function(){return o}),t.d(l,"a",function(){return i}),t.d(l,"e",function(){return a}),t.d(l,"c",function(){return r}),t.d(l,"g",function(){return c}),t.d(l,"b",function(){return b}),t.d(l,"f",function(){return s});var e=u.vb({encapsulation:2,styles:[],data:{}});function o(n){return u.Rb(0,[u.Gb(null,0)],null,null)}var i=u.vb({encapsulation:2,styles:[],data:{}});function a(n){return u.Rb(0,[u.Gb(null,0)],null,null)}var r=u.vb({encapsulation:2,styles:[],data:{}});function c(n){return u.Rb(0,[u.Gb(null,0)],null,null)}var b=u.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]],data:{}});function s(n){return u.Rb(0,[u.Gb(null,0),u.Gb(null,1),u.Gb(null,2),u.Gb(null,3)],null,null)}},KM9H:function(n,l,t){"use strict";var u=t("CcnG");t("vuB0"),t("4vXS"),t("7uv5"),t("MGne"),t("NfCQ"),t("kztb"),t("V+dw"),t("8bEz"),t("k6ER"),t.d(l,"b",function(){return e}),t.d(l,"f",function(){return o}),t.d(l,"a",function(){return i}),t.d(l,"e",function(){return a}),t.d(l,"d",function(){return r}),t.d(l,"h",function(){return c}),t.d(l,"c",function(){return b}),t.d(l,"g",function(){return s});var e=u.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{-webkit-font-smoothing:antialiased}[dir=ltr]   [_nghost-%COMP%]{text-align:left}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[_nghost-%COMP%]     nb-layout-header{display:block}[_nghost-%COMP%]     nb-layout-header nav{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex}[_nghost-%COMP%]     nb-layout-header.fixed{position:fixed;top:0;left:0;right:0;z-index:1040}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}[dir=ltr]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.left{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[dir=rtl]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.left{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[dir=ltr]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.right{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[dir=rtl]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.right{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.end{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content.center[_ngcontent-%COMP%]{max-width:100%;position:relative;margin-left:auto;margin-right:auto}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]     nb-layout-column{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 0;flex:1 0;min-width:0}[dir=ltr]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]     nb-layout-column.left{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[dir=rtl]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]     nb-layout-column.left{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]     nb-layout-column.start{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     nb-layout-footer{display:block;margin-top:auto}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     nb-layout-footer nav{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex}"]],data:{}});function o(n){return u.Rb(0,[u.Nb(671088640,1,{veryTopRef:0}),u.Nb(671088640,2,{scrollableContainerRef:0}),u.Nb(671088640,3,{layoutContainerRef:0}),(n()(),u.xb(3,0,[[2,0],["scrollableContainer",1]],null,9,"div",[["class","scrollable-container"]],null,[[null,"scroll"]],function(n,l,t){var u=!0;return"scroll"===l&&(u=!1!==n.component.onScroll(t)&&u),u},null,null)),(n()(),u.xb(4,0,[[3,0],["layoutContainer",1]],null,8,"div",[["class","layout"]],null,null,null,null,null)),u.Gb(null,0),(n()(),u.xb(6,0,null,null,6,"div",[["class","layout-container"]],null,null,null,null,null)),u.Gb(null,1),(n()(),u.xb(8,0,null,null,4,"div",[["class","content"]],[[2,"center",null]],null,null,null,null)),u.Gb(null,2),(n()(),u.xb(10,0,null,null,1,"div",[["class","columns"]],null,null,null,null,null)),u.Gb(null,3),u.Gb(null,4)],null,function(n,l){n(l,8,0,l.component.centerValue)})}var i=u.vb({encapsulation:2,styles:[],data:{}});function a(n){return u.Rb(0,[u.Gb(null,0)],null,null)}var r=u.vb({encapsulation:2,styles:[],data:{}});function c(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nav",[],[[2,"fixed",null]],null,null,null,null)),u.Gb(null,0)],null,function(n,l){n(l,0,0,l.component.fixedValue)})}var b=u.vb({encapsulation:2,styles:[],data:{}});function s(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nav",[],[[2,"fixed",null]],null,null,null,null)),u.Gb(null,0)],null,function(n,l){n(l,0,0,l.component.fixedValue)})}}}]);