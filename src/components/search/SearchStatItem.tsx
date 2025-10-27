import { FaStar } from "react-icons/fa";
import addOption from "../../assets/images/add_option.png";
import {
  commonImportantStats,
  IMapleProps,
  jobMainStatMap,
  SearchItemProps,
} from "../../api";

function SearchStatItem({ itemRes, basicRes }: SearchItemProps) {
  console.log(itemRes);
  // 추가옵션 계산
  const itemScores = itemRes.item_equipment.map(item => {
    const str = Number(item.item_add_option.str ?? 0);
    const dex = Number(item.item_add_option.dex ?? 0);
    const int = Number(item.item_add_option.int ?? 0);
    const luk = Number(item.item_add_option.luk ?? 0);
    const allStat = Number(item.item_add_option.all_stat ?? 0) * 10;
    const attackPower = Number(item.item_add_option.attack_power ?? 0) * 4;

    const maxStat = Math.max(str, dex, int, luk);

    const score = maxStat + allStat + attackPower;

    return {
      name: item.item_name,
      score,
    };
  });
  // 직업별 주요 스탯
  const job = basicRes.character_class ?? "";
  const mainStats = jobMainStatMap[job] ?? [];
  const importantStats = [...mainStats, ...commonImportantStats];
  console.log(importantStats);
  // 잠재능력 계산
  const options = itemRes.item_equipment.map(item => {
    const options = [
      item.potential_option_1,
      item.potential_option_2,
      item.potential_option_3,
      item.additional_potential_option_1,
      item.additional_potential_option_2,
      item.additional_potential_option_3,
    ].filter(Boolean); // null, 빈 값 제거

    return {
      name: item.item_name,
      options: options
    }
  });
// 타입 정의
  type ParsedOption = { stat: string; value: number; isPercent: boolean };
  type MergedOption = Record<string, { flat: number; percent: number }>;

// 아이템별 잠재능력 정리
  const itemOptions = itemRes.item_equipment.map(item => {
    const opts = [
      item.potential_option_1,
      item.potential_option_2,
      item.potential_option_3,
      item.additional_potential_option_1,
      item.additional_potential_option_2,
      item.additional_potential_option_3,
    ].filter(Boolean);

    // 정규식 파싱
    const parsed: ParsedOption[] = opts
      .map(opt => {
        const match = opt.match(/^([A-Z가-힣 ]+)\s*\+?(-?\d+)%?/);
        if (match) {
          return {
            stat: match[1].trim(),
            value: parseInt(match[2], 10),
            isPercent: opt.includes("%"),
          };
        }
        return null;
      })
      .filter((x): x is ParsedOption => x !== null);

    // 스탯 합산
    const merged: MergedOption = {};
    parsed.forEach(({ stat, value, isPercent }) => {
      if (!merged[stat]) merged[stat] = { flat: 0, percent: 0 };
      if (isPercent) {
        merged[stat].percent += value;
      } else {
        merged[stat].flat += value;
      }
    });

    // 내 직업 주요 스탯만 필터링
    const filtered: MergedOption = {};
    for (const stat of importantStats) {
      if (merged[stat]) {
        filtered[stat] = merged[stat];
      }
    }

    return {
      name: item.item_name,
      merged: filtered
    };
  });

  console.log(itemOptions);
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 mt-6">
      <div className="grid grid-cols-2 gap-6">
        {itemRes.item_equipment.map((item, index) => (
          <div
            className="flex items-center border rounded-md bg-gray-50 p-3 gap-3"
            key={index}>
            <img
              src={item.item_icon}
              alt={item.item_name}
              className="object-contain rounded-md border bg-gray-50 min-w-[1.5rem]"
            />
            <div className="flex flex-col justify-center text-xs">
              <p className="mb-1">
                <span className="mr-2">{item.item_name}</span>
                {item.starforce as any > 0 && (
                  <span className="mr-2"><FaStar color="#FFD900"
                                                 style={{ display: "inline-block" }} /> {item.starforce}</span>
                )}
                {itemScores?.filter(i => i.name === item.item_name).map(item => (
                  item.score !== 0 && (
                    <span key={item.name}>
                              <img src={addOption}
                                   className="w-5 inline-block align-middle" /> {item.score}
                            </span>
                  )
                ))}
              </p>
              <p>
                {itemOptions?.filter(i => i.name === item.item_name).map((item, index) => (
                  <span key={index} className="mr-2">
                    {Object.entries(item.merged).map(([stat, values]) => (
                      <span key={stat} className="mr-2">
                        {values.percent ? `${stat} : ${values.percent}%` : null}
                      </span>
                    ))}
                  </span>
                ))}
                {/*{item.potential_option_1 &&*/}
                {/*  <span className="mr-2">{item.potential_option_1}</span>}*/}
                {/*{item.potential_option_2 &&*/}
                {/*  <span className="mr-2">{item.potential_option_2}</span>}*/}
                {/*{item.potential_option_3 &&*/}
                {/*  <span className="mr-2">{item.potential_option_3}</span>}*/}
              </p>
              {/*<p>*/}
              {/*  {item.additional_potential_option_1 && <span*/}
              {/*    className="mr-2">{item.additional_potential_option_1}</span>}*/}
              {/*  {item.additional_potential_option_2 && <span*/}
              {/*    className="mr-2">{item.additional_potential_option_2}</span>}*/}
              {/*  {item.additional_potential_option_3 && <span*/}
              {/*    className="mr-2">{item.additional_potential_option_3}</span>}*/}
              {/*</p>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchStatItem;