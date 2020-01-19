import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardComponent} from './board.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatCardModule, MatListModule, MatSnackBarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [
        MatCardModule,
        MatListModule,
        MatSnackBarModule,
        RouterModule
      ],
      providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
