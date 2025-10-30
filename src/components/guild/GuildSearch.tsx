import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchGuild } from "../../api";
import search from "../../Routes/Search";
import GuildItem from "./GuildItem";
import { IGuildProps } from "../../props";

function GuildSearch() {
  // 주소값 가져오기
  const [searchParams] = useSearchParams();
  const worldName = searchParams.get("worldName") as string;
  const guildName = searchParams.get("guildName") as string;
  console.log(worldName, guildName);
  const { data, isLoading } = useQuery<IGuildProps>({
    queryKey:['guild', [guildName]],
    queryFn: () => fetchGuild(worldName, guildName),
    enabled: !!guildName
  });
  console.log(data);
  return (
    <>
      <GuildItem />
      <div className="mx-auto max-w-[800px] py-10">
        <div className="bg-white shadow-lg rounded-xl p-8 mb-5">
          <div className="flex-1">
            <h2 className="flex items-center mb-4 justify-center">
            <span
              className="inline-block px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-md">
              길드이름
            </span>
              <span className="ml-3 text-2xl font-bold text-gray-800">
                        {data?.guild_name}
                  </span>
            </h2>
            <ul className="space-y-1 text-gray-700 text-center">
              <li className="mb-3">
                <span className="mr-4">
                  <span className="font-bold text-gray-600">길드마스터:</span> {data?.guild_master_name}
                </span>
                <span className="mr-4">
                  <span className="font-bold text-gray-600">길드레벨:</span> {data?.guild_level}
                </span>
                <span className="mr-4">
                  <span className="font-bold text-gray-600">월드명:</span> {data?.world_name}
                </span>
              </li>
              <li className="text-center">
                <span className="flex items-center flex-wrap gap-2 justify-center">
                  <span className="font-bold text-gray-600 mr-2">길드 노블 스킬:</span>
                  {data?.guild_noblesse_skill.map(skill => (
                    <span key={skill.skill_name} className="flex items-center bg-gray-100 px-2 py-1 rounded-lg shadow-sm text-sm">
                    <img src={skill.skill_icon} alt={skill.skill_name} className="w-5 h-5 mr-1"/>
                    <span className="text-gray-700">{skill.skill_level}</span>
                  </span>))}
              </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-center text-gray-600 font-semibold border-b">순번</th>
              <th className="p-3 text-center text-gray-600 font-semibold border-b">캐릭타입</th>
              <th className="p-3 text-center text-gray-600 font-semibold border-b">이름</th>
            </tr>
            </thead>
            <tbody>
            {data?.guild_member?.map((member, index) => (
              <tr
                key={index}
                className="border-b hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="p-2 text-center">{index + 1}</td>
                <th className="p-2 text-center text-gray-700">본케</th>
                <td className="p-2 text-center text-gray-700">{member}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}
export default GuildSearch;