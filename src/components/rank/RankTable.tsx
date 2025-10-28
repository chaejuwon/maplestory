import { IRankItem } from "../../props";

function RankTable({title, list, type}: {title: string; list?: IRankItem[]; type: string;}) {
  const tableConfig = {
    overall: {
      headers: ["순위", "캐릭터", "레벨", "월드", "직업"],
      mapRow: (r: any) => [
        r.ranking,
        r.character_name,
        r.character_level,
        r.world_name,
        r.sub_class_name ? r.sub_class_name : r.class_name
      ]
    },
    guild: {
      headers: ["순위", "길드명", "길드장", "월드", "길드레벨"],
      mapRow: (r: any) => [
        r.ranking,
        r.guild_name,
        r.guild_master_name,
        r.world_name,
        r.guild_level
      ]
    },
    union: {
      headers: ["순위", "캐릭터", "유니온레벨", "월드", "직업"],
      mapRow: (r: any) => [
        r.ranking,
        r.character_name,
        r.union_level,
        r.world_name,
        r.sub_class_name ? r.sub_class_name : r.class_name
      ]
    },
    doJang: {
      headers: ["순위", "캐릭터", "무릉층수", "월드", "직업"],
      mapRow: (r: any) => [
        r.ranking,
        r.character_name,
        r.dojang_floor,
        r.world_name,
        r.sub_class_name ? r.sub_class_name : r.class_name
      ]
    },
    theSeed: {
      headers: ["순위", "캐릭터", "더시드층수", "월드", "직업"],
      mapRow: (r: any) => [
        r.ranking,
        r.character_name,
        r.theseed_floor,
        r.world_name,
        r.sub_class_name ? r.sub_class_name : r.class_name
      ]
    },
    achievement: {
      headers: ["순위", "캐릭터", "업적점수", "월드", "직업"],
      mapRow: (r: any) => [
        r.ranking,
        r.character_name,
        r.trophy_score,
        r.world_name,
        r.sub_class_name ? r.sub_class_name : r.class_name
      ]
    },
  };
  const config = tableConfig[type as keyof typeof tableConfig]
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-center font-semibold text-lg mb-3">{title}</h2>
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-100">
        <tr>
          {config.headers.map((h) => (
            <th key={h} className="p-2 text-center">
              {h}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {list?.slice(0, 10)?.map((rank, i) => {
          const row = config.mapRow(rank);
          return (
            <tr key={i} className="border-b hover:bg-gray-50">
              {row.map((val, j) => (
                <td key={j} className="p-2 text-center">
                  {val}
                </td>
              ))}
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  )
}
export default RankTable;