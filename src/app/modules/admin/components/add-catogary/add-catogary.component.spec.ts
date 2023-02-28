import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatogaryComponent } from './add-catogary.component';

describe('AddCatogaryComponent', () => {
  let component: AddCatogaryComponent;
  let fixture: ComponentFixture<AddCatogaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatogaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCatogaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
