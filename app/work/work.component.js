"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var work_intro_component_1 = require('./work-intro.component');
var clients_component_1 = require('../clients/clients.component');
var portfolio_component_1 = require('./portfolio/portfolio.component');
var WorkComponent = (function () {
    function WorkComponent() {
    }
    WorkComponent = __decorate([
        core_1.Component({
            selector: 'work',
            template: "\n        <div id=\"g\">\n            <work-intro></work-intro>\n            <portfolio></portfolio>\n            <clients></clients>\n        </div><!--/.G-->\n    ",
            directives: [work_intro_component_1.WorkIntroComponent, clients_component_1.ClientsComponent, portfolio_component_1.PortfolioComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=work.component.js.map