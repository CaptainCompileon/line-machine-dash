import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MachineStatus } from '../types/app.types';

@Directive({
    selector: '[appMachineStatus]',
    standalone: true,
})
export class MachineStatusDirective implements OnInit {
    @Input() appMachineStatus!: MachineStatus;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngOnInit(): void {
        this.updateStyles();
    }

    private updateStyles(): void {
        const button = this.el.nativeElement;
        const icon = button.querySelector('.status-icon');

        if (!this.appMachineStatus) {
            return;
        }

        switch (this.appMachineStatus) {
            case 'running':
                this.renderer.setStyle(button, 'background-color', '#dcdcdc');
                this.renderer.setStyle(
                    button.querySelector('span'),
                    'color',
                    '#313131',
                );
                if (!icon) {
                    break;
                }
                this.renderer.setStyle(icon, 'color', '#7fa723');
                this.renderer.setProperty(
                    icon,
                    'innerHTML',
                    'settings_backup_restore',
                );
                break;
            case 'warning':
                this.renderer.setStyle(button, 'background-color', '#ff9705');
                this.renderer.setStyle(button, 'color', 'white');
                if (!icon) {
                    break;
                }
                this.renderer.setProperty(icon, 'innerHTML', 'warning');
                break;
            case 'alarm':
                this.renderer.setStyle(button, 'background-color', '#fe3636');
                this.renderer.setStyle(button, 'color', 'white');
                if (!icon) {
                    break;
                }
                this.renderer.setProperty(icon, 'innerHTML', 'error_outline');
                break;
            default:
                break;
        }
    }
}
