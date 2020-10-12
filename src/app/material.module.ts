import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
imports: [
CommonModule,
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatBadgeModule,
MatListModule,
MatGridListModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatRadioModule,
MatCheckboxModule,
MatDatepickerModule,
MatNativeDateModule,
MatTableModule,
MatPaginatorModule,
MatCardModule,
MatExpansionModule
],
exports: [
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatBadgeModule,
MatListModule,
MatGridListModule,
MatInputModule,
MatFormFieldModule,
MatSelectModule,
MatRadioModule,
MatCheckboxModule,
MatDatepickerModule,
MatTableModule,
MatPaginatorModule,
MatCardModule,
MatExpansionModule
],
providers: [
MatDatepickerModule,
]
})
export class AngularMaterialModule { }