import { Component, Input } from '@angular/core';
import { InventoryGroupItemComponent } from '../inventory-group-item/inventory-group-item.component';
import { GroupItem, ItemType } from '../../../../../data/model/item';
import { getItemTypeNameService } from '../../../../../utils/exportDepends';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-group',
  standalone: true,
  imports: [InventoryGroupItemComponent, CommonModule],
  templateUrl: './inventory-group.component.html',
  styleUrl: './inventory-group.component.scss',
})
export class InventoryGroupComponent {
  @Input() groupItem: GroupItem = {};

  getTypeItemName(itemCode: ItemType | undefined) {
    if (!itemCode) return 'Chưa xác định';
    return getItemTypeNameService(itemCode);
  }
}
