(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./projects/SingleQuickNotes/src/main.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pablo\OneDrive\Documentos\GitHub\SingleQuickNotes\APP\projects\SingleQuickNotes\src\main.ts */"kLlO");


/***/ }),

/***/ "I9Ij":
/*!***************************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/component/semantic/header/home.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cargar-scripts.service */ "lMbr");


class HomeComponent {
    constructor(_CargarScripts) {
        this.msg_1 = ' Es una gran aplicacion para organizar tus ideas y proyectos visualmente. Tiene la funcionalidad completa de una aplicación para tomar notas y el espacio visual de una pizarra pero con un lienzo limitado  ';
        _CargarScripts.Carga([""]);
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__["CargarScriptsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 1, consts: [[1, "container", "px-lg-5"], [1, "row", "gx-2", "align-items-center", "my-4"], [1, "col-lg-6"], ["src", "./../../assets/img/logo0-removebg-preview-removebg-preview.png", "width", "350px", "height", "350", "id", "home", "alt", "...", 1, "img-fluid", "rounded", "mb-4", "mb-lg-2"], [1, "list-unstyled", "wrapper"], ["id", "parrafo"], [1, "fa", "fa-quote-left", "violet", 2, "font-size", "17px"], [1, "fa", "fa-quote-right", "cyan", 2, "font-size", "17px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.msg_1, "\u00A0");
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-family: \"century gothic\";\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  background: linear-gradient(to right, #4fc3f7, #66bb6a);\n  border: none;\n  font-size: 15px;\n  color: white;\n  border-radius: 3px;\n  margin: 10px;\n  padding: 5px 15px 5px 15px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.cyan[_ngcontent-%COMP%] {\n  color: #00aace;\n}\n\n.violet[_ngcontent-%COMP%] {\n  color: #aa36a5;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 50px 0px 50px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw0QkFBQTtFQUNBLHVEQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUFNLGNBQUE7QUFHTjs7QUFGQTtFQUFRLGNBQUE7QUFNUjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBT0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1mYW1pbHk6ICdjZW50dXJ5IGdvdGhpYydcclxufVxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gIHJpZ2h0LCM0ZmMzZjcsIzY2YmI2YSk7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmN5YW57Y29sb3I6ICMwMGFhY2U7fVxyXG4udmlvbGV0e2NvbG9yOiNhYTM2YTU7fVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "MbIV":
/*!***********************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/component/semantic/nav/nav.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cargar-scripts.service */ "lMbr");


class NavComponent {
    constructor(_CargarScripts) {
        this.msg_1 = 'Descubre lo que';
        this.msg_2 = 'Single Quick Notes';
        this.msg_3 = 'puede hacer por ti ';
        _CargarScripts.Carga(["message"]);
    }
    ngOnInit() { }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__["CargarScriptsService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 10, vars: 3, consts: [["id", "cartel", 1, "cursor", "typewriter-animation", "blanco"], [2, "color", "rgba(170,54,165,1.000)"], [2, "color", "rgba(0,170,238,1.000)"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.msg_1, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.msg_2, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg_3);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);\n\n\n.cursor[_ngcontent-%COMP%] {\n  position: relative;\n  width: 24em;\n  margin: 0 auto;\n  border-right: 2px solid rgba(255, 255, 255, 0.75);\n  font-size: 30px;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  transform: translateY(-50%);\n}\n\n.typewriter-animation[_ngcontent-%COMP%] {\n  animation: typewriter 5s steps(50) 1s 1 normal both, blinkingCursor 500ms steps(50) infinite normal;\n}\n@keyframes typewriter {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes blinkingCursor {\n  from {\n    border-right-color: rgba(255, 255, 255, 0.75);\n  }\n  to {\n    border-right-color: transparent;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLGtFQUFBO0FBRFIsaUJBQUE7QUFHQSxXQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdBLGNBQUE7QUFDQTtFQUNFLG1HQUNFO0FBREo7QUFJQTtFQUNFO0lBQU8sUUFBQTtFQUFQO0VBQ0E7SUFBSyxXQUFBO0VBRUw7QUFDRjtBQURBO0VBQ0U7SUFBTyw2Q0FBQTtFQUlQO0VBSEE7SUFBSywrQkFBQTtFQU1MO0FBQ0YiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR29vZ2xlIEZvbnRzICovXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Bbm9ueW1vdXMrUHJvKTtcclxuXHJcbi8qIEN1cnNvciAqL1xyXG4uY3Vyc29ye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDI0ZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjc1KTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAgXHJcbiAgICAgIFxyXG59XHJcbi8qIEFuaW1hdGlvbiAqL1xyXG4udHlwZXdyaXRlci1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogXHJcbiAgICB0eXBld3JpdGVyIDVzIHN0ZXBzKDUwKSAxcyAxIG5vcm1hbCBib3RoLCBcclxuICAgIGJsaW5raW5nQ3Vyc29yIDUwMG1zIHN0ZXBzKDUwKSBpbmZpbml0ZSBub3JtYWw7XHJcbn1cclxuQGtleWZyYW1lcyB0eXBld3JpdGVyIHtcclxuICBmcm9tIHsgd2lkdGg6IDA7IH1cclxuICB0byB7IHdpZHRoOiAxMDAlOyB9XHJcbn1cclxuQGtleWZyYW1lcyBibGlua2luZ0N1cnNvcntcclxuICBmcm9tIHsgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43NSk7IH1cclxuICB0byB7IGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "Qmoz":
/*!******************************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/component/semantic/aside/acordeon.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AcordeonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordeonComponent", function() { return AcordeonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cargar-scripts.service */ "lMbr");


class AcordeonComponent {
    constructor(_CargarScripts) {
        this.msg_1 = 'Acerca de';
        this.msg_2 = 'El propósito de SingleQuickNotes es optimizar las ideas en tareas';
        this.msg_3 = 'Organizar bien nuestro tiempo es de vital importancia para poder llegar a todo, tanto si es en el trabajo como con nuestros proyectos personales. Todavía quedan nostálgicos que prefieren los calendarios y agendas de papel que conforme se van rellenando se van deprecando, pero no se puede negar que las aplicaciones web ó móviles en la actualidad son herramientas de trabajo muy completas y versátiles con las que organizar y gestionar nuestro tiempo.';
        this.msg_4 = 'Software';
        this.msg_5 = 'MIT Locense ';
        this.msg_6 = 'Copyright (c) 2023 Pabloluisroth Por la presente se concede permiso, sin cargo, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el "Software"), para tratar en el Software sin restricciones, incluidos, entre otros, los derechos usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y para permitir a las personas a quienes se les provisto para hacerlo, sujeto a las siguientes condiciones: El aviso de derechos de autor anterior y este aviso de permiso se incluirán en todos copias o partes sustanciales del Software. EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITO, INCLUYENDO PERO NO LIMITADO A LAS GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO VIOLACIÓN. EN NINGÚN CASO LA LOS AUTORES O TITULARES DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE CUALQUIER RECLAMACIÓN, DAÑOS U OTROS RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRA FORMA, DERIVADA DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL SOFTWARE.';
        this.msg_7 = 'Descargar ';
        this.msg_8 = ' Descargar Aplicación';
        _CargarScripts.Carga(["acordeon", "removeComponent"]);
    }
    ngOnInit() {
    }
}
AcordeonComponent.ɵfac = function AcordeonComponent_Factory(t) { return new (t || AcordeonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__["CargarScriptsService"])); };
AcordeonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcordeonComponent, selectors: [["app-acordeon"]], decls: 61, vars: 10, consts: [[1, "container", "px-4", "px-lg-5"], [1, "accordion-option"], ["href", "javascript:void(0)", "accordion-id", "#accordion", 1, "toggle-accordion", "active"], [1, "clearfix"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title"], ["role", "button", "id", "parrafo", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["id", "cartel2"], [2, "color", "rgba(170,54,165,1.000)"], [2, "color", "rgba(0,170,238,1.000)"], ["id", "parrafo", 1, "card-text", "parrafo"], ["role", "tab", "id", "headingTwo", 1, "panel-heading"], ["role", "button", "id", "parrafo", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", "aria-expanded", "true", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "panel-collapse", "collapse", "in"], ["id", "cartel2", 1, "card-title", "parrafo"], ["id", "parrafo", 1, "card-text"], ["role", "tab", "id", "headingThree", 1, "panel-heading"], ["role", "button", "id", "parrafo", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", "aria-expanded", "true", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "panel-collapse", "collapse", "in"], ["href", "https://github.com/Pabloluisroth/SingleQuickNotes/tree/main", "target", "_blank"]], template: function AcordeonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.msg_1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.msg_4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.msg_5, "", ctx.msg_6, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg_8);
    } }, styles: ["@charset \"UTF-8\";\n.panel-default[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-color: #e4e5e7;\n  padding: 0;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.panel-default[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px 15px;\n}\n.panel-default[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  float: right;\n  transition: transform 0.25s linear;\n  -webkit-transition: -webkit-transform 0.25s linear;\n}\n.panel-default[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%]   a[aria-expanded=true][_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n.panel-default[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%]   a[aria-expanded=true][_ngcontent-%COMP%]:after {\n  font-family: FontAwesome;\n  content: \"\u2212\";\n  color: black;\n  font-weight: bolder;\n  transform: rotate(180deg);\n}\n.panel-default[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%]   a[aria-expanded=false][_ngcontent-%COMP%]:after {\n  font-family: FontAwesome;\n  content: \"+\";\n  transform: rotate(90deg);\n}\n.accordion-option[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  clear: both;\n  margin: 15px 0;\n}\n.accordion-option[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  float: left;\n  padding: 0;\n  margin: 0;\n}\n.accordion-option[_ngcontent-%COMP%]   .toggle-accordion[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 20px;\n  color: #6a6c6f;\n}\n.accordion-option[_ngcontent-%COMP%]   .toggle-accordion[_ngcontent-%COMP%]:before {\n  font-family: \"Ysabeau\", sans-serif;\n  font-size: 25px;\n  content: \"Cerrar todo\";\n}\n.accordion-option[_ngcontent-%COMP%]   .toggle-accordion.active[_ngcontent-%COMP%]:before {\n  font-family: \"Ysabeau\", sans-serif;\n  font-size: 25px;\n  content: \"Cerrar todo\";\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhY29yZGVvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0RBQUE7QUFFRjtBQUVBO0VBQ0Usc0JBQUE7QUFDRjtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBR0EseUJBQUE7QUFERjtBQUtBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBRUEsd0JBQUE7QUFGRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUhGO0FBT0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKRjtBQU9BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSkY7QUFPQTtFQUNFLGtDQUFBO0VBQW9DLGVBQUE7RUFBaUIsc0JBQUE7QUFGdkQ7QUFLQTtFQUNFLGtDQUFBO0VBQW9DLGVBQUE7RUFBaUIsc0JBQUE7QUFBdkQ7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6ImFjb3JkZW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNlNGU1ZTc7XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmcgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZsb2F0OiByaWdodDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGxpbmVhcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBsaW5lYXI7XG59XG5cbi5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmcgYVthcmlhLWV4cGFuZGVkPXRydWVdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyBhW2FyaWEtZXhwYW5kZWQ9dHJ1ZV06YWZ0ZXIge1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwi4oiSXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIGFbYXJpYS1leHBhbmRlZD1mYWxzZV06YWZ0ZXIge1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uYWNjb3JkaW9uLW9wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uYWNjb3JkaW9uLW9wdGlvbiAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWNjb3JkaW9uLW9wdGlvbiAudG9nZ2xlLWFjY29yZGlvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzZhNmM2Zjtcbn1cblxuLmFjY29yZGlvbi1vcHRpb24gLnRvZ2dsZS1hY2NvcmRpb246YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiWXNhYmVhdVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbnRlbnQ6IFwiQ2VycmFyIHRvZG9cIjtcbn1cblxuLmFjY29yZGlvbi1vcHRpb24gLnRvZ2dsZS1hY2NvcmRpb24uYWN0aXZlOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIllzYWJlYXVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb250ZW50OiBcIkNlcnJhciB0b2RvXCI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });


/***/ }),

/***/ "XqVq":
/*!*********************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/component/tasks/shared/tarea.model.ts ***!
  \*********************************************************************************/
/*! exports provided: TareaEstadosSelect, TareaNew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaEstadosSelect", function() { return TareaEstadosSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaNew", function() { return TareaNew; });
var TareaEstadosSelect = [{ value: "Por hacer" }, { value: "En progreso" }, { value: "Hecha" }];
class TareaNew {
    constructor(titulo = '', fecha = new Date(), estado = "Por hacer") {
        this.titulo = titulo;
        this.fecha = fecha;
        this.estado = estado;
    }
}


/***/ }),

/***/ "YIyq":
/*!*********************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/app.module.ts ***!
  \*********************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/cargar-scripts.service */ "lMbr");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "t3kL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "q5ri");
/* harmony import */ var _component_tasks_edit_tarea_edit_tarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/tasks/edit-tarea/edit-tarea.component */ "pN1S");
/* harmony import */ var _component_tasks_tarea_lista_tarea_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/tasks/tarea-lista/tarea-lista.component */ "tx/y");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _component_tasks_shared_tarea_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/tasks/shared/tarea.service */ "uNg/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _component_semantic_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/semantic/footer/footer.component */ "kHPu");
/* harmony import */ var _component_semantic_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/semantic/nav/nav.component */ "MbIV");
/* harmony import */ var _component_semantic_header_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/semantic/header/home.component */ "I9Ij");
/* harmony import */ var _component_semantic_aside_acordeon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/semantic/aside/acordeon.component */ "Qmoz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        _component_tasks_shared_tarea_service__WEBPACK_IMPORTED_MODULE_7__["TareaService"],
        _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__["CargarScriptsService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _component_tasks_edit_tarea_edit_tarea_component__WEBPACK_IMPORTED_MODULE_4__["EditTareaComponent"],
        _component_tasks_tarea_lista_tarea_lista_component__WEBPACK_IMPORTED_MODULE_5__["TareaListaComponent"],
        _component_semantic_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _component_semantic_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
        _component_semantic_header_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _component_semantic_aside_acordeon_component__WEBPACK_IMPORTED_MODULE_12__["AcordeonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();


/***/ }),

/***/ "ah6L":
/*!*******************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/environments/environment.ts ***!
  \*******************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// Este archivo se puede reemplazar durante la compilación usando la matriz `fileReplacements`.
// `ng build --prod` reemplaza `environment.ts` con `environment.prod.ts`.
// La lista de reemplazos de archivos se puede encontrar en `angular.json`.
const environment = {
    production: false
};
/*
 * Para facilitar la depuración en el modo de desarrollo, puede importar el siguiente archivo
 * para ignorar los marcos de pila de errores relacionados con la zona, como `zone.run`, `zoneDelegate.invokeTask`.
 *
 * Esta importación debe ser comentada en modo producción porque tendrá un impacto negativo
 * en el rendimiento si se produce un error.
 */
// importar 'zone.js/dist/zone-error'; // Incluido con Angular CLI.


/***/ }),

/***/ "kHPu":
/*!*****************************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/component/semantic/footer/footer.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        this.title = 'SingleQuickNotes';
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 1, consts: [["id", "cartel", 1, "px-4", "px-lg-5"], [1, "m-0", "text-center", "paragraph"], [1, "navbar-logo", "nav-link", "navbar-brand"], ["src", "../../assets/img/logoApi-removebg-preview.png ", "width", "35", "height", "35", 1, ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: [".btn-div[_ngcontent-%COMP%] {\n  background-image: url('informacion-removebg-preview.png');\n  background-size: 45px 45px;\n  width: 45px;\n  height: 45px;\n  padding: 6px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bolder;\n  line-height: 1.42857;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bi1kaXZ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2luZm9ybWFjaW9uLXJlbW92ZWJnLXByZXZpZXcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOjQ1cHggNDVweDtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "kLlO":
/*!***********************************************!*\
  !*** ./projects/SingleQuickNotes/src/main.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "YIyq");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "ah6L");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "lMbr":
/*!******************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/services/cargar-scripts.service.ts ***!
  \******************************************************************************/
/*! exports provided: CargarScriptsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarScriptsService", function() { return CargarScriptsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CargarScriptsService {
    constructor() { }
    Carga(archivos) {
        for (let archivo of archivos) {
            let script = document.createElement('script');
            script.src = "./assets/script/" + archivo + ".js";
            let body = document.getElementsByTagName("body")[0];
            body.appendChild(script);
        }
    }
}
CargarScriptsService.ɵfac = function CargarScriptsService_Factory(t) { return new (t || CargarScriptsService)(); };
CargarScriptsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CargarScriptsService, factory: CargarScriptsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pN1S":
/*!**********************************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/component/tasks/edit-tarea/edit-tarea.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditTareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTareaComponent", function() { return EditTareaComponent; });
/* harmony import */ var _shared_tarea_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/tarea.model */ "XqVq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_tarea_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tarea.service */ "uNg/");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/cargar-scripts.service */ "lMbr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function EditTareaComponent_div_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditTareaComponent_div_0_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.configAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTareaComponent_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditTareaComponent_div_0_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.hideconfigAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTareaComponent_div_0_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", estado_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](estado_r9.value);
} }
const _c0 = function () { return ["/tareas/lista"]; };
function EditTareaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, EditTareaComponent_div_0_button_6_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EditTareaComponent_div_0_button_7_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "fieldset", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "fieldset", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "form", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EditTareaComponent_div_0_Template_form_ngSubmit_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "fieldset", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EditTareaComponent_div_0_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.tarea.titulo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "fieldset", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EditTareaComponent_div_0_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.tarea.fecha = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "fieldset", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EditTareaComponent_div_0_Template_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.tarea.estado = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, EditTareaComponent_div_0_option_42_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "fieldset", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditTareaComponent_div_0_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.showModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u00A0\u00A0\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function EditTareaComponent_div_0_Template_div_keydown_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.onKeydown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](111, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](118, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](124, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](126, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](132, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](133, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](135, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](136, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](137, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](138, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](139, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](141, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](142, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](143, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](144, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](146, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](148, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](149, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](150, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](151, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](152, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](153, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](154, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](155, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](156, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](158, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](159, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](160, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](161, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](162, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](163, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](164, "audio", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](165, "audio", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](166, "audio", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "audio", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](168, "audio", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](169, "audio", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](170, "audio", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](171, "audio", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](172, "audio", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](173, "audio", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](174, "audio", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](175, "audio", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](176, "audio", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](177, "audio", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](178, "audio", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](179, "audio", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](180, "audio", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](181, "audio", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](182, "audio", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](183, "audio", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](184, "audio", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](185, "audio", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](186, "audio", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](187, "audio", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](188, "audio", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](189, "audio", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](190, "audio", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](191, "audio", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](192, "audio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](193, "audio", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](194, "audio", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](195, "audio", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](196, "audio", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](197, "audio", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](198, "audio", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](199, "audio", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](200, "audio", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](201, "audio", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](202, "audio", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](203, "audio", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](204, "audio", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](205, "audio", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](206, "audio", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](207, "audio", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](208, "audio", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](209, "audio", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](210, "audio", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](211, "audio", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](212, "audio", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](213, "audio", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](214, "audio", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](215, "audio", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](216, "audio", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](217, "audio", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](218, "audio", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](219, "audio", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](220, "audio", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](221, "audio", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](222, "audio", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](223, "audio", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](224, "audio", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](225, "audio", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](226, "audio", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](227, "audio", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](228, "audio", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](229, "audio", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](230, "audio", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](231, "audio", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](232, "audio", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](233, "audio", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](234, "audio", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](235, "audio", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](236, "audio", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](237, "audio", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](238, "audio", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](239, "audio", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](240, "audio", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](241, "audio", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](242, "audio", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](243, "audio", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](244, "audio", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](245, "audio", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](246, "audio", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](247, "audio", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](248, "audio", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](249, "audio", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](250, "audio", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](251, "audio", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](252, "audio", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](253, "audio", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](254, "audio", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](255, "audio", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](256, "audio", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](257, "audio", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](258, "audio", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](259, "audio", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](260, "audio", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](261, "audio", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](262, "audio", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](263, "audio", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](264, "audio", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](265, "audio", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](266, "audio", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](267, "audio", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](268, "audio", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](269, "audio", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](270, "audio", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](271, "audio", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](272, "audio", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](273, "audio", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](274, "audio", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](275, "audio", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.audioConfig == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.audioConfig == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx_r0.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.tarea.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](35, 12, ctx_r0.tarea.fecha, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.tarea.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.tareaEstadosSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r3.form.valid);
} }
class EditTareaComponent {
    constructor(route, router, tareaService, _CargarScripts) {
        this.route = route;
        this.router = router;
        this.tareaService = tareaService;
        this.tarea = undefined;
        this.tareaEstadosSelect = _shared_tarea_model__WEBPACK_IMPORTED_MODULE_0__["TareaEstadosSelect"];
        this.title = '';
        this.titulo = 'Titulo';
        this.fecha = 'Fecha';
        this.estado = 'Estado';
        this.audioConfig = true;
        _CargarScripts.Carga(["darkMode"]);
    }
    click($event) {
        throw new Error('Method not implemented.');
    }
    showModal() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            width: 550,
            icon: 'success',
            title: 'Nota Guardada con exito !',
            showConfirmButton: false,
            padding: '3em',
            color: '#00aace',
            timer: 1900
        });
    }
    onKeydown(event) {
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
            if (audio.getAttribute('data-keyCode') === event.code) {
                if (this.audioConfig) {
                    audio.play();
                }
                audio.currentTime = 0;
            }
        });
        const keyElements = document.querySelectorAll('.key');
        keyElements.forEach(key => {
            if (key.getAttribute('data-keyCode') === event.code) {
                key.classList.add('playing');
                key.addEventListener('transitionend', () => {
                    key.classList.remove('playing');
                });
            }
        });
    }
    configAudio() {
        return (this.audioConfig = true);
    }
    hideconfigAudio() {
        return (this.audioConfig = false);
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(params => params.get('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(id => {
            if (id) {
                this.title = 'Modificar Nota';
                return this.tareaService.getTarea(id);
            }
            else {
                this.title = 'Crear Nota';
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _shared_tarea_model__WEBPACK_IMPORTED_MODULE_0__["TareaNew"]());
            }
        })).subscribe(tarea => { this.tarea = tarea; console.log(tarea); }, error => { console.log(error); });
    }
    onSubmit() {
        if (!this.tarea)
            return;
        if (this.tarea instanceof _shared_tarea_model__WEBPACK_IMPORTED_MODULE_0__["TareaNew"])
            this.tareaService.addTarea(this.tarea)
                .subscribe(data => { console.log(data); this.router.navigate(['/tareas']); }, error => console.log(error));
        else
            this.tareaService.updateTarea(this.tarea)
                .subscribe(data => { console.log(data); this.router.navigate(['/tareas']); }, error => console.log(error));
    }
}
EditTareaComponent.ɵfac = function EditTareaComponent_Factory(t) { return new (t || EditTareaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_tarea_service__WEBPACK_IMPORTED_MODULE_6__["TareaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_7__["CargarScriptsService"])); };
EditTareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditTareaComponent, selectors: [["app-edit-tarea"]], decls: 1, vars: 1, consts: [["class", " px-lg-5", 4, "ngIf"], [1, "px-lg-5"], ["role", "toolbar", "aria-label", "Third group", 1, "btn-toolbar", "justify-content-md-around"], ["id", "banner", 1, "nightModeButton", "buttonNight", "rounded-circle"], ["src", "../../assets/img/modo-nocturno-removebg-preview.png", 1, "button-image"], ["class", "nightModeButton buttonNight rounded-circle", 3, "click", 4, "ngIf"], [1, "form-inline"], [1, "form-group", "col-sm-11"], [1, "form-group", "col-sm-1"], [3, "routerLink"], ["src", "./../assets/img/menos-removebg-preview.png", 1, "button-image"], [1, "row"], [1, "col-sm-12"], [1, "page-header"], ["id", "parrafo3"], [3, "ngSubmit"], ["tareaForm", "ngForm"], [1, "form-group"], ["id", "parrafo", "for", "titulo", 1, "control-label"], ["type", "text", "required", "", "name", "titulo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-3"], ["id", "parrafo", "for", "fecha", 1, "control-label"], ["type", "date", "required", "", "name", "fecha", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "parrafo", "for", "estado", 1, "control-label"], ["required", "", "name", "estado", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", "id", "encabezado", 1, "btn-circle-azul-submit", 3, "disabled", "click"], [2, "font-size", "20px"], [1, "page"], [1, "keys", 3, "keydown"], ["data-keyCode", "KeyQ", 1, "key"], ["data-keyCode", "KeyW", 1, "key"], ["data-keyCode", "KeyE", 1, "key"], ["data-keyCode", "KeyR", 1, "key"], ["data-keyCode", "KeyT", 1, "key"], ["data-keyCode", "KeyY", 1, "key"], ["data-keyCode", "KeyU", 1, "key"], ["data-keyCode", "KeyI", 1, "key"], ["data-keyCode", "KeyO", 1, "key"], ["data-keyCode", "KeyP", 1, "key"], ["data-keyCode", "KeyA", 1, "key"], ["data-keyCode", "KeyS", 1, "key"], ["data-keyCode", "KeyD", 1, "key"], ["data-keyCode", "KeyF", 1, "key"], ["data-keyCode", "KeyG", 1, "key"], ["data-keyCode", "KeyH", 1, "key"], ["data-keyCode", "KeyJ", 1, "key"], ["data-keyCode", "KeyK", 1, "key"], ["data-keyCode", "KeyL", 1, "key"], ["data-keyCode", "Key\u00D1", 1, "key"], ["data-keyCode", "KeyZ", 1, "key"], ["data-keyCode", "KeyX", 1, "key"], ["data-keyCode", "KeyC", 1, "key"], ["data-keyCode", "KeyV", 1, "key"], ["data-keyCode", "KeyB", 1, "key"], ["data-keyCode", "KeyN", 1, "key"], ["data-keyCode", "KeyM", 1, "key"], ["data-keyCode", "Key,", 1, "key"], ["data-keyCode", "Key.", 1, "key"], ["data-keyCode", "Key-", 1, "key"], ["data-keyCode", "Digit0", 1, "key"], ["data-keyCode", "Digit1", 1, "key"], ["data-keyCode", "Digit2", 1, "key"], ["data-keyCode", "Digit3", 1, "key"], ["data-keyCode", "Digit4", 1, "key"], ["data-keyCode", "Digit5", 1, "key"], ["data-keyCode", "Digit6", 1, "key"], ["data-keyCode", "Digit7", 1, "key"], ["data-keyCode", "Digit8", 1, "key"], ["data-keyCode", "Digit9", 1, "key"], ["data-keyCode", "Minus", 1, "key"], ["data-keyCode", "equal", 1, "key"], ["data-keyCode", "Backspace", 1, "key"], ["data-keyCode", "Numpad0", 1, "key"], ["data-keyCode", "Numpad1", 1, "key"], ["data-keyCode", "Numpad2", 1, "key"], ["data-keyCode", "Numpad3", 1, "key"], ["data-keyCode", "Numpad4", 1, "key"], ["data-keyCode", "Numpad5", 1, "key"], ["data-keyCode", "Numpad6", 1, "key"], ["data-keyCode", "Numpad7", 1, "key"], ["data-keyCode", "Numpad8", 1, "key"], ["data-keyCode", "Numpad9", 1, "key"], ["data-keyCode", "Numpad-zero", 1, "key"], ["data-keyCode", "Numpad-dot", 1, "key"], ["data-keyCode", "NumpadEnter", 1, "key"], ["data-KeyCode", "NumpadDivide", 1, "Key"], ["data-KeyCode", "NumpadMultiply", 1, "Key"], ["data-KeyCode", "NumpadSubtract", 1, "Key"], ["data-KeyCode", "NumpadAdd", 1, "Key"], ["data-KeyCode", "NumpadDecimal", 1, "Key"], ["data-keyCode", "Semicolon", 1, "key"], ["data-keyCode", "Quote", 1, "key"], ["data-keyCode", "Backslash", 1, "key"], ["data-keyCode", "Tab", 1, "key"], ["data-keyCode", "CapsLock", 1, "key"], ["data-keyCode", "Delete", 1, "key"], ["data-keyCode", "Comma", 1, "Key"], ["data-keyCode", "Period", 1, "Key"], ["data-keyCode", "Slash", 1, "Key"], ["data-keyCode", "ContextMenu", 1, "Key"], ["data-keyCode", "BracketLeft", 1, "Key"], ["data-keyCode", "BracketRight", 1, "Key"], ["data-keyCode", "CapsLock", 1, "Key"], ["data-keyCode", "Enter", 1, "Key"], ["data-keyCode", "ScrollLock", 1, "Key"], ["data-keyCode", "Pause", 1, "Key"], ["data-keyCode", "Insert", 1, "Key"], ["data-keyCode", "Home", 1, "Key"], ["data-keyCode", "PageUp", 1, "Key"], ["data-keyCode", "Delete", 1, "Key"], ["data-keyCode", "End", 1, "Key"], ["data-keyCode", "PageDown", 1, "Key"], ["data-keyCode", "Backquote", 1, "Key"], ["data-KeyCode", "NumLock", 1, "Key"], ["data-KeyCode", "", 1, "Key"], ["data-keyCode", "ShiftLeft", 1, "key"], ["data-keyCode", "ShiftRight", 1, "key"], ["data-keyCode", "ControlLeft", 1, "key"], ["data-keyCode", "MetaLeft", 1, "key"], ["data-keyCode", "AltLeft", 1, "key"], ["data-keyCode", "Space", 1, "key"], ["data-keyCode", "AltRight", 1, "key"], ["data-keyCode", "MetaRight", 1, "key"], ["data-keyCode", "ControlRight", 1, "key"], ["data-KeyCode", "Escape", 1, "Key"], ["data-keyCode", "ArrowUp", 1, "key"], ["data-keyCode", "ArrowLeft", 1, "key"], ["data-keyCode", "ArrowDown", 1, "key"], ["data-keyCode", "ArrowRight", 1, "key"], ["data-KeyCode", "F1", 1, "Key"], ["data-KeyCode", "F2", 1, "Key"], ["data-KeyCode", "F3", 1, "Key"], ["data-KeyCode", "F4", 1, "Key"], ["data-KeyCode", "F5", 1, "Key"], ["data-KeyCode", "F6", 1, "Key"], ["data-KeyCode", "F7", 1, "Key"], ["data-KeyCode", "F8", 1, "Key"], ["data-KeyCode", "F9", 1, "Key"], ["data-KeyCode", "F10", 1, "Key"], ["data-KeyCode", "F11", 1, "Key"], ["data-KeyCode", "F12", 1, "Key"], ["data-keyCode", "KeyQ", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyW", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyE", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyR", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyT", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyY", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyU", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyI", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyO", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyP", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyA", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyS", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyD", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyF", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyG", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyH", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyJ", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyK", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyL", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Key\u00D1", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyZ", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyX", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyC", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyV", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyB", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "KeyM", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Key,", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Key.", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Key-", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Key_", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit1", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit2", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit3", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit4", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit5", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit6", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit7", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit8", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit9", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Digit0", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad0", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad1", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad2", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad3", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad4", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad5", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad6", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad7", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad8", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad9", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad-zero", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Numpad-dot", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "NumpadEnter", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "NumpadDecimal", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "NumpadAdd", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "NumpadDivide", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "NumpadMultiply", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "NumpadSubtract", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Semicolon", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Quote", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Backslash", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Tab", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "CapsLock", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Minus", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "equal", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Backspace", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Comma", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Period", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Slash", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ContextMenu", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "BracketLeft", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "BracketRight", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Enter", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ScrollLock", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Pause", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Insert", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Home", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "PageUp", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Delete", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "End", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "PageDown", "src", "../assets/audio/keytype.mp3"], ["data-keyCOde", "Backquote", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "NumLock", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "Escape", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ShiftLeft", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ShiftRight", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ControlLeft", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "MetaLeft", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "AltLeft", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "Space", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "AltRight", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "MetaRight", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ControlRight", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ArrowUp", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ArrowLeft", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ArrowDown", "src", "../assets/audio/keytype.mp3"], ["data-keyCode", "ArrowRight", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F1", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F2", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F3", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F4", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F5", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F6", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F7", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F8", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F9", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F10", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F11", "src", "../assets/audio/keytype.mp3"], ["data-KeyCode", "F12", "src", "../assets/audio/keytype.mp3"], [1, "nightModeButton", "buttonNight", "rounded-circle", 3, "click"], ["src", "./../assets/img/auricular-removebg-preview.png", 1, "button-image"], [3, "value"]], template: function EditTareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, EditTareaComponent_div_0_Template, 276, 16, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tarea);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_z"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["@charset \"UTF-8\";\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 7px solid #42A948;\n  \n}\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 7px solid #a94442;\n  \n}\n.body[_ngcontent-%COMP%] {\n  background: url('pattern.png');\n}\n.container[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  background: white;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.buttonNight[_ngcontent-%COMP%] {\n  border: none;\n  text-align: center;\n  font-size: 18px;\n  text-decoration: none;\n  background-color: white;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  outline: 0;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.button-image[_ngcontent-%COMP%] {\n  background-image: url('modo-nocturno-removebg-preview.png');\n  background-image: 40px 40px;\n  height: 40px;\n  width: 40px;\n  justify-content: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.button-image[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\nbody.night-mode[_ngcontent-%COMP%] {\n  width: 98.9vw;\n  height: 98.9vh;\n  background: linear-gradient(334deg, #aa36a5, #aa36a5, #aa36a5, #aa36a5, #aa36a5, #9d48b4, #8f56c1, #7e63cc, #517bdb, #058ede, #009dd9, #00aace);\n  background-size: 180% 180%;\n  animation: gradient-animation 7s ease infinite;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes gradient-animation {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes banner {\n  0% {\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes home {\n  0%, 100% {\n    transform: translateX(0%);\n    transform-origin: 50% 50%;\n  }\n  15% {\n    transform: translateX(-30px) rotate(-6deg);\n  }\n  30% {\n    transform: translateX(15px) rotate(6deg);\n  }\n  45% {\n    transform: translateX(-15px) rotate(-3.6deg);\n  }\n  60% {\n    transform: translateX(9px) rotate(2.4deg);\n  }\n  75% {\n    transform: translateX(-6px) rotate(-1.2deg);\n  }\n}\n@keyframes followme {\n  0% {\n    opacity: 0;\n    transform: translateX(-250px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes color_anim {\n  0% {\n    fill: white;\n  }\n  50% {\n    fill: #00aace;\n  }\n  100% {\n    fill: white;\n  }\n}\n@keyframes typewriter {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes blinkingCursor {\n  from {\n    border-right-color: rgba(255, 255, 255, 0.75);\n  }\n  to {\n    border-right-color: transparent;\n  }\n}\n\n#follow[_ngcontent-%COMP%] {\n  animation: followme 3s ease-out 1s 2 normal none;\n}\n#banner[_ngcontent-%COMP%] {\n  animation: banner 6s ease-out 2s infinite normal forwards;\n}\n#home[_ngcontent-%COMP%] {\n  animation: home 3s ease-out 7s normal none;\n}\n.nombreLogo[_ngcontent-%COMP%] {\n  animation: typewriter 7s steps(50) 1s 1 normal both, blinkingCursor 500ms steps(50) normal forwards;\n}\n.container[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\nbody[_ngcontent-%COMP%] {\n  background: #F8F9F9;\n}\n.gradiant[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #7e63cc, #7e63cc, #517bdb, #058ede, #009dd9, #00aace, #aa36a5, #aa36a5, #aa36a5, #aa36a5, #aa36a5);\n  border-radius: 10px;\n}\n.gradiant[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.shadow[_ngcontent-%COMP%] {\n  transition: box-shadow 0.5s ease-in-out;\n}\n.shadow[_ngcontent-%COMP%]:hover {\n  box-shadow: 4px 2px 9px 0px black;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.cursor[_ngcontent-%COMP%] {\n  width: 14em;\n  margin: 0 auto;\n  font-size: 20px;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 0px 0px 0px 0px;\n  border-radius: 50%;\n}\n\n\n.btn-circle-azul-submit[_ngcontent-%COMP%] {\n  height: 42px;\n  width: 42px;\n  font-size: 19px;\n  font-weight: bolder;\n  background-color: #00aaee;\n  color: white;\n  transition: all 0.3s ease-in-out;\n}\n.btn-circle-azul-submit[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxlZGl0LXRhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDhCQUFBO0VBQWdDLFVBQUE7QUFHbEM7QUFBQTtFQUNFLDhCQUFBO0VBQWdDLFFBQUE7QUFJbEM7QUFBRTtFQUFNLDhCQUFBO0FBSVI7QUFGRTtFQUNFLHdFQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQUtKO0FBRkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFLSjtBQURFO0VBQU8sa0JBQUE7QUFLVDtBQUpFO0VBQWMsd0VBQUE7QUFRaEI7QUFORTtFQUNFLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLHFEQUFBO0FBUUo7QUFIQTtFQUNFLHdFQUFBO0FBTUY7QUFIRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsK0lBQUE7RUFDQSwwQkFBQTtFQUNBLDhDQUFBO0FBTUo7QUFGQTtFQUNFO0lBQUksMkJBQUE7RUFNSjtFQUxBO0lBQUssNkJBQUE7RUFRTDtFQVBBO0lBQU0sMkJBQUE7RUFVTjtBQUNGO0FBUkE7RUFDRTtJQUFJLDJCQUFBO0VBV0o7RUFWQTtJQUFLLDZCQUFBO0VBYUw7RUFaQTtJQUFNLDJCQUFBO0VBZU47QUFDRjtBQWJBO0VBQ0M7SUFBSSwyQkFBQTtFQWdCSDtFQWZEO0lBQUssaUNBQUE7RUFrQko7RUFqQkQ7SUFBSyxpQ0FBQTtFQW9CSjtFQW5CRDtJQUFLLGlDQUFBO0VBc0JKO0VBckJEO0lBQUssaUNBQUE7RUF3Qko7RUF2QkQ7SUFBSyxpQ0FBQTtFQTBCSjtFQXpCRDtJQUFNLDJCQUFBO0VBNEJMO0FBQ0Y7QUExQkE7RUFDQztJQUFTLHlCQUFBO0lBQTBCLHlCQUFBO0VBOEJsQztFQTdCRDtJQUFLLDBDQUFBO0VBZ0NKO0VBL0JEO0lBQUssd0NBQUE7RUFrQ0o7RUFqQ0Q7SUFBSyw0Q0FBQTtFQW9DSjtFQW5DRDtJQUFLLHlDQUFBO0VBc0NKO0VBckNEO0lBQUssMkNBQUE7RUF3Q0o7QUFDRjtBQXRDQTtFQUFxQjtJQUFJLFVBQUE7SUFBVyw2QkFBQTtFQTJDbEM7RUEzQ2lFO0lBQU0sVUFBQTtJQUFXLHdCQUFBO0VBK0NsRjtBQUNGO0FBL0NBO0VBQXVCO0lBQUksV0FBQTtFQW1EekI7RUFuRHNDO0lBQUssYUFBQTtFQXNEM0M7RUF0RDBEO0lBQU0sV0FBQTtFQXlEaEU7QUFDRjtBQXpEQTtFQUF1QjtJQUFPLFFBQUE7RUE2RDVCO0VBN0R1QztJQUFLLFdBQUE7RUFnRTVDO0FBQ0Y7QUFoRUE7RUFBMEI7SUFBTyw2Q0FBQTtFQW9FL0I7RUFwRTJFO0lBQUssK0JBQUE7RUF1RWhGO0FBQ0Y7QUF0RUE7O0NBQUE7QUFJSTtFQUFRLGdEQUFBO0FBd0VaO0FBdEVJO0VBQVEseURBQUE7QUEwRVo7QUF4RUk7RUFBTSwwQ0FBQTtBQTRFVjtBQTFFSTtFQUFhLG1HQUFBO0FBOEVqQjtBQTVFSTtFQUFXLG1CQUFBO0FBZ0ZmO0FBOUVJO0VBQUssbUJBQUE7QUFrRlQ7QUFoRkk7RUFBVyxzSUFBQTtFQUFzSSxtQkFBQTtBQXFGcko7QUFuRkk7RUFBaUIsd0VBQUE7QUF1RnJCO0FBckZJO0VBQVEsdUNBQUE7QUF5Rlo7QUF2Rkk7RUFBYyxpQ0FBQTtBQTJGbEI7QUF6Rkk7RUFBRSxxQkFBQTtBQTZGTjtBQTNGSTtFQUFRLFdBQUE7RUFBWSxjQUFBO0VBQWUsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixtQkFBQTtFQUFvQixnQkFBQTtBQW9HOUY7QUFsR0k7RUFBTyxrQkFBQTtFQUFvQix3QkFBQTtFQUEwQixrQkFBQTtBQXdHekQ7QUF0R0EsMERBQUE7QUFJQSwwREFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQXFHRjtBQWpHQTtFQUNFLHdFQUFBO0FBb0dGIiwiZmlsZSI6ImVkaXQtdGFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICM0MkE5NDg7XG4gIC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2E5NDQ0MjtcbiAgLyogcmVkICovXG59XG5cbi5ib2R5IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BhdHRlcm4ucG5nXCIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG59XG5cbi5idXR0b25OaWdodCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4uYnV0dG9uLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9tb2RvLW5vY3R1cm5vLXJlbW92ZWJnLXByZXZpZXcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiA0MHB4IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuXG4uYnV0dG9uLWltYWdlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG5ib2R5Lm5pZ2h0LW1vZGUge1xuICB3aWR0aDogOTguOXZ3O1xuICBoZWlnaHQ6IDk4Ljl2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMzNGRlZywgI2FhMzZhNSwgI2FhMzZhNSwgI2FhMzZhNSwgI2FhMzZhNSwgI2FhMzZhNSwgIzlkNDhiNCwgIzhmNTZjMSwgIzdlNjNjYywgIzUxN2JkYiwgIzA1OGVkZSwgIzAwOWRkOSwgIzAwYWFjZSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTgwJSAxODAlO1xuICBhbmltYXRpb246IGdyYWRpZW50LWFuaW1hdGlvbiA3cyBlYXNlIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBncmFkaWVudC1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhbm5lciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhvbWUge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG4gIDE1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSByb3RhdGUoLTZkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKTtcbiAgfVxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCkgcm90YXRlKC0zLjZkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZvbGxvd21lIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY29sb3JfYW5pbSB7XG4gIDAlIHtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuICA1MCUge1xuICAgIGZpbGw6ICMwMGFhY2U7XG4gIH1cbiAgMTAwJSB7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdHlwZXdyaXRlciB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBibGlua2luZ0N1cnNvciB7XG4gIGZyb20ge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgfVxuICB0byB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuLypcbiAgICBDTEFTRVMgw6kgSURFU1xuKi9cbiNmb2xsb3cge1xuICBhbmltYXRpb246IGZvbGxvd21lIDNzIGVhc2Utb3V0IDFzIDIgbm9ybWFsIG5vbmU7XG59XG5cbiNiYW5uZXIge1xuICBhbmltYXRpb246IGJhbm5lciA2cyBlYXNlLW91dCAycyBpbmZpbml0ZSBub3JtYWwgZm9yd2FyZHM7XG59XG5cbiNob21lIHtcbiAgYW5pbWF0aW9uOiBob21lIDNzIGVhc2Utb3V0IDdzIG5vcm1hbCBub25lO1xufVxuXG4ubm9tYnJlTG9nbyB7XG4gIGFuaW1hdGlvbjogdHlwZXdyaXRlciA3cyBzdGVwcyg1MCkgMXMgMSBub3JtYWwgYm90aCwgYmxpbmtpbmdDdXJzb3IgNTAwbXMgc3RlcHMoNTApIG5vcm1hbCBmb3J3YXJkcztcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjRjhGOUY5O1xufVxuXG4uZ3JhZGlhbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjN2U2M2NjLCAjN2U2M2NjLCAjNTE3YmRiLCAjMDU4ZWRlLCAjMDA5ZGQ5LCAjMDBhYWNlLCAjYWEzNmE1LCAjYWEzNmE1LCAjYWEzNmE1LCAjYWEzNmE1LCAjYWEzNmE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmdyYWRpYW50OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4uc2hhZG93IHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hhZG93OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNHB4IDJweCA5cHggMHB4IGJsYWNrO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3Vyc29yIHtcbiAgd2lkdGg6IDE0ZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IHNvdW5kS2V5cyA9PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PSBzb3VuZEtleXMgPT09PT09PT09PT09PT09PT09ICovXG4uYnRuLWNpcmNsZS1henVsLXN1Ym1pdCB7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDQycHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFlZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bi1jaXJjbGUtYXp1bC1zdWJtaXQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59Il19 */"] });


/***/ }),

/***/ "q5ri":
/*!************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/app.component.ts ***!
  \************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/cargar-scripts.service */ "lMbr");
/* harmony import */ var _component_semantic_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/semantic/nav/nav.component */ "MbIV");
/* harmony import */ var _component_semantic_header_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/semantic/header/home.component */ "I9Ij");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_semantic_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/semantic/footer/footer.component */ "kHPu");
/* harmony import */ var _component_semantic_aside_acordeon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/semantic/aside/acordeon.component */ "Qmoz");








function AppComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hideData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-acordeon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(_CargarScripts) {
        this.title = 'Generador de Notas';
        this.element = false;
        _CargarScripts.Carga(["removeComponent"]);
    }
    showData() {
        return (this.element = true);
    }
    hideData() {
        return (this.element = false);
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__["CargarScriptsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 4, consts: [[1, "container"], ["id", "cartel2", 1, "derecha"], ["class", "btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "btn", 3, "click"], ["src", "./../assets/img/informacion-removebg-preview.png", 1, "button-image"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_button_9_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_button_10_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_11_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.element == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.element == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.element == true);
    } }, directives: [_component_semantic_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _component_semantic_header_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _component_semantic_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _component_semantic_aside_acordeon_component__WEBPACK_IMPORTED_MODULE_7__["AcordeonComponent"]], styles: [".derecha[_ngcontent-%COMP%] {\n  float: right;\n  color: #6a6c6f;\n  margin-right: 35px;\n  font-weight: 400;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: transform 0.25s linear;\n  -webkit-transition: -webkit-transform 0.25s linear;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  cursor: pointer;\n}\n\n.button-image[_ngcontent-%COMP%] {\n  background-image: 40px 40px;\n  height: 40px;\n  width: 40px;\n  justify-content: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.button-image[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Ysa0RBQUE7QUFDRjs7QUFFQTtFQUFHLGlCQUFBO0FBRUg7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUdBO0VBQ0MsaUJBQUE7RUFDRyxlQUFBO0FBQUo7O0FBTUk7RUFFRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEscURBQUE7QUFMTjs7QUFVRTtFQUNFLHdFQUFBO0FBUEoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlcmVjaGF7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGNvbG9yOiAjNmE2YzZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgbGluZWFyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBsaW5lYXI7XHJcbn1cclxuXHJcbmgye3BhZGRpbmctdG9wOiAxNXB4O31cclxuXHJcblxyXG5cclxuLmJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbmJ1dHRvblxyXG57bWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjt9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC5idXR0b24taW1hZ2Uge1xyXG4gICAgICBcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogNDBweCA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCUgO1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgLmJ1dHRvbi1pbWFnZTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "t3kL":
/*!*****************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/app-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_tasks_edit_tarea_edit_tarea_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/tasks/edit-tarea/edit-tarea.component */ "pN1S");
/* harmony import */ var _component_tasks_tarea_lista_tarea_lista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/tasks/tarea-lista/tarea-lista.component */ "tx/y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'tareas', component: _component_tasks_tarea_lista_tarea_lista_component__WEBPACK_IMPORTED_MODULE_2__["TareaListaComponent"] },
    { path: 'tareas/:id/edit', component: _component_tasks_edit_tarea_edit_tarea_component__WEBPACK_IMPORTED_MODULE_1__["EditTareaComponent"] },
    { path: 'tareas/new', component: _component_tasks_edit_tarea_edit_tarea_component__WEBPACK_IMPORTED_MODULE_1__["EditTareaComponent"] },
    { path: '**', redirectTo: '/tareas', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "tx/y":
/*!************************************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/component/tasks/tarea-lista/tarea-lista.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TareaListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaListaComponent", function() { return TareaListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tarea.service */ "uNg/");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cargar-scripts.service */ "lMbr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a1) { return ["/tareas", a1, "edit"]; };
function TareaListaComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u270F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TareaListaComponent_tr_29_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tarea_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteTarea(tarea_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tarea_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tarea_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, tarea_r1.fecha, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tarea_r1.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, tarea_r1._id));
} }
const _c1 = function () { return ["/tareas/new"]; };
class TareaListaComponent {
    constructor(tareaService, _CargarScripts) {
        this.tareaService = tareaService;
        this.title = 'Notas Creadas';
        this.titulo = 'Título';
        this.fecha = 'Fecha';
        this.estado = 'Estado';
        _CargarScripts.Carga(["darkMode"]);
        this.tareas = this.tareaService.getAllTareas();
    }
    ngOnInit() {
    }
    deleteTarea(id) {
        this.tareaService.deleteTarea(id)
            .subscribe(data => { console.log(data); this.tareas = this.tareaService.getAllTareas(); }, error => console.log(error));
    }
}
TareaListaComponent.ɵfac = function TareaListaComponent_Factory(t) { return new (t || TareaListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_tarea_service__WEBPACK_IMPORTED_MODULE_1__["TareaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_2__["CargarScriptsService"])); };
TareaListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TareaListaComponent, selectors: [["app-tarea-lista"]], decls: 32, vars: 9, consts: [[1, "body"], [1, "px-lg-5"], ["role", "toolbar", "aria-label", "Third group", 1, "btn-toolbar", "justify-content-md-around"], ["id", "banner", 1, "nightModeButton", "buttonNight", "rounded-circle"], ["src", "../../assets/img/modo-nocturno-removebg-preview.png", 1, "button-image"], [1, "row"], [1, "col-sm-12"], [1, "form-inline"], [1, "form-group", "col-sm-11"], [1, "form-group", "col-sm-1"], [3, "routerLink"], ["src", "./../assets/img/mas-removebg-preview.png", 1, "button-image"], ["id", "parrafo3"], [1, "table", "table-striped"], ["id", "parrafo", 1, "col-sm-6"], ["id", "parrafo", 1, "col-sm-2"], [1, "col-sm-1"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], [1, "col-sm-2"], ["id", "encabezado-blanco", 1, "btn-circle", "btn-info", 3, "routerLink"], [2, "font-size", "25px"], ["id", "encabezado-blanco", 1, "btn-cancel", "btn-danger", 3, "click"], [2, "font-size", "20px"]], template: function TareaListaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TareaListaComponent_tr_29_Template, 19, 9, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 6, ctx.tareas));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["@charset \"UTF-8\";\n\n@keyframes banner {\n  0% {\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes home {\n  0%, 100% {\n    transform: translateX(0%);\n    transform-origin: 50% 50%;\n  }\n  15% {\n    transform: translateX(-30px) rotate(-6deg);\n  }\n  30% {\n    transform: translateX(15px) rotate(6deg);\n  }\n  45% {\n    transform: translateX(-15px) rotate(-3.6deg);\n  }\n  60% {\n    transform: translateX(9px) rotate(2.4deg);\n  }\n  75% {\n    transform: translateX(-6px) rotate(-1.2deg);\n  }\n}\n@keyframes followme {\n  0% {\n    opacity: 0;\n    transform: translateX(-250px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes color_anim {\n  0% {\n    fill: white;\n  }\n  50% {\n    fill: #00aace;\n  }\n  100% {\n    fill: white;\n  }\n}\n@keyframes typewriter {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes blinkingCursor {\n  from {\n    border-right-color: rgba(255, 255, 255, 0.75);\n  }\n  to {\n    border-right-color: transparent;\n  }\n}\n\n#follow[_ngcontent-%COMP%] {\n  animation: followme 3s ease-out 1s 2 normal none;\n}\n#banner[_ngcontent-%COMP%] {\n  animation: banner 6s ease-out 2s infinite normal forwards;\n}\n#home[_ngcontent-%COMP%] {\n  animation: home 3s ease-out 7s normal none;\n}\n.nombreLogo[_ngcontent-%COMP%] {\n  animation: typewriter 7s steps(50) 1s 1 normal both, blinkingCursor 500ms steps(50) normal forwards;\n}\n.container[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\nbody[_ngcontent-%COMP%] {\n  background: #F8F9F9;\n}\n.gradiant[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #7e63cc, #7e63cc, #517bdb, #058ede, #009dd9, #00aace, #aa36a5, #aa36a5, #aa36a5, #aa36a5, #aa36a5);\n  border-radius: 10px;\n}\n.gradiant[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.shadow[_ngcontent-%COMP%] {\n  transition: box-shadow 0.5s ease-in-out;\n}\n.shadow[_ngcontent-%COMP%]:hover {\n  box-shadow: 4px 2px 9px 0px black;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\na[_ngcontent-%COMP%] {\n  padding: 2px 9px 2px 9px;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 3px 8px 3px 8px;\n  margin: 2px 0px 2px 0 px;\n}\n.cursor[_ngcontent-%COMP%] {\n  width: 14em;\n  margin: 0 auto;\n  font-size: 20px;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.buttonNight[_ngcontent-%COMP%] {\n  border: none;\n  text-align: center;\n  font-size: 18px;\n  text-decoration: none;\n  background-color: white;\n  outline: 0;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 0px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.button-image[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  justify-content: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.button-image[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.button-image2[_ngcontent-%COMP%] {\n  background-image: 40px 40px;\n  height: 40px;\n  width: 40px;\n  justify-content: center;\n  vertical-align: middle;\n}\nbody.night-mode[_ngcontent-%COMP%] {\n  width: 98.9vw;\n  height: 98.9vh;\n  background: linear-gradient(334deg, #aa36a5, #aa36a5, #aa36a5, #aa36a5, #aa36a5, #9d48b4, #8f56c1, #7e63cc, #517bdb, #058ede, #009dd9, #00aace);\n  background-size: 180% 180%;\n  animation: gradient-animation 7s ease infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0YXJlYS1saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDZDs7Q0FBQTtBQUlBO0VBQ0k7SUFBSSwyQkFBQTtFQUNSO0VBQUk7SUFBSyxpQ0FBQTtFQUdUO0VBRkk7SUFBSyxpQ0FBQTtFQUtUO0VBSkk7SUFBSyxpQ0FBQTtFQU9UO0VBTkk7SUFBSyxpQ0FBQTtFQVNUO0VBUkk7SUFBSyxpQ0FBQTtFQVdUO0VBVkk7SUFBTSwyQkFBQTtFQWFWO0FBQ0Y7QUFYRTtFQUNJO0lBQVMseUJBQUE7SUFBMEIseUJBQUE7RUFldkM7RUFkSTtJQUFLLDBDQUFBO0VBaUJUO0VBaEJJO0lBQUssd0NBQUE7RUFtQlQ7RUFsQkk7SUFBSyw0Q0FBQTtFQXFCVDtFQXBCSTtJQUFLLHlDQUFBO0VBdUJUO0VBdEJJO0lBQUssMkNBQUE7RUF5QlQ7QUFDRjtBQXZCRTtFQUFxQjtJQUFJLFVBQUE7SUFBVyw2QkFBQTtFQTRCcEM7RUE1Qm1FO0lBQU0sVUFBQTtJQUFXLHdCQUFBO0VBZ0NwRjtBQUNGO0FBaENFO0VBQXVCO0lBQUksV0FBQTtFQW9DM0I7RUFwQ3dDO0lBQUssYUFBQTtFQXVDN0M7RUF2QzREO0lBQU0sV0FBQTtFQTBDbEU7QUFDRjtBQTFDRTtFQUF1QjtJQUFPLFFBQUE7RUE4QzlCO0VBOUN5QztJQUFLLFdBQUE7RUFpRDlDO0FBQ0Y7QUFqREU7RUFBMEI7SUFBTyw2Q0FBQTtFQXFEakM7RUFyRDZFO0lBQUssK0JBQUE7RUF3RGxGO0FBQ0Y7QUF2REU7O0NBQUE7QUFJRjtFQUFRLGdEQUFBO0FBeURSO0FBeERBO0VBQVEseURBQUE7QUE0RFI7QUEzREE7RUFBTSwwQ0FBQTtBQStETjtBQTlEQTtFQUFhLG1HQUFBO0FBa0ViO0FBakVBO0VBQVcsbUJBQUE7QUFxRVg7QUFwRUE7RUFBSyxtQkFBQTtBQXdFTDtBQXZFQTtFQUFXLHNJQUFBO0VBQXNJLG1CQUFBO0FBNEVqSjtBQTNFQTtFQUFpQix3RUFBQTtBQStFakI7QUE5RUE7RUFBUSx1Q0FBQTtBQWtGUjtBQWpGQTtFQUFjLGlDQUFBO0FBcUZkO0FBcEZBO0VBQUUscUJBQUE7QUF3RkY7QUF2RkE7RUFBRSx3QkFBQTtBQTJGRjtBQXpGQTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7QUE0RkY7QUF4Rk07RUFBUSxXQUFBO0VBQVksY0FBQTtFQUFlLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsbUJBQUE7RUFBb0IsZ0JBQUE7QUFpR2hHO0FBL0ZNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWtHUjtBQTlGTTtFQUFPLGtCQUFBO0VBQW1CLFlBQUE7QUFtR2hDO0FBbEdNO0VBQWMsd0VBQUE7QUFzR3BCO0FBbkdNO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQXFHUjtBQWpHSTtFQUNFLHdFQUFBO0FBb0dOO0FBakdNO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFvR1I7QUFqR007RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLCtJQUFBO0VBQ0EsMEJBQUE7RUFDQSw4Q0FBQTtBQW9HUiIsImZpbGUiOiJ0YXJlYS1saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gICAgQU5JTUFDSU9ORVNcbiovXG5Aa2V5ZnJhbWVzIGJhbm5lciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhvbWUge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG4gIDE1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSByb3RhdGUoLTZkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKTtcbiAgfVxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCkgcm90YXRlKC0zLjZkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZvbGxvd21lIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY29sb3JfYW5pbSB7XG4gIDAlIHtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuICA1MCUge1xuICAgIGZpbGw6ICMwMGFhY2U7XG4gIH1cbiAgMTAwJSB7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdHlwZXdyaXRlciB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBibGlua2luZ0N1cnNvciB7XG4gIGZyb20ge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgfVxuICB0byB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuLypcbiAgICBDTEFTRVMgw6kgSURFU1xuKi9cbiNmb2xsb3cge1xuICBhbmltYXRpb246IGZvbGxvd21lIDNzIGVhc2Utb3V0IDFzIDIgbm9ybWFsIG5vbmU7XG59XG5cbiNiYW5uZXIge1xuICBhbmltYXRpb246IGJhbm5lciA2cyBlYXNlLW91dCAycyBpbmZpbml0ZSBub3JtYWwgZm9yd2FyZHM7XG59XG5cbiNob21lIHtcbiAgYW5pbWF0aW9uOiBob21lIDNzIGVhc2Utb3V0IDdzIG5vcm1hbCBub25lO1xufVxuXG4ubm9tYnJlTG9nbyB7XG4gIGFuaW1hdGlvbjogdHlwZXdyaXRlciA3cyBzdGVwcyg1MCkgMXMgMSBub3JtYWwgYm90aCwgYmxpbmtpbmdDdXJzb3IgNTAwbXMgc3RlcHMoNTApIG5vcm1hbCBmb3J3YXJkcztcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjRjhGOUY5O1xufVxuXG4uZ3JhZGlhbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjN2U2M2NjLCAjN2U2M2NjLCAjNTE3YmRiLCAjMDU4ZWRlLCAjMDA5ZGQ5LCAjMDBhYWNlLCAjYWEzNmE1LCAjYWEzNmE1LCAjYWEzNmE1LCAjYWEzNmE1LCAjYWEzNmE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmdyYWRpYW50OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4uc2hhZG93IHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hhZG93OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNHB4IDJweCA5cHggMHB4IGJsYWNrO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hIHtcbiAgcGFkZGluZzogMnB4IDlweCAycHggOXB4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDNweCA4cHggM3B4IDhweDtcbiAgbWFyZ2luOiAycHggMHB4IDJweCAwIHB4O1xufVxuXG4uY3Vyc29yIHtcbiAgd2lkdGg6IDE0ZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ1dHRvbk5pZ2h0IHtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4uYnV0dG9uLWltYWdlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG59XG5cbi5idXR0b24taW1hZ2U6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5idXR0b24taW1hZ2UyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogNDBweCA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuYm9keS5uaWdodC1tb2RlIHtcbiAgd2lkdGg6IDk4Ljl2dztcbiAgaGVpZ2h0OiA5OC45dmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMzRkZWcsICNhYTM2YTUsICNhYTM2YTUsICNhYTM2YTUsICNhYTM2YTUsICNhYTM2YTUsICM5ZDQ4YjQsICM4ZjU2YzEsICM3ZTYzY2MsICM1MTdiZGIsICMwNThlZGUsICMwMDlkZDksICMwMGFhY2UpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE4MCUgMTgwJTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudC1hbmltYXRpb24gN3MgZWFzZSBpbmZpbml0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ "uNg/":
/*!***********************************************************************************!*\
  !*** ./projects/SingleQuickNotes/src/app/component/tasks/shared/tarea.service.ts ***!
  \***********************************************************************************/
/*! exports provided: TareaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaService", function() { return TareaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class TareaService {
    constructor(http) {
        this.http = http;
    }
    getAllTareas() {
        return this.http.get('http://localhost:3000/api/tareas');
    }
    getTarea(id) {
        return this.http.get('http://localhost:3000/api/tareas/' + id);
    }
    addTarea(tarea) {
        return this.http.post('http://localhost:3000/api/tareas', { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado });
    }
    updateTarea(tarea) {
        return this.http.put('http://localhost:3000/api/tareas/' + tarea._id, { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado });
    }
    deleteTarea(id) {
        return this.http.delete('http://localhost:3000/api/tareas/' + id);
    }
}
TareaService.ɵfac = function TareaService_Factory(t) { return new (t || TareaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TareaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TareaService, factory: TareaService.ɵfac });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map