import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentforcastComponent } from './currentforcast.component';

describe('CurrentforcastComponent', () => {
  let component: CurrentforcastComponent;
  let fixture: ComponentFixture<CurrentforcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentforcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentforcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
