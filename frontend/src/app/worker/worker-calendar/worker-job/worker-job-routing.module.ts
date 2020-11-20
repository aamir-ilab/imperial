import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkerJobComponent } from './worker-job.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    redirectTo: '1'
  },
  {
    path: ':scrumboardId',
    component: WorkerJobComponent,
    data: {
      scrollDisabled: true,
      containerEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerJobRoutingModule {
}
