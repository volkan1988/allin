import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeSousDomaineFormComponent } from './admin-home-sous-domaine-form.component';

describe('AdminHomeSousDomaineFormComponent', () => {
  let component: AdminHomeSousDomaineFormComponent;
  let fixture: ComponentFixture<AdminHomeSousDomaineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeSousDomaineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeSousDomaineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
