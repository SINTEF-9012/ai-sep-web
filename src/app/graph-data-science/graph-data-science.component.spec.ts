import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDataScienceComponent } from './graph-data-science.component';

describe('GraphDataScienceComponent', () => {
  let component: GraphDataScienceComponent;
  let fixture: ComponentFixture<GraphDataScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDataScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
