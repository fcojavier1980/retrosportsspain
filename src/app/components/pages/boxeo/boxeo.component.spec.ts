import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxeoComponent } from './boxeo.component';

describe('BoxeoComponent', () => {
  let component: BoxeoComponent;
  let fixture: ComponentFixture<BoxeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
