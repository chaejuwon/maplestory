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
  const [search, setSearch] = useState("");
  const { register, handleSubmit } = useForm<IForm>();

  const navigate = useNavigate();
  const onSearch = async () => {
    navigate(`search/${search}`);
  }
  return (
    <Wrapper>
      <HeaderWrap>
        <Link to="/home"><Logo src={logo} /></Link>
        <RightBox>
          {/*<form onSubmit={handleSubmit(onSearch)}>*/}
          {/*  <input type="text"*/}
          {/*         {...register("headerItem", { required: true })} placeholder="닉네임을 입력해 모험가를 찾아보세요"*/}
          {/*         onChange={(e) => setSearch(e.currentTarget.value)} value={search as string}*/}
          {/*  />*/}
          {/*</form>*/}
          <Nav>
            <li><Link to="rank">랭킹/통계</Link></li>
            <li><Link to="guild">길드</Link></li>
          </Nav>
        </RightBox>
      </HeaderWrap>
    </Wrapper>
  )
}
export default Header;