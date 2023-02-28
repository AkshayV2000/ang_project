import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelNavComponent } from './sel-nav.component';

describe('SelNavComponent', () => {
  let component: SelNavComponent;
  let fixture: ComponentFixture<SelNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
