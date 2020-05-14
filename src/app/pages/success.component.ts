import { Component } from '@angular/core';

@Component({
        selector: 'app-success',
        template: `<h1 mat-dialog-title> you are now logged </h1>
                    <mat-dialog-actions>
                    <button mat-button [mat-dialog-close]="true">ok</button>
                    </mat-dialog-actions>
                    `
})

export class SuccessComponent {
    constructor(){}
}