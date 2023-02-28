import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegComponent } from './seller-reg.component';

describe('SellerRegComponent', () => {
  let component: SellerRegComponent;
  let fixture: ComponentFixture<SellerRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
