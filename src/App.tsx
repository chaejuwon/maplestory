import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Rank from "./Routes/Rank";
import Search from "./Routes/Search";
import { styled } from "styled-components";
import Guild from "./Routes/Guild";
import Character from "./Routes/Character";
import Gold from "./Routes/Gold";
import GuildSearch from "./components/guild/GuildSearch";

const Wrapper = styled.div`
  width:100%;
`;

function App() {
  return (
    <HashRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/guild" element={<Guild />} />
          <Route path="/guild/search" element={<GuildSearch />} />
          <Route path="/character" element={<Character />} />
          <Route path="/gold" element={<Gold />} />
        </Routes>
        <Footer />
      </Wrapper>
    </HashRouter>
  );
}

export default App;
