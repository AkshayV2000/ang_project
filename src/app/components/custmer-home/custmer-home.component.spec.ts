import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerHomeComponent } from './custmer-home.component';

describe('CustmerHomeComponent', () => {
  let component: CustmerHomeComponent;
  let fixture: ComponentFixture<CustmerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
