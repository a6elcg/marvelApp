"use strict";(self.webpackChunkmarvelApp=self.webpackChunkmarvelApp||[]).push([[663],{3663:(P,p,o)=>{o.r(p),o.d(p,{MarvelModule:()=>F});var c=o(6895),d=o(6773),e=o(8256),_=o(529);let h=(()=>{class a{constructor(t){this.http=t,this.PUBLIC_KEY="61e5d045abd6dcfd0db0ba8af003819e",this.URL="https://gateway.marvel.com:443/v1/public/characters?",this.HASH="1a93eb2222e8a19fb4cc11d134613605",this.characters=[],this.characters=JSON.parse(localStorage.getItem("characters"))||[]}getCharacters(){if(0==this.characters.length)try{this.http.get(`${this.URL}ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=100`).subscribe(t=>{this.characters=t.data.results,localStorage.setItem("characters",JSON.stringify(this.characters))})}catch(t){console.error("Error obteniendo personajes",t)}}updateData(t){this.characters=t,localStorage.setItem("characters",JSON.stringify(this.characters))}deleteCharacter(t){let n;n=this.characters.filter(i=>i.id!==t.id),this.updateData(n)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(_.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var u=o(805),m=o(1740),g=o(5017),C=o(5593),v=o(1493),s=o(433),M=o(1795);let f=(()=>{class a{transform(t){return`${t.thumbnail.path}.${t.thumbnail.extension}`}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275pipe=e.Yjl({name:"image",type:a,pure:!0}),a})();function Z(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"p-button",6),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.editCharacter())}),e._uU(1," Editar "),e.qZA()}}function T(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"p-button",4),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.closeModal())}),e._uU(1," Cerrar "),e.qZA()}}let y=(()=>{class a{constructor(t){this.marvelService=t,this.deleteSelf=new e.vpe,this.enableEditButton=!1}onKeydown(){this.enableEditButton=!0}closeModal(){this.deleteSelf.emit()}editCharacter(){this.deleteSelf.emit(this.character)}deleteCharacter(){this.marvelService.deleteCharacter(this.character),this.closeModal()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(h))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-dialog"]],inputs:{display:"display",character:"character"},outputs:{deleteSelf:"deleteSelf"},decls:12,vars:11,consts:[[3,"visible","modal","closable","draggable","visibleChange"],[3,"src","alt"],["pInputText","",3,"ngModel","ngModelChange","keydown"],["pRipple","",3,"click",4,"ngIf"],["pRipple","","styleClass","p-button-danger",3,"click"],["pTemplate","footer"],["pRipple","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(l){return n.display=l}),e.TgZ(1,"h2"),e._uU(2),e.qZA(),e._UZ(3,"img",1),e.ALo(4,"image"),e._UZ(5,"br"),e.TgZ(6,"input",2),e.NdJ("ngModelChange",function(l){return n.character.name=l})("keydown",function(){return n.onKeydown()}),e.qZA(),e._UZ(7,"br"),e.YNc(8,Z,2,0,"p-button",3),e.TgZ(9,"p-button",4),e.NdJ("click",function(){return n.deleteCharacter()}),e._uU(10," Eliminar "),e.qZA(),e.YNc(11,T,2,0,"ng-template",5),e.qZA()),2&t&&(e.Q6J("visible",n.display)("modal",!0)("closable",!1)("draggable",!0),e.xp6(2),e.Oqu(n.character.name),e.xp6(1),e.Q6J("src",e.lcZ(4,9,n.character),e.LSH)("alt",n.character.name),e.xp6(3),e.Q6J("ngModel",n.character.name),e.xp6(2),e.Q6J("ngIf",n.enableEditButton))},dependencies:[c.O5,C.zx,v.V,u.jx,s.Fj,s.JJ,s.On,m.o,M.H,f],styles:["img[_ngcontent-%COMP%]{max-width:100%;height:50%}"]}),a})();function b(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"app-dialog",7),e.NdJ("deleteSelf",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onClose(i))}),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("display",t.displayModal)("character",t.character)}}function S(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"div",8)(1,"span",9),e._UZ(2,"i",10),e.TgZ(3,"input",11),e.NdJ("input",function(i){e.CHM(t);const l=e.oxw(),I=e.MAs(6);return e.KtG(I.filterGlobal(l.readValue(i),"contains"))}),e.qZA()()()}}function A(a,r){1&a&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Imagen"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Nombre"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Descripci\xf3n"),e.qZA()())}function w(a,r){if(1&a&&(e.TgZ(0,"tr",12)(1,"td")(2,"span",13),e._uU(3,"Imagen"),e.qZA(),e._UZ(4,"img",14),e.ALo(5,"image"),e.qZA(),e.TgZ(6,"td")(7,"span",13),e._uU(8,"Nombre"),e.qZA(),e._uU(9),e.qZA(),e.TgZ(10,"td")(11,"span",15),e._uU(12,"Descripci\xf3n"),e.qZA(),e._uU(13),e.qZA()()),2&a){const t=r.$implicit;e.Q6J("pSelectableRow",t),e.xp6(4),e.Q6J("src",e.lcZ(5,4,t),e.LSH),e.xp6(5),e.hij(" ",t.name," "),e.xp6(4),e.hij(" ",t.description||"Sin Descripci\xf3n "," ")}}const x=function(){return[20,40,100]},J=function(){return["name"]},D=[{path:"",component:(()=>{class a{constructor(t){this.marvelService=t,this.displayModal=!1}ngOnInit(){this.marvelService.getCharacters()}get characters(){return this.marvelService.characters}characterDetail(t){this.character=t.data,this.displayModal=!0}readValue(t){return t.target.value}onClose(t){t&&(this.characters.map(n=>{n.id===t.id&&(n.name=t.name)}),this.marvelService.updateData(this.characters)),this.displayModal=!1}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(h))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-characters-list"]],decls:10,vars:9,consts:[[3,"display","character","deleteSelf",4,"ngIf"],[1,"title"],["responsiveLayout","stack","selectionMode","single","dataKey","id","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} personajes",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","paginator","globalFilterFields","onRowSelect"],["dataTable",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"display","character","deleteSelf"],[1,"table-header"],[1,"p-input-icon-left","full-width"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar por nombre",1,"full-width",3,"input"],[3,"pSelectableRow"],[1,"p-column-title"],[1,"shadow-4",3,"src"],["id","span-description",1,"p-column-title"]],template:function(t,n){1&t&&(e.YNc(0,b,1,2,"app-dialog",0),e.TgZ(1,"div",1)(2,"h1"),e._uU(3,"Personajes de Marvel"),e.qZA()(),e.TgZ(4,"div")(5,"p-table",2,3),e.NdJ("onRowSelect",function(l){return n.characterDetail(l)}),e.YNc(7,S,4,0,"ng-template",4),e.YNc(8,A,7,0,"ng-template",5),e.YNc(9,w,14,6,"ng-template",6),e.qZA()()),2&t&&(e.Q6J("ngIf",n.displayModal),e.xp6(5),e.Q6J("value",n.characters)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(7,x))("paginator",!0)("globalFilterFields",e.DdM(8,J)))},dependencies:[c.O5,u.jx,m.o,g.iA,g.Ei,y,f],styles:[".title[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{width:100px;height:100px}.full-width[_ngcontent-%COMP%]{width:100%}#span-description[_ngcontent-%COMP%]{margin-right:100px}"]}),a})()}];let L=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[d.Bz.forChild(D),d.Bz]}),a})();var U=o(2824),N=o(4466);let F=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[c.ez,L,U.g,N.m]}),a})()}}]);