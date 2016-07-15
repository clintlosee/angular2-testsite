import { Component } from '@angular/core';

import { IntroComponent } from './intro/intro.component';
import { DescriptionComponent } from './description/description.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'my-app',
    template: `
        <intro></intro>
        <description></description>
        <work></work>
        <contact></contact>
        <footer></footer>
    `,
    directives: [IntroComponent, DescriptionComponent, WorkComponent, ContactComponent, FooterComponent]
})

export class AppComponent { }