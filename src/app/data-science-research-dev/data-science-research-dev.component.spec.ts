import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceResearchDevComponent } from './data-science-research-dev.component';

describe('DataScienceResearchDevComponent', () => {
  let component: DataScienceResearchDevComponent;
  let fixture: ComponentFixture<DataScienceResearchDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataScienceResearchDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScienceResearchDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
