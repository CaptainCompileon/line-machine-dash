import { Component } from '@angular/core';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NavMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'line-machine-dash';
}
