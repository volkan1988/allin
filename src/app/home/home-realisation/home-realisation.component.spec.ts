import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeRealisationComponent } from './home-realisation.component';

describe('HomeRealisationComponent', () => {
  let component: HomeRealisationComponent;
  let fixture: ComponentFixture<HomeRealisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRealisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
