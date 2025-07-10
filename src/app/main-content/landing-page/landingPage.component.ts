import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
        <section>
            <app-navbar></app-navbar>
            <h1>SAKURA RAMEN</h1>
            <h2>THE BEST RAMEN IN TOWN</h2>
        </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {

}