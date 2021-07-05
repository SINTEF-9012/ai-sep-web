import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrispDmComponent } from './crisp-dm.component';

describe('CrispDmComponent', () => {
  let component: CrispDmComponent;
  let fixture: ComponentFixture<CrispDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrispDmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrispDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
