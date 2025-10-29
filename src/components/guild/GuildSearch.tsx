import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchGuild } from "../../api";

function GuildSearch() {
  // 주소값 가져오기
  const params = useParams();
  const search = params.search as string;

  const { data, isLoading } = useQuery({
    queryKey:['guild', search],
    queryFn: () => fetchGuild(search),
    enabled: !!search
  });
  console.log(data);
  return (
    <div>hello</div>
  )
}
export default GuildSearch;