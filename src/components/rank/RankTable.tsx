import { IRankItem } from "../../props";

function RankTable({title, list}: {title: string; list?: IRankItem[]}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-center font-semibold text-lg mb-3">{title}</h2>
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">순위</th>
          <th className="p-2 text-left">캐릭터</th>
          <th className="p-2 text-left">레벨</th>
          <th className="p-2 text-left">월드</th>
          <th className="p-2 text-left">직업</th>
        </tr>
        </thead>
        <tbody>

        {list?.slice(0, 10)?.map((rank) => (
            <tr key={rank.ranking} className="border-b hover:bg-gray-50">
              <td className="p-2">{rank.ranking}</td>
              <td className="p-2">{rank.character_name}</td>
              <td className="p-2">{rank.character_level}</td>
              <td className="p-2">{rank.world_name}</td>
              <td
                className="p-2">{rank.sub_class_name ? rank.sub_class_name : rank.class_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default RankTable;