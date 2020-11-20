import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { client } from './interfaces/client.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { aioTableData1,aioTableData, aioTableLabels,aioTableLabelsPayroll } from '../../../static-data/aio-table-data';
import { ClientCreateUpdateComponent } from './client-create-update/client-create-update.component';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { Client } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

import roundImportExport from '@iconify/icons-ic/round-import-export';
import { Payroll } from 'src/app/models/payroll.model';

@UntilDestroy()
@Component({
  selector: 'vex-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss'],
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
export class PayrollComponent implements OnInit, AfterViewInit {

  layoutCtrl = new FormControl('boxed');
  roundImportExport = roundImportExport;
  lines = []; //for headings
  linesR = []; // for rows
  loading = false;
  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Payroll[]> = new ReplaySubject<Payroll[]>(1);
  data$: Observable<Payroll[]> = this.subject$.asObservable();
  clients: Payroll[];

  @Input()
  columns: TableColumn<Payroll>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    // { label: 'Image', property: 'profilePhoto', type: 'image', visible: true },
    { label: 'Log ID', property: 'logID', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Timestamp', property: 'timestampStr', type: 'text', visible: true },
    { label: 'User', property: 'name', type: 'text', visible: true },
    { label: 'Type', property: 'type', type: 'text', visible: true },
    { label: 'Period', property: 'period', type: 'text', visible: true },
    { label: 'Response', property: 'response', type: 'button', visible: true },
    // { label: 'Last Name', property: 'lastName', type: 'text', visible: false },
    // { label: 'Email', property: 'emailAddress', type: 'text', visible: true },
    // { label: 'Company Name', property: 'companyName', type: 'text', visible: true },
    // { label: 'Company Address', property: 'companyAddress', type: 'text', visible: true },
    // { label: 'Company PhoneNumber', property: 'companyPhoneNumber', type: 'text', visible: true },
    // { label: 'Email Address AccountsTeam', property: 'emailAddressAccountsTeam', type: 'text', visible: false },
    // { label: 'VATNumber', property: 'VATNumber', type: 'text', visible: false },
    // { label: 'CompanyRegNumber', property: 'companyRegNumber', type: 'text', visible: false },
    // { label: 'Position', property: 'position', type: 'text', visible: true },
    // { label: 'Actions', property: 'actions', type: 'button', visible: true },
    // { label: 'ID', property: '_id', type: 'button', visible: false }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Payroll> | null;
  selection = new SelectionModel<Payroll>(true, []);
  searchCtrl = new FormControl();

  labels = aioTableLabels;
  responses = aioTableLabelsPayroll;
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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog,
    private authService:AuthService) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    this.authService.getAllPayroll().subscribe((clients)=>{
      of(clients.map(client =>new Payroll(client))).subscribe(clientes =>{
        console.log('123213123')  
        console.log(clientes)  
        this.subject$.next(clientes)
      });
    })
    // return of(aioTableData1.map(client => new Payroll(client))).subscribe(clients =>{
    //   this.subject$.next(clients);
    // });
  }

  ngOnInit() {
    this.getData();

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter<Payroll[]>(Boolean)
    ).subscribe(clients => {
      this.clients = clients;
      this.dataSource.data = clients;
    });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createClient() {
    this.dialog.open(ClientCreateUpdateComponent).afterClosed().subscribe((client: Payroll) => {
      /**
       * Client is the updated client (if the user pressed Save - otherwise it's null)
       */
      if (client) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.authService.register(client, 'Client').subscribe((res)=>{
          console.log('new created client')
          this.authService.openSnackbar('New Client Added!');
        })
        this.clients.unshift(new Payroll(client));
        this.subject$.next(this.clients);
      }
    });
  }

  updateClient(client: Payroll) {
    this.dialog.open(ClientCreateUpdateComponent, {
      data: client
    }).afterClosed().subscribe(updatedClient => {
      /**
       * Client is the updated client (if the user pressed Save - otherwise it's null)
       */
      if (updatedClient) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        console.log('********')
        console.log(updatedClient)
        this.authService.updateUser(updatedClient).subscribe((res =>{
            this.authService.openSnackbar('Updated Successfully!')
        }))
        const index = this.clients.findIndex((existingClient) => existingClient.id === updatedClient.id);
        this.clients[index] = new Payroll(updatedClient);
        this.subject$.next(this.clients);
      }
    });
  }

  deleteClient(client: Payroll) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
      this.authService.deleteUser(client,'Client').subscribe((res =>{
      this.authService.openSnackbar('Removed Successfully!')
  }))
    this.clients.splice(this.clients.findIndex((existingClient) => existingClient.id === client.id), 1);
    this.selection.deselect(client);
    this.subject$.next(this.clients);
  }

  deleteClients(clients: Payroll[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    clients.forEach(c =>{
      this.authService.deleteUser(c,'Client').subscribe((res) =>{
        console.log(res);
        // this.authService.openSnackbar('Removed Successfully!')
    })});
        // this.authService.openSnackbar('Removed Successfully!')

    clients.forEach(c => this.deleteClient(c));
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

  onLabelChange(change: MatSelectChange, row: Payroll) {
    const index = this.clients.findIndex(c => c === row);
    // this.clients[index].labels = change.value;
    this.subject$.next(this.clients);
  }
  exportToCsv(filename, rows) {
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}




			
  exportTimesheets(){
    this.authService.getExpertTimesheets().subscribe((res)=>{
      console.log(res)
      if(res == 'no Data'){
        this.authService.openSnackbar('No Data')

      }else{
        var mainArr = [['WR_REF','WR_UNITS','WR_TRNCDE','WR_RATE']];

        res.forEach(element => {
          mainArr.push(element.workerID, element.wrUnits, element.trncde, element.wrRate)
        });
          // ['Employee Code','Gross Pay','Pay Description on line 1 (Fixed number)','Pay Rate (Fixed number)'],	
        if(res.length > 0)
        {
          this.authService.openSnackbar('Successfully Expert Timesheet')
          this.exportToCsv('import.csv',mainArr)
        }else{
          this.authService.openSnackbar('No Data')
        }
      }
  
  
    })
  }
  importPayroll(){

  }
  generateWorkerID(){
    this.authService.getGenerateWorkerID().subscribe((res)=>{
      console.log('res')
      console.log(res)
      if(res.fullname){
        this.authService.openSnackbar('Alrady Gnerated');

      }else{
          if(res.length  == 0){
          this.authService.openSnackbar('No Data')
        }else{
          // this.getData();
          of(res.map(client =>new Payroll(client))).subscribe(clientes =>{
            console.log('123213123')  
            console.log(clientes)  
            this.subject$.next(clientes)
          });
          this.authService.openSnackbar('Gnerated Successfully')
        }
      }
      
    },(err)=>{
      this.authService.openSnackbar('Error')
    })
  }

  changeListener(files: FileList){
    console.log(files);
    this.loading = true;
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         //File reader method
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          allTextLines = csv.split(/\r|\n|\r/);
         
         //Table Headings
          let headers = allTextLines[0].split(';');
          let data = headers;
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          //Pusd headings to array variable
          this.lines.push(tarr);
          
         
          // Table Rows
          let tarrR = [];
          
          let arrl = allTextLines.length;
          let rows = [];
          for(let i = 1; i < arrl; i++){
          rows.push(allTextLines[i].split(';'));
         
          }
          
          for (let j = 0; j < arrl; j++) {
      
              tarrR.push(rows[j]);
              
          }
         //Push rows to array variable
          this.linesR.push(tarrR);
          console.log('tarrR' +tarrR);
          console.log('lines' +this.lines);
         console.log('linesR' +this.linesR);  
         this.authService.getImportPayroll(tarrR).subscribe((res)=>{
            this.loading = false;
            if(res.fullname){
              this.authService.openSnackbar('Alrady Gnerated');
            }else{
                if(res.length  == 0){
                this.authService.openSnackbar('No Data')
              }else{
                // this.getData();
                of(res.map(client =>new Payroll(client))).subscribe(clientes =>{
                  console.log('123213123')  
                  console.log(clientes)  
                  this.subject$.next(clientes)
                });
                this.authService.openSnackbar('Have done')
              }
            }
            console.log('exprot return value')
                  console.log(tarrR)
         },(err)=>{
          this.loading = false;
          console.log('exprot return value')
              console.log(tarrR)
         })
     }
    
    }
  }

}
