import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeSousDomaineComponent } from './admin-home-sous-domaine.component';

describe('AdminHomeSousDomaineComponent', () => {
  let component: AdminHomeSousDomaineComponent;
  let fixture: ComponentFixture<AdminHomeSousDomaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeSousDomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeSousDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
