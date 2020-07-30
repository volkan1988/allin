import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeDomaineDetailsComponent } from './admin-home-domaine-details.component';

describe('AdminHomeDomaineDetailsComponent', () => {
  let component: AdminHomeDomaineDetailsComponent;
  let fixture: ComponentFixture<AdminHomeDomaineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeDomaineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeDomaineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
