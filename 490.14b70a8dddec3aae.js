"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[490],{3490:(x,p,e)=>{e.r(p),e.d(p,{JamModule:()=>W});var d=e(6630),u=e(4650),C=e(867),h=e(6895),y=e(4859),m=e(7392),A=e(9840),c=e(445);function g(t,s){if(1&t&&(u.ynx(0),u._UZ(1,"span",2),u.BQk()),2&t){const n=u.oxw();u.xp6(1),u.Q6J("innerHTML",n.i.text,u.oJD)}}function E(t,s){1&t&&u.GkF(0)}const Z=function(t){return{$implicit:t}};var a=(()=>{return(t=a||(a={}))[t.ing=0]="ing",t[t.pause=1]="pause",t[t.stop=2]="stop",t[t.done=3]="done",a;var t})();let v=(()=>{class t{constructor(n){this.ngZone=n,this.fns=[],this.commands=[],this.nextTime=0,this.ing=!1}start(){!0!==this.ing&&(this.ing=!0,this.nextTime=+new Date,this.ngZone.runOutsideAngular(()=>{this.process()}))}process(){for(;this.commands.length;)this.commands.shift()();let n=+new Date-this.nextTime;const o=1+Math.floor(n/100);n=100-n%100,this.nextTime+=100*o;for(let i=0,l=this.fns.length;i<l;i+=2){let f=this.fns[i+1];if(0===f)this.fns[i](o);else{f+=2*o-1;const r=Math.floor(f/20);r>0&&this.fns[i](r),this.fns[i+1]=f%20+1}}this.ing&&setTimeout(()=>this.process(),n)}add(n,o){return this.commands.push(()=>{this.fns.push(n),this.fns.push(1e3===o?1:0),this.ing=!0}),this}remove(n){return this.commands.push(()=>{const o=this.fns.indexOf(n);-1!==o&&this.fns.splice(o,2),this.ing=this.fns.length>0}),this}}return t.\u0275fac=function(n){return new(n||t)(u.LFG(u.R0b))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac}),t})(),F=(()=>{class t{constructor(n){this.locale=n,this.demand=!1,this.leftTime=0,this.format="HH:mm:ss",this.timezone="+0000",this.formatDate=({date:o,formatStr:i,timezone:l})=>(0,h.p6)(new Date(o),i,this.locale,l||this.timezone||"+0000")}}return t.\u0275fac=function(n){return new(n||t)(u.LFG(u.soG))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),T=(()=>{class t{constructor(n,o,i,l,f){this.locale=n,this.timer=o,this.defCog=i,this.cdr=l,this.ngZone=f,this.frequency=1e3,this._notify={},this.status=a.ing,this.isDestroy=!1,this.i={},this.left=0,this.event=new u.vpe}set config(n){null!=n.notify&&!Array.isArray(n.notify)&&n.notify>0&&(n.notify=[n.notify]),this._config=n}get config(){return this._config}begin(){this.status=a.ing,this.callEvent("start")}restart(){this.status!==a.stop&&this.destroy(),this.init(),this.callEvent("restart")}stop(){this.status!==a.stop&&(this.status=a.stop,this.destroy(),this.callEvent("stop"))}pause(){this.status===a.stop||this.status===a.pause||(this.status=a.pause,this.callEvent("pause"))}resume(){this.status===a.stop||this.status!==a.pause||(this.status=a.ing,this.callEvent("resume"))}callEvent(n){this.event.emit({action:n,left:this.left,status:this.status,text:this.i.text})}init(){const{locale:n,defCog:o}=this,i=this.config={...new F(n),...o,...this.config},l=this.frequency=~i.format.indexOf("S")?100:1e3;this.status=i.demand?a.pause:a.ing,this.getLeft();const f=this.reflow;this.reflow=(r=0,K=!1)=>f.apply(this,[r,K]),Array.isArray(i.notify)&&i.notify.forEach(r=>{if(r<1)throw new Error("The notify config must be a positive integer.");r*=1e3,this._notify[r-=r%l]=!0}),this.timer.add(this.reflow,l).start(),this.reflow(0,!0)}destroy(){return this.timer.remove(this.reflow),this}reflow(n=0,o=!1){if(this.isDestroy)return;const{status:i,config:l,_notify:f}=this;if(!o&&i!==a.ing)return;let r=this.left=this.left-this.frequency*n;r<1&&(r=0),this.i={value:r,text:l.formatDate({date:r,formatStr:l.format,timezone:l.timezone})},"function"==typeof l.prettyText&&(this.i.text=l.prettyText(this.i.text)),this.cdr.detectChanges(),(0===l.notify||f[r])&&this.ngZone.run(()=>{this.callEvent("notify")}),0===r&&this.ngZone.run(()=>{this.status=a.done,this.destroy(),this.callEvent("done")})}getLeft(){const{config:n,frequency:o}=this;let i=1e3*n.leftTime;const l=n.stopTime;!i&&l&&(i=l-(new Date).getTime()),this.left=i-i%o}ngOnInit(){this.init(),this.config.demand||this.begin()}ngOnDestroy(){this.isDestroy=!0,this.destroy()}ngOnChanges(n){n.config.firstChange||this.restart()}}return t.\u0275fac=function(n){return new(n||t)(u.Y36(u.soG),u.Y36(v),u.Y36(F),u.Y36(u.sBO),u.Y36(u.R0b))},t.\u0275cmp=u.Xpm({type:t,selectors:[["countdown"]],hostVars:2,hostBindings:function(n,o){2&n&&u.ekj("count-down",!0)},inputs:{config:"config",render:"render"},outputs:{event:"event"},standalone:!0,features:[u._Bn([v]),u.TTD,u.jDz],decls:2,vars:5,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"innerHTML"]],template:function(n,o){1&n&&(u.YNc(0,g,2,1,"ng-container",0),u.YNc(1,E,1,0,"ng-container",1)),2&n&&(u.Q6J("ngIf",!o.render),u.xp6(1),u.Q6J("ngTemplateOutlet",o.render)("ngTemplateOutletContext",u.VKq(3,Z,o.i)))},dependencies:[h.ez,h.O5,h.tP],encapsulation:2,changeDetection:0}),t})(),J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[T]}),t})(),P=(()=>{class t{constructor(){this.config={leftTime:(new Date(2023,7,6,18,30).getTime()-(new Date).getTime())/1e3,format:"DDD HH:mm:ss",formatDate:({date:n,formatStr:o})=>A.unix(n/1e3).utc().format(o)}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-countdown"]],decls:1,vars:1,consts:[["dir","ltr",3,"config"]],template:function(n,o){1&n&&u._UZ(0,"countdown",0),2&n&&u.Q6J("config",o.config)},dependencies:[c.Lv,T],styles:["countdown[_ngcontent-%COMP%]{font-size:50px}"]}),t})();function L(t,s){1&t&&(u.TgZ(0,"button",9),u._uU(1,"\u0633\u0627\u0645\u0627\u0646\u0647 \u0633\u062a\u0627\u062f \u0628\u0631\u06af\u0632\u0627\u0631\u06cc \u062c\u0627\u0645 \u062c\u0627\u0646\u0628\u0627\u062e\u062a\u06af\u0627\u0646"),u.qZA())}let H=(()=>{class t{constructor(n){this.TIME_TO_JAM=new Date(2023,7,7,18,30).getTime()-(new Date).getTime(),this.isAdmin=1==n.getTokenItem("isAdmin")}}return t.\u0275fac=function(n){return new(n||t)(u.Y36(C.$))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-jam-home-page"]],decls:17,vars:1,consts:[[1,"text-center"],["svgIcon","Jam"],[1,"text-justify"],[1,"mt-2"],[1,"flex","flex-col","md:flex-row","gap-2","justify-center","mt-2"],["mat-raised-button","","color","accent","routerLink","register",1,"md:w-36"],["mat-raised-button","","routerLink","history"],["mat-raised-button","","color","accent","routerLink","setad",4,"ngIf"],["disabled","","mat-button",""],["mat-raised-button","","color","accent","routerLink","setad"]],template:function(n,o){1&n&&(u.TgZ(0,"div",0),u._UZ(1,"mat-icon",1),u.TgZ(2,"p",2),u._uU(3," \u067e\u06cc\u06a9\u0627\u0631\u0647\u0627\u06cc \u0648\u0631\u0632\u0634\u06cc \u062c\u0627\u0645 \u062c\u0627\u0646\u200c\u0628\u0627\u062e\u062a\u06af\u0627\u0646\u060c \u0645\u0633\u0627\u0628\u0642\u0627\u062a \u0648\u0631\u0632\u0634\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0627 \u062d\u0636\u0648\u0631 \u0628\u06cc\u0634 \u0627\u0632 \u06f8\u06f0\u06f0 \u0648\u0631\u0632\u0634\u06a9\u0627\u0631 \u0627\u0632 \u0633\u0631\u0627\u0633\u0631 \u062c\u0627\u0645\u0639\u0647 \u0632\u0631\u062a\u0634\u062a\u06cc\u060c \u0686\u0647 \u0627\u0632 \u062f\u0627\u062e\u0644 \u0648 \u0686\u0647 \u062e\u0627\u0631\u062c \u0627\u0632 \u06a9\u0634\u0648\u0631\u060c \u0647\u0631 \u0633\u0627\u0644\u0647 \u062f\u0631 \u0627\u0645\u0631\u062f\u0627\u062f\u0645\u0627\u0647\u060c \u062f\u0631 \u0647\u0645\u0627\u06cc\u0634\u06af\u0627\u0647 \u0641\u0631\u0647\u0646\u06af\u06cc\u060c \u062f\u06cc\u0646\u06cc\u060c \u0648\u0631\u0632\u0634\u06cc \u0645\u0627\u0631\u06a9\u0627\u0631 \u062a\u0647\u0631\u0627\u0646\u067e\u0627\u0631\u0633 \u0628\u0631\u06af\u0632\u0627\u0631 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f. \u062f\u0631\u062d\u0627\u0644 \u062d\u0627\u0636\u0631 \u0646\u06cc\u0632 \u062f\u0631 \u06f9 \u0631\u0634\u062a\u0647 \u0648\u0631\u0632\u0634\u06cc \u0641\u0648\u062a\u0628\u0627\u0644\u060c \u0628\u0633\u06a9\u062a\u0628\u0627\u0644\u060c \u0648\u0627\u0644\u06cc\u0628\u0627\u0644\u060c \u0628\u062f\u0645\u06cc\u0646\u062a\u0648\u0646\u060c \u062a\u0646\u06cc\u0633 \u0631\u0648\u06cc \u0645\u06cc\u0632\u060c \u0634\u0637\u0631\u0646\u062c\u060c \u062f\u0648 \u0648 \u0645\u06cc\u062f\u0627\u0646\u06cc\u060c \u0634\u0646\u0627 \u0648 \u062f\u0648\u0686\u0631\u062e\u0647 \u0633\u0648\u0627\u0631\u06cc \u062f\u0631 \u062f\u0648 \u06af\u0631\u0648\u0647 \u0622\u0642\u0627\u06cc\u0627\u0646 \u0648 \u0628\u0627\u0646\u0648\u0627\u0646 \u0648 \u062f\u0631 \u0631\u062f\u0647\u200c\u0647\u0627\u06cc \u0633\u0646\u06cc \u06af\u0648\u0646\u0627\u06af\u0648\u0646\u060c \u0628\u0627 \u0647\u0645\u062a \u06a9\u0627\u0646\u0648\u0646 \u062f\u0627\u0646\u0634\u062c\u0648\u06cc\u0627\u0646 \u0632\u0631\u062a\u0634\u062a\u06cc \u0628\u0631\u06af\u0632\u0627\u0631 \u06af\u0631\u062f\u06cc\u062f\u061b \u06a9\u0647 \u062d\u0627\u0635\u0644 \u0628\u06cc\u0634 \u0627\u0632 \u06f1\u06f1\u06f0 \u0647\u0632\u0627\u0631 \u0646\u0641\u0631 \u0633\u0627\u0639\u062a \u06a9\u0627\u0631 \u0648 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0631\u06cc\u0632\u06cc \u0634\u0628\u0627\u0646\u0647\u200c\u0631\u0648\u0632\u06cc \u062f\u0627\u0646\u0634\u062c\u0648\u06cc\u0627\u0646\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0627\u06cc \u0628\u0647 \u0645\u0631\u062d\u0644\u0647 \u0627\u062c\u0631\u0627 \u062f\u0631\u0622\u0648\u0631\u062f\u0646 \u0627\u06cc\u0646 \u067e\u06cc\u06a9\u0627\u0631\u0647\u0627\u060c \u0627\u0632 \u0627\u0633\u0641\u0646\u062f\u0645\u0627\u0647 \u0622\u063a\u0627\u0632 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f. "),u.qZA(),u.TgZ(4,"div",3)(5,"span"),u._uU(6,"\u062a\u0627 \u062c\u0627\u0645 \u062c\u0627\u0646\u200c\u0628\u0627\u062e\u062a\u06af\u0627\u0646 \u0686\u0642\u062f\u0631 \u0645\u0627\u0646\u062f\u0647"),u.qZA(),u.TgZ(7,"div"),u._UZ(8,"app-countdown"),u.qZA()(),u.TgZ(9,"div",4)(10,"button",5),u._uU(11,"\u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA(),u.TgZ(12,"button",6),u._uU(13,"\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"),u.qZA(),u.YNc(14,L,2,0,"button",7),u.TgZ(15,"button",8),u._uU(16," \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0627\u0632\u06cc \u0647\u0627"),u.qZA()()()),2&n&&(u.xp6(14),u.Q6J("ngIf",o.isAdmin))},dependencies:[h.O5,y.lW,m.Hw,d.rH,P],styles:["mat-icon[_ngcontent-%COMP%]{width:15rem;height:15rem}"]}),t})();var O=e(6815),U=e(3472);let R=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-register-home-page"]],decls:11,vars:0,consts:[[1,"text-center"],[1,"mb-2"],[1,"flex","flex-wrap","justify-center","gap-2","max-md:flex-col"],["color","primary","mat-raised-button","","routerLink","single",1,"basis-1/4"],["mat-raised-button","","color","accent","routerLink","team",1,"basis-1/4"],["mat-raised-button","","routerLink","dormitory",1,"basis-1/4"],[1,"basis-1/3","max-md:mt-3"]],template:function(n,o){1&n&&(u.TgZ(0,"div",0)(1,"p",1),u._uU(2,"\u0628\u062e\u0634 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f."),u.qZA(),u.TgZ(3,"div",2)(4,"button",3),u._uU(5,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),u.qZA(),u.TgZ(6,"button",4),u._uU(7,"\u062a\u06cc\u0645\u06cc"),u.qZA(),u.TgZ(8,"button",5),u._uU(9,"\u062e\u0648\u0627\u0628\u06af\u0627\u0647"),u.qZA(),u._UZ(10,"app-back-button",6),u.qZA()())},dependencies:[y.lW,U.W,d.rH],styles:["button[_ngcontent-%COMP%]{height:5rem!important;line-height:3}"]}),t})();var D=e(795),j=e(9078);let B=(()=>{class t{constructor(n){this.jamRepository=n,this.isLoading=!0}ngAfterViewInit(){this.jamRepository.history.subscribe(n=>{this.history=n,this.isLoading=!1})}}return t.\u0275fac=function(n){return new(n||t)(u.Y36(D.e))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-history-page"]],decls:1,vars:2,consts:[[1,"mx-2","text-justify",3,"largeLoading","innerHTML"]],template:function(n,o){1&n&&u._UZ(0,"div",0),2&n&&u.Q6J("largeLoading",o.isLoading)("innerHTML",null==o.history?null:o.history.content,u.oJD)},dependencies:[j.M],styles:[".wp-block-image{text-align:center;margin-left:auto;margin-right:auto;width:300px}\n"],encapsulation:2}),t})();var I=e(5861),w=e(2994),z=e(4850),Y=e(599);const M=()=>{const t=(0,u.f3M)(Y.J);return(0,u.f3M)(D.e).canRegister.pipe((0,w.b)(function(){var s=(0,I.Z)(function*(n){n.access||(yield t.accessRegister())});return function(n){return s.apply(this,arguments)}}()),(0,z.U)(s=>s.access))},N=[{path:"",component:H},{path:"register",canActivate:[M],component:R},{path:"history",component:B},{path:"register",canActivate:[O.e,M],children:[{path:"single",loadChildren:()=>Promise.all([e.e(378),e.e(386),e.e(143),e.e(546),e.e(233),e.e(739),e.e(896)]).then(e.bind(e,9896)).then(t=>t.SingleModule)},{path:"team",loadChildren:()=>Promise.all([e.e(378),e.e(386),e.e(143),e.e(546),e.e(308),e.e(739),e.e(935)]).then(e.bind(e,2054)).then(t=>t.TeamModule)},{path:"dormitory",loadChildren:()=>Promise.all([e.e(386),e.e(143),e.e(546),e.e(418)]).then(e.bind(e,7418)).then(t=>t.DormitoryModule)}]},{path:"setad",canActivate:[()=>1==(0,u.f3M)(C.$).getTokenItem("isAdmin")],loadChildren:()=>Promise.all([e.e(143),e.e(308),e.e(805)]).then(e.bind(e,805)).then(t=>t.StetadModule)}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[d.Bz.forChild(N),d.Bz]}),t})();var Q=e(9759);let W=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[Q.m,J,S]}),t})()},795:(x,p,e)=>{e.d(p,{e:()=>y});var d=e(2340),u=e(4850),C=e(4650),h=e(529);let y=(()=>{class m{constructor(c){this._http=c,this._url=d.N.url+"/api/v1/account/jam"}getSportName(c){return this._http.post(this._url+"/field-name",{field:c}).pipe((0,u.U)(g=>g.fieldName))}getSubSportName(c){return this._http.post(this._url+"/subField-name",{subField:c}).pipe((0,u.U)(g=>g.subFieldName))}get history(){return this._http.get("https://kdz.ir/fa/?json=get_page&id=1036").pipe((0,u.U)(c=>c.page))}get canRegister(){return this._http.get(this._url+"/can-register")}get ageRange(){return this._http.get(this._url+"/age-range")}}return m.\u0275fac=function(c){return new(c||m)(C.LFG(h.eN))},m.\u0275prov=C.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);