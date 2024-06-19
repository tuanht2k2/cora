import { Component } from '@angular/core';
import { MenuItem } from './model/menu-item';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, SidebarModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: `./menu.component.scss`,
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      icon: 'pi pi-home',
      label: 'Trang chủ',
      path: '',
    },
    {
      icon: 'pi pi-chart-bar',
      label: 'Bảng xếp hạng',
      path: 'rankings',
    },
    {
      icon: 'pi pi-users',
      label: 'Bạn bè',
      path: 'friends',
    },
    {
      icon: 'pi pi-shopping-cart',
      label: 'Cửa hàng',
      path: 'store',
    },
    {
      icon: 'pi pi-cog',
      label: 'Cài đặt',
      path: 'settings',
    },
  ];

  sidebarVisible: boolean = false;
}
