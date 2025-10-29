import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchGuild } from "../../api";
import search from "../../Routes/Search";

function GuildSearch() {
  // 주소값 가져오기
  const [searchParams] = useSearchParams();
  const worldName = searchParams.get("worldName") as string;
  const guildName = searchParams.get("guildName") as string;
  console.log(worldName, guildName);
  const { data, isLoading } = useQuery({
    queryKey:['guild', search],
    queryFn: () => fetchGuild(worldName, guildName),
    enabled: !!search
  });
  console.log(data);
  return (
    <div>hello</div>
  )
}
export default GuildSearch;