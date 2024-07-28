import { Component, Input, OnInit } from '@angular/core';
import { MachineStatusDirective } from '../../../directives/machine-status.directive';
import { Machine } from '../../../types/app.types';

@Component({
    standalone: true,
    imports: [MachineStatusDirective],
    selector: 'nav-menu-machine-button',
    templateUrl: './nav-menu-machine-button.component.html',
    styleUrl: './nav-menu-machine-button.component.scss'
})

export class NavMenuMachineButtonComponent implements OnInit {
    @Input({required: true}) machine!: Machine;
    constructor() { }

    ngOnInit() { }
}