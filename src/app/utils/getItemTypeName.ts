import { ItemType } from '../data/model/item';

const getItemTypeName = (itemCode: ItemType): string => {
  switch (itemCode) {
    case ItemType.BATTLESHIP:
      return 'Chiến hạm';
    case ItemType.AVATAR:
      return 'Ảnh đại diện';
    case ItemType.FRAME:
      return 'Khung ảnh';
    default:
      return 'Chưa xác định';
  }
};

export default getItemTypeName;
