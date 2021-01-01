import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icGroup from '@iconify/icons-ic/twotone-group';
import icPageView from '@iconify/icons-ic/twotone-pageview';
import icCloudOff from '@iconify/icons-ic/twotone-cloud-off';
import icTimer from '@iconify/icons-ic/twotone-timer';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import { Job } from 'src/app/client/clients-dashboard/client-job-table/interfaces/job.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss']
})
export class DashboardAnalyticsComponent implements OnInit {

  tableColumns: TableColumn<Job>[] = [
    {
      label: 'Role',
      property: 'role',
      type: 'text'
    },
    {
      label: 'Client',
      property: 'clientId.companyName',
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

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;
  completedShifts:number;
  totalHours:number;
  constructor(private cd: ChangeDetectorRef,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
    if(!this.authService.workerJobInfo)
      this.authService.setCurrentWorkerJob();
      this.tableData = this.authService.workerJobInfo;
    console.log('workerJobInfo',this.tableData)
      this.completedShifts = this.tableData.filter((obj) => obj.statusStr == 'Completed').length;
      this.totalHours = 0;
      console.log('----------------------')
      console.log(this.completedShifts)
      console.log(this.totalHours);
      console.log(this.tableData)
      this.tableData.filter((obj) => {if(obj.statusStr == 'Completed' || obj.statusStr == 'Timesheet Submitted') this.totalHours += parseInt(obj.endTime) - parseInt(obj.startTime); })
      // this.totalHours = this.tableData.filter((obj) => obj.statusStr == 'Completed').length;

  }

}
