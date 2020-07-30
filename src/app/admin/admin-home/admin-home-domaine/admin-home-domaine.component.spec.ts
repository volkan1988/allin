import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeDomaineComponent } from './admin-home-domaine.component';

describe('AdminHomeDomaineComponent', () => {
  let component: AdminHomeDomaineComponent;
  let fixture: ComponentFixture<AdminHomeDomaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeDomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
