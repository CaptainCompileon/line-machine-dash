import { Component, OnInit } from '@angular/core';
import { LineMachineService } from '../../services/line-machine.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MachineStatusDirective } from '../../directives/machine-status.directive';

@Component({
    standalone: true,
    imports: [AsyncPipe, DatePipe, MachineStatusDirective],
    selector: 'nav-menu',
    templateUrl: 'nav-menu.component.html',
    styleUrl: './nav-menu.component.scss',
    providers: [MachineStatusDirective],
})
export class NavMenuComponent implements OnInit {
    protected currentDateTime!: Date;
    protected readonly userName: string = 'John Doe'; // Replace with actual user name

    constructor(protected readonly lineMachineService: LineMachineService) {}

    ngOnInit(): void {
        this.updateDateTime();
        setInterval(() => this.updateDateTime(), 1000);
    }

    updateDateTime() {
        this.currentDateTime = new Date();
    }
}
