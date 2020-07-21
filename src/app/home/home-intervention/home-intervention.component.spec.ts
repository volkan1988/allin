import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeInterventionComponent } from './home-intervention.component';

describe('HomeInterventionComponent', () => {
  let component: HomeInterventionComponent;
  let fixture: ComponentFixture<HomeInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
