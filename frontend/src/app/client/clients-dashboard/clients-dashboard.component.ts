import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icGroup from '@iconify/icons-ic/twotone-group';
import icPageView from '@iconify/icons-ic/twotone-pageview';
import icCloudOff from '@iconify/icons-ic/twotone-cloud-off';
import icTimer from '@iconify/icons-ic/twotone-timer';
import { defaultChartOptions } from '../../../@vex/utils/default-chart-options';
import { Order, tableSalesData } from '../../../static-data/table-sales-data';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'vex-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.scss']
})
export class ClientsDashboardComponent implements OnInit {
  clientJob: any;
  totalJobs: number;
  requestTime: number;

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;

  constructor(private cd: ChangeDetectorRef,
              private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.clientJob) {
      this.authService.setClientJob();
    }
    this.clientJob = this.authService.clientJob;
    console.log('____________');
    console.log(this.clientJob);
    // this.totalJobs =  this.clientJob.filter((obj) => obj.statusStr == 'Completed').length;
    this.totalJobs =  this.clientJob.length;
    this.clientJob = this.authService.clientJob;
    this.requestTime = 0;
    console.log('____________+++=');
    console.log(this.clientJob);
    console.log(this.requestTime);
    console.log(this.totalJobs);
    this.clientJob.filter((obj) => {this.requestTime += parseInt(obj.endTime) - parseInt(obj.startTime); }).length;
    this.clientJob = this.authService.clientJob;
    setTimeout(() => {
      const temp = [
        {
          name: 'Subscribers',
          data: [55, 213, 55, 0, 213, 55, 33, 55]
        },
        {
          name: ''
        }
      ];
    }, 3000);
  }

}
