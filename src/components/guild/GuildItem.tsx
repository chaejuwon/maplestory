import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IForm {
  guildName: string;
  worldName: string;
}

function GuildItem() {
  const { register, handleSubmit, watch } = useForm<IForm>();
  const guildName = watch("guildName");
  const worldName = watch("worldName");
  const navigate = useNavigate();

  const onSearch = () => {
    if (guildName.trim() === "" || worldName.trim() === "") return;
    navigate(`/guild/search?worldName=${worldName}&guildName=${guildName}`);
  };
  return (
    <div className="mx-auto max-w-[1200px] py-10 px-10 text-center">
      <h2 className="mb-5 font-bold text-2xl">길드검색</h2>
      <div className="inline-block">
        <form
          onSubmit={handleSubmit(onSearch)}
          className="flex items-center bg-white rounded-xl border-2 border-gray-100 shadow-md focus-within:border-orange-400 transition-all duration-300 flex-col md:flex-row"
        >
          <select className="block w-full md:w-32  rounded-lg bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            {...register("worldName", { required: true })}>
            <option value="">-선택-</option>
            <option value="스카니아">스카니아</option>
            <option value="베라">베라</option>
            <option value="루나">루나</option>
            <option value="제니스">제니스</option>
            <option value="크로아">크로아</option>
            <option value="유니온">유니온</option>
            <option value="엘리시움">엘리시움</option>
            <option value="이노시스">이노시스</option>
            <option value="레드">레드</option>
            <option value="오로라">오로라</option>
            <option value="아케인">아케인</option>
            <option value="노바">노바</option>
            <option value="에오스">에오스</option>
            <option value="핼리오스">핼리오스</option>
            <option value="챌린저스">챌린저스</option>
            <option value="챌린저스2">챌린저스2</option>
            <option value="챌린저스3">챌린저스3</option>
            <option value="챌린저스4">챌린저스4</option>
          </select>
          <div className="flex flex-row">
            <input
              type="text"
              {...register("guildName", { required: true })}
              placeholder="길드명을 입력하세요."
              className="w-32 md:w-64 px-4 py-3 rounded-l-xl bg-transparent text-[16px] focus:outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="w-[52px] h-[52px] flex items-center justify-center bg-blue-500 hover:bg-blue-400 active:scale-95 rounded-r-xl transition-all duration-200"
            >
              <CiSearch className="text-white text-2xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default GuildItem;