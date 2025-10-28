interface IFinalStat {
  stat_name: string;
  stat_value: string;
}

// 아이템 옵션 계산
interface IItemEquipment {
  additional_potential_option_1 :  string; // 에디1째줄
  additional_potential_option_2 : string; // 에디2째줄
  additional_potential_option_3 : string; // 에디3째줄
  additional_potential_option_grade : string; // 에디 등급
  cuttable_count : string; // 가횟
  item_add_option : IAddOption; // 추옵
  item_base_option : void[]; // 기본옵션
  item_equipment_part : string; // 아이템 분류
  item_equipment_slot : string; // 아이템 슬롯
  item_etc_option : void[]; // 주문력 옵션
  item_icon : string; // 아이템 아이콘
  item_name : string; // 아이템 이름
  item_starforce_option : void[]; // 스타포스옵션
  item_total_option : void[]; // 토탈옵숀
  potential_option_1 : string; // 잠재 1째줄
  potential_option_2 : string; // 잠재 2째줄
  potential_option_3 : string; // 잠재 3째줄
  potential_option_grade : string; // 잠재 등급
  scroll_upgrade : string; // 업그레이드 가능횟수
  scroll_upgradeable_count : string;
  soul_name : string;// 소울이름
  soul_option : string; // 소울옵션
  special_ring_level : number; // 반지레벨
  starforce : string; // 스타포스
}
// 추가옵션
interface IAddOption {
  all_stat : string;
  armor : string;
  attack_power : string;
  boss_damage : string;
  damage : string;
  dex : string;
  equipment_level_decrease : number;
  int : string;
  jump : string;
  luk : string;
  magic_power : string;
  max_hp : string;
  max_mp : string;
  speed : string;
  str : string;
}

export interface IMapleProps {
  basicRes: {
    character_class_level : string;
    character_class: string;
    character_exp : number;
    character_exp_rate : string;
    character_gender : string;
    character_guild_name : string;
    character_image : string;
    character_level : number;
    character_name : string;
    world_name : string;
  },
  itemRes: {
    character_class: string;
    character_gender: string;
    date: string;
    dragon_equipment: void[];
    item_equipment: IItemEquipment[];
    item_equipment_preset_1: void[];
    item_equipment_preset_2: void[];
    item_equipment_preset_3: void[];
    mechanic_equipment: []
    medal_shape: string;
    preset_no: number;
    title: string;
  },
  statRes: {
    character_class : string;
    date : string;
    final_stat : IFinalStat[];
    remain_ap : number;
  }
}
export interface SearchItemProps {
  basicRes: IMapleProps["basicRes"];
  itemRes: IMapleProps["itemRes"];
}
export interface SearchMainProps {
  basicRes: IMapleProps["basicRes"];
  statRes: IMapleProps["statRes"];
}
// 직업 매핑
export const jobMainStatMap: Record<string, string[]> = {
  // 전사 계열
  "히어로": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "팔라딘": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "다크나이트": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "소울마스터": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "미하일": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "블래스터": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "아란": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "데몬슬레이어": ["HP", "공격력"],
  "데몬어벤져": ["HP", "공격력"], // 특수 케이스
  "카이저": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "제로": ["STR", "DEX", "공격력", "올스탯", "보스 몬스터 데미지"], // 특수 케이스 (STR/DEX 하이브리드)
  "아델": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "칼리": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],

  // 궁수 계열
  "보우마스터": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "신궁": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "패스파인더": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "윈드브레이커": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "메르세데스": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "와일드헌터": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "카인": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],

  // 마법사 계열
  "아크메이지(불,독)": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "아크메이지(썬,콜)": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "비숍": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "플레임위자드": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "배틀메이지": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "에반": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "루미너스": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "키네시스": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "라라": ["INT", "마력", "올스탯", "보스 몬스터 데미지"],
  "일리움": ["INT", "마력", "올스탯", "보스 몬스터 데미지"], // (마도 기술자 계열)

  // 도적 계열
  "나이트로드": ["LUK", "공격력", "올스탯", "보스 몬스터 데미지"],
  "섀도어": ["LUK", "공격력", "올스탯", "보스 몬스터 데미지"],
  "듀얼블레이드": ["LUK", "공격력", "올스탯", "보스 몬스터 데미지"],
  "팬텀": ["LUK", "공격력", "올스탯", "보스 몬스터 데미지"],
  "카데나": ["LUK", "공격력", "올스탯", "보스 몬스터 데미지"],
  "호영": ["LUK", "공격력", "올스탯", "보스 몬스터 데미지"],

  // 해적 계열
  "바이퍼": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "캡틴": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "캐논슈터": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "스트라이커": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
  "메카닉": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "은월": ["LUK", "공격력", "올스탯", "보스 몬스터 데미지"],
  "제논": ["STR", "DEX", "LUK", "공격력", "올스탯", "보스 몬스터 데미지"], // 특수 케이스
  "엔젤릭버스터": ["DEX", "공격력", "올스탯", "보스 몬스터 데미지"],
  "아크": ["STR", "공격력", "올스탯", "보스 몬스터 데미지"],
};
export const commonImportantStats = ["재사용 대기시간 감소"];

export interface IRankItem {
  character_exp : number;
  character_guildname : string;
  character_level : number
  character_name : string;
  character_popularity : number;
  class_name : string;
  date : string;
  ranking : number;
  sub_class_name : string;
  world_name : string;
}

export interface IRankResponse {
  overall: {
    ranking: IRankItem[];
  };
  union: {
    ranking: IRankItem[];
  };
  guild: {
    ranking: IRankItem[];
  };
  doJang: {
    ranking: IRankItem[];
  };
  theSeed: {
    ranking: IRankItem[];
  };
  achievement: {
    ranking: IRankItem[];
  };
}