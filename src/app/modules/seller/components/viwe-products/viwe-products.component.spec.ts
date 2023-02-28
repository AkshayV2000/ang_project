import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweProductsComponent } from './viwe-products.component';

describe('ViweProductsComponent', () => {
  let component: ViweProductsComponent;
  let fixture: ComponentFixture<ViweProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViweProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViweProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
