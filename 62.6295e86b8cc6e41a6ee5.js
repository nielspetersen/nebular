(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"+cwC":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),b=u("KM9H"),o=u("vuB0"),i=u("4vXS"),c=u("7uv5"),r=u("MGne"),s=u("NfCQ"),h=u("kztb"),f=u("V+dw"),p=u("8bEz"),w=u("k6ER"),g=u("4Ssn"),d=u("S+eJ"),F=u("Ip0R"),v=u("jvbL"),H=function(){function n(n){var l=this;this.authService=n,this.alive=!0,this.authService.onTokenChange().pipe(Object(v.a)(function(){return l.alive})).subscribe(function(n){l.token=null,n&&n.isValid()&&(l.token=n)})}return n.prototype.login=function(){var n=this;this.authService.authenticate("google").pipe(Object(v.a)(function(){return n.alive})).subscribe(function(n){})},n.prototype.logout=function(){var n=this;this.authService.logout("google").pipe(Object(v.a)(function(){return n.alive})).subscribe(function(n){})},n.prototype.ngOnDestroy=function(){this.alive=!1},n}(),y=u("BDhN"),m=t.vb({encapsulation:2,styles:[],data:{}});function k(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"button",[["nbButton",""],["status","success"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.login()&&t),t},null,null)),(n()(),t.Pb(-1,null,["Sign In with Google"]))],null,null)}function S(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"button",[["nbButton",""],["status","warning"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.logout()&&t),t},null,null)),(n()(),t.Pb(-1,null,["Sign Out"]))],null,null)}function z(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,16,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null]],[["window","scroll"],["window","resize"]],function(n,l,u){var e=!0;return"window:scroll"===l&&(e=!1!==t.Hb(n,1).onScroll(u)&&e),"window:resize"===l&&(e=!1!==t.Hb(n,1).onResize(u)&&e),e},b.f,b.b)),t.wb(1,4374528,null,0,o.b,[i.a,c.a,t.k,t.G,r.f,r.b,t.D,s.c,h.a,f.a,p.a,w.a],null,null),(n()(),t.xb(2,0,null,3,14,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,b.e,b.a)),t.wb(3,49152,null,0,o.a,[],null,null),(n()(),t.xb(4,0,null,0,12,"nb-card",[],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,g.f,g.b)),t.wb(5,49152,null,0,d.b,[],null,null),(n()(),t.xb(6,0,null,1,10,"nb-card-body",[],null,null,null,g.e,g.a)),t.wb(7,49152,null,0,d.a,[],null,null),(n()(),t.xb(8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Pb(9,null,["Current User Authenticated: ",""])),(n()(),t.xb(10,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),t.Pb(11,null,["Current User Token: ",""])),t.Jb(0,F.h,[]),(n()(),t.mb(16777216,null,0,1,null,k)),t.wb(14,16384,null,0,F.n,[t.T,t.P],{ngIf:[0,"ngIf"]},null),(n()(),t.mb(16777216,null,0,1,null,S)),t.wb(16,16384,null,0,F.n,[t.T,t.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,14,0,!u.token),n(l,16,0,u.token)},function(n,l){var u=l.component;n(l,0,0,t.Hb(l,1).windowModeValue,t.Hb(l,1).withScrollValue,t.Hb(l,1).withSubheader),n(l,2,0,t.Hb(l,3).leftValue,t.Hb(l,3).startValue),n(l,4,1,[t.Hb(l,5).tiny,t.Hb(l,5).small,t.Hb(l,5).medium,t.Hb(l,5).large,t.Hb(l,5).giant,t.Hb(l,5).primary,t.Hb(l,5).info,t.Hb(l,5).success,t.Hb(l,5).warning,t.Hb(l,5).danger,t.Hb(l,5).hasAccent,t.Hb(l,5).primaryAccent,t.Hb(l,5).infoAccent,t.Hb(l,5).successAccent,t.Hb(l,5).warningAccent,t.Hb(l,5).dangerAccent]),n(l,9,0,!!u.token),n(l,11,0,t.Qb(l,11,0,t.Hb(l,12).transform(u.token)))})}function x(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"nb-playground-auth",[],null,null,null,z,m)),t.wb(1,180224,null,0,H,[y.a],null,null)],null,null)}var R=t.tb("nb-playground-auth",H,x,{},{},[]),V=function(){function n(n,l){var u=this;this.authService=n,this.router=l,this.alive=!0,this.authService.authenticate("google").pipe(Object(v.a)(function(){return u.alive})).subscribe(function(n){n.isSuccess()&&n.getRedirect()&&u.router.navigateByUrl(n.getRedirect())})}return n.prototype.ngOnDestroy=function(){this.alive=!1},n}(),A=u("ZYCi"),j=t.vb({encapsulation:2,styles:[],data:{}});function I(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,4,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null]],[["window","scroll"],["window","resize"]],function(n,l,u){var e=!0;return"window:scroll"===l&&(e=!1!==t.Hb(n,1).onScroll(u)&&e),"window:resize"===l&&(e=!1!==t.Hb(n,1).onResize(u)&&e),e},b.f,b.b)),t.wb(1,4374528,null,0,o.b,[i.a,c.a,t.k,t.G,r.f,r.b,t.D,s.c,h.a,f.a,p.a,w.a],null,null),(n()(),t.xb(2,0,null,3,2,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,b.e,b.a)),t.wb(3,49152,null,0,o.a,[],null,null),(n()(),t.Pb(-1,0,["Authenticating..."]))],null,function(n,l){n(l,0,0,t.Hb(l,1).windowModeValue,t.Hb(l,1).withScrollValue,t.Hb(l,1).withSubheader),n(l,2,0,t.Hb(l,3).leftValue,t.Hb(l,3).startValue)})}function O(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"nb-playground-oauth2-callback",[],null,null,null,I,j)),t.wb(1,180224,null,0,V,[y.a,A.l],null,null)],null,null)}var P=t.tb("nb-playground-oauth2-callback",V,O,{},{},[]),C=u("gIcY"),N=u("t/Na"),B=u("0ICW"),D=u("Abgx"),E=u("znn7"),T=u("Y4k2"),J=u("Bc6B"),M=u("6y2k"),G=u("++eV"),X=u("X/Iy"),q=u("i6JN"),K=u("F4EV"),U=u("IVq4"),Y=u("NFr4"),Q=u("0AKQ"),Z=u("DJEY"),L=u("+q8+"),W=u("+Zd3"),$=u("4aFR"),_=function(){return function(){}}(),nn=u("4pP6");u.d(l,"OAuth2PlaygroundModuleNgFactory",function(){return ln});var ln=t.ub(e,[],function(n){return t.Eb([t.Fb(512,t.j,t.gb,[[8,[a.a,R,P]],[3,t.j],t.z]),t.Fb(4608,F.p,F.o,[t.w,[2,F.H]]),t.Fb(4608,C.z,C.z,[]),t.Fb(4608,N.k,N.q,[F.d,t.D,N.o]),t.Fb(4608,N.r,N.r,[N.k,N.p]),t.Fb(5120,N.a,function(n){return[n]},[N.r]),t.Fb(4608,N.n,N.n,[]),t.Fb(6144,N.l,null,[N.n]),t.Fb(4608,N.j,N.j,[N.l]),t.Fb(6144,N.b,null,[N.j]),t.Fb(4608,N.g,N.m,[N.b,t.s]),t.Fb(4608,N.c,N.c,[N.g]),t.Fb(4608,p.a,p.a,[A.l]),t.Fb(5120,B.b,D.c,[B.f]),t.Fb(5120,B.c,D.d,[B.b,t.s]),t.Fb(5120,B.d,D.e,[B.c]),t.Fb(4608,E.b,E.b,[E.a,B.d]),t.Fb(4608,T.b,T.a,[E.b]),t.Fb(4608,J.a,J.a,[T.b]),t.Fb(4608,y.a,y.a,[J.a,B.c]),t.Fb(4608,M.a,M.a,[]),t.Fb(4608,G.a,G.a,[N.c,A.a]),t.Fb(4608,X.a,X.a,[N.c,A.a,r.f]),t.Fb(1073742336,F.c,F.c,[]),t.Fb(1073742336,C.y,C.y,[]),t.Fb(1073742336,C.i,C.i,[]),t.Fb(1073742336,N.e,N.e,[]),t.Fb(1073742336,N.d,N.d,[]),t.Fb(1073742336,A.p,A.p,[[2,A.u],[2,A.l]]),t.Fb(1073742336,q.a,q.a,[]),t.Fb(1073742336,K.a,K.a,[]),t.Fb(1073742336,U.a,U.a,[Y.a]),t.Fb(1073742336,Q.a,Q.a,[]),t.Fb(1073742336,Z.a,Z.a,[]),t.Fb(1073742336,L.a,L.a,[]),t.Fb(1073742336,W.a,W.a,[]),t.Fb(1073742336,$.a,$.a,[]),t.Fb(1073742336,D.a,D.a,[]),t.Fb(1073742336,_,_,[]),t.Fb(1073742336,e,e,[]),t.Fb(256,N.o,"XSRF-TOKEN",[]),t.Fb(256,N.p,"X-XSRF-TOKEN",[]),t.Fb(1024,A.j,function(){return[[{path:"",component:H},{path:"callback",component:V}]]},[]),t.Fb(256,B.f,{strategies:[[X.a,{name:"google",clientId:"806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com",clientSecret:"",authorize:{endpoint:"https://accounts.google.com/o/oauth2/v2/auth",responseType:"token",scope:"https://www.googleapis.com/auth/userinfo.profile",redirectUri:"https://akveo.github.io/nebular/example/oauth2/callback"},redirect:{success:"/example/oauth2"}}]]},[]),t.Fb(256,E.a,nn.e,[]),t.Fb(256,B.a,"Authorization",[]),t.Fb(256,B.e,D.b,[])])})}}]);