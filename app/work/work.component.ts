import { Component } from '@angular/core';

import { WorkIntroComponent } from './work-intro.component';
import { ClientsComponent } from '../clients/clients.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
    selector: 'work',
    template: `
        <div id="g">
            <work-intro></work-intro>
            <portfolio></portfolio>
            <clients></clients>
        </div><!--/.G-->
    `,
    directives: [WorkIntroComponent, ClientsComponent, PortfolioComponent]
})

export class WorkComponent {}