import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeRealisationComponent } from './admin-home-realisation.component';

describe('AdminHomeRealisationComponent', () => {
  let component: AdminHomeRealisationComponent;
  let fixture: ComponentFixture<AdminHomeRealisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeRealisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
