import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeCarrouselComponent } from './home-carrousel.component';

describe('HomeCarrouselComponent', () => {
  let component: HomeCarrouselComponent;
  let fixture: ComponentFixture<HomeCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
