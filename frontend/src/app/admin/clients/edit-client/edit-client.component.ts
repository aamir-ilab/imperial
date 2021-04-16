import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import {ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icFileDownload from '@iconify/icons-fa-solid/download';
import icDelete from '@iconify/icons-ic/round-close';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { finalize } from 'rxjs/operators';
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
import { DefaultRates } from 'src/app/models/defaultRates.model';
import { of } from 'rxjs';
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
  defaultRatesForm: FormGroup;

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
  dataSource: MatTableDataSource<DefaultRates> | null;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  // dataSource: MatTableDataSource<Client> | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  editCustomer:Client;
  defaults: any;
  clientForm: FormGroup;
  defaultRates: DefaultRates[];
  filterDefaultRates: DefaultRates[];
  eitedDefaultRates: DefaultRates[] = [];
  selectedTabIndex = 0;
  innerSelectedTabIndex = 0;
  fileName: string = "";
  croppedImage: any = 'assets/img/demo/download.png';
  picRemove = false;
  imageChangedEvent: any = '';
  file : File;
  isUploading: boolean = false;
  btnTxt : string = "";

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private storage:AngularFireStorage,
    private router:Router,
  ) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
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
    this.authService.getDefaultRates().subscribe((rates) => {
      of(rates.map(rates => new DefaultRates(rates))).subscribe(rates => {
        this.defaultRates = rates;
        this.filterDefaultRates = this.defaultRates.filter(x => x.department === 'Housekeeping');
        this.dataSource.data = this.filterDefaultRates;
      });
    });

    this.defaultRatesForm = this.fb.group({})


  }

  save(){
    const defaultRates = this.eitedDefaultRates;
    console.log('defaultRates', defaultRates)
    this.authService.setDefaultRates(defaultRates).subscribe((res =>{
      if(res){
        this.authService.openSnackbar('Updated Successfully!')
      }
    }));
  }

  editDefaultRates(property: string, $event, element){
    console.log('editDefaultRates ', property, $event.target.textContent, element)
    element[property] = parseFloat($event.target.textContent);
    const index = this.eitedDefaultRates.findIndex((e) => e._id === element._id);
    if (index === -1) {
      this.eitedDefaultRates.push(element);
    } else {
      this.eitedDefaultRates[index] = element;
    }
  }

  onTabChanged(event){
    console.log('event', event)
    if(event.index === 0){
      this.filterDefaultRates = this.defaultRates.filter(x => x.department === 'Housekeeping');
      this.dataSource.data = this.filterDefaultRates;
    }
    else if(event.index === 1){
      this.filterDefaultRates = this.defaultRates.filter(x => x.department === 'Food and Beverage');
      this.dataSource.data = this.filterDefaultRates;
    }
    else {
      this.filterDefaultRates = this.defaultRates.filter(x => x.department === 'Back of House');
      this.dataSource.data = this.filterDefaultRates;
    }
  }

  submit() {

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
    // this.cropper.nativeElement.remove();
    this.isUploading = true;
    this.removePicture('edit');
    var fileName = this.file.name.split('.').slice(0,-1).join('.') + '_' + new Date().getTime();
    var filePath = `Profile/${fileName}`;
    const fileRef = this.storage.ref(filePath);
   console.log('upload-a');
   let File = base64ToFile(this.croppedImage);
    this.storage.upload(filePath, File).snapshotChanges().pipe(finalize(()=>{
      console.log('upload-b');
      fileRef.getDownloadURL().subscribe((url)=>{
        console.log('upload-c', url);
        this.clientForm.controls.companyLogo.setValue(url);
        // this.showSnackBar('Image Uploaded Successfully');
        this.isUploading = true;
      })
    })).subscribe();
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log('imageCropped', event)
    this.croppedImage = event.base64;
  }
  removePicture(type){
    let picUrl = this.defaults.profilePhoto;
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
}
