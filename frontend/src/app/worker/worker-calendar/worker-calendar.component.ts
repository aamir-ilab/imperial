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
  selector: 'vex-worker-calendar',
  templateUrl: './worker-calendar.component.html',
  styleUrls: ['./worker-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkerCalendarComponent {

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
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.primary,
  //     allDay: true
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.red,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];
  activeDayIsOpen = true;

  constructor(private dialog: MatDialog,
              private snackbar: MatSnackBar,
              private router: Router,
              private authService: AuthService) {
                this.getEventData();
              }
  getEventData(){
    this.authService.getAllJobsSync().subscribe((res) => {
      console.log('res');
      console.log(res);
      this.events = [];
      res.forEach((ele) => {
        let col: any;
        if (ele.statusStr === 'In Progress') {
          col = colors.blue;
        }
        else if (ele.statusStr === 'Completed') {
          col = colors.green;
 }
        else if (ele.statusStr === 'Submitted') {
          col = colors.yellow;
 }
        if (ele.statusStr !== 'Pending') {
          this.events.push({
            start: startOfDay(new Date(ele.shiftDate)),
            title: ele.department + ' ( client: ' + ele.client + ')',
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
      console.log('event');
      console.log(this.events);
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

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(event);
    // if(action == 'Clicked')
    // this.router.navigate(['/admin/jobs/scrumboard']);
    const dialogRef = this.dialog.open(CalendarEditComponent, {
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result) {
        // event = result;
        // this.snackbar.open('Updated Event: ' + event.title);
        this.refresh.next();
      // }
    });
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
