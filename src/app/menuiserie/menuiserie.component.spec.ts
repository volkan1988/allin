import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MenuiserieComponent } from './menuiserie.component';

describe('MenuiserieComponent', () => {
  let component: MenuiserieComponent;
  let fixture: ComponentFixture<MenuiserieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuiserieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuiserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
