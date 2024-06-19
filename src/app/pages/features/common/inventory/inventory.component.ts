import { Component } from '@angular/core';
import { InventoryGroupComponent } from './inventory-group/inventory-group.component';
import { Player } from '../../../../data/model/player';
import { CommonModule } from '@angular/common';
import { playerMock } from '../../profile/mock-data/player-mock';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [InventoryGroupComponent, CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  player: Player = playerMock;
}
