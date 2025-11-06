import { styled } from "styled-components";
import logo from "../../assets/images/maple_logo.png"
import { useRecoilState } from "recoil";
import { searchItem } from "../../atom";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div `
  width: 100%;
  margin:0 auto;
  padding:0 30px;
  height: 80px;
  border: 1px solid ${props => props.theme.palette.gray[100]}
`;
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  input {
    border: 0;
    border: 1px solid ${props => props.theme.palette.gray[200]};
    padding: 10px 8px;
    width: 300px;
    background: transparent;
  }
`;
const Logo = styled.img`
  width: 100px;
`;
const RightBox = styled.div`
  display: flex;
`;
const Nav = styled.ul`
  margin-left:50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  li {
    margin-right: 20px;
    font-size: 18px;
  }
`;
interface IForm {
  headerItem: string;
}
function Header() {
  // // recoil
  // const [search, setSearch] = useRecoilState(searchItem);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { register, handleSubmit } = useForm<IForm>();
  const navigate = useNavigate();

  const onSearch = () => navigate(`search/${search}`);
  return (
    <header className="w-full border-b border-gray-100 px-4 sm:px-6 lg:px-10 h-20 flex items-center">
      <div className="flex justify-between items-center w-full">
        {/* 로고 */}
        <Link to="/home">
          <img src={logo} alt="logo" className="w-24 sm:w-28" />
        </Link>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="sm:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* 아이콘 (간단히 텍스트로 표현했지만 실제로는 lucide-react나 heroicons 사용 권장) */}
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* 데스크탑 메뉴 */}
        <div className="hidden sm:flex items-center">
          <form onSubmit={handleSubmit(onSearch)}>
            <input
              type="text"
              {...register("headerItem", { required: true })}
              placeholder="닉네임을 입력해 모험가를 찾아보세요"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 bg-transparent px-3 py-2 w-48 sm:w-72 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </form>
          <ul className="flex ml-6 space-x-4 text-[16px]">
            <li>
              <Link to="rank" className="hover:text-blue-600 transition">
                랭킹/통계
              </Link>
            </li>
            <li>
              <Link to="guild" className="hover:text-blue-600 transition">
                길드
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 모바일 메뉴 (토글로 표시) */}
      {menuOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-md z-10">
          <div className="p-4 flex flex-col items-center space-y-4">
            <form onSubmit={handleSubmit(onSearch)} className="w-full">
              <input
                type="text"
                {...register("headerItem", { required: true })}
                placeholder="모험가 검색"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none"
              />
            </form>
            <Link
              to="rank"
              className="text-lg hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              랭킹/통계
            </Link>
            <Link
              to="guild"
              className="text-lg hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              길드
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
export default Header;