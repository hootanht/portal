"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[222],{222:(ne,I,o)=>{o.r(I),o.d(I,{SingleModule:()=>te});var p=o(7084),s=o(458),C=o(5861),e=o(4650),b=o(4850),_=o(2340),h=o(6842),v=(()=>((v||(v={})).SportInsurance="sportInsurance",v))(),N=o(3594);let d=(()=>{class n extends h.x{constructor(){super(),this._url=_.N.url+"/api/v1/account/jam/single"}get SportInsurenceStatus(){return this.checkFieldStatus(v.SportInsurance,N.v.jam).pipe((0,b.U)(t=>t.status))}setSportInsurance(t){return this.http.post(this._url+"/sport-insurance",t)}get sportInsurance(){return this.http.get(this._url+"/sport-insurance")}register(t,u){return this.http.post(this._url+"/register",{field:t,subField:u})}getRegisteredStatus(t,u){return this.http.post(this._url+"/status",{field:t,subField:u})}delete(t,u){return this.http.post(this._url+"/delete",{field:t,subField:u})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const j=function(){var n=(0,C.Z)(function*(){const r=(0,e.inject)(d),t=(0,e.inject)(s.F0);return(yield r.SportInsurenceStatus.toPromise())||t.createUrlTree(["jam","single","sport-insurence"])});return function(){return n.apply(this,arguments)}}();var l=o(6895),g=o(4859);function P(n,r){1&n&&(e.\u0275\u0275elementStart(0,"button",22),e.\u0275\u0275text(1,"\u062f\u0648\u0628\u0644"),e.\u0275\u0275elementEnd())}function k(n,r){1&n&&(e.\u0275\u0275elementStart(0,"button",23),e.\u0275\u0275text(1,"\u0642\u0648\u0631\u0628\u0627\u063a\u0647"),e.\u0275\u0275elementEnd())}function D(n,r){1&n&&(e.\u0275\u0275elementStart(0,"button",24),e.\u0275\u0275text(1,"\u0645\u062e\u062a\u0644\u0637"),e.\u0275\u0275elementEnd())}function L(n,r){1&n&&(e.\u0275\u0275elementStart(0,"button",25),e.\u0275\u0275text(1,"\u0627\u0633\u062a\u0642\u0627\u0645\u062a"),e.\u0275\u0275elementEnd())}let T=(()=>{class n{constructor(t){this._activatedRoute=t,this.gender=t.snapshot.data.gender,this.ageRange=t.snapshot.data.ageRange}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.gz))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-single-home-page"]],decls:71,vars:4,consts:[[1,"gap-2"],[1,"grid","grid-cols-2","gap-4"],["mat-flat-button","","routerLink","4/1","color","primary"],["mat-flat-button","","routerLink","double/4/4","color","accent"],[1,"grid","grid-cols-3","gap-4"],["mat-flat-button","","routerLink","5/1","color","primary"],["mat-flat-button","","routerLink","double/5/2","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","double/5/4","color","accent"],["mat-flat-button","","routerLink","6/1","color","primary"],["mat-flat-button","","routerLink","double/6/2","color","accent"],["mat-flat-button","","routerLink","6/9","color","accent"],["mat-flat-button","","routerLink","6/5","color","accent"],["mat-flat-button","","routerLink","6/10","color","accent"],["mat-flat-button","","routerLink","7/11","color","primary"],["mat-flat-button","","routerLink","7/12","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","7/13","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","9/6","color","primary"],["mat-flat-button","","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","double/9/7","color","accent"],["mat-flat-button","","routerLink","8/8","color","primary"],["mat-flat-button","","routerLink","8/6","color","accent"],["mat-button","","routerLink","sport-insurence"],["mat-flat-button","","routerLink","double/5/2","color","accent"],["mat-flat-button","","routerLink","7/12","color","accent"],["mat-flat-button","","routerLink","7/13","color","accent"],["mat-flat-button","","color","accent"]],template:function(t,u){1&t&&(e.\u0275\u0275elementStart(0,"mat-accordion",0)(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),e.\u0275\u0275text(4," \u0628\u062f\u0645\u06cc\u0646\u062a\u0648\u0646 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"mat-panel-description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",1)(7,"a",2),e.\u0275\u0275text(8,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"a",3),e.\u0275\u0275text(10,"\u062f\u0648\u0628\u0644 \u0645\u06cc\u06a9\u0633"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),e.\u0275\u0275text(14," \u062a\u0646\u06cc\u0633 \u0631\u0648\u06cc \u0645\u06cc\u0632 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"mat-panel-description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",4)(17,"button",5),e.\u0275\u0275text(18,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(19,P,2,0,"button",6),e.\u0275\u0275elementStart(20,"button",7),e.\u0275\u0275text(21,"\u062f\u0648\u0628\u0644 \u0645\u06cc\u06a9\u0633"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(22,"mat-expansion-panel")(23,"mat-expansion-panel-header")(24,"mat-panel-title"),e.\u0275\u0275text(25," \u0634\u0637\u0631\u0646\u062c "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(26,"mat-panel-description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",1)(28,"button",8),e.\u0275\u0275text(29,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"button",9),e.\u0275\u0275text(31,"\u062f\u0648\u0628\u0644"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"button",10),e.\u0275\u0275text(33,"\u0645\u0637\u0631\u0646\u062c"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"button",11),e.\u0275\u0275text(35,"\u0628\u06cc\u0644\u062a\u06cc\u0632"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"button",12),e.\u0275\u0275text(37,"\u0633\u06cc\u0645\u0648\u0644\u062a\u0627\u0646\u0647"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(38,"mat-expansion-panel")(39,"mat-expansion-panel-header")(40,"mat-panel-title"),e.\u0275\u0275text(41," \u0634\u0646\u0627 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(42,"mat-panel-description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(43,"div",1)(44,"button",13),e.\u0275\u0275text(45,"\u06a9\u0631\u0627\u0644 \u0633\u06cc\u0646\u0647"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(46,k,2,0,"button",14),e.\u0275\u0275template(47,D,2,0,"button",15),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(48,"mat-expansion-panel")(49,"mat-expansion-panel-header")(50,"mat-panel-title"),e.\u0275\u0275text(51," \u062f\u0648 \u0645\u06cc\u062f\u0627\u0646\u06cc "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(52,"mat-panel-description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(53,"div",1)(54,"button",16),e.\u0275\u0275text(55,"\u0633\u0631\u0639\u062a"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(56,L,2,0,"button",17),e.\u0275\u0275elementStart(57,"button",18),e.\u0275\u0275text(58,"\u0645\u062f\u0627\u062f\u06cc \u0645\u06cc\u06a9\u0633"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(59,"mat-expansion-panel")(60,"mat-expansion-panel-header")(61,"mat-panel-title"),e.\u0275\u0275text(62," \u062f\u0648\u0686\u0631\u062e\u0647 \u0633\u0648\u0627\u0631\u06cc "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(63,"mat-panel-description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(64,"div",1)(65,"button",19),e.\u0275\u0275text(66,"\u0627\u0633\u062a\u0642\u0627\u0645\u062a"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(67,"button",20),e.\u0275\u0275text(68,"\u062a\u0627\u06cc\u0645 \u062a\u0631\u06cc\u0644 \u0633\u0631\u0639\u062a"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(69,"a",21),e.\u0275\u0275text(70," \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(19),e.\u0275\u0275property("ngIf",1==u.gender),e.\u0275\u0275advance(27),e.\u0275\u0275property("ngIf",3==u.ageRange),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",3!=u.ageRange),e.\u0275\u0275advance(9),e.\u0275\u0275property("ngIf",2==u.gender))},dependencies:[l.NgIf,g.zs,g.lW,s.rH,p.pp,p.ib,p.yz,p.yK,p.u4]}),n})();var i=o(4006),S=o(599),x=o(3472),w=o(4044);function G(n,r){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"\u06a9\u0627\u0631\u062a \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0628\u0631\u0627\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u062c\u0627\u0645 \u062c\u0627\u0646\u0628\u0627\u062e\u062a\u06af\u0627\u0646 "),e.\u0275\u0275elementStart(2,"span",6),e.\u0275\u0275text(3,"\u0636\u0631\u0648\u0631\u06cc"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(4," \u0645\u06cc\u0628\u0627\u0634\u062f. "),e.\u0275\u0275elementEnd())}let M=(()=>{class n{constructor(t,u,a,m,f){this._singleRepository=t,this._swalService=a,this._route=m,this._router=f,this.fGroup=u.group({sportInsurance:u.control("",[i.kI.required])})}ngOnInit(){this.sportInsurance=this._route.snapshot.data.sportInsurance,this.status=this.sportInsurance.status,this.sportInsurance.status&&this.fGroup.controls.sportInsurance.setValue(this.sportInsurance.entity)}onSubmit(){var t=this;this._singleRepository.setSportInsurance({sportInsurance:this.fGroup.value?.sportInsurance??""}).subscribe((0,C.Z)(function*(){yield t._swalService.successFullSubmited(),t._router.navigate([".."])}))}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d),e.\u0275\u0275directiveInject(i.qu),e.\u0275\u0275directiveInject(S.J),e.\u0275\u0275directiveInject(s.gz),e.\u0275\u0275directiveInject(s.F0))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-sport-insurence-page"]],decls:14,vars:3,consts:[[1,"md:win-w-full","mt-10","mx-3"],[1,"flex","flex-col","gap-3",3,"formGroup","submit"],[4,"ngIf"],["href","http://ifsm.ir"],["fileType","6","accept","image/jpeg","formControlName","sportInsurance","eventType","2"],["type","submit","mat-flat-button","","color","accent",3,"disabled"],[1,"underline"]],template:function(t,u){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"form",1),e.\u0275\u0275listener("submit",function(){return u.onSubmit()}),e.\u0275\u0275template(2,G,5,0,"p",2),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4," \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0628\u0647 \u0622\u062f\u0631\u0633 "),e.\u0275\u0275elementStart(5,"a",3),e.\u0275\u0275text(6,"ifsm.ir"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(7," \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"p"),e.\u0275\u0275text(9,"\u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0634\u0645\u0627 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u06cc\u0627 \u0627\u0635\u0644\u0627\u062d \u0622\u0646 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0648\u0628\u0627\u0631 \u0622\u067e\u0644\u0648\u062f \u0648 \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f."),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"app-image-uploader",4),e.\u0275\u0275elementStart(11,"button",5),e.\u0275\u0275text(12,"\u062b\u0628\u062a"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(13,"app-back-button"),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",u.fGroup),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!u.status),e.\u0275\u0275advance(9),e.\u0275\u0275property("disabled",u.fGroup.invalid))},dependencies:[l.NgIf,i._Y,i.JJ,i.JL,i.sg,i.u,g.lW,x.W,w.$]}),n})();var c=o(3546);function W(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onWantRegister())}),e.\u0275\u0275text(4,"\u062b\u0628\u062a \u0646\u0627\u0645"),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2("\u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0638\u0631 \u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u0646\u0627\u0645 \u062f\u0631 ",t.sportName," ",t.subFieldName," \u0647\u0633\u062a\u06cc\u062f.")}}function V(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"button",3),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onWantDelete())}),e.\u0275\u0275text(3,"\u062d\u0630\u0641 \u062b\u0628\u062a \u0646\u0627\u0645"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2(" \u0634\u0645\u0627 \u062f\u0631 ",t.sportName," ",t.subFieldName," \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f. ")}}let z=(()=>{class n{constructor(t,u,a,m,f){this._singleService=t,this._router=u,this._location=a,this._activetedRoute=m,this._swalService=f,this._field=m.snapshot.params.field,this._subField=m.snapshot.params.subField,this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus,this.sportName=this._activetedRoute.snapshot.data.sportName,this.subFieldName=this._activetedRoute.snapshot.data.subFieldName}onWantRegister(){this._singleService.register(this._field,this._subField).subscribe(t=>{this._swalService.successFullRegister(),this._location.back()})}onWantDelete(){var t=this;return(0,C.Z)(function*(){(yield t._swalService.showWarnMessage()).isConfirmed&&t._singleService.delete(t._field,t._subField).subscribe(a=>{t._swalService.successFullSubmited(),t._location.back()})})()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d),e.\u0275\u0275directiveInject(s.F0),e.\u0275\u0275directiveInject(l.Location),e.\u0275\u0275directiveInject(s.gz),e.\u0275\u0275directiveInject(S.J))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-single-register-page"]],decls:8,vars:4,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],["mat-raised-button","","color","accent",1,"w-full",3,"click"],["mat-raised-button","","color","warn",1,"w-full",3,"click"]],template:function(t,u){if(1&t&&(e.\u0275\u0275elementStart(0,"mat-card")(1,"mat-card-title"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,W,5,2,"div",0),e.\u0275\u0275template(4,V,4,2,"ng-template",null,1,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(6,"mat-card-actions"),e.\u0275\u0275element(7,"app-back-button"),e.\u0275\u0275elementEnd()()),2&t){const a=e.\u0275\u0275reference(5);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",u.sportName," ",u.subFieldName," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!u.isRegistered.isRegistered)("ngIfElse",a)}},dependencies:[l.NgIf,g.lW,x.W,c.a8,c.hq,c.n5]}),n})();var H=o(7846),J=o(5980);let R=(()=>{class n extends h.x{constructor(){super(),this._url=_.N.url+"/api/v1/account/jam/double"}register(t,u,a){return this.http.post(this._url,{field:t,subField:u,individuals:a})}individuals(t,u){return this.http.post(this._url+"/individuals",{field:t,subField:u})}delete(t,u){return this.http.post(this._url+"/delete",{field:t,subField:u})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var O=o(1956);function U(n,r){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"app-profile-check-input",6),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&n){const t=r.index,u=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("formControlName",t)("profileMode",u.profileMode.needed),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("\u06cc\u0627\u0631 ",t+1,"")}}function Z(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"h3"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("submit",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onSubmited())}),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275template(5,U,3,3,"ng-container",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"button",5),e.\u0275\u0275text(7,"\u062b\u0628\u062a"),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2("\u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0638\u0631 \u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u0646\u0627\u0645 \u062f\u0631 ",t.sportName," ",t.subFieldName," \u0647\u0633\u062a\u06cc\u062f."),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",t.fGroup),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.fGroup.controls.individuals.controls),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",t.fGroup.invalid)}}function Y(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"button",7),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onWantDelete())}),e.\u0275\u0275text(3,"\u062d\u0630\u0641 \u062b\u0628\u062a \u0646\u0627\u0645"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2(" \u0634\u0645\u0627 \u062f\u0631 ",t.sportName," ",t.subFieldName," \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f. ")}}let K=(()=>{class n{constructor(t,u,a,m,f){this._activetedRoute=t,this._fb=u,this._location=a,this._doubleService=m,this._swalService=f,this.profileMode=J.g,this._field=t.snapshot.params.field,this._subField=t.snapshot.params.subField,this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus,this.sportName=this._activetedRoute.snapshot.data.sportName,this.subFieldName=this._activetedRoute.snapshot.data.subFieldName,this.individual=this._activetedRoute.snapshot.data.individuals[0],this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus}ngOnInit(){const t=[];for(let u=0;u<this.individual.min-1;u++)t.push(this._fb.control("",[i.kI.required,H.O.nationalCodeChecker]));this.fGroup=this._fb.group({individuals:this._fb.array(t)})}onSubmited(){this._doubleService.register(this._field,this._subField,this.fGroup.value.individuals).subscribe(()=>{this._swalService.successFullRegister(),this._location.back()})}onWantDelete(){var t=this;return(0,C.Z)(function*(){(yield t._swalService.showWarnMessage()).isConfirmed&&t._doubleService.delete(t._field,t._subField).subscribe(a=>{t._swalService.successFullSubmited(),t._location.back()})})()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.gz),e.\u0275\u0275directiveInject(i.qu),e.\u0275\u0275directiveInject(l.Location),e.\u0275\u0275directiveInject(R),e.\u0275\u0275directiveInject(S.J))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-double-register-page"]],decls:9,vars:4,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],[3,"formGroup","submit"],["formArrayName","individuals",1,"flex","m-3","flex-col","md:max-w-md"],[4,"ngFor","ngForOf"],["type","submit","color","accent","mat-raised-button","",1,"w-full",3,"disabled"],[3,"formControlName","profileMode"],["mat-button","","color","warn",1,"w-full",3,"click"]],template:function(t,u){if(1&t&&(e.\u0275\u0275elementStart(0,"mat-card")(1,"mat-card-title"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"mat-card-content"),e.\u0275\u0275template(4,Z,8,5,"div",0),e.\u0275\u0275template(5,Y,4,2,"ng-template",null,1,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"mat-card-actions"),e.\u0275\u0275element(8,"app-back-button"),e.\u0275\u0275elementEnd()()),2&t){const a=e.\u0275\u0275reference(6);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",u.sportName," ",u.subFieldName," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!u.isRegistered.isRegistered)("ngIfElse",a)}},dependencies:[l.NgForOf,l.NgIf,i._Y,i.JJ,i.JL,i.sg,i.u,i.CE,g.lW,x.W,O.p,c.a8,c.hq,c.dn,c.n5]}),n})();const E=n=>{const r=n.params.field,t=n.params.subField;return(0,e.inject)(d).getRegisteredStatus(r,t)};var F=o(795);const y=n=>{const r=n.params.field;return(0,e.inject)(F.e).getSportName(r)},A=n=>{const r=n.params.subField;return(0,e.inject)(F.e).getSubSportName(r)},X=[{path:"",canActivate:[j],children:[{path:"",component:T,resolve:{gender:()=>(0,e.inject)(h.x).profileData().pipe((0,b.U)(n=>n.sexRaw)),ageRange:()=>(0,e.inject)(F.e).ageRange.pipe((0,b.U)(n=>n.ageRange))}},{path:":field/:subField",component:z,resolve:{registeredStatus:E,sportName:y,subFieldName:A}},{path:"double/:field/:subField",component:K,resolve:{sportName:y,subFieldName:A,individuals:n=>{const r=n.params.field,t=n.params.subField;return(0,e.inject)(R).individuals(r,t)},registeredStatus:E}},{path:"sport-insurence",component:M,resolve:{sportInsurance:()=>(0,e.inject)(d).sportInsurance}}]}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.Bz.forChild(X),s.Bz]}),n})();var ee=o(35);let te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[ee._,q,p.To]}),n})()}}]);