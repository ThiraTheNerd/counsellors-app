import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorInputComponent } from './counsellor-input.component';

describe('CounsellorInputComponent', () => {
  let component: CounsellorInputComponent;
  let fixture: ComponentFixture<CounsellorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellorInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
