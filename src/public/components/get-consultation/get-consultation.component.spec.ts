import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConsultationComponent } from './get-consultation.component';

describe('GetConsultationComponent', () => {
  let component: GetConsultationComponent;
  let fixture: ComponentFixture<GetConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
