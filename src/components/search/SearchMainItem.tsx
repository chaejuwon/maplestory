import { IMapleProps } from "../../props";

interface SearchMainProps {
  basicRes: IMapleProps["basicRes"];
  statRes: IMapleProps["statRes"];
}

function SearchMainItem({ basicRes, statRes }: SearchMainProps) {
  const getStat = (name: string) => (
    statRes.final_stat?.find(
      stat => stat.stat_name === name)?.stat_value
  );
  const basicStats = [
    { label: "HP", value: getStat("HP") },
    { label: "MP", value: getStat("MP") },
  ];

  const mainStats = [
    { label: "STR", value: getStat("STR") },
    { label: "DEX", value: getStat("DEX") },
    { label: "INT", value: getStat("INT") },
    { label: "LUK", value: getStat("LUK") },
  ];
  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <div className="flex md:flex-row flex-col items-center gap-8">
        <div className="flex-shrink-0 overflow-hidden">
          <img
            src={basicRes.character_image}
            alt="캐릭터 이미지"
            className="w-64 h-64 md:w-32 md:h-32 object-contain rounded-md border bg-gray-50 scale-[2]"
          />
        </div>

        {/* 텍스트 영역 */}
        <div className="flex-1">
          <h2 className="flex md:flex-row flex-col items-center mb-4">
            <span
              className="inline-block px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-md">
              캐릭터 이름
            </span>
            <span className="inline-block ml-3 text-2xl font-bold text-gray-800">
                        {basicRes.character_name}
                  </span>
          </h2>
          <ul className="space-y-1 text-gray-700">
            <li>
                <span className="mr-3">
                  <span
                    className="font-bold text-gray-600">레벨:</span> {basicRes.character_level}
                </span>
              <span className="mr-3">
                <span
                  className="font-bold text-gray-600">직업:</span> {basicRes.character_class}
              </span>
            </li>
            <li>{basicStats.map(stat => (
              <span key={stat.label} className="mr-3">
                      <span
                        className="font-bold text-gray-600">{stat.label}:</span> {stat.value}
                    </span>
            ))}
            </li>
            <li>
              {mainStats.map(stat => (
                <span key={stat.label} className="mr-3">
                        <span
                          className="font-bold text-gray-600">{stat.label}:</span> {stat.value}
                      </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchMainItem;