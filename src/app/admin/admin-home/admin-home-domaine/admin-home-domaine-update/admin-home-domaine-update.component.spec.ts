import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeDomaineUpdateComponent } from './admin-home-domaine-update.component';

describe('AdminHomeDomaineUpdateComponent', () => {
  let component: AdminHomeDomaineUpdateComponent;
  let fixture: ComponentFixture<AdminHomeDomaineUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeDomaineUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeDomaineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
