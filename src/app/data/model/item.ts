import { Currency } from './currency';

export enum ItemType {
  'FRAME',
  'AVATAR',
  'BATTLESHIP',
}

export enum ItemValue {
  S_PLUS = 'S+',
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export interface Item {
  itemId?: string;
  itemType?: ItemType;
  itemName?: string;
  displayImage?: string;
  thumbnailImage?: string;
  price?: Currency;
  isOwned?: boolean;
  value?: ItemValue;
  level?: 1 | 2 | 3 | 4 | 5;
  isUpgradeable?: boolean;
}

export interface GroupItem {
  itemType?: ItemType;
  items?: Item[];
}
