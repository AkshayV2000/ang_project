import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogaryComponent } from './catogary.component';

describe('CatogaryComponent', () => {
  let component: CatogaryComponent;
  let fixture: ComponentFixture<CatogaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatogaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
