import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditClientComponent } from './edit-client.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: EditClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditClientRoutingModule {
}

