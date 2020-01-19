import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StartComponent} from './start.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatSnackBarModule} from '@angular/material';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        MatSnackBarModule
      ],
      providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
