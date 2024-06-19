import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGroupItemComponent } from './inventory-group-item.component';

describe('InventoryGroupItemComponent', () => {
  let component: InventoryGroupItemComponent;
  let fixture: ComponentFixture<InventoryGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryGroupItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
