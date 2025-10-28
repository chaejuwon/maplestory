import axios from "axios";

const BASED_URL = `https://maplestory-backend-28jj.onrender.com`;

// 넥슨 API 불러오기 검색데이터
export const fetchCharacter = async (name: string) => {
  const response = await axios.get(`${BASED_URL}/character`, {
    params: {name}
  });
  return response.data;
}

export const fetchRank = async () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date1 = now.getDate();
  const date =  `${year}-${month}-${date1}`;
  const response = await axios.get(`${BASED_URL}/rank`, {
    params: {date}
  });
  return response.data;
}