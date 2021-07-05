import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmaiComponent } from './cpmai.component';

describe('CpmaiComponent', () => {
  let component: CpmaiComponent;
  let fixture: ComponentFixture<CpmaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpmaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
