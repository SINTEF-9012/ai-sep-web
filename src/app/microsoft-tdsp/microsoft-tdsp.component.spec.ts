import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftTdspComponent } from './microsoft-tdsp.component';

describe('MicrosoftTdspComponent', () => {
  let component: MicrosoftTdspComponent;
  let fixture: ComponentFixture<MicrosoftTdspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftTdspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftTdspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
