"use strict";(self.webpackChunkangularexampleapp=self.webpackChunkangularexampleapp||[]).push([[562],{562:($_,y,a)=>{a.r(y),a.d(y,{HeroModule:()=>y_});var g=a(9133),Q=a(5685),P=a(3886);function $(e,n,t,o,r,i,l){try{var s=e[i](l),E=s.value}catch(c){return void t(c)}s.done?n(E):Promise.resolve(E).then(o,r)}var _=a(3668),R=a(4753);class C{constructor(n={}){this.id=n.id,this.realName=n.realName||"",this.alterEgo=n.alterEgo||"",this.published=n.published||!1,this.image=n.image||"",this.usersVoted=n.usersVoted||[]}deserialize(n){return Object.assign(this,n),this}}var h=a(189),Y=a(7714);let L=(()=>{class e{constructor(t){this.apollo=t}searchHeroes({fetchPolicy:t}){return this.apollo.watchQuery({query:h.Ps`
        query GetFeed {
          searchHeroes(
            query: ""
            after: ""
            first: 10
            orderBy: {
              direction: desc
              field: usersVoted
            }
            skip: 0
          ) {
            edges {
              cursor
              node {
                id
                realName
                alterEgo
                image
                published
                usersVoted {
                  firstname
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            totalCount
          }
        }
      `,fetchPolicy:t}).valueChanges.pipe((0,R.U)(o=>o.data.searchHeroes.edges.map(r=>new C(r.node))))}getHeroById(t){return this.apollo.watchQuery({query:h.Ps`
        query Hero {
          hero(heroId: "${t}") {
            id
            realName
            alterEgo
            image
            published
          }
        }
      `}).valueChanges.pipe((0,R.U)(o=>new C(o.data.hero)))}createHero(t){return this.apollo.mutate({mutation:h.Ps`
        mutation CreateHero {
          createHero(data: {
            realName: "${t.realName}"
            alterEgo: "${t.alterEgo}"
          }) {
            id
            realName
            alterEgo
            image
            published
          }
        }
      `}).pipe((0,R.U)(o=>o.errors?o:o.data.createHero))}voteHero(t){return this.apollo.mutate({mutation:h.Ps`
        mutation VoteHero {
          voteHero(heroId: "${t.id}") {
            id
          }
        }
      `}).pipe((0,R.U)(o=>o.errors?o:o.data.voteHero))}removeHero(t){return this.apollo.mutate({mutation:h.Ps`
        mutation RemoveHero {
          removeHero(heroId: "${t}") {
            id
          }
        }
      `}).pipe((0,R.U)(o=>o.errors?o:{}))}}return e.\u0275fac=function(t){return new(t||e)(_.LFG(Y._M))},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),X=(()=>{class e{constructor(t){this.heroService=t}resolve(t){var o=this;return function(e){return function(){var n=this,t=arguments;return new Promise(function(o,r){var i=e.apply(n,t);function l(E){$(i,o,r,l,s,"next",E)}function s(E){$(i,o,r,l,s,"throw",E)}l(void 0)})}}(function*(){const r=t.paramMap.get("id")||"";return o.heroService.getHeroById(r)})()}}return e.\u0275fac=function(t){return new(t||e)(_.LFG(L))},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac}),e})();var d=a(9814),H=a(5551),f=a(7244),m=a(6019),v=a(86),u=a(888),b=a(3149),G=a(9112);let W=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-hero-loading"]],decls:12,vars:5,consts:[["id","loading-card",1,"hero-card"],["mat-card-avatar","",1,"hero-header__image"],[3,"width","height"],[1,"flex-spacer"],[1,"hero-actions"],[1,"icon__like--grey"],[3,"height"]],template:function(t,o){1&t&&(_.TgZ(0,"mat-card",0),_.TgZ(1,"mat-card-header"),_._UZ(2,"div",1),_.TgZ(3,"mat-card-title"),_._UZ(4,"app-loading-placeholder",2),_.qZA(),_.TgZ(5,"mat-card-subtitle"),_._UZ(6,"app-loading-placeholder",2),_.qZA(),_._UZ(7,"div",3),_.TgZ(8,"div",4),_.TgZ(9,"mat-icon",5),_._uU(10,"favorite"),_.qZA(),_.qZA(),_.qZA(),_._UZ(11,"app-loading-placeholder",6),_.qZA()),2&t&&(_.xp6(4),_.Q6J("width","200px")("height","1rem"),_.xp6(2),_.Q6J("width","160px")("height","1rem"),_.xp6(5),_.Q6J("height","486px"))},directives:[u.a8,u.dk,u.kc,u.n5,b.k,u.$j,G.Hw],styles:[".hero-header__image[_ngcontent-%COMP%]{background:#bbbbbb}"]}),e})();var F,U,k=a(5548),z=a(1640),I=0,Z=0;const j=function(e,n,t){var o=n&&t||0,r=n||new Array(16),i=(e=e||{}).node||F,l=void 0!==e.clockseq?e.clockseq:U;if(null==i||null==l){var s=e.random||(e.rng||k.Z)();null==i&&(i=F=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),null==l&&(l=U=16383&(s[6]<<8|s[7]))}var E=void 0!==e.msecs?e.msecs:Date.now(),c=void 0!==e.nsecs?e.nsecs:Z+1,N=E-I+(c-Z)/1e4;if(N<0&&void 0===e.clockseq&&(l=l+1&16383),(N<0||E>I)&&void 0===e.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");I=E,Z=c,U=l;var M=(1e4*(268435455&(E+=122192928e5))+c)%4294967296;r[o++]=M>>>24&255,r[o++]=M>>>16&255,r[o++]=M>>>8&255,r[o++]=255&M;var S=E/4294967296*1e4&268435455;r[o++]=S>>>8&255,r[o++]=255&S,r[o++]=S>>>24&15|16,r[o++]=S>>>16&255,r[o++]=l>>>8|128,r[o++]=255&l;for(var O=0;O<6;++O)r[o+O]=i[O];return n||(0,z.Z)(r)};var T=(()=>((T||(T={})).UPDATE_HEROES="UPDATE_HEROES",T))();let __=(()=>{class e{constructor(){this.events$=new _.vpe}send(t){const o={date:new Date,id:j(),data:t.data,type:t.type};this.events$.emit(o)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var q=a(1234),e_=a(8895),t_=a(6303);const D=function(e){return[e]};function o_(e,n){if(1&e){const t=_.EpF();_.TgZ(0,"mat-card",1),_.TgZ(1,"mat-card-header"),_.TgZ(2,"mat-card-title"),_.TgZ(3,"a",2),_._uU(4),_.qZA(),_.qZA(),_.TgZ(5,"mat-card-subtitle"),_.TgZ(6,"a",2),_._uU(7),_.qZA(),_.qZA(),_._UZ(8,"div",3),_.TgZ(9,"div",4),_._uU(10),_.TgZ(11,"mat-icon",5),_.NdJ("click",function(){_.CHM(t);const r=_.oxw();return r.like(r.hero)}),_._uU(12,"favorite "),_.qZA(),_.qZA(),_.qZA(),_.TgZ(13,"a",2),_._UZ(14,"img",6),_.qZA(),_.qZA()}if(2&e){const t=_.oxw();_.Q6J("@fadeIn","fadeIn"),_.xp6(3),_.Q6J("routerLink",_.VKq(10,D,t.routesConfig.routes.hero.detail(t.hero.id))),_.xp6(1),_.hij(" ",t.hero.alterEgo," "),_.xp6(2),_.Q6J("routerLink",_.VKq(12,D,t.routesConfig.routes.hero.detail(t.hero.id))),_.xp6(1),_.hij(" ",t.hero.realName," "),_.xp6(3),_.hij(" ",t.hero.usersVoted.length," "),_.xp6(3),_.Q6J("routerLink",_.VKq(14,D,t.routesConfig.routes.hero.detail(t.hero.id))),_.xp6(1),_.MGl("alt","",t.hero.realName," hero image"),_.Q6J("defaultImage",t.hero.image)("lazyLoad",t.hero.image)}}let n_=(()=>{class e{constructor(t,o,r,i,l,s){this.heroService=t,this.router=o,this.utilsService=r,this.authService=i,this.eventsService=l,this.routesConfig=s}like(t){this.authService.isLoggedIn()?this.heroService.voteHero(t).subscribe(o=>{o.errors?this.utilsService.showSnackBar(o.errors[0].message,"warning-snack-bar"):this.eventsService.send({type:T.UPDATE_HEROES})}):this.router.navigate([f.ff.routes.auth.logIn])}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(L),_.Y36(P.F0),_.Y36(q.F),_.Y36(e_.e),_.Y36(__),_.Y36(f.hm))},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-hero-card"]],inputs:{hero:"hero"},decls:1,vars:1,consts:[["class","hero-card",4,"ngIf"],[1,"hero-card"],[1,"hero-detail-link",3,"routerLink"],[1,"flex-spacer"],[1,"hero-actions"],[1,"icon__like--red",3,"click"],[3,"alt","defaultImage","lazyLoad"]],template:function(t,o){1&t&&_.YNc(0,o_,15,16,"mat-card",0),2&t&&_.Q6J("ngIf",o.hero)},directives:[m.O5,u.a8,u.dk,u.n5,P.yS,u.$j,G.Hw,t_.z1],styles:[".hero-detail-link[_ngcontent-%COMP%]{color:#0000008a;font-size:14px;text-transform:none;text-decoration:none}mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], .mat-card-image[_ngcontent-%COMP%]{cursor:pointer}.hero-card[_ngcontent-%COMP%]{margin:2rem auto}.progress__spinner[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}img[_ngcontent-%COMP%]{width:100%;height:auto}@media (max-width: 680px){.hero-card[_ngcontent-%COMP%]{width:80%;margin-left:auto;margin-right:auto}.mat-card[_ngcontent-%COMP%]{margin-bottom:2rem}}"],data:{animation:[(0,d.X$)("fadeIn",[(0,d.eR)("* => *",(0,d._7)(H.K1,{params:{timing:1,delay:0}}))])]},changeDetection:0}),e})();function r_(e,n){1&e&&(_.TgZ(0,"div",6),_._UZ(1,"app-hero-loading"),_.qZA())}function a_(e,n){if(1&e&&(_.TgZ(0,"div",6),_.ynx(1),_._UZ(2,"app-hero-card",7),_.TgZ(3,"div",8),_.TgZ(4,"pre"),_._uU(5),_.ALo(6,"json"),_.qZA(),_.qZA(),_.BQk(),_.qZA()),2&e){const t=_.oxw();_.Q6J("@fadeIn","fadeIn"),_.xp6(2),_.Q6J("hero",t.hero),_.xp6(3),_.Oqu(_.lcZ(6,3,t.hero))}}function i_(e,n){if(1&e){const t=_.EpF();_.TgZ(0,"button",9),_.NdJ("click",function(){return _.CHM(t),_.oxw().goToTheAnchor()}),_.SDv(1,10),_.qZA()}}let l_=(()=>{class e{constructor(t,o,r){this.location=t,this.router=o,this.activatedRoute=r}ngOnInit(){this.activatedRoute.snapshot.data.hero.subscribe(t=>{this.hero=t})}goBack(){this.location.back()}goToTheAnchor(){this.hero&&this.router.navigate([f.ff.routes.hero.detail(this.hero.id)],{fragment:"heroe-detail"})}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(m.Ye),_.Y36(P.F0),_.Y36(P.gz))},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-hero-detail-page"]],decls:7,vars:3,consts:function(){let n,t,o;return n="Hero detail",t=" Go back\n",o=" Anchor the hero\n",[[1,"header__title"],n,["class","container",4,"ngIf"],["aria-label","Anchor the hero button","mat-raised-button","","type","button",3,"click",4,"ngIf"],["aria-label","Go back button","mat-raised-button","","type","button",3,"click"],t,[1,"container"],[3,"hero"],["id","hero-json"],["aria-label","Anchor the hero button","mat-raised-button","","type","button",3,"click"],o]},template:function(t,o){1&t&&(_.TgZ(0,"h1",0),_.SDv(1,1),_.qZA(),_.YNc(2,r_,2,0,"div",2),_.YNc(3,a_,7,5,"div",2),_.YNc(4,i_,2,0,"button",3),_.TgZ(5,"button",4),_.NdJ("click",function(){return o.goBack()}),_.SDv(6,5),_.qZA()),2&t&&(_.xp6(2),_.Q6J("ngIf",!o.hero),_.xp6(1),_.Q6J("ngIf",o.hero),_.xp6(1),_.Q6J("ngIf",o.hero))},directives:[m.O5,v.lW,W,n_],pipes:[m.Ts],styles:[".container[_ngcontent-%COMP%]{width:65%;margin-left:auto;margin-right:auto;margin-top:2rem}button[_ngcontent-%COMP%]{margin:2rem auto;display:block}@media (max-width: 600px){.container[_ngcontent-%COMP%]{width:90%}}"],data:{animation:[(0,d.X$)("fadeIn",[(0,d.eR)("* => *",(0,d._7)(H.K1,{params:{timing:1,delay:0}}))])]}}),e})();var p=a(5304);let s_=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-hero-remove"]],decls:9,vars:1,consts:function(){let n,t,o,r;return n="Delete hero",t="Are you sure?",o="No",r="Yes",[["mat-dialog-title",""],n,t,["aria-label","no button","mat-button","","mat-dialog-close",""],o,["aria-label","yes button","mat-button","",3,"mat-dialog-close"],r]},template:function(t,o){1&t&&(_.TgZ(0,"h2",0),_.SDv(1,1),_.qZA(),_.TgZ(2,"mat-dialog-content"),_.SDv(3,2),_.qZA(),_.TgZ(4,"mat-dialog-actions"),_.TgZ(5,"button",3),_.SDv(6,4),_.qZA(),_.TgZ(7,"button",5),_.SDv(8,6),_.qZA(),_.qZA()),2&t&&(_.xp6(7),_.Q6J("mat-dialog-close",!0))},directives:[p.uh,p.xY,p.H8,v.lW,p.ZT],encapsulation:2}),e})();var E_=a(2416);class g_{constructor(n={}){this.id=n.id,this.email=n.email,this.firstname=n.firstname,this.lastname=n.lastname,this.role=n.role,this.heroes=n.heroes}deserialize(n){return Object.assign(this,n),this}}let c_=(()=>{class e{constructor(t){this.apollo=t}getMe({fetchPolicy:t}){return this.apollo.watchQuery({query:h.Ps`
        query Me {
          me {
            id
            email
            firstname
            lastname
            heroes {
              id
              realName
              alterEgo
            }
          }
        }
      `,fetchPolicy:t}).valueChanges.pipe((0,R.U)(o=>new g_(o.data.me)))}}return e.\u0275fac=function(t){return new(t||e)(_.LFG(Y._M))},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var A_=a(9632),x=a(4867),d_=a(6731),B=a(8167),u_=a(138);const m_=["form"];function P_(e,n){1&e&&(_.TgZ(0,"p",13),_.SDv(1,14),_.qZA())}function M_(e,n){1&e&&(_.TgZ(0,"mat-list-item"),_._UZ(1,"img",17),_.TgZ(2,"h3",18),_._UZ(3,"app-loading-placeholder",19),_.qZA(),_.TgZ(4,"p",18),_._UZ(5,"app-loading-placeholder",19),_.qZA(),_.TgZ(6,"div",20),_._UZ(7,"app-loading-placeholder",19),_.TgZ(8,"mat-icon",21),_._uU(9,"favorite"),_.qZA(),_.qZA(),_.qZA()),2&e&&(_.xp6(3),_.Q6J("width","150px")("height","0.9rem"),_.xp6(2),_.Q6J("width","100px")("height","0.9rem"),_.xp6(2),_.Q6J("width","30px")("height","0.9rem"))}const S_=function(){return[1,2,3,4,5,6,7,8]};function O_(e,n){1&e&&(_.TgZ(0,"mat-list",15),_.YNc(1,M_,10,6,"mat-list-item",16),_.qZA()),2&e&&(_.xp6(1),_.Q6J("ngForOf",_.DdM(1,S_)))}function R_(e,n){if(1&e){const t=_.EpF();_.TgZ(0,"mat-icon",23),_.NdJ("click",function(){_.CHM(t);const r=_.oxw().$implicit;return _.oxw().deleteHero(r)}),_._uU(1," delete "),_.qZA()}}function h_(e,n){if(1&e&&(_.TgZ(0,"mat-list-item"),_.TgZ(1,"h3",18),_._uU(2),_.qZA(),_.TgZ(3,"p",18),_.TgZ(4,"span"),_._uU(5),_.qZA(),_.qZA(),_.TgZ(6,"div",20),_.YNc(7,R_,2,0,"mat-icon",22),_.qZA(),_.qZA()),2&e){const t=n.$implicit;_.xp6(1),_.ekj("cp",t.published),_.xp6(1),_.hij(" ",t.alterEgo," "),_.xp6(1),_.ekj("cp",t.published),_.xp6(2),_.Oqu(t.realName),_.xp6(2),_.Q6J("ngIf",!t.published)}}function f_(e,n){1&e&&(_.TgZ(0,"div",24),_.TgZ(1,"form"),_.TgZ(2,"div",25),_._UZ(3,"app-loading-placeholder",26),_.qZA(),_.TgZ(4,"div",25),_._UZ(5,"app-loading-placeholder",26),_.qZA(),_.TgZ(6,"button",27),_.SDv(7,28),_.qZA(),_.qZA(),_.qZA()),2&e&&(_.xp6(3),_.Q6J("height","2rem"),_.xp6(2),_.Q6J("height","2rem"),_.xp6(1),_.Q6J("disabled",!0))}function p_(e,n){1&e&&_.SDv(0,36)}function N_(e,n){1&e&&_.SDv(0,37)}function T_(e,n){if(1&e&&(_.TgZ(0,"mat-error"),_.YNc(1,p_,1,0,"ng-template",35),_.YNc(2,N_,1,0,"ng-template",35),_.qZA()),2&e){const t=_.oxw(2);_.xp6(1),_.Q6J("ngIf",t.realName.errors.required),_.xp6(1),_.Q6J("ngIf",t.realName.errors.maxlength)}}function C_(e,n){1&e&&_.SDv(0,38)}function L_(e,n){if(1&e&&_.SDv(0,39),2&e){const t=_.oxw(3);_.pQV(t.alterEgo.errors.maxlength.requiredLength)(t.alterEgo.errors.maxlength.actualLength),_.QtT(0)}}function H_(e,n){if(1&e&&(_.TgZ(0,"mat-error"),_.YNc(1,C_,1,0,"ng-template",35),_.YNc(2,L_,1,2,"ng-template",35),_.qZA()),2&e){const t=_.oxw(2);_.xp6(1),_.Q6J("ngIf",t.alterEgo.errors.required),_.xp6(1),_.Q6J("ngIf",t.alterEgo.errors.maxlength)}}function v_(e,n){1&e&&(_.TgZ(0,"div"),_.SDv(1,40),_.qZA())}function G_(e,n){if(1&e){const t=_.EpF();_.TgZ(0,"div"),_.TgZ(1,"form",29,30),_.NdJ("ngSubmit",function(){return _.CHM(t),_.oxw().createNewHero()}),_.TgZ(3,"mat-form-field",25),_._UZ(4,"input",31),_.YNc(5,T_,3,2,"mat-error",9),_.qZA(),_.TgZ(6,"mat-form-field",25),_._UZ(7,"input",32),_.YNc(8,H_,3,2,"mat-error",9),_.qZA(),_.TgZ(9,"button",33),_.SDv(10,34),_.qZA(),_.YNc(11,v_,2,0,"div",9),_.qZA(),_.qZA()}if(2&e){const t=_.MAs(2),o=_.oxw();_.xp6(1),_.Q6J("formGroup",o.newHeroForm),_.xp6(4),_.Q6J("ngIf",o.realName.errors&&t.submitted),_.xp6(3),_.Q6J("ngIf",o.alterEgo.errors&&t.submitted),_.xp6(1),_.Q6J("disabled",t.submitted&&!o.newHeroForm.valid),_.xp6(2),_.Q6J("ngIf",o.error)}}function U_(e,n){1&e&&(_.TgZ(0,"pre"),_._uU(1,"      "),_._UZ(2,"app-loading-placeholder",26),_._uU(3,"\n    "),_.qZA()),2&e&&(_.xp6(2),_.Q6J("height","300px"))}function I_(e,n){if(1&e&&(_.TgZ(0,"pre"),_._uU(1),_.ALo(2,"json"),_.ALo(3,"slice"),_.qZA()),2&e){const t=_.oxw();_.xp6(1),_.Oqu(_.lcZ(2,1,_.Dn7(3,3,null==t.user?null:t.user.heroes,0,2)))}}let Z_=(()=>{class e{constructor(t,o,r,i,l,s,E,c){this.heroService=t,this.userService=o,this.dialog=r,this.snackBar=i,this.utilsService=l,this.router=s,this.formBuilder=E,this.routesConfig=c,this.myNgForm="",this.error=!1,this.realName=new g.NI("",[g.kI.required,g.kI.maxLength(30)]),this.alterEgo=new g.NI("",[g.kI.required,g.kI.maxLength(30)]),this.newHeroForm=this.formBuilder.group({realName:this.realName,alterEgo:this.alterEgo}),this.onChanges()}ngOnInit(){this.loadUser()}loadUser(){this.userService.getMe({fetchPolicy:"no-cache"}).subscribe(t=>{this.user=t})}createNewHero(){this.newHeroForm.valid&&this.heroService.createHero(new C(this.newHeroForm.value)).subscribe(t=>{t.errors||(this.myNgForm.resetForm(),this.utilsService.showSnackBar("Hero created","info-snack-bar"),this.loadUser())})}deleteHero(t){this.dialog.open(s_).afterClosed().subscribe(r=>{r&&this.heroService.removeHero(t.id).subscribe(i=>{i.errors?this.error=!0:(this.utilsService.showSnackBar("Hero removed","info-snack-bar"),this.loadUser())})})}trackByFn(t){return t}onChanges(){var t;null===(t=this.newHeroForm.get("realName"))||void 0===t||t.valueChanges.subscribe(o=>{o&&o.length>=3&&E_.V.isPalindrome(o)?this.snackBar.open("Yeah that's a Palindrome!","",{duration:2e3}):this.snackBar.dismiss()})}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(L),_.Y36(c_),_.Y36(p.uw),_.Y36(A_.ux),_.Y36(q.F),_.Y36(P.F0),_.Y36(g.qu),_.Y36(f.hm))},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-my-heroes-page"]],viewQuery:function(t,o){if(1&t&&_.Gf(m_,5),2&t){let r;_.iGM(r=_.CRH())&&(o.myNgForm=r.first)}},decls:19,vars:8,consts:function(){let n,t,o,r,i,l,s,E,c,N,M,S,O;return n="My heroes",t="Create a hero",o="Heroes 1 and 2",r=" No heroes yet, try to create one in the right side! ",i="Create",l="Name (Palindrome?)",s="Alter ego",E="Create",c=" Name is required ",N=" The field is too long ",M=" Name is required ",S=" The field is too long. Required length: " + "\ufffd0\ufffd" + ". Current: " + "\ufffd1\ufffd" + " ",O="An error has ocurred",[["id","left"],[1,"header__title"],n,["class","my-heroes__no-heroes--message",4,"ngIf"],["id","loading-list",4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],["id","right"],t,["id","form-loading",4,"ngIf"],[4,"ngIf"],["id","heroes-json"],o,[1,"clear"],[1,"my-heroes__no-heroes--message"],r,["id","loading-list"],[4,"ngFor","ngForOf"],["alt","default hero avatar","mat-list-avatar","","src","./assets/images/default-hero.png"],["mat-line",""],[3,"width","height"],[1,"hero-actions"],[1,"icon__like--grey"],["class","icon__remove",3,"click",4,"ngIf"],[1,"icon__remove",3,"click"],["id","form-loading"],[1,"input-container"],[3,"height"],["aria-label","create button","mat-raised-button","",3,"disabled"],i,["ngxScrollToFirstInvalid","","autocomplete","on",3,"formGroup","ngSubmit"],["form","ngForm"],["matInput","","name","hname","type","text","placeholder",l,"formControlName","realName"],["matInput","","type","text","name","rname","placeholder",s,"formControlName","alterEgo"],["aria-label","create button","mat-raised-button","","type","submit",3,"disabled"],E,[3,"ngIf"],c,N,M,S,O]},template:function(t,o){1&t&&(_.TgZ(0,"div",0),_.TgZ(1,"h2",1),_.SDv(2,2),_.qZA(),_.YNc(3,P_,2,0,"p",3),_.TgZ(4,"div"),_.YNc(5,O_,2,2,"mat-list",4),_.TgZ(6,"mat-list"),_.YNc(7,h_,8,7,"mat-list-item",5),_.qZA(),_.qZA(),_.qZA(),_.TgZ(8,"div",6),_.TgZ(9,"h2",1),_.SDv(10,7),_.qZA(),_.YNc(11,f_,8,3,"div",8),_.YNc(12,G_,12,5,"div",9),_.TgZ(13,"div",10),_.TgZ(14,"h2",1),_.SDv(15,11),_.qZA(),_.YNc(16,U_,4,1,"pre",9),_.YNc(17,I_,4,7,"pre",9),_.qZA(),_.qZA(),_._UZ(18,"div",12)),2&t&&(_.xp6(3),_.Q6J("ngIf",!(null!=o.user&&null!=o.user.heroes&&o.user.heroes.length)),_.xp6(2),_.Q6J("ngIf",!(null!=o.user&&o.user.heroes)),_.xp6(2),_.Q6J("ngForOf",null==o.user?null:o.user.heroes)("ngForTrackBy",o.trackByFn),_.xp6(4),_.Q6J("ngIf",!(null!=o.user&&o.user.heroes)),_.xp6(1),_.Q6J("ngIf",null==o.user?null:o.user.heroes),_.xp6(4),_.Q6J("ngIf",!(null!=o.user&&o.user.heroes)),_.xp6(1),_.Q6J("ngIf",null==o.user?null:o.user.heroes))},directives:[m.O5,x.i$,m.sg,x.Tg,x.eA,d_.X2,b.k,G.Hw,g._Y,g.JL,g.F,v.lW,g.sg,B.KE,u_.Nt,g.Fj,g.JJ,g.u,B.TO],pipes:[m.Ts,m.OU],styles:["a[_ngcontent-%COMP%]{color:#0000008a;font-size:14px;text-transform:none;text-decoration:none}#loading-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:.2rem}#form-loading[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{margin:.5rem 0}#left[_ngcontent-%COMP%]{width:50%;float:left;margin-left:6%}#right[_ngcontent-%COMP%]{margin-left:50%;text-align:center;padding-right:17%}.clear[_ngcontent-%COMP%]{clear:both}.mat-list[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:table}.mat-list[_ngcontent-%COMP%]   .mat-list-text[_ngcontent-%COMP%]{text-align:left!important}.hero-actions[_ngcontent-%COMP%]{margin-left:1rem;padding-bottom:0}.hero-actions[_ngcontent-%COMP%]   .icon__remove[_ngcontent-%COMP%]{padding-left:.5rem;color:#2f4f4f;cursor:pointer}form[_ngcontent-%COMP%]{display:grid;width:80%;margin-left:auto;margin-right:auto}form[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{color:#000;background:#fbb432;width:50%;margin-left:auto;margin-right:auto}form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}#heroes-json[_ngcontent-%COMP%]{margin-top:2rem}#heroes-json[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin-top:1rem}.my-heroes__no-heroes--message[_ngcontent-%COMP%]{text-align:center;width:20%;margin:0 auto;line-height:1.7rem}@media (max-width: 680px){#left[_ngcontent-%COMP%]{width:100%;float:none;margin-left:auto;margin-right:auto}#right[_ngcontent-%COMP%]{margin:1em auto 0;width:90%;float:none;padding:0}}"],data:{animation:[(0,d.X$)("fadeIn",[(0,d.eR)("* => *",(0,d._7)(H.K1,{params:{timing:1,delay:0}}))])]}}),e})();var w=a(547);const J=f.ff.routesNames.hero,D_=[{path:J.myHeroes,component:Z_,canActivate:[w.a]},{path:J.detail,component:l_,resolve:{hero:X}}];let x_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_.oAB({type:e}),e.\u0275inj=_.cJS({providers:[X,w.a],imports:[[P.Bz.forChild(D_)],P.Bz]}),e})(),y_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_.oAB({type:e}),e.\u0275inj=_.cJS({imports:[[g.u5,g.UX,Q.m,x_]]}),e})()}}]);