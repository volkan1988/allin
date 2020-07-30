import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeRealisationFormComponent } from './admin-home-realisation-form.component';

describe('AdminHomeRealisationFormComponent', () => {
  let component: AdminHomeRealisationFormComponent;
  let fixture: ComponentFixture<AdminHomeRealisationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeRealisationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeRealisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
