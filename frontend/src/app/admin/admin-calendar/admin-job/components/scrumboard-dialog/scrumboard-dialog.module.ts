import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumboardDialogComponent } from './scrumboard-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RelativeDateTimeModule } from '../../../../../../@vex/pipes/relative-date-time/relative-date-time.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [ScrumboardDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    IconModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    RelativeDateTimeModule,
    MatCheckboxModule,
    NgxMaterialTimepickerModule
  ],
  exports: [ScrumboardDialogComponent],
  entryComponents: [ScrumboardDialogComponent]
})
export class ScrumboardDialogModule {
}
