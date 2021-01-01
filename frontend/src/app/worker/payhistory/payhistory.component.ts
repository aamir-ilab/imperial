import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icGroup from '@iconify/icons-ic/twotone-group';
import icPageView from '@iconify/icons-ic/twotone-pageview';
import icCloudOff from '@iconify/icons-ic/twotone-cloud-off';
import icTimer from '@iconify/icons-ic/twotone-timer';
import { defaultChartOptions } from '../../../@vex/utils/default-chart-options';
import { Order, tableSalesData } from '../../../static-data/table-sales-data';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import { Job } from 'src/app/client/clients-dashboard/client-job-table/interfaces/job.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'vex-payhistory',
  templateUrl: './payhistory.component.html',
  styleUrls: ['./payhistory.component.scss']
})
export class PayhistoryComponent implements OnInit {

  tableColumns: TableColumn<Job>[] = [
    {
      label: 'Role',
      property: 'role',
      type: 'text'
    },
    {
      label: 'Client',
      property: 'client',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Start Time',
      property: 'startTime',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'End Time',
      property: 'endTime',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'Status',
      property: 'statusStr',
      type: 'button',
      cssClasses: ['text-secondary']
    }
  ];
  tableData :any;
  // series: ApexAxisChartSeries = [{
  //   name: 'Subscribers',
  //   data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44]
  // }];

  // userSessionsSeries: ApexAxisChartSeries = [
  //   {
  //     name: 'Users',
  //     data: [10, 50, 26, 50, 38, 60, 50, 25, 61, 80, 40, 60]
  //   },
  //   {
  //     name: 'Sessions',
  //     data: [5, 21, 42, 70, 41, 20, 35, 50, 10, 15, 30, 50]
  //   },
  // ];

  // salesSeries: ApexAxisChartSeries = [{
  //   name: 'Sales',
  //   data: [28, 40, 36, 0, 52, 38, 60, 55, 99, 54, 38, 87]
  // }];

  // pageViewsSeries: ApexAxisChartSeries = [{
  //   name: 'Page Views',
  //   data: [405, 800, 200, 600, 105, 788, 600, 204]
  // }];

  // uniqueUsersSeries: ApexAxisChartSeries = [{
  //   name: 'Unique Users',
  //   data: [356, 806, 600, 754, 432, 854, 555, 1004]
  // }];

  // uniqueUsersOptions = defaultChartOptions({
  //   chart: {
  //     type: 'area',
  //     height: 100
  //   },
  //   colors: ['#ff9800']
  // });

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;
  completedShifts:number;
  totalHours:number;
  constructor(private cd: ChangeDetectorRef,
    private authService:AuthService) { }

  ngOnInit() {
    if(!this.authService.workerJobInfo)
      this.authService.setCurrentWorkerJob();
      this.tableData = this.authService.workerJobInfo;
    console.log(this.tableData)
      this.completedShifts = this.tableData.filter((obj) => obj.statusStr == 'Completed').length;
      this.totalHours = 0;
      console.log('----------------------')
      console.log(this.completedShifts)
      console.log(this.totalHours);
      console.log(this.tableData)
      this.tableData.filter((obj) => {if(obj.statusStr == 'Completed' || obj.statusStr == 'Timesheet Submitted') this.totalHours += parseInt(obj.endTime) - parseInt(obj.startTime); })
      // this.totalHours = this.tableData.filter((obj) => obj.statusStr == 'Completed').length;

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
