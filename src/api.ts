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
  const date1 = now.getDate() - 7;

  // 핵심: Date 객체에 다시 넣기 (자동으로 월 계산됨)
  const weekAgo = new Date(year, month - 1, date1);

// 날짜 포맷 (YYYY-MM-DD)
  const y = weekAgo.getFullYear();
  const m = String(weekAgo.getMonth() + 1).padStart(2, "0");
  const d = String(weekAgo.getDate()).padStart(2, "0");

  const date = `${y}-${m}-${d}`;
  // const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const response = await axios.get(`${BASED_URL}/rank`, {
    params: {date}
  });
  return response.data;
}

export const fetchGuild = async (worldName: string, guildName: string) => {
  const response = await axios.get(`${BASED_URL}/guild`, {
    params: {
      world_name: worldName,
      guild_name: guildName
    }
  });
  return response.data;
}