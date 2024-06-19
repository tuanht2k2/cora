import { RankingEnum } from '../data/enum/rankingEnum';

const getRankingName = (rankingCode: RankingEnum) => {
  switch (rankingCode) {
    case RankingEnum.BRONZE_I:
      return 'Đồng I';
    case RankingEnum.BRONZE_II:
      return 'Đồng II';
    case RankingEnum.BRONZE_III:
      return 'Đồng III';
    case RankingEnum.SILVER_I:
      return 'Bạc I';
    case RankingEnum.SILVER_II:
      return 'Bạc II';
    case RankingEnum.SILVER_III:
      return 'Bạc III';
    case RankingEnum.GOLD_I:
      return 'Vàng I';
    case RankingEnum.GOLD_II:
      return 'Vàng II';
    case RankingEnum.GOLD_III:
      return 'Vàng III';
    case RankingEnum.PLATINUM_I:
      return 'Bạch Kim I';
    case RankingEnum.PLATINUM_II:
      return 'Bạch Kim II';
    case RankingEnum.PLATINUM_III:
      return 'Bạch Kim III';
    case RankingEnum.DIAMOND_I:
      return 'Kim Cương I';
    case RankingEnum.DIAMOND_II:
      return 'Kim Cương II';
    case RankingEnum.DIAMOND_III:
      return 'Kim Cương III';
    case RankingEnum.MASTER:
      return 'Cao thủ';
    default:
      return 'Chưa có xếp hạng';
  }
};

export default getRankingName;
