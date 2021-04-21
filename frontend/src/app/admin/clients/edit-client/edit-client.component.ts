import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { filter, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';
import { Observable, of, ReplaySubject } from 'rxjs';
import { CustomRates } from 'src/app/models/customRates.model';
import { SelectionModel } from '@angular/cdk/collections';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { CustomerCreateUpdateComponent } from '../../../client/settings/subaccounts/customer-create-update/customer-create-update.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';

@UntilDestroy()
@Component({
  selector: 'vex-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
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
export class EditClientComponent implements OnInit {
  @ViewChild('cropper') private cropper: ElementRef;
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
  ///////////// Custom Rates Table /////////////
  @Input()
  columns: TableColumn<any>[] = [
    { label: 'Department', property: 'department', type: 'image', visible: false },
    { label: 'Role', property: 'role', type: 'text', visible: true},
    { label: 'payrateU25', property: 'payrateU25', type: 'text', visible: true },
    { label: 'chargerateU25', property: 'chargerateU25', type: 'text', visible: true },
    { label: 'payrateO25', property: 'payrateO25', type: 'text', visible: true },
    { label: 'chargerateO25', property: 'chargerateO25', type: 'text', visible: true },
    { label: 'ID', property: '_id', type: 'text', visible: false }
  ];
  dataSource: MatTableDataSource<CustomRates> | null;
  ///////////// Custom Rates Table /////////////

  ///////////// Sub Accounts Table /////////////
  @Input()
  subAccountsColumns: TableColumn<Client>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: false },
    { label: 'Name', property: 'name', type: 'text', visible: false, cssClasses: ['font-medium'] },
    { label: 'First Name', property: 'firstName', type: 'text', visible: true },
    { label: 'Last Name', property: 'lastName', type: 'text', visible: true },
    { label: 'Email', property: 'emailAddress', type: 'text', visible: true },
    { label: 'Phone Number', property: 'phoneNumber', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Department', property: 'department', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Account Type', property: 'clientType', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Status', property: 'clientStatus', type: 'button', visible: false },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  subAccountsDataSource: MatTableDataSource<Client> | null;
  selection = new SelectionModel<Client>(true, []);
  searchCtrl = new FormControl();

  subject$: ReplaySubject<Client[]> = new ReplaySubject<Client[]>(1);
  data$: Observable<Client[]> = this.subject$.asObservable();
  customers: Client[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ///////////// Sub Accounts Table /////////////

  editCustomer:Client;
  defaults: any;
  clientForm: FormGroup;
  customRates: CustomRates[];
  filterCustomRates: CustomRates[];
  eitedCustomRates: CustomRates[] = [];
  selectedTabIndex = 0;
  innerSelectedTabIndex = 0;
  fileName: string = "";
  croppedImage: any = 'assets/img/demo/download.png';
  picRemove = false;
  imageChangedEvent: any = '';
  file : File;
  isUploading: boolean = false;
  btnTxt : string = "";
  icAdd = icAdd;
  icEdit = icEdit;
  icDelete = icDelete;
  icMoreHoriz = icMoreHoriz;

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private storage:AngularFireStorage,
    private router:Router,
    private dialog: MatDialog,
  ) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getData() {
    this.authService.getTypeSubUsers(this.defaults._id).subscribe((clients)=>{
      of(clients.map(client =>new Client(client))).subscribe(clientes =>{
        console.log('SubUsers',clientes)
        this.subject$.next(clientes)
      });
    })
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.editCustomer = JSON.parse(localStorage.getItem('editCustomer'));
    this.defaults = this.editCustomer as Client;
    this.clientForm = this.fb.group({
      _id:[this.defaults._id],
      createdDate:[this.defaults.createdDate ||  new Date()],
      emailAddress:[this.defaults.emailAddress || ''],
      profilePhoto:[this.defaults.profilePhoto || ''],
      Password:[this.defaults.Password || ''],
      phoneNumber:[this.defaults.phoneNumber || ''],
      companyName:[this.defaults.companyName || ''],
      companyAddress:[this.defaults.companyAddress || ''],
      companyPhoneNumber:[this.defaults.companyPhoneNumber || ''],
      emailAddressAccountsTeam:[this.defaults.emailAddressAccountsTeam || ''],
      VATNumber:[this.defaults.VATNumber || ''], //optional
      companyRegNumber:[this.defaults.companyRegNumber || ''],
      position:[this.defaults.position || ''],
      firstName:[this.defaults.firstName || ''],
      lastName:[this.defaults.lastName || ''],
      companyLogo:[this.defaults.companyLogo || 'assets/img/demo/download.png'],
      clientType:[this.defaults.clientType || ''],
      parentId:[this.defaults.parentId || ''],
      clientStatus:[this.defaults.clientStatus || ''],
      companyUrl:[this.defaults.companyUrl || ''],
      tradingName:[this.defaults.tradingName || ''],
      addressLine1: [this.defaults.addressLine1 || ''],
      addressLine2: [this.defaults.addressLine2 || ''],
      city: [this.defaults.city || ''],
      postcode: [this.defaults.postcode || ''],
    });
    console.log('companyLogo', this.defaults.companyLogo)
    this.btnTxt = this.defaults.companyLogo == 'assets/img/demo/download.png' ?  'Choose a file...' : 'Edit';
    this.picRemove = this.defaults.companyLogo == 'assets/img/demo/download.png' ?  false : true;
    this.croppedImage = this.defaults.companyLogo;

    this.dataSource = new MatTableDataSource();
    this.authService.getCustomRates(this.defaults._id).subscribe((rates) => {
      of(rates.map(rates => new CustomRates(rates))).subscribe(rates => {
        this.customRates = rates;
        this.filterCustomRates = this.customRates.filter(x => x.department === 'Housekeeping');
        this.dataSource.data = this.filterCustomRates;
      });
    });

    this.getData();


    this.subAccountsDataSource = new MatTableDataSource();

    this.data$.pipe(
      filter<Client[]>(Boolean)
    ).subscribe(customers => {
      this.customers = customers;
      this.subAccountsDataSource.data = customers;
    });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  save(){
    const customRates = this.eitedCustomRates;
    console.log('customRates', customRates)
    this.authService.setCustomRates(customRates).subscribe((res =>{
      if(res){
        this.authService.openSnackbar('Updated Successfully!')
      }
    }));
  }

  editCustomRates(property: string, $event, element){
    console.log('editCustomRates ', property, $event.target.textContent, element)
    element[property] = parseFloat($event.target.textContent);
    const index = this.eitedCustomRates.findIndex((e) => e._id === element._id);
    if (index === -1) {
      this.eitedCustomRates.push(element);
    } else {
      this.eitedCustomRates[index] = element;
    }
  }

  onTabChanged(event){
    console.log('event', event)
    if(event.index === 0){
      this.filterCustomRates = this.customRates.filter(x => x.department === 'Housekeeping');
      this.dataSource.data = this.filterCustomRates;
    }
    else if(event.index === 1){
      this.filterCustomRates = this.customRates.filter(x => x.department === 'Food and Beverage');
      this.dataSource.data = this.filterCustomRates;
    }
    else {
      this.filterCustomRates = this.customRates.filter(x => x.department === 'Back of House');
      this.dataSource.data = this.filterCustomRates;
    }
  }

  submit() {
    const client = this.clientForm.value;
    console.log('customer', client)
    client._id = this.defaults._id;
    this.authService.updateUser(client).subscribe((res => {
      if(res){
        this.authService.openSnackbar('Updated Successfully!')
        if(localStorage.getItem('loggedIn') === 'Admin')
          this.router.navigate(['/admin/clients']);
        else
          this.router.navigate(['/team/clients']);
      }
      else{
        console.log('res', res)
      }
    }));
  }

  cancelBtn(){
    if(localStorage.getItem('loggedIn') === 'Admin')
      this.router.navigate(['/admin/clients']);
    else
      this.router.navigate(['/team/clients']);
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log('imageChangedEvent', this.imageChangedEvent)
    this.file = event.target.files[0]
    if (this.file) {
      this.fileName = this.file.name;
    }
    this.isUploading = true;
  }
  onUpload() {
    console.log('--upload function called--', this.cropper)
    this.isUploading = true;
    this.removePicture('edit');
    var fileName = this.file.name.split('.').slice(0,-1).join('.') + '_' + new Date().getTime();
    var filePath = `Profile/${fileName}`;
    const fileRef = this.storage.ref(filePath);
   let File = base64ToFile(this.croppedImage);
    this.storage.upload(filePath, File).snapshotChanges().pipe(finalize(()=>{
      console.log('upload-b');
      fileRef.getDownloadURL().subscribe((url)=>{
        console.log('upload-c', url);
        this.clientForm.controls.companyLogo.setValue(url);
        this.authService.openSnackbar('Image Uploaded Successfully');
        this.isUploading = true;
      })
    })).subscribe();
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log('imageCropped', event)
    this.croppedImage = event.base64;
  }
  removePicture(type){
    let picUrl = this.defaults.companyLogo;
    if(type === 'remove'){
      if(picUrl != 'assets/img/demo/download.png'){
        console.log('Remove profile picture');
        this.croppedImage = 'assets/img/demo/download.png';
        this.clientForm.controls.companyLogo.setValue(this.croppedImage);
        return this.storage.storage.refFromURL(picUrl).delete();
      }
    }
    else{
      if(picUrl != 'assets/img/demo/download.png'){
        return this.storage.storage.refFromURL(picUrl).delete();
      }
    }

  }

  ///////////// Sub Accounts Functions///////////

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  get visibleAccountsColumns() {
    return this.subAccountsColumns.filter(column => column.visible).map(column => column.property);
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  ngAfterViewInit() {
    this.subAccountsDataSource.paginator = this.paginator;
    this.subAccountsDataSource.sort = this.sort;
  }

  createCustomer() {
    this.dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((customer: Client) => {
      /**
       * Client is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        customer.parentId = this.defaults._id;
        this.authService.register(customer, 'Client').subscribe((res)=>{
          console.log('new created client')
          this.authService.openSnackbar('New Sub Client Added!');
        })
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.customers.unshift(new Client(customer));
        this.subject$.next(this.customers);
      }
    });
  }

  updateCustomer(customer: Client) {
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
        updatedCustomer.parentId = this.defaults._id;
        this.authService.updateUser(updatedCustomer).subscribe((res)=>{
          this.authService.openSnackbar('Updated Successfully!')
        })
        const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
        this.customers[index] = new Client(updatedCustomer);
        this.subject$.next(this.customers);
      }
    });
  }

  deleteCustomer(customer: Client) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
    this.selection.deselect(customer);
    this.subject$.next(this.customers);
  }
}
