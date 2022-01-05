import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAurraComponent } from './why-aurra.component';

describe('WhyAurraComponent', () => {
  let component: WhyAurraComponent;
  let fixture: ComponentFixture<WhyAurraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyAurraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAurraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
