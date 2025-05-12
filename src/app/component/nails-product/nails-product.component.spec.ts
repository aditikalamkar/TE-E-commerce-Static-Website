import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailsProductComponent } from './nails-product.component';

describe('NailsProductComponent', () => {
  let component: NailsProductComponent;
  let fixture: ComponentFixture<NailsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailsProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
