import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageComponentComponent } from './cart-page-component.component';

describe('CartPageComponentComponent', () => {
  let component: CartPageComponentComponent;
  let fixture: ComponentFixture<CartPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
