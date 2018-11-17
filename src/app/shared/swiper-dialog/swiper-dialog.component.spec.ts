import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDialogComponent } from './swiper-dialog.component';

describe('SwiperDialogComponent', () => {
  let component: SwiperDialogComponent;
  let fixture: ComponentFixture<SwiperDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
