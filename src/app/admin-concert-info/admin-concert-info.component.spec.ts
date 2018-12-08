import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertInfoComponent } from './admin-concert-info.component';

describe('AdminConcertInfoComponent', () => {
  let component: AdminConcertInfoComponent;
  let fixture: ComponentFixture<AdminConcertInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConcertInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConcertInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
