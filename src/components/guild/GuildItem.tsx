import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IForm {
  item: string;
}

function GuildItem() {
  const { register, handleSubmit } = useForm<IForm>();
  const [ search, setSearch ] = useState("");
  const navigate = useNavigate();

  const onSearch = () => {
    if (search.trim() === "") return;
    navigate(`/guild/search/${search}`);
  };

  return (
    <div className="mx-auto max-w-[1200px] py-10 text-center">
      <h2 className="mb-5 font-bold text-2xl">길드검색</h2>
      <div className="inline-block">
        <form
          onSubmit={handleSubmit(onSearch)}
          className="flex items-center bg-white rounded-xl border-2 border-gray-100 shadow-md focus-within:border-orange-400 transition-all duration-300"
        >
          <input
            type="text"
            {...register("item", { required: true })}
            placeholder="길드명을 입력하세요."
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            className="w-80 px-4 py-3 rounded-l-xl bg-transparent text-[16px] focus:outline-none placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="w-[52px] h-[52px] flex items-center justify-center bg-blue-500 hover:bg-blue-400 active:scale-95 rounded-r-xl transition-all duration-200"
          >
            <CiSearch className="text-white text-2xl" />
          </button>
        </form>
      </div>

    </div>
  )
}
export default GuildItem;