import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSComponent } from './approve-s.component';

describe('ApproveSComponent', () => {
  let component: ApproveSComponent;
  let fixture: ComponentFixture<ApproveSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
