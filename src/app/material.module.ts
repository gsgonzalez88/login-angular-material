import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatMenuModule],
    exports: [MatButtonModule, MatIconModule, MatMenuModule]
})
export class MaterialModule {}