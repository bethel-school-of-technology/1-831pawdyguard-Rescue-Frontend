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
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';



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
MatExpansionModule,
MatDialogModule,
MatTabsModule,
MatSidenavModule,
MatMenuModule,
MatTooltipModule,
MatProgressSpinnerModule

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
MatExpansionModule,
MatDialogModule,
MatTabsModule,
MatSidenavModule,
MatMenuModule,
MatTooltipModule,
MatProgressSpinner

],
providers: [MatDatepickerModule]
})

export class AngularMaterialModule { }
