import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../../static-data/aio-table-data';
import { CustomerCreateUpdateComponent } from './customer-create-update/customer-create-update.component';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { Customer } from 'src/app/pages/apps/aio-table/interfaces/customer.model';
import { statusTableLabels, statusTableData } from 'src/static-data/status-table-data';
import { Job } from './interfaces/job.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'vex-client-job-table',
  templateUrl: './client-job-table.component.html',
  styleUrls: ['./client-job-table.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class ClientJobTableComponent implements OnInit {

  layoutCtrl = new FormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Job[]> = new ReplaySubject<Job[]>(1);
  data$: Observable<Job[]> = this.subject$.asObservable();
  customers: Job[];

  @Input()
  columns: TableColumn<Job>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Client', property: 'client', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Department', property: 'department', type: 'text', visible: true },
    { label: 'Role', property: 'role', type: 'text', visible: false },
    { label: 'Shift Date', property: 'shiftDateStr', type: 'text', visible: true },
    { label: 'Start Time', property: 'startTime', type: 'text', visible: true },
    { label: 'End Time', property: 'endTime', type: 'text', visible: true },
    { label: 'Total Staff', property:'totalStaff', type:'text', visible:true},
    { label: 'Status', property: 'status', type: 'button', visible: true },
    { label: 'ID', property: '_id', type: 'text', visible: false },
    // { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Job> | null;
  selection = new SelectionModel<Job>(true, []);
  // searchCtrl = new FormControl();

  statuss = statusTableLabels;

  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;
  currentUser;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog,
    private authService:AuthService) {
      if(!this.authService.currenctUser)
       this.authService.setCurrentUser();
      this.currentUser = this.authService.currenctUser;
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  
  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    this.authService.getTypeJobs().subscribe((clients)=>{
      of(clients.map(client =>new Job(client))).subscribe(clientes =>{
        console.log('123213123')  
        console.log(clientes)  
        this.subject$.next(clientes)
      });
    })
    // return of(statusTableData.map(customer => new Job(customer)));
  }

  ngOnInit() {
    if(!this.authService.currenctUser)
    this.authService.setCurrentUser();
    this.currentUser = this.authService.currenctUser;
    this.getData();

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter<Job[]>(Boolean)
    ).subscribe(customers => {
      this.customers = customers;
      this.dataSource.data = customers;
    });

    // this.searchCtrl.valueChanges.pipe(
    //   untilDestroyed(this)
    // ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCustomer() {
    this.dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((customer: Job) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.authService.addJob(customer, this.authService.currenctUser._id).subscribe((res)=>{
          console.log('1')
          this.authService.openSnackbar('New Job Added!');
          var tempJob = new Job(customer);
          var obj = {
            subject : "New job request from " + this.currentUser['firstName'] + ' '+ this.currentUser['lastName'],
            name : this.currentUser['firstName'] + ' '+ this.currentUser['lastName'],
            email: 'fujingforward@gmail.com',
            content1: `${this.currentUser['firstName']} ${this.currentUser['lastName']} has posted a new job on the portal for ${tempJob.shiftDateStr} looking for ${tempJob.total}workers.`,
            content2: `You can review the applications by logging into the Portal.`,
            btn:'LOGIN TO PORTAL',
            btn_link:'http://imperial-recruitment.herokuapp.com/#/login',
            link:''
          };
          this.authService.sendEmail(obj).subscribe((sendemail_res)=>{
              console.log('crate job email')
          })
        })
        customer['']
        this.customers.unshift(new Job(customer));
        this.subject$.next(this.customers);
      }
    });
  }

  updateCustomer(customer: Customer) {
    this.dialog.open(CustomerCreateUpdateComponent, {
      data: customer
    }).afterClosed().subscribe(updatedCustomer => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (updatedCustomer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
        this.customers[index] = new Job(updatedCustomer);
        this.subject$.next(this.customers);
      }
    });
  }

  deleteCustomer(customer: Job) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
    this.selection.deselect(customer);
    this.subject$.next(this.customers);
  }

  deleteCustomers(customers: Job[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    customers.forEach(c => this.deleteCustomer(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Job) {
    // const index = this.customers.findIndex(c => c === row);
    // this.customers[index].status = change.value;
    // this.subject$.next(this.customers);
  }

}
