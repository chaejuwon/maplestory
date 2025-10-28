import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../../api";
import { IMapleProps, SearchItemProps, SearchMainProps } from "../../props";
import { useParams } from "react-router-dom";
import SearchMainItem from "./SearchMainItem";
import SearchStatItem from "./SearchStatItem";

function SearchItem() {
  // 주소값 가져오기
  const params = useParams();
  const search = params.search as string;

  // 주소값 가져온 후 api 호출
  const { data, isFetching } = useQuery<IMapleProps>({
    queryKey: ["character", search],
    queryFn: () => fetchCharacter(search),
    enabled: !!search,
  });

  return (
    <>
      {isFetching ? (
        <div className="flex justify-center items-center py-10 text-gray-500">
          ...loading
        </div>
      ) : (
        <div className="mx-auto my-10 max-w-[900px] ">
          {/* 메인영역 */}
          <SearchMainItem basicRes={data?.basicRes as SearchMainProps["basicRes"]}
                          statRes={data?.statRes as SearchMainProps["statRes"]} />
          {/* 아이템영역 */}
          <SearchStatItem itemRes={data?.itemRes as SearchItemProps["itemRes"]}
                          basicRes={data?.basicRes as SearchItemProps["basicRes"]}/>
        </div>
      )}
    </>
  );
}

export default SearchItem;










