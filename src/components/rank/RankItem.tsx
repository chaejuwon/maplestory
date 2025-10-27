import { useQuery } from "@tanstack/react-query";
import { fetchRank } from "../../api";

function RankItem() {
  const {data, isLoading} = useQuery({
    queryKey: ["rank"],
    queryFn: fetchRank
  })
  console.log(data);
  return (
    <section className="relative flex flex-col items-center justify-center h-[420px] bg-cover bg-center">
123
    </section>
  )
}
export default RankItem;