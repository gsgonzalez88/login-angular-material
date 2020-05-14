import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule, 
        MatInputModule, 
        MatFormFieldModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatMenuModule, 
        MatInputModule, 
        MatFormFieldModule,
        MatDialogModule
    ]
})
export class MaterialModule {}