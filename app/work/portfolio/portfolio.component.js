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
var portfolio_item_component_1 = require('./portfolio-item.component');
var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'portfolio',
            template: "\n        <!-- portfolio -->\n        <div class=\"portfolio-centered mt\">\n            <div class=\"recentitems portfolio\">\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_09.jpg\"\n                    title=\"A Graphic Design Item\"\n                    portfolioClass=\"graphic-design\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_02.jpg\"\n                    title=\"A Web Design Item\"\n                    portfolioClass=\"web-design\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_03.jpg\"\n                    title=\"A Graphic Design Item\"\n                    portfolioClass=\"graphic-design\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_04.jpg\"\n                    title=\"A Graphic Design Item\"\n                    portfolioClass=\"graphic-design\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_05.jpg\"\n                    title=\"A Book Design Item\"\n                    portfolioClass=\"books\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_06.jpg\"\n                    title=\"A Graphic Design Item\"\n                    portfolioClass=\"graphic-design\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_07.jpg\"\n                    title=\"A Web Design Item\"\n                    portfolioClass=\"web-design\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_08.jpg\"\n                    title=\"A Graphic Design Item\"\n                    portfolioClass=\"graphic-design\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_01.jpg\"\n                    title=\"A Graphic Design Item\"\n                    portfolioClass=\"graphic-design\">\n                </portfolio-item>\n\n                <portfolio-item\n                    imgUrl=\"assets/img/portfolio/portfolio_10.jpg\"\n                    title=\"A Book Design Item\"\n                    portfolioClass=\"books\">\n                </portfolio-item>\n\n            </div><!-- portfolio -->\n        </div><!-- portfolio container -->\n    ",
            directives: [portfolio_item_component_1.PortfolioItemComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map