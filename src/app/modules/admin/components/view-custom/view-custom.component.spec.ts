import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomComponent } from './view-custom.component';

describe('ViewCustomComponent', () => {
  let component: ViewCustomComponent;
  let fixture: ComponentFixture<ViewCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
