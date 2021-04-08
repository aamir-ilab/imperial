import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWorkerDocumentComponent } from './upload-worker-document.component';

describe('UploadWorkerDocumentComponent', () => {
  let component: UploadWorkerDocumentComponent;
  let fixture: ComponentFixture<UploadWorkerDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadWorkerDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWorkerDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
