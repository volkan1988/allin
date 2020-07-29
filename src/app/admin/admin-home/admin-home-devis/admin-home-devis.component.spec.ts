import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeDevisComponent } from './admin-home-devis.component';

describe('AdminHomeDevisComponent', () => {
  let component: AdminHomeDevisComponent;
  let fixture: ComponentFixture<AdminHomeDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
