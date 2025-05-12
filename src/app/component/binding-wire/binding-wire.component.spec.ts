import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingWireComponent } from './binding-wire.component';

describe('BindingWireComponent', () => {
  let component: BindingWireComponent;
  let fixture: ComponentFixture<BindingWireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingWireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
