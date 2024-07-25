import React from "react";
import { Welcome } from "./components/welcome/Welcome";
import { Trending } from "./components/trending/Trending";
import { Creators } from "./components/creators/Creators";
import { Categories } from "./components/categories/Categories";

export const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <Trending />
      <Creators />
      <Categories />
    </div>
  );
};
