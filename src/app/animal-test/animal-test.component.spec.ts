import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTestComponent } from './animal-test.component';

describe('AnimalTestComponent', () => {
  let component: AnimalTestComponent;
  let fixture: ComponentFixture<AnimalTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
