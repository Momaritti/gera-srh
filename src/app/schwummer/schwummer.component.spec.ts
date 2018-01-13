import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchwummerComponent } from './schwummer.component';

describe('SchwummerComponent', () => {
  let component: SchwummerComponent;
  let fixture: ComponentFixture<SchwummerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchwummerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchwummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
