import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { DefaultRates } from 'src/app/models/defaultRates.model';
import { AuthService } from 'src/app/services/auth.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-default-rates',
  templateUrl: './default-rates.component.html',
  styleUrls: ['./default-rates.component.scss'],
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
export class DefaultRatesComponent implements OnInit {

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
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<DefaultRates> | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selectedTabIndex = 0;
  defaultRates: DefaultRates[];
  filterDefaultRates: DefaultRates[];
  eitedDefaultRates: DefaultRates[] = [];
  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,)
  { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
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
        // if(localStorage.getItem('loggedIn') === 'Admin')
        //   this.router.navigate(['/admin/workers']);
        // else
        //   this.router.navigate(['/team/workers']);
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

}
