"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[896],{9896:(tu,F,i)=>{i.r(F),i.d(F,{SingleModule:()=>eu});var g=i(7084),r=i(6630),m=i(5861),u=i(4650),f=i(4850),Z=i(2403);const N=function(){var t=(0,m.Z)(function*(){const o=(0,u.f3M)(Z.J),e=(0,u.f3M)(r.F0);return(yield o.sportInsurance.pipe((0,f.U)(s=>s.membershipIsExpired)).toPromise())||e.createUrlTree(["jam","register","single","sport-insurence"])});return function(){return t.apply(this,arguments)}}();var l=i(6895),d=i(4859);function U(t,o){1&t&&(u.TgZ(0,"button",12),u._uU(1,"\u0642\u0648\u0631\u0628\u0627\u063a\u0647"),u.qZA())}function y(t,o){1&t&&(u.TgZ(0,"button",13),u._uU(1,"\u06a9\u0631\u0627\u0644 \u067e\u0634\u062a"),u.qZA())}function D(t,o){1&t&&(u.TgZ(0,"button",14),u._uU(1,"\u0645\u062e\u062a\u0644\u0637"),u.qZA())}function k(t,o){1&t&&(u.TgZ(0,"button",15),u._uU(1,"\u0627\u0633\u062a\u0642\u0627\u0645\u062a"),u.qZA())}function P(t,o){1&t&&(u.TgZ(0,"button",16),u._uU(1,"\u0646\u06cc\u0645\u0647 \u0627\u0633\u062a\u0642\u0627\u0645\u062a"),u.qZA())}let E=(()=>{class t{constructor(e){this._activatedRoute=e,this.gender=e.snapshot.data.gender,this.ageRange=e.snapshot.data.ageRange}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(r.gz))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-single-home-page"]],decls:34,vars:5,consts:[[1,"gap-2"],[1,"grid","grid-cols-2","gap-4"],["mat-flat-button","","routerLink","7/11","color","primary"],["mat-flat-button","","routerLink","7/12","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","7/14","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","7/13","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","9/6","color","primary"],["mat-flat-button","","routerLink","9/8","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","9/10","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","8/8","color","primary"],["mat-flat-button","","routerLink","8/6","color","accent"],["mat-button","","routerLink","sport-insurence"],["mat-flat-button","","routerLink","7/12","color","accent"],["mat-flat-button","","routerLink","7/14","color","accent"],["mat-flat-button","","routerLink","7/13","color","accent"],["mat-flat-button","","routerLink","9/8","color","accent"],["mat-flat-button","","routerLink","9/10","color","accent"]],template:function(e,n){1&e&&(u.TgZ(0,"mat-accordion",0)(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),u._uU(4," \u0634\u0646\u0627 "),u.qZA(),u._UZ(5,"mat-panel-description"),u.qZA(),u.TgZ(6,"div",1)(7,"button",2),u._uU(8,"\u06a9\u0631\u0627\u0644 \u0633\u06cc\u0646\u0647"),u.qZA(),u.YNc(9,U,2,0,"button",3),u.YNc(10,y,2,0,"button",4),u.YNc(11,D,2,0,"button",5),u.qZA()(),u.TgZ(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),u._uU(15," \u062f\u0648 \u0645\u06cc\u062f\u0627\u0646\u06cc "),u.qZA(),u._UZ(16,"mat-panel-description"),u.qZA(),u.TgZ(17,"div",1)(18,"button",6),u._uU(19,"\u0633\u0631\u0639\u062a"),u.qZA(),u.YNc(20,k,2,0,"button",7),u.YNc(21,P,2,0,"button",8),u.qZA()(),u.TgZ(22,"mat-expansion-panel")(23,"mat-expansion-panel-header")(24,"mat-panel-title"),u._uU(25," \u062f\u0648\u0686\u0631\u062e\u0647 \u0633\u0648\u0627\u0631\u06cc "),u.qZA(),u._UZ(26,"mat-panel-description"),u.qZA(),u.TgZ(27,"div",1)(28,"button",9),u._uU(29,"\u0627\u0633\u062a\u0642\u0627\u0645\u062a"),u.qZA(),u.TgZ(30,"button",10),u._uU(31,"\u062a\u0627\u06cc\u0645 \u062a\u0631\u06cc\u0644 \u0633\u0631\u0639\u062a"),u.qZA()()()(),u.TgZ(32,"a",11),u._uU(33," \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc"),u.qZA()),2&e&&(u.xp6(9),u.Q6J("ngIf",3==n.ageRange),u.xp6(1),u.Q6J("ngIf",3==n.ageRange&&0==n.gender),u.xp6(1),u.Q6J("ngIf",3!=n.ageRange),u.xp6(9),u.Q6J("ngIf",1==n.gender),u.xp6(1),u.Q6J("ngIf",0==n.gender))},dependencies:[l.O5,d.zs,d.lW,r.rH,g.pp,g.ib,g.yz,g.yK,g.u4]}),t})();var S=i(2340),C=i(6842);let h=(()=>{class t extends C.x{constructor(){super(),this._url=S.N.url+"/api/v1/account/jam/single"}register(e,n){return this.http.post(this._url+"/register",{field:e,subField:n})}getRegisteredStatus(e,n){return this.http.post(this._url+"/status",{field:e,subField:n})}delete(e,n){return this.http.post(this._url+"/delete",{field:e,subField:n})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var A=i(599),_=i(3472);function Y(t,o){1&t&&(u.TgZ(0,"a",6),u._uU(1,"\u0633\u0627\u0645\u0627\u0646\u0647 \u0641\u062f\u0631\u0627\u0633\u06cc\u0648\u0646 \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc"),u.qZA())}function q(t,o){1&t&&(u.TgZ(0,"button",7),u._uU(1,"\u0627\u062f\u0627\u0645\u0647 \u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA())}let M=(()=>{class t{constructor(e,n,s,p){this._singleRepository=e,this._swalService=n,this._route=s,this._router=p}ngOnInit(){this.sportInsurance=this._route.snapshot.data.sportInsurance}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(h),u.Y36(A.J),u.Y36(r.gz),u.Y36(r.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-sport-insurence-page"]],decls:15,vars:3,consts:[[1,"md:win-w-full","mt-10","flex","flex-col","gap-2","mx-3"],[1,"text-justify"],["href","http://ifsm.ir"],[3,"innerText"],["mat-flat-button","","color","primary","class","w-full","target","_blank","href","http://ifsm.ir",4,"ngIf"],["mat-flat-button","","color","accent","routerLink","/jam/register/single","class","w-full",4,"ngIf"],["mat-flat-button","","color","primary","target","_blank","href","http://ifsm.ir",1,"w-full"],["mat-flat-button","","color","accent","routerLink","/jam/register/single",1,"w-full"]],template:function(e,n){if(1&e&&(u.TgZ(0,"div",0)(1,"p",1),u._uU(2,"\u0628\u06cc\u0645\u0647 \u0648\u0632\u0631\u0634\u06cc \u0645\u0639\u062a\u0628\u0631 \u0628\u0631\u0627\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u062c\u0627\u0645 \u062c\u0627\u0646\u0628\u0627\u062e\u062a\u06af\u0627\u0646 \u0636\u0631\u0648\u0631\u06cc \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0647 \u0635\u0648\u0631\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 \u0641\u062f\u0631\u0627\u0633\u06cc\u0648\u0646 \u0628\u06cc\u0645\u0647 \u0648\u0632\u0631\u0634\u06cc \u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0627\u0639\u062a\u0628\u0627\u0631 \u0628\u06cc\u0645\u0647 \u0634\u0645\u0627 \u0631\u0627 \u0645\u06cc\u06af\u06cc\u0631\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a \u0646\u062f\u0627\u0634\u062a\u0646 \u0627\u0639\u062a\u0628\u0627\u0631 \u0634\u0645\u0627 \u0627\u0645\u06a9\u0627\u0646 \u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 \u067e\u06cc\u06a9\u0627\u0631 \u0647\u0627\u06cc \u0648\u0631\u0632\u0634\u06cc \u062c\u0627\u0645 \u062c\u0627\u0646\u0628\u0627\u062e\u062a\u06af\u0627\u0646 \u0631\u0627 \u0646\u062f\u0627\u0631\u06cc\u062f."),u.qZA(),u.TgZ(3,"p"),u._uU(4,"\u0628\u0631\u0627\u06cc \u062a\u0645\u062f\u06cc\u062f \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 "),u.TgZ(5,"a",2),u._uU(6,"\u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0628\u0627 \u0627\u062f\u0631\u0633 ifsm.ir "),u.qZA(),u._uU(7,"\u0627\u0642\u062f\u0627\u0645 \u0646\u0645\u0627\u06cc\u06cc\u062f."),u.qZA(),u.TgZ(8,"div")(9,"span"),u._uU(10,"\u062a\u0627\u0631\u06cc\u062e \u0627\u0639\u062a\u0628\u0627\u0631 \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0634\u0645\u0627: "),u.qZA(),u._UZ(11,"span",3),u.qZA(),u.YNc(12,Y,2,0,"a",4),u.YNc(13,q,2,0,"button",5),u._UZ(14,"app-back-button"),u.qZA()),2&e){let s;u.xp6(11),u.Q6J("innerText",null!==(s=null==n.sportInsurance?null:n.sportInsurance.persianExpireDate)&&void 0!==s?s:"--"),u.xp6(1),u.Q6J("ngIf",!(null!=n.sportInsurance&&n.sportInsurance.membershipIsExpired)),u.xp6(1),u.Q6J("ngIf",null==n.sportInsurance?null:n.sportInsurance.membershipIsExpired)}},dependencies:[l.O5,d.zs,d.lW,_.W,r.rH]}),t})();var c=i(3546);function w(t,o){if(1&t){const e=u.EpF();u.TgZ(0,"div",2)(1,"p"),u._uU(2),u.qZA(),u.TgZ(3,"p"),u._uU(4,"\u0634\u0645\u0627 \u0628\u0627 \u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0634\u062a\u0647 \u0642\u0628\u0648\u0644 \u06a9\u0631\u062f\u06cc\u062f \u06a9\u0647 "),u.TgZ(5,"a",3),u._uU(6,"\u0622\u06cc\u06cc\u0646 \u0646\u0627\u0645\u0647 \u062c\u0627\u0645 \u062c\u0627\u0646\u200c\u0628\u0627\u062e\u062a\u06af\u0627\u0646"),u.qZA(),u._uU(7),u.qZA(),u.TgZ(8,"button",4),u.NdJ("click",function(){u.CHM(e);const s=u.oxw();return u.KtG(s.onWantRegister())}),u._uU(9,"\u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA()()}if(2&t){const e=u.oxw();u.xp6(2),u.AsE("\u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0638\u0631 \u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 ",e.sportName," ",e.subFieldName," \u0647\u0633\u062a\u06cc\u062f."),u.xp6(5),u.hij(" \u0648 \u0622\u06cc\u06cc\u0646 \u0646\u0627\u0645\u0647 \u0631\u0634\u062a\u0647 ",e.sportName," \u0631\u0627 \u062e\u0648\u0627\u0646\u062f\u0647 \u0648 \u0642\u0628\u0648\u0644 \u062f\u0627\u0631\u06cc\u062f.")}}function L(t,o){if(1&t){const e=u.EpF();u.TgZ(0,"p"),u._uU(1),u.qZA(),u.TgZ(2,"button",5),u.NdJ("click",function(){u.CHM(e);const s=u.oxw();return u.KtG(s.onWantDelete())}),u._uU(3,"\u062d\u0630\u0641 \u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA()}if(2&t){const e=u.oxw();u.xp6(1),u.AsE(" \u0634\u0645\u0627 \u062f\u0631 ",e.sportName," ",e.subFieldName," \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f. ")}}let B=(()=>{class t{constructor(e,n,s,p,v){this._singleService=e,this._router=n,this._location=s,this._activetedRoute=p,this._swalService=v,this.isLoading=!1,this._field=p.snapshot.params.field,this._subField=p.snapshot.params.subField,this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus,this.sportName=this._activetedRoute.snapshot.data.sportName,this.subFieldName=this._activetedRoute.snapshot.data.subFieldName}onWantRegister(){1!=this.isLoading&&(this.isLoading=!0,this._singleService.register(this._field,this._subField).subscribe(e=>{this._swalService.successFullRegister(),this.isLoading=!1,this._location.back()}))}onWantDelete(){var e=this;return(0,m.Z)(function*(){(yield e._swalService.showWarnMessage()).isConfirmed&&e._singleService.delete(e._field,e._subField).subscribe(s=>{e._swalService.successFullSubmited(),e._location.back()})})()}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(h),u.Y36(r.F0),u.Y36(l.Ye),u.Y36(r.gz),u.Y36(A.J))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-single-register-page"]],decls:8,vars:4,consts:[["class","flex flex-col gap-2",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"flex","flex-col","gap-2"],["target","_blank","href","https://kdz.ir/fa/wp-content/uploads/2023/07/%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C%DB%8C.pdf"],["mat-raised-button","","color","accent",1,"w-full",3,"click"],["mat-raised-button","","color","warn",1,"w-full",3,"click"]],template:function(e,n){if(1&e&&(u.TgZ(0,"mat-card")(1,"mat-card-title"),u._uU(2),u.qZA(),u.YNc(3,w,10,3,"div",0),u.YNc(4,L,4,2,"ng-template",null,1,u.W1O),u.TgZ(6,"mat-card-actions"),u._UZ(7,"app-back-button"),u.qZA()()),2&e){const s=u.MAs(5);u.xp6(2),u.AsE(" ",n.sportName," ",n.subFieldName," "),u.xp6(1),u.Q6J("ngIf",!n.isRegistered.isRegistered)("ngIfElse",s)}},dependencies:[l.O5,d.lW,_.W,c.a8,c.hq,c.n5]}),t})();var a=i(4006),W=i(7846),z=i(5980);let x=(()=>{class t extends C.x{constructor(){super(),this._url=S.N.url+"/api/v1/account/jam/double"}register(e,n,s){return this.http.post(this._url,{field:e,subField:n,individuals:s})}individuals(e,n){return this.http.post(this._url+"/individuals",{field:e,subField:n})}delete(e,n){return this.http.post(this._url+"/delete",{field:e,subField:n})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var G=i(2676);function H(t,o){if(1&t&&(u.ynx(0),u.TgZ(1,"app-profile-check-input",7),u._uU(2),u.qZA(),u.BQk()),2&t){const e=o.index,n=u.oxw(2);u.xp6(1),u.Q6J("formControlName",e)("profileMode",n.profileMode.needed),u.xp6(1),u.hij("\u06a9\u062f \u0645\u0644\u06cc \u06cc\u0627\u0631 ",e+1,"")}}function Q(t,o){if(1&t){const e=u.EpF();u.TgZ(0,"div")(1,"h3"),u._uU(2),u.qZA(),u.TgZ(3,"form",2),u.NdJ("submit",function(){u.CHM(e);const s=u.oxw();return u.KtG(s.onSubmited())}),u.TgZ(4,"div",3),u.YNc(5,H,3,3,"ng-container",4),u.qZA(),u.TgZ(6,"p"),u._uU(7,"\u062a\u0645\u0627\u0645 \u0627\u0641\u0631\u0627\u062f \u062a\u06cc\u0645 \u0634\u0645\u0627 \u0628\u0627 \u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0634\u062a\u0647 \u0642\u0628\u0648\u0644 \u06a9\u0631\u062f\u06cc\u062f \u0627\u0646\u062f \u06a9\u0647 "),u.TgZ(8,"a",5),u._uU(9,"\u0622\u06cc\u06cc\u0646 \u0646\u0627\u0645\u0647 \u062c\u0627\u0645 \u062c\u0627\u0646\u200c\u0628\u0627\u062e\u062a\u06af\u0627\u0646"),u.qZA(),u._uU(10),u.qZA(),u.TgZ(11,"button",6),u._uU(12,"\u062b\u0628\u062a"),u.qZA()()()}if(2&t){const e=u.oxw();u.xp6(2),u.AsE("\u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0638\u0631 \u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u0646\u0627\u0645 \u062f\u0631 ",e.sportName," ",e.subFieldName," \u0647\u0633\u062a\u06cc\u062f."),u.xp6(1),u.Q6J("formGroup",e.fGroup),u.xp6(2),u.Q6J("ngForOf",e.fGroup.controls.individuals.controls),u.xp6(5),u.hij(" \u0648 \u0622\u06cc\u06cc\u0646 \u0646\u0627\u0645\u0647 \u0631\u0634\u062a\u0647 ",e.sportName," \u0631\u0627 \u062e\u0648\u0646\u062f\u0647 \u0648 \u0642\u0628\u0648\u0644 \u062f\u0627\u0631\u0646\u062f."),u.xp6(1),u.Q6J("disabled",e.fGroup.invalid)}}function j(t,o){if(1&t){const e=u.EpF();u.TgZ(0,"p"),u._uU(1),u.qZA(),u.TgZ(2,"button",8),u.NdJ("click",function(){u.CHM(e);const s=u.oxw();return u.KtG(s.onWantDelete())}),u._uU(3,"\u062d\u0630\u0641 \u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA()}if(2&t){const e=u.oxw();u.xp6(1),u.AsE(" \u0634\u0645\u0627 \u062f\u0631 ",e.sportName," ",e.subFieldName," \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f. ")}}let O=(()=>{class t{constructor(e,n,s,p,v){this._activetedRoute=e,this._fb=n,this._location=s,this._doubleService=p,this._swalService=v,this.isLoading=!1,this.profileMode=z.g,this._field=e.snapshot.params.field,this._subField=e.snapshot.params.subField,this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus,this.sportName=this._activetedRoute.snapshot.data.sportName,this.subFieldName=this._activetedRoute.snapshot.data.subFieldName,this.individual=this._activetedRoute.snapshot.data.individuals[0],this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus}ngOnInit(){const e=[];for(let n=0;n<this.individual.min-1;n++)e.push(this._fb.control("",[a.kI.required,W.O.nationalCodeChecker]));this.fGroup=this._fb.group({individuals:this._fb.array(e)})}onSubmited(){1!=this.isLoading&&(this.isLoading=!0,this._doubleService.register(this._field,this._subField,this.fGroup.value.individuals).subscribe(()=>{this._swalService.successFullRegister(),this.isLoading=!1,this._location.back()}))}onWantDelete(){var e=this;return(0,m.Z)(function*(){(yield e._swalService.showWarnMessage()).isConfirmed&&e._doubleService.delete(e._field,e._subField).subscribe(s=>{e._swalService.successFullSubmited(),e._location.back()})})()}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(r.gz),u.Y36(a.qu),u.Y36(l.Ye),u.Y36(x),u.Y36(A.J))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-double-register-page"]],decls:9,vars:4,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],[3,"formGroup","submit"],["formArrayName","individuals",1,"flex","m-3","flex-col","md:max-w-md"],[4,"ngFor","ngForOf"],["target","_blank","href","https://kdz.ir/fa/wp-content/uploads/2023/07/%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C%DB%8C.pdf"],["type","submit","color","accent","mat-raised-button","",1,"w-full",3,"disabled"],[3,"formControlName","profileMode"],["mat-button","","color","warn",1,"w-full",3,"click"]],template:function(e,n){if(1&e&&(u.TgZ(0,"mat-card")(1,"mat-card-title"),u._uU(2),u.qZA(),u.TgZ(3,"mat-card-content"),u.YNc(4,Q,13,6,"div",0),u.YNc(5,j,4,2,"ng-template",null,1,u.W1O),u.qZA(),u.TgZ(7,"mat-card-actions"),u._UZ(8,"app-back-button"),u.qZA()()),2&e){const s=u.MAs(6);u.xp6(2),u.AsE(" ",n.sportName," ",n.subFieldName," "),u.xp6(2),u.Q6J("ngIf",!n.isRegistered.isRegistered)("ngIfElse",s)}},dependencies:[l.sg,l.O5,a._Y,a.JJ,a.JL,a.sg,a.u,a.CE,d.lW,_.W,G.p,c.a8,c.hq,c.dn,c.n5]}),t})();const R=t=>{const o=t.params.field,e=t.params.subField;return(0,u.f3M)(h).getRegisteredStatus(o,e)};var b=i(795);const T=t=>{const o=t.params.field;return(0,u.f3M)(b.e).getSportName(o)},I=t=>{const o=t.params.subField;return(0,u.f3M)(b.e).getSubSportName(o)},V=[{path:"sport-insurence",component:M,resolve:{sportInsurance:()=>(0,u.f3M)(Z.J).sportInsurance}},{path:"",canActivate:[N],children:[{path:"",component:E,resolve:{gender:()=>(0,u.f3M)(C.x).profileData().pipe((0,f.U)(t=>t.entity.sexRaw)),ageRange:()=>(0,u.f3M)(b.e).ageRange.pipe((0,f.U)(t=>t.ageRange))}},{path:":field/:subField",component:B,resolve:{registeredStatus:R,sportName:T,subFieldName:I}},{path:"double/:field/:subField",component:O,resolve:{sportName:T,subFieldName:I,individuals:t=>{const o=t.params.field,e=t.params.subField;return(0,u.f3M)(x).individuals(o,e)},registeredStatus:R}}]}];let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[r.Bz.forChild(V),r.Bz]}),t})();var uu=i(35);let eu=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[uu._,$,g.To]}),t})()}}]);