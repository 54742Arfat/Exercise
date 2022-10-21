import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1Component } from './comp.component';

describe('Parent1Component', () => {
  let component: Parent1Component;
  let fixture: ComponentFixture<Parent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
