import { useQuery } from "@tanstack/react-query";
import { fetchRank } from "../../api";
import { IRankResponse } from "../../props";
import RankTable from "./RankTable";

function RankItem() {
  const {data, isLoading} = useQuery<IRankResponse>({
    queryKey: ["rank"],
    queryFn: fetchRank
  })
  console.log(data);
  return (
    <div className="mx-auto max-w-[1400px] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <RankTable title="통합 랭킹 정보" list={data?.overall?.ranking} type="overall" />
        <RankTable title="길드 랭킹 정보" list={data?.guild?.ranking} type="guild" />
        <RankTable title="유니온 랭킹 정보" list={data?.union?.ranking} type="union" />
        <RankTable title="무릉도장 랭킹 정보" list={data?.doJang?.ranking} type="doJang" />
        <RankTable title="더 시드 랭킹 정보" list={data?.theSeed?.ranking} type="theSeed" />
        <RankTable title="업적 랭킹 조회" list={data?.achievement?.ranking} type="achievement" />
      </div>
    </div>
  )
}
export default RankItem;