import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatMenuModule, MatInputModule, MatFormFieldModule],
    exports: [MatButtonModule, MatIconModule, MatMenuModule, MatInputModule, MatFormFieldModule]
})
export class MaterialModule {}