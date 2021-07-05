import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileBestPracticesIndexComponent } from './agile-best-practices-index.component';

describe('AgileBestPracticesIndexComponent', () => {
  let component: AgileBestPracticesIndexComponent;
  let fixture: ComponentFixture<AgileBestPracticesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgileBestPracticesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileBestPracticesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
