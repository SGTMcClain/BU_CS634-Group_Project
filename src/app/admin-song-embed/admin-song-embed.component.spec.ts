import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSongEmbedComponent } from './admin-song-embed.component';

describe('AdminSongEmbedComponent', () => {
  let component: AdminSongEmbedComponent;
  let fixture: ComponentFixture<AdminSongEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSongEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSongEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
