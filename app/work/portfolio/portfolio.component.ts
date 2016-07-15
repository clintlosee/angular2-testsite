import { Component } from '@angular/core';

import { PortfolioItemComponent } from './portfolio-item.component';

@Component({
    selector: 'portfolio',
    template: `
        <!-- portfolio -->
        <div class="portfolio-centered mt">
            <div class="recentitems portfolio">

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_09.jpg"
                    title="A Graphic Design Item"
                    portfolioClass="graphic-design">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_02.jpg"
                    title="A Web Design Item"
                    portfolioClass="web-design">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_03.jpg"
                    title="A Graphic Design Item"
                    portfolioClass="graphic-design">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_04.jpg"
                    title="A Graphic Design Item"
                    portfolioClass="graphic-design">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_05.jpg"
                    title="A Book Design Item"
                    portfolioClass="books">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_06.jpg"
                    title="A Graphic Design Item"
                    portfolioClass="graphic-design">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_07.jpg"
                    title="A Web Design Item"
                    portfolioClass="web-design">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_08.jpg"
                    title="A Graphic Design Item"
                    portfolioClass="graphic-design">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_01.jpg"
                    title="A Graphic Design Item"
                    portfolioClass="graphic-design">
                </portfolio-item>

                <portfolio-item
                    imgUrl="assets/img/portfolio/portfolio_10.jpg"
                    title="A Book Design Item"
                    portfolioClass="books">
                </portfolio-item>

            </div><!-- portfolio -->
        </div><!-- portfolio container -->
    `,
    directives: [PortfolioItemComponent]
})

export class PortfolioComponent {}