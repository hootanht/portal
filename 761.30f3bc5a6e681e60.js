"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[761],{8761:(Ge,U,r)=>{r.r(U),r.d(U,{StetadModule:()=>ze});var g=r(6630),e=r(4650),S=r(4859),_=r(2687),E=r(1281),m=r(9521),I=r(8929),R=r(6787),D=r(2654),O=r(1086),Y=r(8139),w=r(1059),L=r(7545),k=r(2986),B=r(7625),T=r(2198),N=r(8583),f=r(3238),M=r(6895),G=r(4080),l=r(7340),X=r(445),A=r(8184),$=r(3353),V=r(2744);const K=["mat-menu-item",""];function W(n,s){1&n&&(e.O4$(),e.TgZ(0,"svg",3),e._UZ(1,"polygon",4),e.qZA())}const ee=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],te=["mat-icon, [matMenuItemIcon]","*"];function ne(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",0),e.NdJ("keydown",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a._handleKeydown(o))})("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.closed.emit("click"))})("@transformMenu.start",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a._onAnimationStart(o))})("@transformMenu.done",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a._onAnimationDone(o))}),e.TgZ(1,"div",1),e.Hsn(2),e.qZA()()}if(2&n){const t=e.oxw();e.Q6J("id",t.panelId)("ngClass",t._classList)("@transformMenu",t._panelAnimationState),e.uIk("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}const ie=["*"],F=new e.OlP("MAT_MENU_PANEL"),oe=(0,f.Kr)((0,f.Id)(class{}));let Z=(()=>{class n extends oe{constructor(t,i,o,a,u){super(),this._elementRef=t,this._document=i,this._focusMonitor=o,this._parentMenu=a,this._changeDetectorRef=u,this.role="menuitem",this._hovered=new I.xQ,this._focused=new I.xQ,this._highlighted=!1,this._triggersSubmenu=!1,a?.addItem?.(this)}focus(t,i){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const t=this._elementRef.nativeElement.cloneNode(!0),i=t.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<i.length;o++)i[o].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(M.K0),e.Y36(_.tE),e.Y36(F,8),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator","mdc-list-item"],hostVars:8,hostBindings:function(t,i){1&t&&e.NdJ("click",function(a){return i._checkDisabled(a)})("mouseenter",function(){return i._handleMouseEnter()}),2&t&&(e.uIk("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),e.ekj("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[e.qOj],attrs:K,ngContentSelectors:te,decls:5,vars:3,consts:[[1,"mdc-list-item__primary-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false",4,"ngIf"],["viewBox","0 0 5 10","focusable","false",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){1&t&&(e.F$t(ee),e.Hsn(0),e.TgZ(1,"span",0),e.Hsn(2,1),e.qZA(),e._UZ(3,"div",1),e.YNc(4,W,2,0,"svg",2)),2&t&&(e.xp6(3),e.Q6J("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),e.xp6(1),e.Q6J("ngIf",i._triggersSubmenu))},dependencies:[M.O5,f.wG],encapsulation:2,changeDetection:0}),n})();const se=new e.OlP("MatMenuContent"),P={transformMenu:(0,l.X$)("transformMenu",[(0,l.SB)("void",(0,l.oB)({opacity:0,transform:"scale(0.8)"})),(0,l.eR)("void => enter",(0,l.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,l.oB)({opacity:1,transform:"scale(1)"}))),(0,l.eR)("* => void",(0,l.jt)("100ms 25ms linear",(0,l.oB)({opacity:0})))]),fadeInItems:(0,l.X$)("fadeInItems",[(0,l.SB)("showing",(0,l.oB)({opacity:1})),(0,l.eR)("void => *",[(0,l.oB)({opacity:0}),(0,l.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let ae=0;const H=new e.OlP("mat-menu-default-options",{providedIn:"root",factory:function re(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let v=(()=>{class n{get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(t){this._overlapTrigger=(0,E.Ig)(t)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(t){this._hasBackdrop=(0,E.Ig)(t)}set panelClass(t){const i=this._previousPanelClass;i&&i.length&&i.split(" ").forEach(o=>{this._classList[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(o=>{this._classList[o]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(t){this.panelClass=t}constructor(t,i,o,a){this._elementRef=t,this._ngZone=i,this._defaultOptions=o,this._changeDetectorRef=a,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._directDescendantItems=new e.n_E,this._classList={},this._panelAnimationState="void",this._animationDone=new I.xQ,this.overlayPanelClass=this._defaultOptions.overlayPanelClass||"",this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new e.vpe,this.close=this.closed,this.panelId="mat-menu-panel-"+ae++}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new _.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,w.O)(this._directDescendantItems),(0,L.w)(t=>(0,R.T)(...t.map(i=>i._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{const i=this._keyManager;if("enter"===this._panelAnimationState&&i.activeItem?._hasFocus()){const o=t.toArray(),a=Math.max(0,Math.min(o.length-1,i.activeItemIndex||0));o[a]&&!o[a].disabled?i.setActiveItem(a):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe((0,w.O)(this._directDescendantItems),(0,L.w)(i=>(0,R.T)(...i.map(o=>o._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){const i=t.keyCode,o=this._keyManager;switch(i){case m.hY:(0,m.Vb)(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case m.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case m.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(i===m.LH||i===m.JH)&&o.setFocusOrigin("keyboard"),void o.onKeydown(t)}t.stopPropagation()}focusFirstItem(t="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe((0,k.q)(1)).subscribe(()=>{let i=null;if(this._directDescendantItems.length&&(i=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!i||!i.contains(document.activeElement)){const o=this._keyManager;o.setFocusOrigin(t).setFirstItemActive(),!o.activeItem&&i&&i.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){const i=Math.min(this._baseElevation+t,24),o=`${this._elevationPrefix}${i}`,a=Object.keys(this._classList).find(u=>u.startsWith(this._elevationPrefix));(!a||a===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[o]=!0,this._previousElevation=o)}setPositionClasses(t=this.xPosition,i=this.yPosition){const o=this._classList;o["mat-menu-before"]="before"===t,o["mat-menu-after"]="after"===t,o["mat-menu-above"]="above"===i,o["mat-menu-below"]="below"===i,this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(t){this._animationDone.next(t),this._isAnimating=!1}_onAnimationStart(t){this._isAnimating=!0,"enter"===t.toState&&0===this._keyManager.activeItemIndex&&(t.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,w.O)(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(H),e.Y36(e.sBO))},n.\u0275dir=e.lG2({type:n,contentQueries:function(t,i,o){if(1&t&&(e.Suo(o,se,5),e.Suo(o,Z,5),e.Suo(o,Z,4)),2&t){let a;e.iGM(a=e.CRH())&&(i.lazyContent=a.first),e.iGM(a=e.CRH())&&(i._allItems=a),e.iGM(a=e.CRH())&&(i.items=a)}},viewQuery:function(t,i){if(1&t&&e.Gf(e.Rgc,5),2&t){let o;e.iGM(o=e.CRH())&&(i.templateRef=o.first)}},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"}}),n})(),ue=(()=>{class n extends v{constructor(t,i,o,a){super(t,i,o,a),this._elevationPrefix="mat-elevation-z",this._baseElevation=8}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(H),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-menu"]],hostVars:3,hostBindings:function(t,i){2&t&&e.uIk("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[e._Bn([{provide:F,useExisting:n}]),e.qOj],ngContentSelectors:ie,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mdc-menu-surface","mdc-menu-surface--open","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content","mdc-list"]],template:function(t,i){1&t&&(e.F$t(),e.YNc(0,ne,3,6,"ng-template"))},dependencies:[M.mk],styles:['.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;position:relative}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item.mdc-list-item{align-items:center}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item .mdc-list-item__primary-text{white-space:normal}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[P.transformMenu,P.fadeInItems]},changeDetection:0}),n})();const Q=new e.OlP("mat-menu-scroll-strategy"),ce={provide:Q,deps:[A.aV],useFactory:function le(n){return()=>n.scrollStrategies.reposition()}},q=(0,$.i$)({passive:!0});let me=(()=>{class n{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){t!==this._menu&&(this._menu=t,this._menuCloseSubscription.unsubscribe(),t&&(this._menuCloseSubscription=t.close.subscribe(i=>{this._destroyMenu(i),("click"===i||"tab"===i)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(t,i,o,a,u,d,p,h,y){this._overlay=t,this._element=i,this._viewContainerRef=o,this._menuItemInstance=d,this._dir=p,this._focusMonitor=h,this._ngZone=y,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=D.w.EMPTY,this._hoverSubscription=D.w.EMPTY,this._menuCloseSubscription=D.w.EMPTY,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._handleTouchStart=C=>{(0,_.yG)(C)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new e.vpe,this.onMenuOpen=this.menuOpened,this.menuClosed=new e.vpe,this.onMenuClose=this.menuClosed,this._scrollStrategy=a,this._parentMaterialMenu=u instanceof v?u:void 0,i.nativeElement.addEventListener("touchstart",this._handleTouchStart,q)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,q),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const t=this.menu;if(this._menuOpen||!t)return;const i=this._createOverlay(t),o=i.getConfig(),a=o.positionStrategy;this._setPosition(t,a),o.hasBackdrop=null==t.hasBackdrop?!this.triggersSubmenu():t.hasBackdrop,i.attach(this._getPortal(t)),t.lazyContent&&t.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(t),t instanceof v&&(t._startAnimation(),t._directDescendantItems.changes.pipe((0,B.R)(t.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(t,i){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(t){if(!this._overlayRef||!this.menuOpen)return;const i=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===t||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,i instanceof v?(i._resetAnimation(),i.lazyContent?i._animationDone.pipe((0,T.h)(o=>"void"===o.toState),(0,k.q)(1),(0,B.R)(i.lazyContent._attached)).subscribe({next:()=>i.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),i?.lazyContent?.detach())}_initMenu(t){t.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,this._setMenuElevation(t),t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(t){if(t.setElevation){let i=0,o=t.parentMenu;for(;o;)i++,o=o.parentMenu;t.setElevation(i)}}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){const i=this._getOverlayConfig(t);this._subscribeToPositions(t,i.positionStrategy),this._overlayRef=this._overlay.create(i),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(t){return new A.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(t,i){t.setPositionClasses&&i.positionChanges.subscribe(o=>{const a="start"===o.connectionPair.overlayX?"after":"before",u="top"===o.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>t.setPositionClasses(a,u)):t.setPositionClasses(a,u)})}_setPosition(t,i){let[o,a]="before"===t.xPosition?["end","start"]:["start","end"],[u,d]="above"===t.yPosition?["bottom","top"]:["top","bottom"],[p,h]=[u,d],[y,C]=[o,a],b=0;if(this.triggersSubmenu()){if(C=o="before"===t.xPosition?"start":"end",a=y="end"===o?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const z=this._parentMaterialMenu.items.first;this._parentInnerPadding=z?z._getHostElement().offsetTop:0}b="bottom"===u?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(p="top"===u?"bottom":"top",h="top"===d?"bottom":"top");i.withPositions([{originX:o,originY:p,overlayX:y,overlayY:u,offsetY:b},{originX:a,originY:p,overlayX:C,overlayY:u,offsetY:b},{originX:o,originY:h,overlayX:y,overlayY:d,offsetY:-b},{originX:a,originY:h,overlayX:C,overlayY:d,offsetY:-b}])}_menuClosingActions(){const t=this._overlayRef.backdropClick(),i=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,O.of)(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,T.h)(u=>u!==this._menuItemInstance),(0,T.h)(()=>this._menuOpen)):(0,O.of)();return(0,R.T)(t,o,a,i)}_handleMousedown(t){(0,_.X6)(t)||(this._openedBy=0===t.button?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){const i=t.keyCode;(i===m.K5||i===m.L_)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===m.SV&&"ltr"===this.dir||i===m.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,T.h)(t=>t===this._menuItemInstance&&!t.disabled),(0,N.g)(0,Y.E)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof v&&this.menu._isAnimating?this.menu._animationDone.pipe((0,k.q)(1),(0,N.g)(0,Y.E),(0,B.R)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new G.UE(t.templateRef,this._viewContainerRef)),this._portal}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.aV),e.Y36(e.SBq),e.Y36(e.s_b),e.Y36(Q),e.Y36(F,8),e.Y36(Z,10),e.Y36(X.Is,8),e.Y36(_.tE),e.Y36(e.R0b))},n.\u0275dir=e.lG2({type:n,hostVars:3,hostBindings:function(t,i){1&t&&e.NdJ("click",function(a){return i._handleClick(a)})("mousedown",function(a){return i._handleMousedown(a)})("keydown",function(a){return i._handleKeydown(a)}),2&t&&e.uIk("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),n})(),de=(()=>{class n extends me{}return n.\u0275fac=function(){let s;return function(i){return(s||(s=e.n5z(n)))(i||n)}}(),n.\u0275dir=e.lG2({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],exportAs:["matMenuTrigger"],features:[e.qOj]}),n})(),pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[ce],imports:[M.ez,f.si,f.BQ,A.U8,V.ZD,f.BQ]}),n})(),he=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home-page"]],decls:58,vars:6,consts:[["mat-button","",3,"matMenuTriggerFor"],["menuBadminton","matMenu"],["mat-menu-item","","routerLink","single/4/1"],["mat-menu-item",""],["menuPingPong",""],["menuChess",""],["menuSwimming",""],["menuRunning",""],["menuByc",""]],template:function(t,i){if(1&t&&(e.TgZ(0,"button",0),e._uU(1,"\u0628\u062f\u0645\u06cc\u0646\u062a\u0648\u0646"),e.qZA(),e.TgZ(2,"button",0),e._uU(3,"\u062a\u0646\u06cc\u0633 \u0631\u0648\u06cc \u0645\u06cc\u0632"),e.qZA(),e.TgZ(4,"button",0),e._uU(5,"\u0634\u0637\u0631\u0646\u062c"),e.qZA(),e.TgZ(6,"button",0),e._uU(7,"\u0634\u0646\u0627"),e.qZA(),e.TgZ(8,"button",0),e._uU(9,"\u062f\u0648 \u0645\u06cc\u062f\u0627\u0646\u06cc"),e.qZA(),e.TgZ(10,"button",0),e._uU(11,"\u062f\u0648\u0686\u0631\u062e\u0647 \u0633\u0648\u0627\u0631\u06cc"),e.qZA(),e.TgZ(12,"mat-menu",null,1)(14,"button",2),e._uU(15,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),e.qZA(),e.TgZ(16,"button",3),e._uU(17,"\u062f\u0648\u0628\u0644 \u0645\u06cc\u06a9\u0633"),e.qZA()(),e.TgZ(18,"mat-menu",null,4)(20,"button",3),e._uU(21,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),e.qZA(),e.TgZ(22,"button",3),e._uU(23,"\u062f\u0648\u0628\u0644"),e.qZA(),e.TgZ(24,"button",3),e._uU(25,"\u062f\u0648\u0628\u0644 \u0645\u06cc\u06a9\u0633"),e.qZA()(),e.TgZ(26,"mat-menu",null,5)(28,"button",3),e._uU(29,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),e.qZA(),e.TgZ(30,"button",3),e._uU(31,"\u062f\u0648\u0628\u0644"),e.qZA(),e.TgZ(32,"button",3),e._uU(33,"\u0645\u0637\u0631\u0646\u062c"),e.qZA(),e.TgZ(34,"button",3),e._uU(35,"\u0628\u0644\u06cc\u062a\u0633"),e.qZA()(),e.TgZ(36,"mat-menu",null,6)(38,"button",3),e._uU(39,"\u06a9\u0631\u0627\u0644 \u0633\u06cc\u0646\u0647"),e.qZA(),e.TgZ(40,"button",3),e._uU(41,"\u0642\u0648\u0631\u0628\u0627\u063a\u0647"),e.qZA(),e.TgZ(42,"button",3),e._uU(43,"\u0645\u062e\u062a\u0644\u0637"),e.qZA()(),e.TgZ(44,"mat-menu",null,7)(46,"button",3),e._uU(47,"\u0633\u0631\u0639\u062a"),e.qZA(),e.TgZ(48,"button",3),e._uU(49,"\u0627\u0633\u062a\u0642\u0627\u0645\u062a"),e.qZA(),e.TgZ(50,"button",3),e._uU(51,"\u0646\u06cc\u0645\u0647 \u0627\u0633\u062a\u0642\u0627\u0645\u062a"),e.qZA()(),e.TgZ(52,"mat-menu",null,8)(54,"button",3),e._uU(55,"\u0627\u0633\u062a\u0642\u0627\u0645\u062a"),e.qZA(),e.TgZ(56,"button",3),e._uU(57,"\u062a\u0627\u06cc\u0645 \u062a\u0631\u06cc\u0644 \u0633\u0631\u0639\u062a"),e.qZA()()),2&t){const o=e.MAs(13),a=e.MAs(19),u=e.MAs(27),d=e.MAs(37),p=e.MAs(45),h=e.MAs(53);e.Q6J("matMenuTriggerFor",o),e.xp6(2),e.Q6J("matMenuTriggerFor",a),e.xp6(2),e.Q6J("matMenuTriggerFor",u),e.xp6(2),e.Q6J("matMenuTriggerFor",d),e.xp6(2),e.Q6J("matMenuTriggerFor",p),e.xp6(2),e.Q6J("matMenuTriggerFor",h)}},dependencies:[S.lW,ue,Z,de,g.rH]}),n})();var x=r(6308),c=r(2143),ge=r(2340),j=r(4850),fe=r(529);let J=(()=>{class n{constructor(t){this._httpClient=t,this._url=ge.N.url+"/api/v1/account/jam/setad"}get allPlayers(){return this._httpClient.get(this._url+"/all").pipe((0,j.U)(t=>t.data))}singlePlayers(t,i){return this._httpClient.post(`${this._url}/single-filtered`,{field:t,subField:i}).pipe((0,j.U)(o=>o.data))}singlePlayer(t){return this._httpClient.get(this._url+"/single/"+t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(fe.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _e=r(7392);function Me(n,s){1&n&&(e.TgZ(0,"th",18),e._uU(1," \u0646\u0627\u0645 "),e.qZA())}function ve(n,s){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij(" ",t.profile.name+" "+t.profile.family," ")}}function ye(n,s){1&n&&(e.TgZ(0,"th",18),e._uU(1,"\u0646\u0642\u0634 "),e.qZA())}function Ce(n,s){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij(" ",t.playerTypeName," ")}}function be(n,s){1&n&&(e.TgZ(0,"th",18),e._uU(1," \u06a9\u062f \u0645\u0644\u06cc "),e.qZA())}function Te(n,s){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij(" ",t.nationalCode," ")}}function Ae(n,s){1&n&&(e.TgZ(0,"th",20),e._uU(1," \u06af\u0631\u0648\u0647 \u0633\u0646\u06cc "),e.qZA())}function Ze(n,s){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij(" ",t.ageRangeName," ")}}function Pe(n,s){1&n&&(e.TgZ(0,"th",18),e._uU(1," \u0631\u0634\u062a\u0647 "),e.qZA())}function xe(n,s){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij(" ",t.fieldName," ")}}function Se(n,s){1&n&&(e.TgZ(0,"th",18),e._uU(1," \u062c\u0646\u0633\u06cc\u062a "),e.qZA())}function Ie(n,s){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij(" ",t.profile.sex," ")}}function Re(n,s){1&n&&(e.TgZ(0,"th",18),e._uU(1," \u0634\u0647\u0631 "),e.qZA())}function De(n,s){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij(" ",t.profile.city," ")}}function we(n,s){1&n&&(e.TgZ(0,"th",18),e._uU(1," \u0632\u0645\u0627\u0646 \u0633\u0627\u062e\u062a "),e.qZA())}function ke(n,s){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,t.created)," ")}}function Be(n,s){1&n&&(e.TgZ(0,"th",20),e._uU(1," \u0639\u06a9\u0633 "),e.qZA())}function Fe(n,s){if(1&n&&(e.TgZ(0,"td",19),e._UZ(1,"img",21),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.Q6J("src","https://api.kdz.ir/api/v1/files/show/"+t.profile.personalPhoto,e.LSH)}}function Ue(n,s){1&n&&(e.TgZ(0,"th",20),e._uU(1," \u0634\u0646\u0627\u0633\u0646\u0627\u0645\u0647 "),e.qZA())}function Ee(n,s){if(1&n&&(e.TgZ(0,"td",19),e._UZ(1,"img",21),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.Q6J("src","https://api.kdz.ir/api/v1/files/show/"+t.profile.IdCardPhoto,e.LSH)}}function Oe(n,s){1&n&&e._UZ(0,"th",20)}function Ye(n,s){1&n&&e._UZ(0,"td",19)}function Le(n,s){1&n&&e._UZ(0,"tr",22)}function Ne(n,s){1&n&&e._UZ(0,"tr",23),2&n&&e.Q6J("routerLink",s.$implicit.id)}let He=(()=>{class n{constructor(t,i){this._setadRepository=t,this.displayedColumns=["name","sex","nationalCode","ageRangeName","city","created","action"],this._field=i.snapshot.params.field,this._subField=i.snapshot.params.subField}ngAfterViewInit(){this.onRefreshClick()}onRefreshClick(){this._setadRepository.singlePlayers(this._field,this._subField).subscribe(t=>{this.dataSource=new c.by(t),this.dataSource.sort=this.sort})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(J),e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-single-list-page"]],viewQuery:function(t,i){if(1&t&&e.Gf(x.YE,5),2&t){let o;e.iGM(o=e.CRH())&&(i.sort=o.first)}},decls:39,vars:3,consts:[["mat-icon-button","",3,"click"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","playerType"],["matColumnDef","nationalCode"],["matColumnDef","ageRangeName"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","fieldName"],["matColumnDef","sex"],["matColumnDef","city"],["matColumnDef","created"],["matColumnDef","image"],["matColumnDef","idCard"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",3,"routerLink",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["target","_blank",1,"w-3","h-3",3,"src"],["mat-header-row",""],["mat-row","",1,"cursor-pointer",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.onRefreshClick()}),e.TgZ(1,"mat-icon"),e._uU(2,"refresh"),e.qZA()(),e.TgZ(3,"table",1),e.ynx(4,2),e.YNc(5,Me,2,0,"th",3),e.YNc(6,ve,2,1,"td",4),e.BQk(),e.ynx(7,5),e.YNc(8,ye,2,0,"th",3),e.YNc(9,Ce,2,1,"td",4),e.BQk(),e.ynx(10,6),e.YNc(11,be,2,0,"th",3),e.YNc(12,Te,2,1,"td",4),e.BQk(),e.ynx(13,7),e.YNc(14,Ae,2,0,"th",8),e.YNc(15,Ze,2,1,"td",4),e.BQk(),e.ynx(16,9),e.YNc(17,Pe,2,0,"th",3),e.YNc(18,xe,2,1,"td",4),e.BQk(),e.ynx(19,10),e.YNc(20,Se,2,0,"th",3),e.YNc(21,Ie,2,1,"td",4),e.BQk(),e.ynx(22,11),e.YNc(23,Re,2,0,"th",3),e.YNc(24,De,2,1,"td",4),e.BQk(),e.ynx(25,12),e.YNc(26,we,2,0,"th",3),e.YNc(27,ke,3,3,"td",4),e.BQk(),e.ynx(28,13),e.YNc(29,Be,2,0,"th",8),e.YNc(30,Fe,2,1,"td",4),e.BQk(),e.ynx(31,14),e.YNc(32,Ue,2,0,"th",8),e.YNc(33,Ee,2,1,"td",4),e.BQk(),e.ynx(34,15),e.YNc(35,Oe,1,0,"th",8),e.YNc(36,Ye,1,0,"td",4),e.BQk(),e.YNc(37,Le,1,0,"tr",16),e.YNc(38,Ne,1,1,"tr",17),e.qZA()),2&t&&(e.xp6(3),e.Q6J("dataSource",i.dataSource),e.xp6(34),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns))},dependencies:[S.RK,_e.Hw,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,x.YE,x.nU,g.rH,M.uU],styles:["button[_ngcontent-%COMP%]{position:absolute;left:1rem}"]}),n})();var Qe=r(3472);const qe=[{path:"",component:he},{path:"single/:field/:subField",component:He},{path:"single/:field/:subField/:id",component:(()=>{class n{constructor(t){this.player=t.snapshot.data.player,console.log(this.player)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-single-player-ditail-page"]],decls:49,vars:11,consts:[[1,"grid","gap-3","grid-cols-3"],[3,"innerText"],[1,"w-32","h-32",3,"src"],["mat-stroked-button","","disabled","true","color","primary"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"span"),e._uU(3,"\u0646\u0627\u0645: "),e.qZA(),e._UZ(4,"span",1),e.qZA(),e.TgZ(5,"div")(6,"span"),e._uU(7,"\u062c\u0646\u0633\u06cc\u062a: "),e.qZA(),e._UZ(8,"span",1),e.qZA(),e.TgZ(9,"div")(10,"span"),e._uU(11,"\u0648\u0631\u0632\u0634: "),e.qZA(),e._UZ(12,"span",1),e.qZA(),e.TgZ(13,"div")(14,"span"),e._uU(15,"\u0631\u062f\u0647: "),e.qZA(),e._UZ(16,"span",1),e.qZA(),e.TgZ(17,"div")(18,"span"),e._uU(19,"\u0634\u0647\u0631: "),e.qZA(),e._UZ(20,"span",1),e.qZA(),e.TgZ(21,"div")(22,"span"),e._uU(23,"\u0634\u0645\u0627\u0631\u0647 \u0645\u0646\u0632\u0644: "),e.qZA(),e._UZ(24,"span",1),e.qZA(),e.TgZ(25,"div")(26,"span"),e._uU(27,"\u0622\u062f\u0631\u0633: "),e.qZA(),e._UZ(28,"span",1),e.qZA(),e.TgZ(29,"div")(30,"span"),e._uU(31,"\u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f: "),e.qZA(),e._UZ(32,"span",1),e.qZA(),e.TgZ(33,"div")(34,"span"),e._uU(35,"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647: "),e.qZA(),e._UZ(36,"span",1),e.qZA(),e.TgZ(37,"div")(38,"span"),e._uU(39,"\u0639\u06a9\u0633: "),e.qZA(),e._UZ(40,"img",2),e.qZA(),e.TgZ(41,"div")(42,"span"),e._uU(43,"\u0634\u0646\u0627\u0633\u0646\u0627\u0645\u0647: "),e.qZA(),e._UZ(44,"img",2),e.qZA(),e.TgZ(45,"div")(46,"button",3),e._uU(47,"\u062a\u0627\u06cc\u06cc\u062f \u062b\u0628\u062a\u0646\u0627\u0645"),e.qZA()()(),e._UZ(48,"app-back-button")),2&t&&(e.xp6(4),e.Q6J("innerText",i.player.profile.name+" "+i.player.profile.family),e.xp6(4),e.Q6J("innerText",i.player.profile.sex),e.xp6(4),e.Q6J("innerText",i.player.fieldName+"-"+i.player.subFieldName),e.xp6(4),e.Q6J("innerText",i.player.ageRangeName),e.xp6(4),e.Q6J("innerText",i.player.profile.city),e.xp6(4),e.Q6J("innerText",i.player.profile.phone),e.xp6(4),e.Q6J("innerText",i.player.profile.address),e.xp6(4),e.Q6J("innerText",i.player.profile.birthday),e.xp6(4),e.Q6J("innerText",i.player.mobile),e.xp6(4),e.Q6J("src","https://api.kdz.ir/api/v1/files/show/"+i.player.profile.personalPhoto,e.LSH),e.xp6(4),e.Q6J("src","https://api.kdz.ir/api/v1/files/show/"+i.player.profile.IdCardPhoto,e.LSH))},dependencies:[S.lW,Qe.W]}),n})(),resolve:{player:n=>(0,e.f3M)(J).singlePlayer(+n.params.id)}}];let je=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(qe),g.Bz]}),n})();var Je=r(9759);let ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[Je.m,c.p0,x.JX,pe,je]}),n})()}}]);