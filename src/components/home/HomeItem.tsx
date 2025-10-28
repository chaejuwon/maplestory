import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Bg from "../../assets/images/home-bg.png";

interface IForm {
  item: string;
}

function HomeItem() {
  const [search, setSearch] = useState("");
  const { register, handleSubmit } = useForm<IForm>();
  const navigate = useNavigate();

  const onSearch = () => {
    if (search.trim() === "") return;
    navigate(`/search/${search}`);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center h-[420px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* 오버레이 (배경 대비용) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white/80 z-0"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center">
        <h2 className="font-gmarket text-3xl font-extrabold text-neutral-800 mb-6 tracking-tight drop-shadow-sm">
          음.. 메에 🐮
        </h2>

        <form
          onSubmit={handleSubmit(onSearch)}
          className="flex items-center bg-white rounded-xl border-2 border-gray-100 shadow-md focus-within:border-orange-400 transition-all duration-300"
        >
          <input
            type="text"
            {...register("item", { required: true })}
            placeholder="닉네임을 입력해 모험가를 찾아보세요"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            className="w-80 px-4 py-3 rounded-l-xl bg-transparent text-[16px] focus:outline-none placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="w-[52px] h-[52px] flex items-center justify-center bg-orange-500 hover:bg-orange-400 active:scale-95 rounded-r-xl transition-all duration-200"
          >
            <CiSearch className="text-white text-2xl" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default HomeItem;