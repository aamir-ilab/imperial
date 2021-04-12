import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultRatesComponent } from './default-rates.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: DefaultRatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRatesRoutingModule {
}
