import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProdsComponent } from './slider-prods.component';

describe('SliderProdsComponent', () => {
  let component: SliderProdsComponent;
  let fixture: ComponentFixture<SliderProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderProdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
