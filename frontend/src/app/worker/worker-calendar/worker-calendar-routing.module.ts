import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { WorkerCalendarComponent } from './worker-calendar.component';


const routes: VexRoutes = [
  {
    path: '',
    component: WorkerCalendarComponent,
    data: {
      toolbarShadowEnabled: true,
      scrollDisabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerCalendarRoutingModule {
}
