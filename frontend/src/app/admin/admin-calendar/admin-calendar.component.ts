import { clientStatusLabels } from './../../../static-data/aio-table-data';
import { Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, endOfDay, endOfMonth, isSameDay, isSameMonth, startOfDay, subDays } from 'date-fns';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarEditComponent } from './calendar-edit/calendar-edit.component';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

const colors: any = {
  blue: {
    primary: '#5c77ff',
    secondary: '#FFFFFF'
  },
  yellow: {
    primary: '#ffc107',
    secondary: '#FDF1BA'
  },
  red: {
    primary: '#f44336',
    secondary: '#FFFFFF'
  },
  green: {
    primary: '#4caf50',
    secondary: '#FFFFFF'
  }
};

export interface MyCalenderEvent extends CalendarEvent {
  startTime?: number;
  endTime?: number;
  department?: string;
  role?: string;
  total?: number;
  fulfilled?: number;
  client?: object;
}

@Component({
  selector: 'vex-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminCalendarComponent {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  icChevronLeft = icChevronLeft;
  icChevronRight = icChevronRight;

  modalData: {
    action: string;
    event: MyCalenderEvent;
  };
  refresh: Subject<any> = new Subject();
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  events: MyCalenderEvent[] ;
  // = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.primary,
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   },
  // ];
  activeDayIsOpen = true;

  constructor(private dialog: MatDialog, private snackbar: MatSnackBar, private router: Router, private authService: AuthService){
    this.getEventData();
  }

  getEventData(){
    this.authService.getAllJobsSync().subscribe((res) => {
      console.log('res', res);
      this.events = [];
      res.forEach((ele) => {
        let col: any;
        console.log('ele', ele);
        if (ele.statusStr === 'In Progress') {
          col = colors.blue;
          console.log('col', ele.statusStr, col);
        }
        else if (ele.statusStr === 'Completed') {
          col = colors.green;
          console.log('col', ele.statusStr, col);
        }
        else if (ele.statusStr === 'Submitted') {
          col = colors.yellow;
          console.log('col', ele.statusStr, col);
        }
        if (ele.statusStr !== 'Pending') {
          this.events.push({
            start: startOfDay(new Date(ele.shiftDate)),
            title: ele.clientId.companyName + ' — ' + ele.department + ' ( ' + ele.total + '/4 assigned).',
            color: col,
            startTime: ele.startTime,
            endTime: ele.endTime,
            department: ele.department,
            role: ele.role,
            total: ele.total,
            fulfilled: ele.fulfilled,
            actions: this.actions,
            client: ele
          });
        }
      });
      console.log('event', this.events);

    });
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0);
      this.viewDate = date;
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: any): void {
    console.log('jobevent', event.client.id);
    this.authService.currentScrumboard = [
      {
      id: event.client.id,
      title: event.client.client,
      children: [
        // { id:1, label:'Unassigned Shifts', children:[] },
        // { id:2, label:'Assigned', children:[] },
        { id: 1, label: 'In Progress', children: [] },
        { id: 2, label: 'Submitted', children: [] },
        { id: 3, label: 'Completed', children: [] },
      ]
    }];
    this.authService.currentJob = event;
    const arrLabel = ['In Progress', 'Submitted', 'Completed'];
    console.log('&&&&');
    console.log(event.client);
    console.log('&&&&');
    arrLabel.forEach((ele, index) => {
      if (ele === event.client.statusStr) {
        this.authService.currentScrumboard[0].children[index].children.push({
          id: event.client.id,
          title: event.client.client,
          client: event.client.client,
          department: event.client.department,
          role: event.client.role,
          shiftDate: event.client.shiftDate,
          startTime: event.client.startTime,
          endTime: event.client.endTime,
          locationShift: event.client.locationShift,
          purchaseOrderNo: event.client.purchaseOrderNo,
          additionalInformation: event.client.additionalInformation,
          statusStr: event.client.statusStr,
          fulfilled: event.client.fulfilled,
          total: event.client.total,
          totalStaff: event.client.totalStaff,
          clientId: event.client.clientId,
          timesheetId: event.client.timesheetId
        });
      }
    });
    this.authService.setCurrentScrumboardLocal(this.authService.currentScrumboard);
    this.router.navigate(['/admin/jobs/scrumboard', event.client.id]);
    // if(action == 'Clicked')
    // this.router.navigate(['/admin/jobs/scrumboard', event.client.id]);
    // const dialogRef = this.dialog.open(CalendarEditComponent, {
    //   data: event
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     event = result;
    //     this.snackbar.open('Updated Event: ' + event.title);
    //     this.refresh.next();
    //   }
    // });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
