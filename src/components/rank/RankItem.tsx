import { useQuery } from "@tanstack/react-query";
import { fetchRank, IRankProps } from "../../api";

function RankItem() {
  const {data, isLoading} = useQuery<IRankProps[]>({
    queryKey: ["rank"],
    queryFn: fetchRank
  })
  console.log(data);
  return (
    <section className="relative flex flex-col items-center justify-center h-[420px] bg-cover bg-center">
      <table>
        <thead>
          <th>랭킹</th>
          <th>이름</th>
          <th>레벨</th>
          <th>월드명</th>
          <th>직업</th>
        </thead>
        <tbody>
        {isLoading ? (<div>isLoading</div>) : (
          data?.map((rank) => (
            <tr key={rank.ranking}>
              <td>{rank.ranking}</td>
              <td>{rank.character_name}</td>
              <td>{rank.character_level}</td>
              <td>{rank.world_name}</td>
              <td>{rank.sub_class_name}</td>
            </tr>
          ))
          )}
        </tbody>
      </table>

    </section>
  )
}
export default RankItem;