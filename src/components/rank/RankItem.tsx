import { useQuery } from "@tanstack/react-query";
import { fetchRank } from "../../api";
import { IRankProps } from "../../props";

function RankItem() {
  const {data, isLoading} = useQuery<IRankProps[]>({
    queryKey: ["rank"],
    queryFn: fetchRank
  })
  console.log(data);
  return (
    <section className="flex gap-3 mx-auto my-10 max-w-[1200px]">
      {/*<table className="border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">*/}
      {/*  <caption className="font-bold text-2xl">통합랭킹</caption>*/}
      {/*  <thead>*/}
      {/*    <tr>*/}
      {/*      <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">랭킹</th>*/}
      {/*      <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">이름</th>*/}
      {/*      <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">레벨</th>*/}
      {/*      <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">월드명</th>*/}
      {/*      <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">직업</th>*/}
      {/*    </tr>*/}
      {/*  </thead>*/}
      {/*  <tbody>*/}
      {/*  {isLoading ? (<tr><td>loading...</td></tr>) : (*/}
      {/*    data?.map((rank) => (*/}
      {/*      <tr key={rank.ranking}>*/}
      {/*        <td className="p-2 text-center">{rank.ranking}</td>*/}
      {/*        <td className="p-2 text-center">{rank.character_name}</td>*/}
      {/*        <td className="p-2 text-center">{rank.character_level}</td>*/}
      {/*        <td className="p-2 text-center">{rank.world_name}</td>*/}
      {/*        <td className="p-2 text-center">{rank.sub_class_name ? rank.sub_class_name : rank.class_name}</td>*/}
      {/*      </tr>*/}
      {/*    ))*/}
      {/*    )}*/}
      {/*  </tbody>*/}
      {/*</table>*/}
      {/*<table className="border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">*/}
      {/*  <caption className="font-bold text-2xl">통합랭킹</caption>*/}
      {/*  <thead>*/}
      {/*  <tr>*/}
      {/*    <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">랭킹</th>*/}
      {/*    <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">이름</th>*/}
      {/*    <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">레벨</th>*/}
      {/*    <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">월드명</th>*/}
      {/*    <th className="text-center p-2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">직업</th>*/}
      {/*  </tr>*/}
      {/*  </thead>*/}
      {/*  <tbody>*/}
      {/*  {isLoading ? (<tr><td>loading...</td></tr>) : (*/}
      {/*    data?.map((rank) => (*/}
      {/*      <tr key={rank.ranking}>*/}
      {/*        <td className="p-2 text-center">{rank.ranking}</td>*/}
      {/*        <td className="p-2 text-center">{rank.character_name}</td>*/}
      {/*        <td className="p-2 text-center">{rank.character_level}</td>*/}
      {/*        <td className="p-2 text-center">{rank.world_name}</td>*/}
      {/*        <td className="p-2 text-center">{rank.sub_class_name ? rank.sub_class_name : rank.class_name}</td>*/}
      {/*      </tr>*/}
      {/*    ))*/}
      {/*  )}*/}
      {/*  </tbody>*/}
      {/*</table>*/}

    </section>
  )
}
export default RankItem;