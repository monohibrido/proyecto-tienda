import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddProduct } from './form-add-product';

describe('FormAddProduct', () => {
  let component: FormAddProduct;
  let fixture: ComponentFixture<FormAddProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(FormAddProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
