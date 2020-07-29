import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeDevisDetailComponent } from './admin-home-devis-detail.component';

describe('AdminHomeDevisDetailComponent', () => {
  let component: AdminHomeDevisDetailComponent;
  let fixture: ComponentFixture<AdminHomeDevisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeDevisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeDevisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
