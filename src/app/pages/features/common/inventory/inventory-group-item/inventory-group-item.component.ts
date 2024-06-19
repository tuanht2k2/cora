import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item, ItemType, ItemValue } from '../../../../../data/model/item';
import {
  getIconSrcService,
  getItemTypeNameService,
} from '../../../../../utils/exportDepends';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inventory-group-item',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    RatingModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './inventory-group-item.component.html',
  styleUrl: './inventory-group-item.component.scss',
})
export class InventoryGroupItemComponent {
  @Input() item: Item = {};

  itemValueEnum = ItemValue;
  isItemDetailVisible = false;

  getItemTypeName(itemCode: ItemType | undefined) {
    if (!itemCode) return 'Chưa xác định';
    return getItemTypeNameService(itemCode);
  }

  getIconSrc(iconName: string) {
    return getIconSrcService(iconName);
  }
}
