import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDrivenScrumComponent } from './data-driven-scrum.component';

describe('DataDrivenScrumComponent', () => {
  let component: DataDrivenScrumComponent;
  let fixture: ComponentFixture<DataDrivenScrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDrivenScrumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDrivenScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
