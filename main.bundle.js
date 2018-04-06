webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n \n @media only screen and (max-width: 667px) {\n\n.barra-superior{\n  padding: 19px;\n  margin-top: -0.5pc;\n  margin-right: -7.9px;\n  margin-left: -9.5px;\n  z-index: 15;\n  -webkit-transition: -webkit-box-shadow 280ms \n  cubic-bezier(.4,0,.2,1);\n  transition: -webkit-box-shadow 280ms \n  cubic-bezier(.4,0,.2,1);\n  transition: box-shadow 280ms \n  cubic-bezier(.4,0,.2,1);\n  transition: box-shadow 280ms \n  cubic-bezier(.4,0,.2,1), -webkit-box-shadow 280ms \n  cubic-bezier(.4,0,.2,1);\n    -webkit-transition-property: -webkit-box-shadow;\n    transition-property: -webkit-box-shadow;\n    transition-property: box-shadow;\n    transition-property: box-shadow, -webkit-box-shadow;\n    -webkit-transition-duration: 280ms;\n            transition-duration: 280ms;\n    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition-delay: initial;\n            transition-delay: initial;\n  display: block;\n  position: relative;\n  padding: 24px;\n  border-radius: 2px;\n    \n}\n\n.perfil{\n  display: -ms-grid;\n  display: grid;\n  position: relative;\n  top: -134px;\n  z-index: 99;\n  background-color: white;\n}\n\n\n.img{\n  border: solid #0000003b;\n  border-radius: 45px;\n  border: solid #0000003b;\n  border-radius: 45px;\n  border-width: 1px;\n  \n  }\n\n.imgFora{\n  width: 34px;\n  position: absolute;\n  left: 28%;\n  z-index: 100;\n  top: 6px;\n}\n\n.imgDentro{\n  width: 40px;\n  margin-top: 6px;\n  margin-left: -33px;\n}\n\n\n.t1{\n  \n  position: absolute;\n  height: 41px;\n  top: -13px;\n  z-index: 50;\n  width: 1%;\n}\n\nul{\n  list-style-type: none;\n}\n\n\n\n.t2{\n \n  border: solid white;\n  background-color: white;\n  display: -ms-grid;\n  display: grid;\n  position: absolute;\n  top: 13%px;\n  left: 21%;\n  z-index: 100;\n  width: 0%;\n  height: 0px;\n  overflow: hidden;\n  -webkit-box-shadow: 1px 0px 2px 1px rgba(50, 50, 50, 0.15);\n\t\tbox-shadow:         1px 0px 2px 1px rgba(50, 50, 50, 0.15);\n  transition: all 0.2s ease-in-out 0s;\n    -moz-transition: all 0.2s ease-in-out 0s;\n    -webkit-transition: all 0.2s ease-in-out 0s;\n    -o-transition: all 0.2s ease-in-out 0s;\n    border-radius: 1px;\n    visibility: hidden;\n}\n\n}\n\n.t1:hover .t2{\n  top: 14%;\n  left: 14%;\n  width: 289%;\n  height: 371px;\n  visibility: visible;\n  transition: all 0.2s ease-in-out 0s;\n    -moz-transition: all 0.2s ease-in-out 0s;\n    -webkit-transition: all 0.2s ease-in-out 0s;\n    -o-transition: all 0.2s ease-in-out 0s;\n    \n}\n\n.fotoPerfil{\nmargin-top: 1%;\nmargin-bottom: 1%;\n\n}\n\n.imgbarramenu{\n  width: 27px;\n  position: relative;\n  left: 8px;\n  top: 5px;\n  z-index: 15\n\n }\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n       <nav>\n            <ul class=\"t1\">\n                    <li><a class=\"\"><img  class=\"imgFora img\" src=\"https://pbs.twimg.com/profile_images/792110382328537088/dM6zdt76_400x400.jpg\"></a></li>\n                <ul class=\"fotoPerfil t2\"><li><a class=\"\"><img  class=\"imgDentro img\" src=\"https://pbs.twimg.com/profile_images/792110382328537088/dM6zdt76_400x400.jpg\"></a></li>\n                    <li><a routerLink=\"perfil#aluno\">Perfil</a></li>\n                    <li><a >Configurações</a></li>\n                    <li><a routerLink=\"logout\">Sair</a></li>\n                </ul>\n            </ul>\n        </nav>\n<div class=\"barra-superior\">\n       \n    <div>\n \n        <mat-card-content>\n            <mat-tab-group class=\"demo-tab-group\">\n                <mat-tab label=\"Tab 1\">\n                    <ng-template mat-tab-label>\n                        <mat-icon routerLink=\"home\">Home</mat-icon>\n                    </ng-template>\n                    <p>Pagina inicial</p>\n                </mat-tab>\n                <mat-tab label=\"Tab 2\">\n                    <ng-template mat-tab-label>\n                        <mat-icon routerLink=\"/treinos\">Treino</mat-icon>\n                    </ng-template>\n                    <p>Treino</p>\n                </mat-tab>\n                    <mat-tab label=\"Tab 3\">\n                            <ng-template mat-tab-label>\n                                <mat-icon routerLink=\"/historico\">Professor</mat-icon>\n                            </ng-template>\n                            <p>Msg</p>\n                        </mat-tab>\n                        <mat-tab label=\"Tab 4\">\n                                <ng-template mat-tab-label>\n                                    <mat-icon  routerLink=\"/mais\" >Mais</mat-icon>\n                                </ng-template>\n                                <p>Mais</p>\n                            </mat-tab>\n            </mat-tab-group>\n        </mat-card-content>\n    </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_responsive_menu_responsive_component__ = __webpack_require__("./src/app/menu-responsive/menu-responsive.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.title = 'app';
    }
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__menu_responsive_menu_responsive_component__["a" /* MenuResponsiveComponent */], {
            width: '100%',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_angular_materials__ = __webpack_require__("./src/modules/angular-materials.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_router__ = __webpack_require__("./src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__exercicios_exercicios_component__ = __webpack_require__("./src/app/exercicios/exercicios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__treinos_treinos_component__ = __webpack_require__("./src/app/treinos/treinos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__personalizado_personalizado_component__ = __webpack_require__("./src/app/personalizado/personalizado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__historico_historico_component__ = __webpack_require__("./src/app/historico/historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mais_mais_component__ = __webpack_require__("./src/app/mais/mais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__perfil_aluno_perfil_aluno_component__ = __webpack_require__("./src/app/perfil-aluno/perfil-aluno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_http_util_service__ = __webpack_require__("./src/shared/http-util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__perfil_aluno_pop_up_perfil_aluno_pop_up_component__ = __webpack_require__("./src/app/perfil-aluno-pop-up/perfil-aluno-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__menu_responsive_menu_responsive_component__ = __webpack_require__("./src/app/menu-responsive/menu-responsive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__mudar_fotografia_popup_mudar_fotografia_popup_component__ = __webpack_require__("./src/app/mudar-fotografia-popup/mudar-fotografia-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cadastro_cadastro_component__ = __webpack_require__("./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_service_component__ = __webpack_require__("./src/app/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__recuperar_senha_recuperar_senha_component__ = __webpack_require__("./src/app/recuperar-senha/recuperar-senha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// ANGULAR MAIN IMPORTS//  PerfilAlunoComponentPopUP,


//import { MenuComponent } from './menu/menu.component';

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__exercicios_exercicios_component__["a" /* ExerciciosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__treinos_treinos_component__["a" /* TreinosComponent */],
                __WEBPACK_IMPORTED_MODULE_13__personalizado_personalizado_component__["a" /* PersonalizadoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__historico_historico_component__["a" /* HistoricoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__mais_mais_component__["a" /* MaisComponent */],
                __WEBPACK_IMPORTED_MODULE_16__perfil_aluno_perfil_aluno_component__["a" /* PerfilAlunoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__perfil_aluno_pop_up_perfil_aluno_pop_up_component__["a" /* PerfilAlunoPopUpComponent */],
                __WEBPACK_IMPORTED_MODULE_19__menu_responsive_menu_responsive_component__["a" /* MenuResponsiveComponent */],
                __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__mudar_fotografia_popup_mudar_fotografia_popup_component__["a" /* MudarFotografiaPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_22__cadastro_cadastro_component__["a" /* CadastroComponent */],
                __WEBPACK_IMPORTED_MODULE_23__service_service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__recuperar_senha_recuperar_senha_component__["a" /* RecuperarSenhaComponent */],
                __WEBPACK_IMPORTED_MODULE_26__logout_logout_component__["a" /* LogoutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_router__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__modules_angular_materials__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__shared_http_util_service__["a" /* HttpUtilService */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* ErrorStateMatcher */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_material__["K" /* ShowOnDirtyErrorStateMatcher */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["J" /* MatTooltipModule */],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_modules_angular_materials__ = __webpack_require__("./src/modules/angular-materials.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exercicios_exercicios_component__ = __webpack_require__("./src/app/exercicios/exercicios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treinos_treinos_component__ = __webpack_require__("./src/app/treinos/treinos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personalizado_personalizado_component__ = __webpack_require__("./src/app/personalizado/personalizado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__historico_historico_component__ = __webpack_require__("./src/app/historico/historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mais_mais_component__ = __webpack_require__("./src/app/mais/mais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__perfil_aluno_perfil_aluno_component__ = __webpack_require__("./src/app/perfil-aluno/perfil-aluno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__perfil_aluno_pop_up_perfil_aluno_pop_up_component__ = __webpack_require__("./src/app/perfil-aluno-pop-up/perfil-aluno-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_responsive_menu_responsive_component__ = __webpack_require__("./src/app/menu-responsive/menu-responsive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mudar_fotografia_popup_mudar_fotografia_popup_component__ = __webpack_require__("./src/app/mudar-fotografia-popup/mudar-fotografia-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cadastro_cadastro_component__ = __webpack_require__("./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recuperar_senha_recuperar_senha_component__ = __webpack_require__("./src/app/recuperar-senha/recuperar-senha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { MenuComponent } from './menu/menu.component';
var routes = [
    { path: 'exercicios', component: __WEBPACK_IMPORTED_MODULE_3__exercicios_exercicios_component__["a" /* ExerciciosComponent */] },
    { path: 'treinos', component: __WEBPACK_IMPORTED_MODULE_4__treinos_treinos_component__["a" /* TreinosComponent */] },
    { path: 'personalizado', component: __WEBPACK_IMPORTED_MODULE_5__personalizado_personalizado_component__["a" /* PersonalizadoComponent */] },
    { path: 'historico', component: __WEBPACK_IMPORTED_MODULE_6__historico_historico_component__["a" /* HistoricoComponent */] },
    { path: 'mais', component: __WEBPACK_IMPORTED_MODULE_7__mais_mais_component__["a" /* MaisComponent */] },
    { path: 'perfil#aluno', component: __WEBPACK_IMPORTED_MODULE_8__perfil_aluno_perfil_aluno_component__["a" /* PerfilAlunoComponent */] },
    { path: 'editarperfilaluno', component: __WEBPACK_IMPORTED_MODULE_9__perfil_aluno_pop_up_perfil_aluno_pop_up_component__["a" /* PerfilAlunoPopUpComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_10__menu_responsive_menu_responsive_component__["a" /* MenuResponsiveComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'registro', component: __WEBPACK_IMPORTED_MODULE_14__cadastro_cadastro_component__["a" /* CadastroComponent */] },
    { path: 'editar-foto', component: __WEBPACK_IMPORTED_MODULE_12__mudar_fotografia_popup_mudar_fotografia_popup_component__["a" /* MudarFotografiaPopupComponent */] },
    { path: 'recuperar#senha', component: __WEBPACK_IMPORTED_MODULE_15__recuperar_senha_recuperar_senha_component__["a" /* RecuperarSenhaComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__["a" /* LogoutComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_2__src_modules_angular_materials__["a" /* MaterialModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_2__src_modules_angular_materials__["a" /* MaterialModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.component.css":
/***/ (function(module, exports) {

module.exports = "\n    @media only screen and (max-width: 667px) {\n\n\n                .cadastro{\n                    display: -ms-grid;\n                    display: grid;\n                    z-index: 99;\n                    background-color: #ffffff;\n                    position: absolute;\n                    top: 0px;\n                    height: 683px;  \n                    width: 101%;\n                \n                }\n\n        .boxCadastro{\n            display: -ms-grid;\n            display: grid;\n            width: 100%;\n            position: absolute;\n            left: 5px;\n            top: 23%;\n        }\n}"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cadastro\">\n    <mat-card class=\"editarPerfil\">\n        <form style=\"display:grid\" name=\"standalone\">\n            <mat-form-field>\n                <input matInput placeholder=\"Nome e Sobrenome\" [formControl]=\"nullFormControl\" [errorStateMatcher]=\"matchernull\">\n                <mat-hint>Errors appear instantly!</mat-hint>\n                <mat-error *ngIf=\"nullFormControl.hasError('null') && !nullFormControl.hasError('required')\">\n                    Campo nao pode ser vazio\n                </mat-error>\n                <mat-error *ngIf=\"nullFormControl.hasError('required')\">\n                    nome is\n                    <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput placeholder=\"Nome de Usuario\" [formControl]=\"nullFormControl\" [errorStateMatcher]=\"matchernull\">\n                <mat-hint>Errors appear instantly!</mat-hint>\n                <mat-error *ngIf=\"nullFormControl.hasError('null') && !nullFormControl.hasError('required')\">\n                    nome de usuario ja\n                </mat-error>\n                <mat-error *ngIf=\"nullFormControl.hasError('required')\">\n                    nome is\n                    <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Academia\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.population\">\n                        <img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"26\" />\n                        <span>{{ state.name }}</span> |\n                        <small> {{state.population}}</small>\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-select placeholder=\"Personal\">\n                    <mat-option *ngFor=\"let usuario of usuarios\" [value]=\"usuario.population\">\n                        <img src=\"{{usuario.flag}}\" height=\"26\"> \n                        <small>{{usuario.population}} </small>\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n                <mat-hint>Errors appear instantly!</mat-hint>\n                <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                    Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                    Email is\n                    <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"password\" placeholder=\" senha \" [formControl]=\"nullFormControl\" [errorStateMatcher]=\"matchernull\">\n                <mat-hint>Errors appear instantly!</mat-hint>\n                <mat-error *ngIf=\"nullFormControl.hasError('null') && !nullFormControl.hasError('required')\">\n                    Please enter a valid  senha\n                </mat-error>\n                <mat-error *ngIf=\"nullFormControl.hasError('required')\">\n                    senha\n                    <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"password\" placeholder=\" Repetir senha \" [formControl]=\"nullFormControl\" [errorStateMatcher]=\"matchernull\">\n                <mat-hint>Errors appear instantly!</mat-hint>\n                <mat-error *ngIf=\"nullFormControl.hasError('null') && !nullFormControl.hasError('required')\">\n                    Please enter a valid  senha\n                </mat-error>\n                <mat-error *ngIf=\"nullFormControl.hasError('required')\">\n                    altura\n                    <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n        </form>&nbsp;\n        <div>\n            <button mat-raised-button color=\"primary\" routerLink=\"/home\">Resgistrar</button>\n            <button mat-raised-button  routerLink=\"\">Cancelar</button>\n        </div>\n       \n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* unused harmony export State */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());

var CadastroComponent = /** @class */ (function () {
    function CadastroComponent() {
        var _this = this;
        this.states = [
            {
                name: 'FitnessWord',
                population: '@fitnessWord',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://pbs.twimg.com/profile_images/378800000513930765/1518318ade4947d639fca13c47b457f6_400x400.jpeg'
            },
            {
                name: 'Word Fitness',
                population: '@wordFitness',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://pbs.twimg.com/profile_images/783034025677959169/dDxCukwL_400x400.jpg'
            },
            {
                name: 'Mundo Academia',
                population: '@undoAcademia',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://cdn.shopify.com/s/files/1/1850/1319/products/black_phoenix_martial_arts_mer39129136_logo.jpg?v=1509282976'
            },
        ];
        this.usuarios = [
            {
                name: 'Carlos Daniel',
                population: '@carlosDaniel',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://pbs.twimg.com/profile_images/634843335623094272/49oFQn3L_400x400.png'
            },
            {
                name: 'Paola Bracho',
                population: '@PaolaBracho',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://pbs.twimg.com/profile_images/792110382328537088/dM6zdt76_400x400.jpg'
            },
            {
                name: 'Maria do Bairro',
                population: '@mariaBairro',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://i0.wp.com/www.latinpopbrasil.com.br/wp-content/uploads/2015/10/maria-do-bairro1.jpg?w=560&ssl=1'
            },
        ];
        // validations
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.nullFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].nullValidator,
        ]);
        this.nomeFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].nullValidator,
        ]);
        this.ormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].nullValidator,
        ]);
        this.matchernull = new MyErrorStateMatcher();
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
    }
    CadastroComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cadastro',
            template: __webpack_require__("./src/app/cadastro/cadastro.component.html"),
            styles: [__webpack_require__("./src/app/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/exercicios/exercicios.component.css":
/***/ (function(module, exports) {

module.exports = ".titulos-barraSuperior{\n    position: absolute;\n    top: 0%;\n    z-index: 16;\n    right: 18%;\n}"

/***/ }),

/***/ "./src/app/exercicios/exercicios.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"\nfloat: right;\n\">\n  exercicios works!\n</p>\n<div class=\"titulos-barraSuperior\"><h5>Exercicios</h5></div>\n"

/***/ }),

/***/ "./src/app/exercicios/exercicios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciciosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExerciciosComponent = /** @class */ (function () {
    function ExerciciosComponent() {
    }
    ExerciciosComponent.prototype.ngOnInit = function () {
    };
    ExerciciosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exercicios',
            template: __webpack_require__("./src/app/exercicios/exercicios.component.html"),
            styles: [__webpack_require__("./src/app/exercicios/exercicios.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExerciciosComponent);
    return ExerciciosComponent;
}());



/***/ }),

/***/ "./src/app/historico/historico.component.css":
/***/ (function(module, exports) {

module.exports = ".titulos-barraSuperior{\n    position: absolute;\n    top: 0%;\n    z-index: 16;\n    right: 18%;\n}"

/***/ }),

/***/ "./src/app/historico/historico.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  historico works!\n</p>\n<div class=\"titulos-barraSuperior\"><h5>Historico</h5></div>"

/***/ }),

/***/ "./src/app/historico/historico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HistoricoComponent = /** @class */ (function () {
    function HistoricoComponent() {
    }
    HistoricoComponent.prototype.ngOnInit = function () {
    };
    HistoricoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-historico',
            template: __webpack_require__("./src/app/historico/historico.component.html"),
            styles: [__webpack_require__("./src/app/historico/historico.component.css")]
        })
    ], HistoricoComponent);
    return HistoricoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  conteudos e novidades postado pela academia\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n    @media only screen and (max-width: 667px) {\n\n        \n         \n\n                    .login{\n                        display: -ms-grid;\n                        display: grid;\n                        z-index: 99;\n                        background-color: #ffffff;\n                        position: absolute;\n                        top: 0px;\n                        height: 690px;\n                        width: 98%;\n                    \n                    }\n\n                    .linkInferior{\n                        position: absolute;\n                        top: 41%;\n                        left: 15%;\n                        color: blue;\n                    }\n\n                    input[type=password]{\n                \n                        outline: none;\n                        border: solid #ffffff;\n                        border-radius: 14px;\n                        background-color: #ecf1f0;\n                        padding-bottom: 3%;\n                        padding-left: 3%;\n                        padding-top: 2%;\n                        width: 95%;\n                    \n                    }\n\n            input[type=text]{\n                \n                outline:none;\n                border: solid #ffffff;\n                border-radius: 14px;\n                background-color: #ecf1f0;\n                padding-bottom: 3%;\n                padding-left: 3%;\n                padding-top: 2%;\n                width: 95%;\n\n            }\n\n            .button {\n                border: solid white;\n                border-radius: 14px;\n                background-color: blue;\n                outline: none;\n                color: white;\n                padding-bottom: 3%;\n                padding-left: 3%;\n                padding-top: 1%;\n                width: 95%;\n                text-align: center;\n            }\n\n\n            .boxLogin{\n                display: -ms-grid;\n                display: grid;\n                width: 100%;\n                position: absolute;\n                left: 5px;\n                top: 23%;\n            }\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <p>\n    LOGIN\n  </p>\n  <div class=\"boxLogin\">\n    <form>\n      <input type=\"text\" placeholder=\"e-mail ou nome de usuário\">\n\n      <input type=\"password\" placeholder=\"Senha\">\n\n      <div class=\"button\">\n        <a routerLink=\"home\">Entrar</a>\n      </div>\n\n      <!--<button ><a routerLink=\" \"></a>Entrar</button>-->\n    </form>\n  </div>\n\n  <div class=\"linkInferior\">\n    <a routerLink=\"/recuperar#senha\">Esqueceu a se senha?&nbsp;</a>\n    <a routerLink=\"/registro\">&nbsp; Inscrever-se</a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email,
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 667px) {\n \n        \n        .logout{\n            display: -ms-grid;\n            display: grid;\n            z-index: 99;\n            background-color: #ffffff;\n            position: absolute;\n            top: 0px;\n            height: 690px;\n            width: 98%;\n\n        }\n\n        .button {\n            border: solid white;\n            border-radius: 14px;\n            background-color: blue;\n            outline: none;\n            color: white;\n            padding-bottom: 3%;\n            padding-left: 3%;\n            padding-top: 1%;\n            width: 95%;\n            text-align: center;\n        }\n\n        .boxLogin{\n            display: -ms-grid;\n            display: grid;\n            width: 100%;\n            position: absolute;\n            left: 5px;\n            top: 23%;\n        }\n\n       \n}\n"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logout\">\n    <p>\n        logout works!\n      </p>\n          <div class=\"boxLogin\">\n              <div class=\"button\">\n                <a routerLink=\"\">Entrar</a>\n              </div>\n              <div class=\"button\">\n                  <a routerLink=\"/registro\" >Inscrecer-se</a>\n                </div>\n\n          </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/mais/mais.component.css":
/***/ (function(module, exports) {

module.exports = ".titulos-barraSuperior{\n    position: absolute;\n    top: 0%;\n    z-index: 16;\n    right: 18%;\n}"

/***/ }),

/***/ "./src/app/mais/mais.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mais works!\n</p>\n<div class=\"titulos-barraSuperior\"><h5>Mais</h5></div>\n"

/***/ }),

/***/ "./src/app/mais/mais.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaisComponent = /** @class */ (function () {
    function MaisComponent() {
    }
    MaisComponent.prototype.ngOnInit = function () {
    };
    MaisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mais',
            template: __webpack_require__("./src/app/mais/mais.component.html"),
            styles: [__webpack_require__("./src/app/mais/mais.component.css")]
        })
    ], MaisComponent);
    return MaisComponent;
}());



/***/ }),

/***/ "./src/app/menu-responsive/menu-responsive.component.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 667px) {\n\n    ul{\n        list-style: none;\n    }\n\n    img{\n      width: 75%;\n   \n  }\n\n\n.menu-button{\n    position: absolute;\n    left: 84%;\n    display: inline;\n    top: 2.5%;\n    padding: 0px; \n    width: 12%;\n    padding-left: 0px;\n    z-index: 15\n    \n  }\n\n  .fotoPerfil{\n    width: 20%;\n    margin-top: 1%;\n    margin-bottom: 1%;\n  \n  }\n\n  .img{\n    border: solid white;\n    border-radius: 24px;\n  \n  }\n\n  border: solid;\n  border-radius: 24px;\n\n\n.barra-menu{\n   display: -ms-grid;\n   display: grid;\n  }\n  .menu-button:hover .barra-menu{\n    width: 31%;\n    -webkit-transition: 0.3s ease-out;\n    transition: 0.3s ease-out;\n  \n  }\n\n  .titulo{\n    opacity:1;\n    -webkit-transition: 0.3s ease-out;\n    transition: 0.3s ease-out;\n    color: whitesmoke;\n    font-weight: bold;\n    text-align: center;\n    position: relative;\n    top: 5%;\n    margin-bottom: 7%;\n  }\n\n  .menu{\n    height: 696px;\n    position: relative;\n    left: 0;\n    top: 12px;\n    background-color: blue;\n    width: 27%;\n    color: white;\n\n}\n\nul{\n  position: relative;\n  left: -37px;\n}\n\n.divClose{\n  top: 0;\n  position: absolute;\n  left: 133px;\n  width: 186%;\n  height: 100%;\n\n}\n\n    .aClose{\n    top: 0;\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n\n    }\n}"

/***/ }),

/***/ "./src/app/menu-responsive/menu-responsive.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"menu\">\n    <ul>\n        <li>\n            <a routerLink=\"/perfil#aluno\" (click)=\"onNoClick()\">\n                <span class=\"fotoPerfil\" > <img class=\"img\" src=\"./../assets/img/avatar.jpg\"></span>\n            </a>\n        </li>\n        <li>Perfil</li>\n        <li>\n            <a routerLink=\"/treinos\" (click)=\"onNoClick()\">\n                <img class=\"\" src=\"./../assets/img/clipboard.png\">\n            </a>\n        </li>\n        <li>Treinos</li>\n        <li>\n            <a routerLink=\"/historico\" (click)=\"onNoClick()\">\n                <img class=\"\" src=\"./../assets/img/history.png\">\n            </a>\n        </li>\n        <li>Historico</li>\n        <li>\n            <a routerLink=\"/historico\" (click)=\"onNoClick()\">\n                <img class=\"\" src=\"./../assets/img/timer.png\">\n            </a>\n        </li>\n        <li> Professor</li>\n        <li>\n            <a routerLink=\"/mais\" (click)=\"onNoClick()\">\n                <img class=\"\" src=\"./../assets/img/plus.png\">\n            </a>\n        </li>\n        <li>Mais</li>\n    </ul>\n    <div class=\"divClose\" ><a class=\"aClose\" (click)=\"onNoClick()\"></a></div>\n</mat-card>"

/***/ }),

/***/ "./src/app/menu-responsive/menu-responsive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuResponsiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MenuResponsiveComponent = /** @class */ (function () {
    function MenuResponsiveComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    MenuResponsiveComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MenuResponsiveComponent.prototype.ngOnInit = function () {
    };
    MenuResponsiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-responsive',
            template: __webpack_require__("./src/app/menu-responsive/menu-responsive.component.html"),
            styles: [__webpack_require__("./src/app/menu-responsive/menu-responsive.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], Object])
    ], MenuResponsiveComponent);
    return MenuResponsiveComponent;
}());



/***/ }),

/***/ "./src/app/mudar-fotografia-popup/mudar-fotografia-popup.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n@media only screen and (max-width: 667px) {\n\n\n    .inputfile {\n        opacity: 0;\n    }\n    \n \n\n    .js .inputfile {\n        width: 0.1px;\n        height: 0.1px;\n        opacity: 0;\n        overflow: hidden;\n        position: absolute;\n        z-index: -1;\n    }\n    \n    .inputfile + label {\n        max-width: 80%;\n        font-size: 1.25rem;\n        /* 20px */\n        font-weight: 700;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        cursor: pointer;\n        display: inline-block;\n        overflow: hidden;\n        padding: 0.625rem 1.25rem;\n        /* 10px 20px */\n    }\n    \n    .no-js .inputfile + label {\n        display: none;\n    }\n    \n    .inputfile:focus + label,\n    .inputfile.has-focus + label {\n        outline: 1px dotted #000;\n        outline: -webkit-focus-ring-color auto 5px;\n    }\n    \n    .inputfile + label * {\n        /* pointer-events: none; */\n        /* in case of FastClick lib use */\n    }\n    \n    .inputfile + label svg {\n        width: 1em;\n        height: 1em;\n        vertical-align: middle;\n        fill: currentColor;\n        margin-top: -0.25em;\n        /* 4px */\n        margin-right: 0.25em;\n        /* 4px */\n    }\n\n    input[type=file]{\n        outline: none;\n    }\n    \n    .inputfile-4 + label {\n        color: #d3394c;\n        outline: none;\n    }\n    \n    .inputfile-4:focus + label,\n    .inputfile-4.has-focus + label,\n    .inputfile-4 + label:hover {\n        color: #722040;\n    }\n    \n    \n    .inputfile-4 + label figure {\n        width: 36px;\n        height: 28px;\n        border-radius: 50%;\n        background-color: #197eff;\n        display: block;\n        padding: 20px;\n        margin: 2px 97px 9px;\n    }\n    \n    .inputfile-4:focus + label figure,\n    .inputfile-4.has-focus + label figure,\n    .inputfile-4 + label:hover figure {\n        background-color: #001e46;\n    }\n    \n    .inputfile-4 + label svg {\n        width: 100%;\n        height: 100%;\n        fill: #f1e5e6;\n    }\n    \n    \n   \n \n    \n    \n   \n    \n    \n    /* Content */\n    \n    .content {\n        width: 100%;\n        max-width: 800px;\n        text-align: center;\n        margin: 0 auto;\n        padding: 0 0 3em 0;\n    }\n    \n    \n\n}\n\n\n"

/***/ }),

/***/ "./src/app/mudar-fotografia-popup/mudar-fotografia-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"overflow: scroll\">\n    <div class=\"container\">\n   \n          <div class=\"box\">\n            <input type=\"file\" name=\"file-5[]\" id=\"file-5\" class=\"inputfile inputfile-4\" data-multiple-caption=\"{count} files selected\" multiple />\n            <label for=\"file-5\"><figure><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"/></svg></figure> </label>\n          </div>\n        </div>\n  \n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/mudar-fotografia-popup/mudar-fotografia-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MudarFotografiaPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MudarFotografiaPopupComponent = /** @class */ (function () {
    function MudarFotografiaPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MudarFotografiaPopupComponent.prototype.ngOnInit = function () {
    };
    MudarFotografiaPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mudar-fotografia-popup',
            template: __webpack_require__("./src/app/mudar-fotografia-popup/mudar-fotografia-popup.component.html"),
            styles: [__webpack_require__("./src/app/mudar-fotografia-popup/mudar-fotografia-popup.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogRef */], Object])
    ], MudarFotografiaPopupComponent);
    return MudarFotografiaPopupComponent;
}());



/***/ }),

/***/ "./src/app/perfil-aluno-pop-up/perfil-aluno-pop-up.component.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 667px) {\n\n\n.imgEP{\n        width: 48px;\n        height: 37px;\n}\n\n        .container{\n\n                width: 21%;\n                margin-top: 0px;\n                height: 82px;\n                position: absolute;\n                top: 23px;\n                border: solid white;\n                border-radius: 50px;\n                left: 13px;\n                background-color: #0000004d;\n            \n            }\n\n        .inputfile {\n                opacity: 0;\n            }\n            \n         \n        \n            .js .inputfile {\n                width: 0.1px;\n                height: 0.1px;\n                opacity: 0;\n                overflow: hidden;\n                position: absolute;\n                z-index: -1;\n            }\n            \n            .inputfile + label {\n                max-width: 80%;\n                font-size: 1.25rem;\n                /* 20px */\n                font-weight: 700;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                cursor: pointer;\n                display: inline-block;\n                overflow: hidden;\n                padding: 0.625rem 1.25rem;\n                /* 10px 20px */\n                position: relative;\ntop: 14px;\nleft: 7px;\n            }\n            \n            .no-js .inputfile + label {\n                display: none;\n            }\n            \n            .inputfile:focus + label,\n            .inputfile.has-focus + label {\n                outline: 1px dotted #000;\n                outline: -webkit-focus-ring-color auto 5px;\n            }\n            \n            .inputfile + label * {\n                /* pointer-events: none; */\n                /* in case of FastClick lib use */\n            }\n            \n            .inputfile + label svg {\n                width: 1em;\n                height: 1em;\n                vertical-align: middle;\n                fill: currentColor;\n                margin-top: -0.25em;\n                /* 4px */\n                margin-right: 0.25em;\n                /* 4px */\n            }\n        \n            input[type=file]{\n                outline: none;\n                width: 75%;\n                display: none;\n\n            }\n\n            \n            \n            .inputfile-4 + label {\n                color: #d3394c;\n                outline: none;\n            }\n            \n            .inputfile-4:focus + label,\n            .inputfile-4.has-focus + label,\n            .inputfile-4 + label:hover {\n                color: #722040;\n            }\n            \n            .inputfile-4 + label figure {\n                width: 34px;\n                height: 27px;\n                border-radius: 50%;\n                display: block;\n                margin: 0px -10px 0px;\n            }\n            \n\n            \n            .inputfile-4 + label svg {\n                width: 100%;\n                height: 100%;\n                fill: #f1e5e6;\n            }\n            \n            \n           \n            .inputfile + label {\n                width: 88%;\n            \n                font-size: 1.25rem;\n                font-weight: 700;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                cursor: pointer;\n                display: inline-block;\n                overflow: hidden;\n            \n            }\n            \n            \n           \n            \n            \n            /* Content */\n            \n            .content {\n                width: 100%;\n                max-width: 800px;\n                text-align: center;\n                margin: 0 auto;\n                padding: 0 0 3em 0;\n            }\n\n        .editarPerfil{\n                display: -ms-grid;\n                display: grid;\n                z-index: 99;\n                background-color: #ffffff;\n                position: absolute;\n                top: 0px;\n                height: 690px;\n                width: 98%;\n              \n\n        }\n\n\n        .boxFoto{\n                width: 100%;\n                height: 75px;\n        }\n\n        .img{\n                border: solid #0000003b;\n                border-radius: 45px;\n                border: solid #0000003b;\n                border-radius: 45px;\n                border-width: 1px;\n                \n                }\n\n                .editarFotoPerfil{\n                        width: 23%;\n                      }\n\n   \n}"

/***/ }),

/***/ "./src/app/perfil-aluno-pop-up/perfil-aluno-pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"editarPerfil\">\n<div class=\"boxFoto\">\n<img  class=\"editarFotoPerfil img\" src=\"https://pbs.twimg.com/profile_images\n/792110382328537088/dM6zdt76_400x400.jpg\">\n</div>\n<div class=\"container\">  <input type=\"file\" name=\"file-5[]\" id=\"file-5\" class=\"inputfile inputfile-4\" data-multiple-caption=\"{count} files selected\" multiple />\n  <label for=\"file-5\"><figure><img class=\"imgEP\" src=\"http://www.jsinternet.net.br/wp-content/uploads/2017/09/icon_jr_07.png  \" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"></figure></label>\n  </div>\n  <form style=\"display:grid\" name=\"standalone\">   \n    <mat-form-field>\n      <input matInput placeholder=\"Nome Completo\" [value]=\"nomeCompleto\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput [value]=\"dataNascimento\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Assosiar ao ginasio\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n          <img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\n          <span>{{ state.name }}</span> |\n          <small>Population: {{state.population}}</small>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\" Me assosiar ao Professor(a)\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n          <img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\n          <span>{{ state.name }}</span> |\n          <small>Population: {{state.population}}</small>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>\n<div>\n  <button routerLink=\"/home\" >Atualizar</button>\n  <button routerLink=\"/perfil#aluno\" >Cancelar</button>\n</div>\n   \n\n</mat-card>"

/***/ }),

/***/ "./src/app/perfil-aluno-pop-up/perfil-aluno-pop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export State */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilAlunoPopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());

var PerfilAlunoPopUpComponent = /** @class */ (function () {
    function PerfilAlunoPopUpComponent() {
        var _this = this;
        this.nomeCompleto = 'Joao da Silva';
        this.dataNascimento = '19/03/2000';
        this.ginasio = 'Fitness Word';
        //checkbox
        this.sim = false;
        this.nao = false;
        this.socialmente = false;
        // autocomplit
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
    }
    PerfilAlunoPopUpComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    PerfilAlunoPopUpComponent.prototype.ngOnInit = function () {
    };
    PerfilAlunoPopUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-perfil-aluno-pop-up',
            template: __webpack_require__("./src/app/perfil-aluno-pop-up/perfil-aluno-pop-up.component.html"),
            styles: [__webpack_require__("./src/app/perfil-aluno-pop-up/perfil-aluno-pop-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilAlunoPopUpComponent);
    return PerfilAlunoPopUpComponent;
}());



/***/ }),

/***/ "./src/app/perfil-aluno/perfil-aluno.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{-webkit-box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{-webkit-box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{-webkit-box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{-webkit-box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12);box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{-webkit-box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12);box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{-webkit-box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12);box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12);box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{-webkit-box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{-webkit-box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12);box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{-webkit-box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{-webkit-box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12);box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{-webkit-box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12);box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{-webkit-box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12);box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{-webkit-box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12);box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{-webkit-box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12);box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{-webkit-box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12);box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{-webkit-box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12);box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.4375em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.28125em}.mat-form-field-underline{bottom:1.25em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-ripple{overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;-webkit-transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;-webkit-transition:opacity .4s cubic-bezier(.25,.8,.25,1);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{background:0 0}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.2)}.mat-fab.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-flat-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary{color:#fff}.mat-flat-button.mat-accent{color:rgba(0,0,0,.87)}.mat-flat-button.mat-warn{color:#fff}.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary{background-color:#673ab7}.mat-flat-button.mat-accent{background-color:#ffd740}.mat-flat-button.mat-warn{background-color:#f44336}.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-flat-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.2)}.mat-flat-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip:not(.mat-basic-chip){background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip:not(.mat-basic-chip) .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-header-row,.mat-row{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell{color:rgba(0,0,0,.87)}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-calendar-next-button,.mat-calendar-previous-button{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-today.mat-calendar-body-selected{-webkit-box-shadow:inset 0 0 0 1px #fff;box-shadow:inset 0 0 0 1px #fff}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-datepicker-toggle-active{color:#673ab7}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.54)}.mat-hint{color:rgba(0,0,0,.54)}.mat-focused .mat-form-field-label{color:#673ab7}.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-disabled .mat-form-field-underline{background-image:-webkit-gradient(linear,left top, right top,color-stop(0, rgba(0,0,0,.42)),color-stop(33%, rgba(0,0,0,.42)),color-stop(0, transparent));background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x}.mat-form-field-ripple{background-color:#673ab7}.mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field-invalid .mat-form-field-ripple{background-color:#f44336}.mat-error{color:#f44336}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled]{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}@media only screen and (max-width: 667px) {\n\n.basic-container {\n    padding: 5px;\n  }\n  \n  .version-info {\n    font-size: 8pt;\n    float: right;\n  }\n\n\n\n.perfil{\n  display: -ms-grid;\n  display: grid;\n  z-index: 99;\n  background-color: #ffffff;\n  position: absolute;\n  top: 0px;\n  height: 632px;\n  width: 94%;\n  overflow: auto;\n\n}\n\n\n\n.intoPerfil{\n  display: -ms-grid;\n  display: grid;\n  overflow: hidden;\n  height: 100%;\n}\n \n  \n  img{\n    width: 100%;\n  }\n\n  .fotoPerfil{\n  width: 16%;\n  margin-top: 1%;\n  margin-bottom: 1%;\n\n}\n\n.img{\n  border: solid #fafafa;\n  border-radius: 45px;\n\n\n}\n\n\n       \n}"

/***/ }),

/***/ "./src/app/perfil-aluno/perfil-aluno.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"perfil\">\n\n    <div class=\"intoPerfil\">\n   \n\n  <span class=\"fotoPerfil\"> <img  class=\"img\" src=\"https://pbs.twimg.com/profile_images/792110382328537088/dM6zdt76_400x400.jpg\"></span>\n  <a style=\"float:right\" routerLink=\"/home\">Voltar</a>\n  <span>{{nomeCompleto}}</span>&nbsp;\n  <span>@joaoDaSilva</span>&nbsp;\n  <span>Data de Nascimento:</span>\n  <span>{{dataNascimento}} </span>&nbsp;\n  <span>Associado a:</span>\n  <span>{{ginasio}}</span>&nbsp;\n  <span>Personal:</span>\n  <span>{{ginasio}}</span>&nbsp;\n  <button routerLink=\"/editarperfilaluno\">Editar Perfil</button>&nbsp;\n \n</div>\n</mat-card>"

/***/ }),

/***/ "./src/app/perfil-aluno/perfil-aluno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilAlunoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerfilAlunoComponent = /** @class */ (function () {
    function PerfilAlunoComponent() {
        this.nomeCompleto = 'Joao da Silva';
        this.peso = '70.5 kg';
        this.altura = '1.7 m';
        this.fuma = 'socialmente';
        this.bebe = 'socialmente';
        this.email = 'joao@email.com';
        this.esportePraticado = 'futebol, musculação';
        this.dataNascimento = '19/03/2000';
        this.ginasio = 'fitginasio';
    }
    PerfilAlunoComponent.prototype.ngOnInit = function () {
    };
    PerfilAlunoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-perfil-aluno',
            template: __webpack_require__("./src/app/perfil-aluno/perfil-aluno.component.html"),
            styles: [__webpack_require__("./src/app/perfil-aluno/perfil-aluno.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilAlunoComponent);
    return PerfilAlunoComponent;
}());



/***/ }),

/***/ "./src/app/personalizado/personalizado.component.css":
/***/ (function(module, exports) {

module.exports = ".titulos-barraSuperior{\n    position: absolute;\n    top: 0%;\n    z-index: 16;\n    right: 18%;\n}"

/***/ }),

/***/ "./src/app/personalizado/personalizado.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  personalizado works!\n</p>\n<div class=\"titulos-barraSuperior\"><h5>personalizado</h5></div>\n"

/***/ }),

/***/ "./src/app/personalizado/personalizado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonalizadoComponent = /** @class */ (function () {
    function PersonalizadoComponent() {
    }
    PersonalizadoComponent.prototype.ngOnInit = function () {
    };
    PersonalizadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-personalizado',
            template: __webpack_require__("./src/app/personalizado/personalizado.component.html"),
            styles: [__webpack_require__("./src/app/personalizado/personalizado.component.css")]
        })
    ], PersonalizadoComponent);
    return PersonalizadoComponent;
}());



/***/ }),

/***/ "./src/app/recuperar-senha/recuperar-senha.component.css":
/***/ (function(module, exports) {

module.exports = "\n    @media only screen and (max-width: 667px) {\n        .recuperar-senha{\n        \n                display: -ms-grid;\n        \n                display: grid;\n                z-index: 99;\n                background-color: #ffffff;\n                position: absolute;\n                top: 0px;\n                height: 690px;\n                width: 98%;\n        \n        }\n\n        .button2{\n\n                border: solid white;\n                border-radius: 13px;\n                width: 29%;\n                margin-left: 0%;\n                margin-top: 2%;\n                border-width: 1px;\n        \n        }\n        .button {\n            border: solid white;\n            border-radius: 12px;\n            background-color: blue;\n            outline: none;\n            color: white;\n            padding-bottom: 10px;\n            padding-left: 10px;\n            padding-top: 7px;\n            text-align: center;\n            width: 100%;\n            border-width: 1.5px;\n        \n        }\n\n      \n\n        input[type=text]{\n    \n            outline:none;\n            border: solid #c2c2c2;\n            border-radius: 12px;\n            background-color: #ffffff;\n            padding-bottom: 7px;\n            padding-left: 10px;\n            padding-top: 7px;\n            border-width: 1px;\n            width: 80%;\n        }\n\n        .button2:hover{\n            border: solid blue;\n            border-width: 1px;\n        }\n\n        input[type=text]:hover{\n            border: solid blue;\n            border-width: 1px;\n        }\n\n        .boxRecuperarSenha{\n            display: -ms-grid;\n            display: grid;\n            width: 98%;\n            position: absolute;\n            top: 23%;\n            left: 5%;\n        }\n        \n    }"

/***/ }),

/***/ "./src/app/recuperar-senha/recuperar-senha.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"recuperar-senha\">\n  <p>\n    recuperar-senha works!\n  </p>\n\n  <div class=\"boxRecuperarSenha\">\n\n    <form>\n      <input type=\"text\">\n    </form>\n\n    <div class=\"button2\">\n        <button class=\"button \">Buscar</button>\n\n    </div>\n   \n    <!--<button ><a routerLink=\" \"></a>Entrar</button>-->\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/recuperar-senha/recuperar-senha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarSenhaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecuperarSenhaComponent = /** @class */ (function () {
    function RecuperarSenhaComponent() {
    }
    RecuperarSenhaComponent.prototype.ngOnInit = function () {
    };
    RecuperarSenhaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recuperar-senha',
            template: __webpack_require__("./src/app/recuperar-senha/recuperar-senha.component.html"),
            styles: [__webpack_require__("./src/app/recuperar-senha/recuperar-senha.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecuperarSenhaComponent);
    return RecuperarSenhaComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service/service.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  service works!\n</p>\n"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-service',
            template: __webpack_require__("./src/app/service/service.component.html"),
            styles: [__webpack_require__("./src/app/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/treinos/treinos.component.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 667px) {\n\n.titulos-barraSuperior{\n    position: absolute;\n    top: 0%;\n    z-index: 16;\n    right: 18%;\n}\n\n.demo-tab-group {\n    border: 1px solid #e8e8e8;\n  }\n  \n  .demo-tab-content {\n    padding: 16px;\n  }\n\n  .mat-tab-body-wrapper {\n    position: relative !important;}\n\n\n    .cardheader{\n      width: 102%;\n      margin-left: 0px\n    }\n    .card{\n      width: 105%;\n      margin-left: -24px\n    }\n}"

/***/ }),

/***/ "./src/app/treinos/treinos.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-card-content>\n       \n              \n                    <mat-accordion>\n                        <mat-expansion-panel  class=\"cardheader\" (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                            <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                        <img src=\"http://digikalla.info/wp-content/uploads/2018/01/rectus-abdominis-muscle-vastral-physiotherapy-clinic-rectus-abdominis-muscle-detail-8-ideas.jpg\" height=\"44\" />\n                                       Abdominais\n                                </mat-panel-title>\n                                <mat-panel-description>\n                                     open/close\n                                </mat-panel-description>\n                            </mat-expansion-panel-header>\n                            <mat-card class=\"card\">\n                                    <p>Img</p>\n                                    supino\n                                    adicionar router link com as fotos de como fazer o exercicio\n                                    adcionado pela a academia tutora do usuario\n                                </mat-card>\n                                <mat-card class=\"card\">\n                                        <p>Img</p>\n                                    Levantamento de pernas em suspensão\n                                </mat-card >\n                                <mat-card class=\"card\">\n                                    Levantamento de pernas em suspensão\n                                </mat-card>\n                                <mat-card class=\"card\">\n                                    <p>Img</p>\n                                    Abdominais Laterais Com haltere\n                                </mat-card>\n                        </mat-expansion-panel>\n                    </mat-accordion>&nbsp;\n                    <mat-accordion>\n                            <mat-expansion-panel class=\"cardheader\" (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                                <mat-expansion-panel-header>\n                                    <mat-panel-title>\n                                            <img src=\"https://i.pinimg.com/736x/4a/81/6b/4a816b501423515d842c23b428a6d366--muscle-disorders-skeletal-muscle.jpg\" height=\"44\" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Costas\n                                    </mat-panel-title>\n                                    <mat-panel-description>\n                                         open/close\n                                    </mat-panel-description>\n                                </mat-expansion-panel-header>\n                                <mat-card class=\"card\"  >\n                                        <p>Img</p>    Barra Finxa\n                                    </mat-card>\n                                    <mat-card class=\"card\">\n                                            <p>Img</p>    Agachamento\n                                    </mat-card>\n                                    <mat-card class=\"card\">\n                                            <p>Img</p>     remda\n                                    </mat-card>\n                            </mat-expansion-panel>\n                        </mat-accordion>\n             \n    </mat-card-content>\n</div>\n\n<mat-card>\n    <p>Ainda nao há trino disponiveis pra si</p>\n</mat-card>"

/***/ }),

/***/ "./src/app/treinos/treinos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreinosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treinos__ = __webpack_require__("./src/app/treinos/treinos.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TreinosComponent = /** @class */ (function () {
    function TreinosComponent() {
        this.panelOpenState = false;
        this.titulo = 'Listagem de clientes';
        this.clientes = [
            new __WEBPACK_IMPORTED_MODULE_1__treinos__["a" /* Cliente */](1, 'Fulano'),
        ];
        this.cliente = this.clientes[0];
    }
    TreinosComponent.prototype.ngOnInit = function () {
    };
    TreinosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-treinos',
            template: __webpack_require__("./src/app/treinos/treinos.component.html"),
            styles: [__webpack_require__("./src/app/treinos/treinos.component.css")]
        })
    ], TreinosComponent);
    return TreinosComponent;
}());



/***/ }),

/***/ "./src/app/treinos/treinos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    return Cliente;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    pathBase: "http://35.227.83.59:8000/api/psd/v1/",
    apikey: "3QCZgJlyqi7A4eepXL9zj3RAH2Wj2q5Q",
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/modules/angular-materials.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTooltipModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTooltipModule */]],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/shared/http-util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpUtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { environment } from './../environments/environment'
var HttpUtilService = /** @class */ (function () {
    function HttpUtilService() {
    }
    //  private API_URL = environment.pathBase;
    // url(path: string) {
    //      return this.API_URL + path;
    //   }
    HttpUtilService.prototype.headers = function () {
        var headersParams = { 'Content-Type': 'application/json' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headersParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpUtilService.prototype.Headers = function (apikey) {
        var headersParams = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'apikey': apikey };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headersParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpUtilService.prototype.HeadersSegundaVia = function (apikey, vencimento) {
        var headersParams = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'apikey': apikey, 'novoVencimento': vencimento };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headersParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpUtilService.prototype.HeadersParceiro = function (apikey, tipoParceiro) {
        var headersParams = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'apikey': apikey, 'parceiro': tipoParceiro };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headersParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return options;
    };
    /* HeaderAgendamento(apikey: string, filtro: Filtro, flag: string) {
 
         let headersParams = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'apikey': apikey, 'tipo': filtro.tipo };
         let headers = new Headers(headersParams);
         let options = new RequestOptions({ headers: headers });
         return options;
     }*/
    HttpUtilService.prototype.HeaderLogin = function (apikey, login) {
        var headersParams = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'apikey': apikey, 'login': login };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headersParams);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpUtilService.prototype.extrairDados = function (response) {
        var data = response.json();
        return data || {};
    };
    HttpUtilService.prototype.processarErros = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Erro acessando servidor remoto. ' + error.statusText);
    };
    HttpUtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], HttpUtilService);
    return HttpUtilService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map