import { styled } from "styled-components";
import { Link } from "react-router-dom";

const FooterWrap = styled.div`
  padding:50px 0;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  b {
    font-weight: 600;
  }
`;
const Mt20 = styled.div`
  margin-top: 20px;
`;
function Footer() {
  return (
    <FooterWrap>
      <p>이제부터 시작! 오류 / 개선사항 / 궁금하신 점은 아래 이메일로 문의주세요!</p>
      <Mt20>
        <p>cjw02141@gmail.com</p>
        <p>since 2025. 09. 08</p>
      </Mt20>
      <Mt20>
        <b><Link to={`https://partners.maplestory.nexon.com/developers`}>MAPLESTORY PARTNER</Link></b>
        <p>This site is not an official site of NEXON and does not provide any warranty.</p>
      </Mt20>
    </FooterWrap>
  )
}
export default Footer;