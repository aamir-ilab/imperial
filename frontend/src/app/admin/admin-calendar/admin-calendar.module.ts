import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCalendarRoutingModule } from './admin-calendar-routing.module';
import { AdminCalendarComponent } from './admin-calendar.component';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarEditComponent } from './calendar-edit/calendar-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollbarModule } from '../../../@vex/components/scrollbar/scrollbar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { MatNativeDateModule } from '@angular/material/core';
import { IconModule } from '@visurel/iconify-angular';
import { ContainerModule } from '../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [AdminCalendarComponent, CalendarEditComponent],
  imports: [
    CommonModule,
    AdminCalendarRoutingModule,
    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ScrollbarModule,
    MatSnackBarModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    PageLayoutModule,
    MatNativeDateModule,
    IconModule,
    ContainerModule
  ],
  entryComponents: [CalendarEditComponent]
})
export class AdminCalendarModule {
}
