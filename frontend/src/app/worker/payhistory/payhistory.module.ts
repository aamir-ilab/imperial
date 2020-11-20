import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayhistoryRoutingModule } from './payhistory-routing.module';
import { PayhistoryComponent } from './payhistory.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartModule } from '../../../@vex/components/chart/chart.module';
import { MatIconModule } from '@angular/material/icon';
import { WidgetTableModule } from '../../../@vex/components/widgets/widget-table/widget-table.module';
import { SecondaryToolbarModule } from '../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatButtonModule } from '@angular/material/button';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { ContainerModule } from '../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [PayhistoryComponent],
  imports: [
    CommonModule,
    PayhistoryRoutingModule,
    FlexLayoutModule,
    ChartModule,
    MatIconModule,
    IconModule,
    WidgetTableModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    MatButtonModule,
    PageLayoutModule,
    ContainerModule
  ]
})
export class PayhistoryModule {
}
