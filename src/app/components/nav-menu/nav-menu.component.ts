import { Component, OnInit } from '@angular/core';
import { LineMachineService } from '../../services/line-machine.service';
import { AsyncPipe } from '@angular/common';

@Component({
    standalone: true,
    imports: [AsyncPipe],
    selector: 'nav-menu',
    templateUrl: 'nav-menu.component.html',
    styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent implements OnInit {
    constructor(protected readonly lineMachineService: LineMachineService) {}

    ngOnInit() {}
}
