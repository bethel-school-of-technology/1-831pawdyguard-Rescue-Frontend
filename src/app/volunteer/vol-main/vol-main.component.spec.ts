import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolMainComponent } from './vol-main.component';

describe('VolMainComponent', () => {
  let component: VolMainComponent;
  let fixture: ComponentFixture<VolMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
