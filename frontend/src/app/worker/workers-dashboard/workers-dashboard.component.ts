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
import moment from 'moment';
import icReceipt from '@iconify/icons-ic/twotone-receipt';

@Component({
  selector: 'vex-workers-dashboard',
  templateUrl: './workers-dashboard.component.html',
  styleUrls: ['./workers-dashboard.component.scss']
})
export class WorkersDashboardComponent implements OnInit {
  clientJob: any;
  totalJobs = 0;
  requestTime = 0;
  reviewTimesheets = 0;

  completedShifts:number;
  totalHours:number;
  tableData = [];
  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;
  icReceipt = icReceipt;
  constructor(private cd: ChangeDetectorRef,
              private authService: AuthService) { }

  ngOnInit() {
    if(!this.authService.workerJobInfo)
      this.authService.setCurrentWorkerJob();
      this.tableData = this.authService.workerJobInfo;
    console.log('workerJobInfo',this.authService.workerJobInfo)
      this.completedShifts = this.tableData.filter((obj) => obj.statusStr == 'Completed').length;
      this.totalHours = 0;
      console.log('----------------------')
      console.log(this.completedShifts)
      console.log(this.totalHours);
      this.tableData.filter((obj) => {if(obj.statusStr == 'Completed' || obj.statusStr == 'Timesheet Submitted') this.totalHours += parseInt(obj.endTime) - parseInt(obj.startTime);
    })
      this.totalHours = this.tableData.filter((obj) => obj.statusStr == 'Completed').length;

  }

}
