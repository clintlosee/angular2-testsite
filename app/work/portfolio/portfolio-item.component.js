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
var PortfolioItemComponent = (function () {
    function PortfolioItemComponent() {
    }
    PortfolioItemComponent.prototype.ngOnInit = function () {
        jQuery(document).ready(function () {
            jQuery('a[data-gal]').each(function () {
                jQuery(this).attr('rel', jQuery(this).data('gal'));
            });
            jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({ animationSpeed: 'slow', theme: 'light_square', slideshow: false, overlay_gallery: false, social_tools: false, deeplinking: false });
        });
        var $container = jQuery('.portfolio'), $items = $container.find('.portfolio-item'), portfolioLayout = 'fitRows';
        if ($container.hasClass('portfolio-centered')) {
            portfolioLayout = 'masonry';
        }
        $container.isotope({
            filter: '*',
            animationEngine: 'best-available',
            layoutMode: portfolioLayout,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            },
            masonry: {}
        }, refreshWaypoints());
        function refreshWaypoints() {
            setTimeout(function () {
            }, 1000);
        }
        jQuery('nav.portfolio-filter ul a').on('click', function () {
            var selector = jQuery(this).attr('data-filter');
            $container.isotope({ filter: selector }, refreshWaypoints());
            jQuery('nav.portfolio-filter ul a').removeClass('active');
            jQuery(this).addClass('active');
            return false;
        });
        function getColumnNumber() {
            var winWidth = jQuery(window).width(), columnNumber = 1;
            if (winWidth > 1200) {
                columnNumber = 5;
            }
            else if (winWidth > 950) {
                columnNumber = 4;
            }
            else if (winWidth > 600) {
                columnNumber = 3;
            }
            else if (winWidth > 400) {
                columnNumber = 2;
            }
            else if (winWidth > 250) {
                columnNumber = 1;
            }
            return columnNumber;
        }
        function setColumns() {
            var winWidth = jQuery(window).width(), columnNumber = getColumnNumber(), itemWidth = Math.floor(winWidth / columnNumber);
            $container.find('.portfolio-item').each(function () {
                jQuery(this).css({
                    width: itemWidth + 'px'
                });
            });
        }
        function setPortfolio() {
            setColumns();
            $container.isotope('reLayout');
        }
        $container.imagesLoaded(function () {
            setPortfolio();
        });
        jQuery(window).on('resize', function () {
            setPortfolio();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PortfolioItemComponent.prototype, "imgUrl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PortfolioItemComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PortfolioItemComponent.prototype, "portfolioClass", void 0);
    PortfolioItemComponent = __decorate([
        core_1.Component({
            selector: 'portfolio-item',
            templateUrl: 'app/work/portfolio/portfolio-item.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioItemComponent);
    return PortfolioItemComponent;
}());
exports.PortfolioItemComponent = PortfolioItemComponent;
//# sourceMappingURL=portfolio-item.component.js.map