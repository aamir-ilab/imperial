import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRatesComponent } from './default-rates.component';

describe('DefaultRatesComponent', () => {
  let component: DefaultRatesComponent;
  let fixture: ComponentFixture<DefaultRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
